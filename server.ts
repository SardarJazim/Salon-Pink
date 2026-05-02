import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Database Initialization
  const db = new Database('salon.db');
  db.pragma('journal_mode = WAL');

  // Create tables
  db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      service TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  app.use(express.json());

  // API Routes
  app.post('/api/bookings', (req, res) => {
    const { name, email, phone, service, date, time } = req.body;
    try {
      const stmt = db.prepare('INSERT INTO bookings (name, email, phone, service, date, time) VALUES (?, ?, ?, ?, ?, ?)');
      const info = stmt.run(name, email, phone, service, date, time);
      res.json({ success: true, id: info.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save booking' });
    }
  });

  app.get('/api/bookings', (req, res) => {
    try {
      const rows = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  });

  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    try {
      const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
      const info = stmt.run(name, email, message);
      res.json({ success: true, id: info.lastInsertRowid });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save message' });
    }
  });

  app.get('/api/messages', (req, res) => {
    try {
      const rows = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Salon Pink server running at http://localhost:${PORT}`);
  });
}

startServer();

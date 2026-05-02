/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { About } from '@/src/pages/About';
import { Services } from '@/src/pages/Services';
import { Booking } from '@/src/pages/Booking';
import { Contact } from '@/src/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-hot-pink selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

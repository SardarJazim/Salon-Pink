import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Calendar, Phone, Info, LayoutDashboard } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Scissors },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Scissors },
    { name: 'Booking', path: '/booking', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-hot-pink text-white p-2 border-2 border-black rotate-[-5deg] group-hover:rotate-0 transition-transform flex items-center justify-center">
            <img 
               src="/logo.PNG" 
               alt="Logo" 
               className="w-10 h-10 object-contain"
               onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
            />
            <Scissors className="w-6 h-6 nav-scissors" />
          </div>
          <div className="flex flex-col">
            <span className="font-retro text-2xl text-black leading-none">SALON PINK</span>
            <span className="font-retro text-[10px] uppercase tracking-tighter text-hot-pink leading-none mt-1">& Program 204 Couture</span>
          </div>
        </Link>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "font-retro text-sm uppercase tracking-tighter hover:text-hot-pink transition-colors relative group",
                location.pathname === item.path ? "text-hot-pink" : "text-black"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-hot-pink"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-hot-pink mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-hot-pink mb-4">Salon Pink</h3>
          <p className="text-soft-pink text-sm opacity-80">
            Longview's premier destination for vintage vibes and modern styles. Proudly serving East Texas since 2024.
          </p>
        </div>
        <div>
          <h3 className="text-hot-pink mb-4">Contact</h3>
          <p className="text-sm">Phone: 903-236-3622</p>
          <p className="text-sm">Location: Longview, TX</p>
        </div>
        <div>
          <h3 className="text-hot-pink mb-4">Social</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-hot-pink transition-colors">Instagram</a>
            <a href="#" className="hover:text-hot-pink transition-colors">Facebook</a>
            <a href="#" className="hover:text-hot-pink transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/10 text-xs opacity-50">
        © 2024 Salon Pink Longview. Stay Beautiful.
      </div>
    </footer>
  );
}

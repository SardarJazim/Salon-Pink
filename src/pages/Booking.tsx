import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  'Signature Haircut ($65)',
  'Full Highlights ($120+)',
  'Balayage ($150+)',
  'Classic Blowout ($45)',
  'Braiding ($40+)',
  'Deep Treatment ($35)'
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0],
    date: '',
    time: TIME_SLOTS[0]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: SERVICES[0], date: '', time: TIME_SLOTS[0] });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-soft-pink dot-pattern">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border-8 border-black p-10 text-center retro-shadow"
        >
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl mb-4">You're Booked!</h2>
          <p className="text-xl mb-8">We've saved your spot. See you soon at Salon Pink!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-hot-pink text-white py-4 font-retro retro-shadow-hover transition-all"
          >
            BOOK ANOTHER
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-soft-pink dot-pattern min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border-8 border-black p-8 md:p-12 retro-shadow">
          <div className="text-center mb-12">
            <h1 className="text-5xl mb-4">Reserve Your Style</h1>
            <p className="font-medium text-gray-700">Choose your service and time slot below.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block font-retro text-sm mb-2 uppercase">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block font-retro text-sm mb-2 uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-retro text-sm mb-2 uppercase">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors"
                    placeholder="903-555-0123"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block font-retro text-sm mb-2 uppercase">Select Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors appearance-none cursor-pointer"
                >
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-retro text-sm mb-2 uppercase">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      required
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-retro text-sm mb-2 uppercase">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black focus:border-hot-pink outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-5 font-retro text-xl border-4 border-black retro-shadow-hover transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'BOOKING...' : 'CONFIRM BOOKING'}
                </button>
                {error && <p className="text-red-600 mt-4 text-center font-bold">{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

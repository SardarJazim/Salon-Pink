import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-20">
          <h1 className="text-7xl mb-4">Holla At Us!</h1>
          <p className="text-xl font-medium text-gray-600">Questions? Feedback? Just want to say hello? Drop us a line.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-20 items-stretch">
          {/* Info Card */}
          <div className="space-y-8 h-full">
            <div className="bg-hot-pink text-white border-8 border-black p-12 retro-shadow h-full flex flex-col justify-center">
              <h2 className="text-4xl mb-8">Salon Pink HQ</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                  <div className="bg-black p-3 border-2 border-white rotate-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-retro">903-236-3622</span>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="bg-black p-3 border-2 border-white rotate-[-3deg]">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-retro">hello@salonpink.com</span>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="bg-black p-3 border-2 border-white rotate-6">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-retro text-left uppercase leading-tight">
                    Longview, TX <br />
                    75601
                  </span>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t-4 border-black border-dashed">
                <p className="text-black font-medium italic">"The easiest way to find us is to look for the pinkest building in town!"</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-pop-yellow border-8 border-black p-8 md:p-12 retro-shadow">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-4xl mb-4 uppercase">Message Sent!</h3>
                <p className="text-lg mb-8 font-medium">We'll get back to you faster than a blowout!</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-black text-white px-8 py-3 font-retro retro-shadow-hover transition-all"
                >
                  SEND ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-retro text-sm mb-2 uppercase">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-4 border-black focus:border-red-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-retro text-sm mb-2 uppercase">Your Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-4 border-black focus:border-red-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-retro text-sm mb-2 uppercase">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-4 border-black focus:border-red-500 outline-none transition-colors resize-none"
                    placeholder="Tell us everything..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-black text-white py-5 font-retro text-xl border-4 border-black retro-shadow-hover transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? 'SENDING...' : (
                    <>
                      <Send className="w-6 h-6" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-600 font-bold text-center mt-4">Oops! Something went wrong.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

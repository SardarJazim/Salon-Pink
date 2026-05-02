import { motion } from 'framer-motion';
import { Heart, Star, Users, MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white scroll-smooth">
      {/* Hero */}
      <section className="py-24 bg-soft-pink dot-pattern border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-7xl mb-6">Our Story</h1>
            <p className="text-2xl font-serif italic max-w-3xl mx-auto text-black/80">
              "We didn't just build a salon; we built a time machine for style."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-black border-8 border-black p-4 rotate-3 retro-shadow relative z-10 overflow-hidden">
               <div className="aspect-square bg-pop-blue flex items-center justify-center p-12 text-center border-4 border-black border-dashed">
                  <div>
                    <Sparkles className="w-20 h-20 text-white mx-auto mb-6" />
                    <h3 className="text-4xl text-white">Classic Meets Modern</h3>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hot-pink border-8 border-black rounded-full z-0 dot-pattern" />
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl border-b-8 border-hot-pink inline-block mb-4">Born in Longview</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Salon Pink opened its doors with a single mission: to bring the fun back to the hairdresser's chair. We believe that getting your hair done should be the highlight of your week—not just another chore.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Our stylists are trained in both classical techniques and the latest trends, ensuring that whether you want a 1950s victory roll or a modern ombre, you'll leave looking and feeling like a million bucks.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="border-4 border-black p-4 flex gap-4 items-center">
                <Heart className="text-hot-pink w-10 h-10" />
                <span className="font-retro text-sm uppercase">100% Passion</span>
              </div>
              <div className="border-4 border-black p-4 flex gap-4 items-center">
                <Users className="text-pop-blue w-10 h-10" />
                <span className="font-retro text-sm uppercase">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl text-center mb-20 text-soft-pink">Meet The Crew</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Misty', role: 'Founder & Senior Stylist', color: 'bg-hot-pink' },
              { name: 'Tiffany', role: 'Color Specialist', color: 'bg-pop-blue' },
              { name: 'Amber', role: 'Bridal & Updo Expert', color: 'bg-pop-yellow' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black border-8 border-white p-4 retro-shadow"
              >
                <div className={`${member.color} aspect-[3/4] mb-4 border-4 border-black flex items-center justify-center p-8 text-center`}>
                   <span className="font-script text-3xl text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{member.name}</span>
                </div>
                <h3 className="text-2xl mb-1">{member.name}</h3>
                <p className="text-gray-500 font-retro text-xs uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  )
}

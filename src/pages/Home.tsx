import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scissors, Star, Heart, Clock } from 'lucide-react';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-soft-pink dot-pattern py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-hot-pink text-white px-4 py-1 mb-6 border-2 border-black rotate-[-2deg] font-retro uppercase text-lg">
              Est. 2024 • Longview, TX
            </div>
            <h1 className="text-6xl md:text-8xl leading-none mb-6">
              Don't Hate Me <br />
              <span className="text-hot-pink bg-black text-white px-4">Cause I Make</span> <br />
              You Beautiful
            </h1>
            <p className="text-xl mb-8 font-medium max-w-md bg-white/50 p-4 border-l-8 border-hot-pink">
              Step into the pinkest sanctuary in East Texas. We're part hair salon, part vintage boutique, and 100% fabulous.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="bg-black text-white px-8 py-4 font-retro text-xl retro-shadow-hover transition-all"
              >
                BOOK NOW
              </Link>
              <Link
                to="/services"
                className="bg-white text-black border-4 border-black px-8 py-4 font-retro text-xl retro-shadow-hover transition-all"
              >
                THE MENU
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white border-8 border-black p-4 rotate-3 retro-shadow overflow-hidden group">
              <div className="aspect-square bg-soft-pink flex items-center justify-center border-4 border-black border-dashed relative overflow-hidden">
                 {/* This would be where the uploaded logo image goes */}
                 <div className="text-center p-6 sm:p-10 z-10">
                    <img 
                      src="/logo.PNG" 
                      alt="Salon Pink Logo" 
                      className="max-w-full h-auto mx-auto mb-4 drop-shadow-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.classList.add('flex-col');
                      }}
                    />
                    <Scissors className="w-24 h-24 text-hot-pink mx-auto mb-4 animate-bounce logo-placeholder" />
                    <span className="font-script text-5xl text-black block">Salon Pink &</span>
                    <span className="font-retro text-xl text-black block mt-2">Program 204 Couture</span>
                 </div>
                 <div className="absolute inset-0 bg-pop-blue opacity-10 group-hover:opacity-20 transition-opacity" />
              </div>
            </div>
            
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute -top-6 -right-6 w-24 h-24 bg-pop-yellow border-4 border-black rounded-full flex items-center justify-center font-retro text-xs text-center leading-none p-2"
            >
              VINTAGE REPURPOSED BOUTIQUE UPSTAIRS!
            </motion.div>
          </motion.div>
        </div>
        
        {/* Retro shape accents */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white border-t-8 border-black flex overflow-hidden">
           {Array.from({length: 20}).map((_, i) => (
             <div key={i} className="flex-shrink-0 w-24 h-24 bg-hot-pink border-r-8 border-black skew-x-[-20deg]" />
           ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 bg-pop-yellow border-y-8 border-black dot-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white border-8 border-black p-8 md:p-12 retro-shadow rotate-[-1deg]">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <h2 className="text-6xl text-hot-pink leading-none mb-4">POP! <br />SPECIALS</h2>
                <p className="font-retro text-sm uppercase tracking-widest text-black/60">Limited time only</p>
              </div>
              <div className="flex-grow grid md:grid-cols-2 gap-8">
                <div className="border-4 border-black border-dashed p-6 hover:bg-soft-pink transition-colors">
                  <h3 className="text-2xl mb-2 italic">Victory Roll Wednesdays</h3>
                  <p className="mb-4">Get 20% OFF any signature styling or blowout services every Wednesday!</p>
                  <span className="bg-black text-white px-3 py-1 font-retro text-sm">CODE: RETRO20</span>
                </div>
                <div className="border-4 border-black border-dashed p-6 hover:bg-pop-blue transition-colors">
                  <h3 className="text-2xl mb-2 italic">The "Total Look" Package</h3>
                  <p className="mb-4">Standard Full Color + Deep Treatment + Shampoo Blowout for only $150.</p>
                  <span className="bg-black text-white px-3 py-1 font-retro text-sm">SAVE $45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 204 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl mb-6">Upstairs at Pink</h2>
              <div className="bg-pop-blue text-white p-6 border-4 border-black rotate-[-2deg] mb-8 inline-block">
                <h3 className="text-3xl">PROGRAM 204 COUTURE</h3>
              </div>
              <p className="text-xl mb-6 leading-relaxed">
                Wait, there's more! Located directly above the salon is our curated home for vintage repurposing and high-end couture.
              </p>
              <ul className="space-y-4 mb-8">
                {['Vintage Repurposed Items', 'Custom Couture Design', 'Boutique Accessories', 'Pop Culture Rarities'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <Heart className="text-hot-pink w-6 h-6 fill-hot-pink" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-hot-pink font-retro text-lg underline decoration-4 underline-offset-8 hover:text-black transition-colors uppercase">
                Learn our full story
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-black border-8 border-black p-4 rotate-2 retro-shadow relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 w-full h-full border-4 border-white border-dashed flex items-center justify-center">
                   <div className="text-center">
                     <Star className="w-20 h-20 text-pop-yellow mx-auto mb-6 animate-pulse" />
                     <p className="font-script text-5xl text-white">Unique & Rare</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-soft-pink/30 border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4">Our Pop Picks</h2>
            <div className="w-24 h-2 bg-hot-pink mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'The Pink Cut', icon: Scissors, desc: 'Our signature precision haircut tailored to your face shape.', price: '$65' },
              { title: 'Pop Color', icon: Heart, desc: 'From subtle highlights to bold neon, we bring your vision to life.', price: '$120+' },
              { title: 'Retro Blown', icon: Clock, desc: 'The classic 50s blowout that lasts for days.', price: '$45' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="border-4 border-black p-8 bg-white retro-shadow hover:bg-soft-pink group transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <service.icon className="w-12 h-12 text-hot-pink group-hover:scale-110 transition-transform" />
                  <span className="bg-pop-yellow px-2 py-1 border-2 border-black font-retro text-sm">{service.price}</span>
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{service.desc}</p>
                <Link to="/booking" className="text-black font-retro text-sm uppercase tracking-widest border-b-2 border-black inline-block w-fit">Book This</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white dot-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl text-center mb-16 text-hot-pink">Real Beauty, Real Stories</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Sarah J.', text: 'Best cut I have ever had! The vibe is amazing and I felt like a movie star.' },
              { name: 'Becky W.', text: 'Salon Pink is my happy place. Longview needed this so bad!' },
              { name: 'Jessica M.', text: 'Color worked magic on my hair. I get compliments every single day.' }
            ].map((t, i) => (
              <div key={i} className={`bg-white text-black border-8 border-hot-pink p-8 ${i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]'}`}>
                <div className="flex gap-1 mb-4">
                  {Array.from({length: 5}).map((_, j) => <Star key={j} className="w-5 h-5 fill-hot-pink text-hot-pink" />)}
                </div>
                <p className="text-xl italic font-medium mb-6">"{t.text}"</p>
                <span className="font-retro uppercase">- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

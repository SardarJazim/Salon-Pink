import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Wind } from 'lucide-react';

const SERVICE_LIST = [
  {
    category: 'Haircuts',
    icon: Scissors,
    items: [
      { name: 'Signature Cut', price: '$65', desc: 'Wash, precision cut, and signature blowout.' },
      { name: "Men's Classic", price: '$35', desc: 'Clean lines and modern styling for the gents.' },
      { name: "Child's Trim", price: '$25', desc: 'Keep the little ones looking sharp (ages 10 & under).' }
    ]
  },
  {
    category: 'Coloring',
    icon: Palette,
    items: [
      { name: 'Root Touch-up', price: '$85+', desc: 'Seamless color maintenance for your regrowth.' },
      { name: 'Full Color', icon: Sparkles, price: '$120+', desc: 'All-over vibrant color transformation.' },
      { name: 'Pop Balayage', price: '$150+', desc: 'Hand-painted, sun-kissed perfection.' }
    ]
  },
  {
    category: 'Styling',
    icon: Wind,
    items: [
      { name: 'Pink Blowout', price: '$45', desc: 'Big volume, big shine, big style.' },
      { name: 'Formal Updo', price: '$75+', desc: 'Retro rolls, elegant buns, or modern braids for your big event.' },
      { name: 'Gloss Treatment', price: '$35', desc: 'Add 100% more shine to any service.' }
    ]
  }
];

export function Services() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-7xl mb-4"
          >
            The Menu
          </motion.h1>
          <p className="text-xl font-medium max-w-2xl mx-auto text-gray-600">
            Professional hair services with a vintage touch. Prices may vary based on length and density.
          </p>
        </header>

        <div className="space-y-24">
          {SERVICE_LIST.map((group, idx) => (
            <section key={idx}>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-black text-white p-3 border-2 border-black rotate-[-3deg]">
                  <group.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl text-hot-pink uppercase">{group.category}</h2>
                <div className="flex-grow h-1 bg-black/10" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="border-8 border-black p-8 bg-white retro-shadow-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl leading-tight">{item.name}</h3>
                        <span className="bg-pop-yellow px-2 py-1 border-2 border-black font-retro text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 font-medium italic">"{item.desc}"</p>
                    </div>
                    <div className="pt-4 border-t-2 border-black border-dashed">
                      <span className="text-xs font-retro uppercase tracking-widest text-hot-pink">Salon Pink Favorite</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-24 bg-hot-pink border-8 border-black p-12 text-center rotate-[-1deg]">
          <h2 className="text-white text-4xl mb-6 uppercase">Ready for a transformation?</h2>
          <a 
            href="/booking" 
            className="inline-block bg-white text-black border-4 border-black px-12 py-4 font-retro text-2xl retro-shadow-hover transition-all"
          >
            SECURE YOUR SPOT
          </a>
        </div>
      </div>
    </div>
  );
}

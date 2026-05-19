import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const services = [
  {
    id: 'weddings',
    num: '01',
    title: 'Destination Weddings',
    desc: 'Bespoke design, venue curation, vendor coordination, and seamless management from Udaipur palaces to coastal retreats.',
    highlights: ['Royal & Heritage Palaces', 'Beachfront Locations', 'Multicultural Rites'],
  },
  {
    id: 'corporate',
    num: '02',
    title: 'Corporate Events',
    desc: 'High-profile corporate summits, award ceremonies, premium brand launches, and annual galas executed flawlessly.',
    highlights: ['Product Launches', 'Award Shows', 'Business Retreats'],
  },
  {
    id: 'birthdays',
    num: '03',
    title: 'Birthday Events',
    desc: 'Milestone celebrations designed around custom narratives. Unforgettable parties crafted with precision.',
    highlights: ['Milestone Anniversaries', 'Theme Conception', 'Immersive Production'],
  },
  {
    id: 'anniversaries',
    num: '04',
    title: 'Anniversaries & Engagements',
    desc: 'Capturing the deep emotion of your journey. Intimate setups or lavish dinners with cinematic detail.',
    highlights: ['Sunset Proposals', 'Golden Jubilees', 'Bespoke Dinners'],
  },
  {
    id: 'private',
    num: '05',
    title: 'Private & Luxury Celebrations',
    desc: 'Bespoke, private, and highly confidential gatherings for elite clients globally. Discretion and absolute luxury.',
    highlights: ['VIP Guest Management', 'Ultra-exclusive Venues', 'Bespoke Entertainment'],
  },
]

export default function Services() {
  const [activeId, setActiveId] = useState('weddings')

  return (
    <section id="services" className="bg-bg-primary py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-3">
            Our Pillars
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-light">
            Luxury Event <span className="serif-italic text-cream">Specialties</span>
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service) => {
            const isOpen = activeId === service.id
            return (
              <div
                key={service.id}
                onClick={() => setActiveId(isOpen ? null : service.id)}
                className="border-b border-white/10 py-8 cursor-pointer group transition-colors duration-300"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-manrope text-xs text-white/30 group-hover:text-gold transition-colors font-light">
                      {service.num}
                    </span>
                    <h3 className="font-playfair text-xl md:text-3xl text-white font-light group-hover:pl-4 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-white/40 group-hover:text-white transition-colors pr-2">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-12 md:pl-24 max-w-3xl flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                        <p className="font-manrope text-sm text-white/50 leading-relaxed font-light flex-1">
                          {service.desc}
                        </p>
                        <div className="flex flex-col gap-2 min-w-[200px]">
                          <span className="font-manrope text-[10px] tracking-wider uppercase text-gold font-medium">
                            Focus Areas
                          </span>
                          {service.highlights.map((h, i) => (
                            <span key={i} className="font-manrope text-xs text-white/70 font-light">
                              — {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

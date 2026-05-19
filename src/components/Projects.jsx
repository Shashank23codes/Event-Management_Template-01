import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'The Mehra Royal Wedding',
    category: 'Destination Wedding',
    location: 'Udaipur, Rajasthan',
    theme: 'Royal Rajputana Grandeur',
    guests: '800+',
    duration: '4 Days',
    result: 'Featured in Vogue India & Condé Nast Traveller',
    review: '"Trends Management transformed our wedding into a fairy tale we never imagined possible. Every detail was perfection."',
    reviewer: 'Priya & Arjun Mehra',
    image: `${import.meta.env.BASE_URL}luxury_wedding.png`
  },
  {
    id: 2,
    title: 'TechVision Annual Gala',
    category: 'Corporate Event',
    location: 'Mumbai, Maharashtra',
    theme: 'Futuristic Luxury',
    guests: '1200+',
    duration: '2 Days',
    result: '98% attendee satisfaction score — highest in company history',
    review: '"The level of professionalism and creativity was extraordinary. Our brand has never been presented more beautifully."',
    reviewer: 'CEO, TechVision India',
    image: `${import.meta.env.BASE_URL}luxury_corporate.png`
  },
  {
    id: 3,
    title: 'The Kapoor Engagement',
    category: 'Engagement Ceremony',
    location: 'Goa',
    theme: 'Sunset on the Shore',
    guests: '150',
    duration: '1 Day',
    result: 'An intimate masterpiece that went viral on social media',
    review: '"The way they captured the essence of our love story was breathtaking. Pure magic from start to finish."',
    reviewer: 'Neha & Rohan Kapoor',
    image: `${import.meta.env.BASE_URL}luxury_engagement.png`
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + projects.length) % projects.length)
  const next = () => setActive((a) => (a + 1) % projects.length)

  const p = projects[active]

  return (
    <section id="projects" className="bg-bg-primary py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-3">
              Selected Works
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-light">
              Featured <span className="serif-italic text-cream">Case Studies</span>
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <span className="font-manrope text-xs text-white/40 tracking-wider">
              {active + 1} / {projects.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/10 hover:border-white flex items-center justify-center text-white transition-colors duration-300"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/10 hover:border-white flex items-center justify-center text-white transition-colors duration-300"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Project Viewport */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Showcase - Grayscale by default */}
          <div className="lg:col-span-7 relative overflow-hidden aspect-16/10 bg-[#111] rounded-4xl border border-white/10 -rotate-1 hover:rotate-0 transition-all duration-500 shadow-2xl grayscale hover:grayscale-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={p.image}
                alt={p.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-bg-primary/10 pointer-events-none" />
          </div>

          {/* Details Panel - Editorial Design */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="font-manrope text-[10px] tracking-wider uppercase text-gold">
                    {p.category}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl text-white font-light mt-1">
                    {p.title}
                  </h3>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-b border-white/5 py-6">
                  <div>
                    <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-1">Location</span>
                    <span className="font-manrope text-xs text-white/80 font-light">{p.location}</span>
                  </div>
                  <div>
                    <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-1">Guests</span>
                    <span className="font-manrope text-xs text-white/80 font-light">{p.guests}</span>
                  </div>
                  <div>
                    <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-1">Duration</span>
                    <span className="font-manrope text-xs text-white/80 font-light">{p.duration}</span>
                  </div>
                  <div>
                    <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-1">Aesthetic / Theme</span>
                    <span className="font-manrope text-xs text-white/80 font-light">{p.theme}</span>
                  </div>
                </div>

                {/* Editorial quote */}
                <div>
                  <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-2">Client Retrospective</span>
                  <p className="font-playfair text-base text-cream/90 italic font-light leading-relaxed">
                    {p.review}
                  </p>
                  <span className="font-manrope text-[10px] text-white/50 block mt-2">
                    — {p.reviewer}
                  </span>
                </div>

                <div>
                  <span className="font-manrope text-[9px] tracking-wider uppercase text-white/40 block mb-1">Outcome</span>
                  <p className="font-manrope text-xs text-white/60 font-light leading-relaxed">
                    {p.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

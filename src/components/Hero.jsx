import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-between items-center bg-bg-primary overflow-hidden px-6 md:px-12 py-16"
    >
      {/* Background with super minimal dark atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-bg-primary"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`
          }}
        />
        {/* Sleek editorial vertical line grid */}
        <div className="absolute inset-y-0 left-1/4 w-px bg-white/2" />
        <div className="absolute inset-y-0 left-2/4 w-px bg-white/2" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-white/2" />
      </div>

      {/* Top spacing placeholder */}
      <div className="h-20" />

      {/* Center Editorial Text */}
      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Floating Left Image - Framer Inspired */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden xl:block absolute -left-48 top-1/2 -translate-y-1/2 w-48 h-64 rounded-4xl border border-white/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 hover:rotate-0 transition-all duration-500"
        >
          <img
            src={`${import.meta.env.BASE_URL}luxury_decor_1779184615426.png`}
            alt="Luxury Decor Detail"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Right Image - Framer Inspired */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden xl:block absolute -right-52 top-1/3 -translate-y-1/2 w-52 h-72 rounded-4xl border border-white/10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 hover:rotate-0 transition-all duration-500"
        >
          <img
            src={`${import.meta.env.BASE_URL}luxury_wedding_1779184533284.png`}
            alt="Luxury Wedding Setup"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold mb-6"
        >
          Trends Management · Luxury Events
        </motion.span>

        <h1 className="font-playfair text-4xl md:text-7xl lg:text-8xl leading-[1.1] text-white font-light max-w-4xl tracking-tight">
          Creating{' '}
          <span className="serif-italic text-cream font-light">unforgettable</span>
          <br />
          experiences, timeless memories.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-manrope text-sm md:text-base text-white/50 max-w-xl mt-8 font-light leading-relaxed"
        >
          Luxury weddings, corporate events, birthdays and celebrations designed with absolute precision and modern elegance.
        </motion.p>

        {/* Minimal Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center gap-6 mt-10"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3.5 bg-white text-black font-manrope text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300"
          >
            Explore Portfolio
          </button>
          <button
            onClick={() => scrollTo('#footer')}
            className="px-8 py-3.5 border border-white/20 text-white font-manrope text-xs tracking-widest uppercase hover:border-white transition-all duration-300"
          >
            Book Consultation
          </button>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 w-full max-w-7xl flex flex-row items-center justify-between border-t border-white/5 pt-6 text-[10px] tracking-widest text-white/30 uppercase font-manrope">
        <span>Curators of luxury experiences</span>
        <button
          onClick={() => scrollTo('#about')}
          className="flex items-center gap-2 hover:text-white transition-colors group focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={12} className="group-hover:translate-y-1 transition-transform" />
        </button>
        <span>Based in India</span>
      </div>
    </section>
  )
}

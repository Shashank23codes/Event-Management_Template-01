import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-4xl bg-bg-primary/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl' 
            : 'top-0 left-0 right-0 w-full bg-transparent py-6'
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'px-2 gap-8' : 'max-w-7xl px-8'
        }`}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center"
          >
            <img
              src="/tm logo.png"
              alt="Trends Management"
              className={`w-auto object-contain brightness-110 transition-all duration-300 ${
                scrolled ? 'h-6' : 'h-10'
              }`}
            />
          </a>

          {/* Minimal Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-manrope text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#footer')}
              className={`font-manrope text-xs tracking-widest uppercase transition-all duration-300 ${
                scrolled
                  ? 'px-4 py-1.5 bg-white text-black rounded-full hover:bg-gold hover:text-black font-medium'
                  : 'px-5 py-2 border border-white/10 hover:border-gold'
              }`}
            >
              Consultation
            </button>
          </div>

          {/* Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu - Minimal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col justify-between p-8"
          >
            <div className="flex justify-between items-center mt-2">
              <img src="/tm logo.png" alt="Trends Logo" className="h-6 w-auto" />
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-playfair text-3xl text-left text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <span className="font-manrope text-xs tracking-wider text-white/40">hello@trendsmanagement.in</span>
              <button
                onClick={() => scrollTo('#footer')}
                className="w-full py-3 border border-white/10 text-xs tracking-widest uppercase hover:border-gold transition-colors text-center"
              >
                Book Your Event
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

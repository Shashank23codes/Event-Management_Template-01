import { motion } from 'framer-motion'

export default function CTA() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-cream py-32 px-6 md:px-12 border-t border-bg-primary/5 relative overflow-hidden text-bg-primary">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-1/3 w-px bg-bg-primary/5" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-bg-primary/5" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-6">
          Begin Your Chapter
        </span>
        
        <h2 className="font-playfair text-4xl md:text-6xl text-bg-primary font-light leading-tight mb-8">
          Let’s curate something<br />
          <span className="serif-italic text-gold">truly extraordinary</span> together.
        </h2>

        <p className="font-manrope text-sm text-bg-primary/60 max-w-lg mx-auto leading-relaxed font-light mb-12">
          Contact our curators to discuss your upcoming wedding, corporate gala, or private milestone celebration. We look forward to realizing your vision.
        </p>

        {/* Minimal Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('#footer')}
            className="px-8 py-3.5 bg-bg-primary text-white font-manrope text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            Inquire Now
          </button>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-bg-primary/20 text-bg-primary font-manrope text-xs tracking-widest uppercase hover:border-bg-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Direct WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

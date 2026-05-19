import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', title: 'The Mehra Reception', loc: 'Udaipur' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&h=800&q=80', title: 'Corporate Keynote', loc: 'Mumbai' },
  { id: 3, src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&h=900&q=80', title: 'Grand Banquets Decor', loc: 'Delhi' },
  { id: 4, src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&h=600&q=80', title: 'The Kapoor Sangeet', loc: 'Goa' },
  { id: 5, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&h=750&q=80', title: 'Intimate Proposal Setup', loc: 'Alibaug' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80', title: 'Private Anniversary Gathering', loc: 'Bangalore' },
  { id: 7, src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&h=850&q=80', title: 'Outdoor Floral Pathways', loc: 'Jaipur' },
  { id: 8, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&h=600&q=80', title: 'Gala Networking Lounge', loc: 'Mumbai' },
  { id: 9, src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&h=800&q=80', title: 'Mandap by the Lake', loc: 'Udaipur' },
  { id: 10, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&h=400&q=80', title: 'Champagne Toast Tower', loc: 'Delhi' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const handlePrev = () => {
    setSelected((prev) => {
      const idx = galleryImages.findIndex((img) => img.id === prev.id)
      return galleryImages[(idx - 1 + galleryImages.length) % galleryImages.length]
    })
  }

  const handleNext = () => {
    setSelected((prev) => {
      const idx = galleryImages.findIndex((img) => img.id === prev.id)
      return galleryImages[(idx + 1) % galleryImages.length]
    })
  }

  const col1 = [galleryImages[0], galleryImages[2], galleryImages[8]]
  const col2 = [galleryImages[1], galleryImages[4], galleryImages[7]]
  const col3 = [galleryImages[3], galleryImages[5], galleryImages[6], galleryImages[9]]

  return (
    <section id="gallery" className="bg-bg-primary py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-3">
            Visual Journal
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-light">
            Capture the <span className="serif-italic text-cream">Moment</span>
          </h2>
          <p className="font-manrope text-xs text-white/40 mt-4 max-w-sm mx-auto font-light">
            A minimalist record of real-life celebrations and luxury layouts.
          </p>
        </div>

        {/* Balanced Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {col1.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelected(img)}
                className="relative cursor-pointer overflow-hidden bg-[#111] group grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-manrope text-[10px] text-gold tracking-widest uppercase mb-1">{img.loc}</span>
                  <h4 className="font-playfair text-base text-white font-light">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {col2.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelected(img)}
                className="relative cursor-pointer overflow-hidden bg-[#111] group grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-manrope text-[10px] text-gold tracking-widest uppercase mb-1">{img.loc}</span>
                  <h4 className="font-playfair text-base text-white font-light">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {col3.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelected(img)}
                className="relative cursor-pointer overflow-hidden bg-[#111] group grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-manrope text-[10px] text-gold tracking-widest uppercase mb-1">{img.loc}</span>
                  <h4 className="font-playfair text-base text-white font-light">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-sm flex flex-col justify-between p-6 md:p-12"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
              <span className="font-manrope text-xs text-white/40 tracking-wider">
                {selected.loc} · {selected.title}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Picture Container */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-6">
              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 text-white/40 hover:text-white transition-colors p-3 z-10"
              >
                <ArrowLeft size={24} />
              </button>

              <img
                src={selected.src}
                alt={selected.title}
                className="max-h-[70vh] max-w-full object-contain"
              />

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-16 text-white/40 hover:text-white transition-colors p-3 z-10"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            {/* Bottom metadata */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-[10px] tracking-widest uppercase text-white/30 font-manrope">
              <span>Trends Portfolio Journal</span>
              <span>Selected Works</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

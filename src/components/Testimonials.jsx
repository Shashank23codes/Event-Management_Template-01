import { motion } from 'framer-motion'

const reviews = [
  {
    quote: 'The vision was majestic, the orchestration flawless. Our destination wedding in Goa was a cinematic masterpiece from the first day to the final champagne toast.',
    author: 'Karan & Natasha Sen',
    location: 'Goa Destination Wedding',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote: 'Trends Management brought an architectural precision to our product launch. They understand how design impacts brand positioning. Unmatched aesthetic.',
    author: 'Marketing Director, Lexus India',
    location: 'Lexus Brand Launch',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote: 'From custom concepts to private security and top-tier guest coordination, they handles our private events with absolute discretion and luxury standards.',
    author: 'V. Singhania',
    location: 'Exclusive Villa Gathering',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-primary py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-3">
            Client Voices
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-light">
            Loved by <span className="serif-italic text-cream">Sophisticated</span> Clients
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col justify-between border-t border-white/10 pt-8"
            >
              <div>
                {/* Clean quote mark indicator */}
                <span className="font-playfair text-5xl text-gold font-light block leading-none mb-4">“</span>
                <p className="font-playfair text-lg text-white/80 italic leading-relaxed font-light mb-8">
                  {r.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden grayscale">
                  <img src={r.avatar} alt={r.author} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="font-manrope text-xs text-white font-medium">{r.author}</h4>
                  <p className="font-manrope text-[9px] text-white/40 tracking-wider uppercase mt-0.5">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

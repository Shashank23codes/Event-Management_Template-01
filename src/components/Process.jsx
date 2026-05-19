import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Consultation & Concept',
    desc: 'An in-depth consultation where we understand your style, preferences, and vision to craft a bespoke theme concept.',
  },
  {
    num: '02',
    title: 'Venue & Vendor Selection',
    desc: 'Curation of potential destinations and locations, followed by matching you with the finest catering, floral, and technical designers.',
  },
  {
    num: '03',
    title: 'Architectural Blueprint',
    desc: 'Creation of 3D floor plans, spatial designs, and detailed mood boards to visualize the flow, illumination, and atmosphere.',
  },
  {
    num: '04',
    title: 'Flawless Coordination',
    desc: 'Directing all elements of logistics, hospitality, guest management, and rehearsals to guarantee zero execution friction.',
  },
  {
    num: '05',
    title: 'The Signature Event',
    desc: 'On-site execution handled by senior production managers so you can fully immerse yourself in your landmark day.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-bg-primary py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 max-w-xl">
          <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-3">
            Our Method
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-light">
            Crafting the <span className="serif-italic text-cream">Masterpiece</span>
          </h2>
          <p className="font-manrope text-xs text-white/40 mt-4 leading-relaxed font-light">
            Our execution process is designed to deliver complete peace of mind while bringing the grandest visions to reality.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid md:grid-cols-5 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col relative"
            >
              {/* Number and Line */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-manrope text-xs text-gold font-light tracking-widest">{step.num}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Text contents */}
              <h3 className="font-playfair text-lg text-white font-light mb-3">{step.title}</h3>
              <p className="font-manrope text-xs text-white/40 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const timelineItems = [
  { year: '2018', title: 'The Beginning', desc: 'Founded with a vision to transform milestones into timeless celebrations.' },
  { year: '2019', title: 'Royal Wedding Udaipur', desc: 'Crafted a grand-scale destination wedding setting the benchmark for luxury.' },
  { year: '2021', title: 'Corporate Luxury', desc: 'Expanded our design ethos to corporate experiences and luxury brand galas.' },
  { year: '2023', title: '100+ Events', desc: 'Successfully orchestrated over 100 benchmark events across 20 cities.' },
  { year: '2024', title: 'Pan-India Operations', desc: 'Headquartered globally with a network of premium curators.' },
]

const teamMembers = [
  { src: `${import.meta.env.BASE_URL}teams-img/owner.jpeg`, name: 'Founder & CEO', role: 'Creative Director' },
  { src: `${import.meta.env.BASE_URL}teams-img/2.jpeg`, name: 'Lead Event Architect', role: 'Concept Design' },
  { src: `${import.meta.env.BASE_URL}teams-img/3.jpeg`, name: 'Operations Director', role: 'Execution & Planning' },
  { src: `${import.meta.env.BASE_URL}teams-img/4.jpeg`, name: 'Head of Design', role: 'Visual Identity' },
  { src: `${import.meta.env.BASE_URL}teams-img/5.jpeg`, name: 'Senior Art Director', role: 'Scenic Design' },
  { src: `${import.meta.env.BASE_URL}teams-img/6.jpeg`, name: 'Production Manager', role: 'Technical Setup' },
  { src: `${import.meta.env.BASE_URL}teams-img/7.jpeg`, name: 'Logistics Lead', role: 'Event Operations' },
  { src: `${import.meta.env.BASE_URL}teams-img/8.jpeg`, name: 'Client Relations Lead', role: 'Guest Experiences' },
  { src: `${import.meta.env.BASE_URL}teams-img/9.jpeg`, name: 'Hospitality Curator', role: 'VIP Management' },
  { src: `${import.meta.env.BASE_URL}teams-img/10.jpeg`, name: 'F&B Coordinator', role: 'Culinary Styling' },
]

export default function About() {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 324
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" ref={ref} className="bg-cream py-32 px-6 md:px-12 border-t border-bg-primary/5 text-bg-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
          
          {/* Left Column: Asymmetrical Typography */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-6">
                Our Story & Philosophy
              </span>
              <h2 className="font-playfair text-4xl md:text-6xl text-bg-primary font-light leading-tight mb-8">
                Crafted by passion.<br />
                <span className="serif-italic text-gold font-light">Perfected</span> by experience.
              </h2>
            </div>
            <div className="max-w-md mt-6">
              <p className="font-manrope text-sm text-bg-primary/70 leading-relaxed font-light mb-6">
                Trends Management was founded in 2018 with a singular commitment: to elevate event management into an emotional, cinematic narrative. We view each wedding, anniversary, corporate gala, or private celebration as a distinct art form.
              </p>
              <p className="font-manrope text-sm text-bg-primary/70 leading-relaxed font-light">
                Our team blends architectural planning with artistic direction to deliver seamless production, immersive layouts, and unparalleled storytelling.
              </p>
            </div>
          </div>

          {/* Right Column: High Fashion Editorial Portrait */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative w-full max-w-sm aspect-3/4 overflow-hidden rounded-4xl border border-bg-primary/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 grayscale hover:grayscale-0">
              <img
                src={`${import.meta.env.BASE_URL}teams-img/owner.jpeg`}
                alt="Founder of Trends Management"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-bg-primary/5 pointer-events-none" />
            </div>
            {/* Absolute badge */}
            <div className="absolute bottom-6 left-6 md:-left-8 bg-bg-primary border border-white/10 rounded-2xl p-6 max-w-[200px] shadow-2xl">
              <span className="font-playfair text-5xl text-gold font-light block mb-2">7+</span>
              <span className="font-manrope text-[9px] tracking-widest uppercase text-white/40">Years Curating Premium Experiences</span>
            </div>
          </div>
        </div>

        {/* The Dream Team - Carousel Row */}
        <div className="border-t border-bg-primary/15 pt-20 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-2">The Curators</span>
              <h3 className="font-playfair text-3xl md:text-4xl text-bg-primary font-light">Creative Minds Behind Trends</h3>
              <p className="font-manrope text-xs text-bg-primary/60 max-w-xs mt-3">
                A specialized team of 10 event architects, production experts, and design visionaries.
              </p>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-bg-primary/15 hover:border-bg-primary rounded-full flex items-center justify-center text-bg-primary transition-colors duration-300"
                aria-label="Previous team members"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-bg-primary/15 hover:border-bg-primary rounded-full flex items-center justify-center text-bg-primary transition-colors duration-300"
                aria-label="Next team members"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal scrollable team list */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="min-w-[260px] md:min-w-[300px] snap-start group relative"
              >
                <div className="relative overflow-hidden aspect-3/4 mb-4 rounded-3xl border border-bg-primary/10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <h4 className="font-playfair text-lg text-bg-primary font-medium tracking-tight">{member.name}</h4>
                <p className="font-manrope text-xs text-bg-primary/60 tracking-wider mt-0.5 uppercase font-light">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Understated Line */}
        <div className="border-t border-bg-primary/15 pt-20">
          <div className="text-center mb-16">
            <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-2">Our Evolution</span>
            <h3 className="font-playfair text-2xl md:text-3xl text-bg-primary font-light">Timeline of Milestones</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {timelineItems.map((item, i) => (
              <div key={i} className="flex flex-col relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-manrope text-xs text-gold font-semibold">{item.year}</span>
                  <div className="h-px flex-1 bg-bg-primary/10" />
                </div>
                <h4 className="font-playfair text-base text-bg-primary/80 font-light mb-2">{item.title}</h4>
                <p className="font-manrope text-xs text-bg-primary/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

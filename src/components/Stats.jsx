import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ to, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const end = parseInt(to, 10)
    if (isNaN(end)) return

    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      
      // Ease out quad
      const easedProgress = progress * (2 - progress)
      setCount(Math.floor(easedProgress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [isInView, to, duration])

  const hasPlus = to.includes('+')
  return (
    <span ref={ref}>
      {count}
      {hasPlus && '+'}
    </span>
  )
}

export default function Stats() {
  const stats = [
    { num: '500+', label: 'Events Managed' },
    { num: '100+', label: 'Design Partners' },
    { num: '20+', label: 'Destination Cities' },
    { num: '7+', label: 'Years of Excellence' },
  ]

  return (
    <section className="bg-bg-primary py-20 px-6 md:px-12 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left flex flex-col md:border-r border-white/5 last:border-0 pr-4">
              <span className="font-playfair text-5xl md:text-6xl text-gold font-light tracking-tight mb-2">
                <CountUp to={stat.num} />
              </span>
              <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

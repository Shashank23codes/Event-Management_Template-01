import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative bg-bg-primary overflow-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Testimonials />
      <Stats />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react'
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
]

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you. A specialist will contact you shortly.')
  }

  return (
    <footer id="footer" className="bg-bg-primary border-t border-white/5 pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <img src={`${import.meta.env.BASE_URL}tm logo.png`} alt="Trends Logo" className="h-6 w-auto mb-8" />
              <span className="font-manrope text-[10px] tracking-[0.4em] uppercase text-gold block mb-4">
                Inquire Now
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl text-white font-light leading-tight mb-6">
                Let’s write the<br />
                <span className="serif-italic text-cream font-light">next chapter</span> together.
              </h2>
              <p className="font-manrope text-xs text-white/40 leading-relaxed font-light mb-8 max-w-sm">
                Curating memories, celebrations, and cinematic moments for discerning clients worldwide. Contact our curation desks to book a private consultation.
              </p>
            </div>

            {/* Contact Specs */}
            <div className="flex flex-col gap-5 font-manrope text-xs text-white/50 font-light border-t border-white/5 pt-8 mb-8 lg:mb-0">
              <a href="mailto:hello@trendsmanagement.in" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail size={14} className="text-white/30" />
                <span>hello@trendsmanagement.in</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone size={14} className="text-white/30" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-white/30 mt-0.5" />
                <span>Trends Management, 4th floor, Fortune Icon Hospital, Ramdaspeth, Nagpur - 440010</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form & Location Map Combined */}
          <div className="lg:col-span-7 grid md:grid-cols-12 gap-8">
            
            {/* Form */}
            <div className="md:col-span-7">
              <h4 className="font-playfair text-lg text-white font-light mb-6">Request a Consultation</h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xs text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xs text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                />
                <select
                  required
                  className="w-full bg-bg-primary border-b border-white/10 py-3 text-xs text-white/60 focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="" disabled selected>Select Event Type</option>
                  <option value="wedding">Destination Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday & Celebration</option>
                  <option value="private">Private VIP Event</option>
                </select>
                <textarea
                  placeholder="Tell us about your event..."
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-xs text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 border border-white/20 text-white font-manrope text-xs tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
                >
                  Send Request
                </button>
              </form>
            </div>

            {/* Map Embed */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="h-full min-h-[220px] border border-white/15 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                  title="Trends Management Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709428983!2d79.0024734!3d21.125492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a3d0f33f%3A0x18030c6670a6e422!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-manrope text-[10px] text-white/30 tracking-wider">
            © {new Date().getFullYear()} Trends Management. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-gold text-white/60 hover:text-gold flex items-center justify-center transition-all duration-300"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>

          <span className="font-manrope text-[10px] text-white/30 tracking-wider flex items-center gap-1">
            Made with <Heart size={10} className="text-gold fill-gold" /> by <a href="https://codecloverstudio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">codecloverstudio</a>
          </span>
        </div>

      </div>
    </footer>
  )
}

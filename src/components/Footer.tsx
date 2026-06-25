import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

const quickLinks = ['Home','About','Skills','Experience','Services','Portfolio','Contact']

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/10">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="gradient-gold text-3xl font-black tracking-widest">PCK</span>
              <span className="text-[10px] font-light tracking-[6px] text-[#c9a84c]/60 uppercase ml-1">Films</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
              Transforming Stories Into Powerful Visual Experiences. 9+ years of crafting compelling narratives through the art of video editing.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 border border-[#c9a84c]/20 rounded-full flex items-center justify-center text-white/40 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c]/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-white/50 hover:text-[#c9a84c] text-sm text-left transition-colors duration-300 font-light py-1 cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919550301842" className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] transition-colors text-sm font-light">
                <Phone size={14} className="text-[#c9a84c] shrink-0" />
                +91 95503 01842
              </a>
              <a href="mailto:purnachandrakoppisetti@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] transition-colors text-sm font-light break-all">
                <Mail size={14} className="text-[#c9a84c] shrink-0" />
                purnachandrakoppisetti@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm font-light">
                <MapPin size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                KPHB, Kukatpally, Hyderabad, Telangana - 500072
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a84c]/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2026 Purna Chandra Koppisetti. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Senior Video Editor • 9+ Years Experience
          </p>
        </div>
      </div>
    </footer>
  )
}

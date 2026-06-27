import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, MessageCircle, Linkedin, Instagram, Facebook, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setStatus('loading')

  try {
    const response = await fetch('https://formspree.io/f/mqevqoqw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (response.ok) {
      setStatus('success')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus('error')
    }
  } catch (error) {
    console.error(error)
    setStatus('error')
  }
}

  return (
    <section id="contact" className="section-padding bg-[#0d0d0d]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
            Contact
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            Let's Work Together
          </motion.h2>
          <div className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white/40 text-sm max-w-xl mx-auto font-light">
            Ready to bring your story to life? Get in touch and let's create something extraordinary.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Phone', value: '+91 95503 01842', href: 'tel:+919550301842' },
                { icon: Mail, label: 'Email', value: 'purnachandrakoppisetti@gmail.com', href: 'mailto:purnachandrakoppisetti@gmail.com' },
                { icon: MapPin, label: 'Address', value: 'KPHB, Kukatpally, Hyderabad, Telangana - 500072', href: undefined },
                { icon: Globe, label: 'Languages', value: 'Telugu • English • Hindi', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/70 text-sm font-light hover:text-[#c9a84c] transition-colors break-all">{value}</a>
                    ) : (
                      <p className="text-white/70 text-sm font-light">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
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

            {/* WhatsApp */}
            <a
  href="https://wa.me/919550301842?text=Hi Purna, I'd like to discuss a project with you."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#1EBE5D] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.45)]"
>
  <MessageCircle size={22} />
  Chat on WhatsApp
</a>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2 block">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="input-dark"
                />
              </div>
              <div>
                <label className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="input-dark"
                />
              </div>
              <div>
                <label className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="input-dark resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Failed to send. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full justify-center"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-[#080808]/30 border-t-[#080808] rounded-full animate-spin" />Sending...</span>
                ) : (
                  <><Send size={16} />Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

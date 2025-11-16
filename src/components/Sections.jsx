import { motion } from 'framer-motion'
import { Globe, TrendingUp, PenTool, Megaphone, Shield, Mail } from 'lucide-react'

export function ServicesGrid() {
  const services = [
    { icon: Globe, title: 'Web Design & Development', desc: 'Lightning-fast, SEO-friendly websites that convert.' },
    { icon: Megaphone, title: 'Digital Marketing', desc: 'ROI-driven ads across Google, Meta, LinkedIn & more.' },
    { icon: TrendingUp, title: 'SEO & Content', desc: 'Climb rankings with technical SEO and premium content.' },
    { icon: PenTool, title: 'Branding & UI/UX', desc: 'Standout visuals and delightful experiences.' },
    { icon: Shield, title: 'Maintenance & Security', desc: 'Updates, uptime monitoring, backups, and hardening.' },
    { icon: Mail, title: 'Email & Automation', desc: 'Lifecycle flows, CRM, and marketing automation.' },
  ]

  return (
    <section id="services" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-3xl md:text-4xl font-bold">Services</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:i*0.05}}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 hover:border-fuchsia-400/30 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_-20px_rgba(217,70,239,0.3)] transition"
            >
              <s.icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-3xl md:text-4xl font-bold">About Us</motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} className="mt-6 text-zinc-300 leading-relaxed">
          We are a full-stack growth studio blending design, code, and performance marketing. Our team has shipped products for startups and Fortune 500s — always with an obsession for velocity and outcomes.
        </motion.p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {[
            'Certified experts across Google, Meta & HubSpot',
            'Core Web Vitals optimized builds',
            'Data-driven experimentation culture',
            'Transparent pricing & reporting',
          ].map((b, i) => (
            <motion.div key={b} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="rounded-lg border border-white/10 bg-zinc-900/60 p-4">• {b}</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="text-3xl md:text-4xl font-bold">Let’s Work Together</motion.h2>
        <form className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Name" className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400/50" />
            <input placeholder="Email" className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400/50" />
          </div>
          <input placeholder="Company" className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400/50" />
          <textarea rows="5" placeholder="Project details" className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400/50" />
          <button className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 font-semibold hover:opacity-90 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}

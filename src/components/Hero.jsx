import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Ignite Your Growth with
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"> Premium Digital Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-zinc-300"
          >
            We craft conversion-focused websites and high-impact campaigns that turn clicks into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#services" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition">Explore Services</a>
            <a href="/contact" className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Get a Quote</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 text-zinc-400"
          >
            <Sparkles className="h-5 w-5 text-fuchsia-400" />
            <span>Trusted by startups and enterprises worldwide</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-white/10 p-1">
            <div className="h-full w-full rounded-xl bg-black/40 backdrop-blur flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-6">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-24 w-32 md:h-28 md:w-40 rounded-lg bg-white/10 border border-white/10 animate-pulse" />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 text-xs bg-white/10 border border-white/10 px-3 py-1 rounded-full">Live dashboards • A/B testing • SEO</div>
        </motion.div>
      </div>
    </section>
  )
}

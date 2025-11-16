import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">About FlameMark Digital</h1>
        <p className="mt-6 text-zinc-300 leading-relaxed">
          We’re a performance-led studio helping brands grow through design, code, and marketing. Our team blends creative strategy with engineering rigor to deliver measurable results.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">10+ years building products and campaigns</div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">Global clients across 12+ countries</div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">Core Web Vitals optimized builds</div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">Transparent, results-first collaboration</div>
        </div>
      </section>
    </div>
  )
}

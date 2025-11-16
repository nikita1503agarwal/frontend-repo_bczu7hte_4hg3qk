import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ServicesGrid, AboutSection, ContactSection } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-black/80 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FlameMark Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Navbar from '../components/Navbar'
import { ServicesGrid } from '../components/Sections'

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ServicesGrid />
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center" id="home">
  {/* Background image with blur */}
  <div 
    className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center filter blur-xs"
    aria-hidden="true"
  />
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Center at <span className="text-amber-400">YOGASMITH</span>
          </h1>
          <p className="text-xl text-slate-100 mb-8">
            Portsmouth's premier yoga studio offering classes for all levels. 
            Discover strength, flexibility, and peace in our welcoming space.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
              Book a Class
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
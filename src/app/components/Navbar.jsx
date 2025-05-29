'use client'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/ui/button'

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Schedule', path: '#schedule' },
  { name: 'Yoga Wisdom', path: '#wisdom' },
  { name: 'Contact', path: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (e, targetId) => {
  e.preventDefault();
  setMobileMenuOpen(false);
  
  // Get the element and calculate adjusted position
  const element = document.getElementById(targetId);
  if (element) {
    const offset = 80; // Adjust this value to match your header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2" onClick={(e) => handleScroll(e, 'home')}>
          <motion.div
            whileHover={{ rotate: 10 }}
            className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white font-bold text-xl">YS</span>
          </motion.div>
          <span className="text-2xl font-bold text-slate-800">YOGASMITH</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path.substring(1))}
              className="text-slate-600 hover:text-amber-500 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-amber-500 hover:bg-amber-600">
            Book a Class
          </Button>
        </nav>

        <button 
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white px-4 pb-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path.substring(1))}
                className="text-slate-600 hover:text-amber-500 transition-colors py-2 border-b border-slate-100"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-amber-500 hover:bg-amber-600 w-full">
              Book a Class
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
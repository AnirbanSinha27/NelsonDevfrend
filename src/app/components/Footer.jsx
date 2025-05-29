'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Schedule", href: "/schedule" },
      { name: "Yoga Wisdom", href: "/wisdom" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Classes",
    links: [
      { name: "Morning Flow", href: "/schedule" },
      { name: "Power Yoga", href: "/schedule" },
      { name: "Yin Yoga", href: "/schedule" },
      { name: "Restorative Yoga", href: "/schedule" },
      { name: "Private Sessions", href: "/contact" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ]
  }
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">YS</span>
              </div>
              <span className="text-2xl font-bold text-white">YOGASMITH</span>
            </Link>
            <p className="text-slate-300 mb-4">
              Portsmouth's premier yoga studio offering classes for all levels.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} YOGASMITH. All rights reserved.</p>
          <p className="mt-2">123 Yoga Lane, Portsmouth, NH 03801 | (603) 583-3540</p>
        </div>
      </div>
    </motion.footer>
  )
}
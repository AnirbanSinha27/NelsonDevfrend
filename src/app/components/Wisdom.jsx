'use client'
import { motion } from 'framer-motion'
import { Leaf, HeartPulse, Brain, Sprout } from 'lucide-react'
import Image from 'next/image'

const wisdomItems = [
  {
    icon: <Leaf className="w-8 h-8 text-amber-500" />,
    title: "The Eight Limbs of Yoga",
    content: "Yoga is much more than physical postures. The eight limbs provide a framework for living a meaningful and purposeful life: Yama (ethical standards), Niyama (self-discipline), Asana (posture), Pranayama (breath control), Pratyahara (withdrawal of senses), Dharana (concentration), Dhyana (meditation), and Samadhi (bliss)."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-amber-500" />,
    title: "The Power of Breath",
    content: "Pranayama, or yogic breathing, is fundamental to yoga practice. Conscious breathing oxygenates the body, calms the nervous system, and connects mind and body. Try simple techniques like diaphragmatic breathing or alternate nostril breathing to reduce stress and increase energy."
  },
  {
    icon: <Brain className="w-8 h-8 text-amber-500" />,
    title: "Meditation Basics",
    content: "Meditation is the practice of focused attention that helps quiet the mind. Start with just 5 minutes daily: sit comfortably, focus on your breath, and gently return your attention when it wanders. Regular practice can reduce stress, improve focus, and increase self-awareness."
  },
  {
    icon: <Sprout className="w-8 h-8 text-amber-500" />,
    title: "Yoga Philosophy",
    content: "At its core, yoga teaches union - of body, mind, and spirit. The Yoga Sutras of Patanjali outline key concepts like non-attachment (vairagya), self-study (svadhyaya), and contentment (santosha). These timeless principles offer guidance for modern living."
  }
]

export default function YogaWisdom() {
  return (
    <section id="wisdom" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Yoga Wisdom</h1>
          <p className="text-lg text-slate-600">
            Deepen your understanding of yoga beyond the mat with these teachings and practices.
          </p>
        </motion.div>

        {/* Full-width Banner Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-64 md:h-80 lg:h-96 relative mb-12 overflow-hidden"
        >
          <Image
            src="/images/yoga-banner.png"
            alt="Yoga wisdom and philosophy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white px-4 text-center">
              Ancient Wisdom for Modern Practice
            </h2>
          </div>
        </motion.div>

        {/* Wisdom Cards */}
        <div className="max-w-3xl mx-auto space-y-12">
          {wisdomItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">{item.title}</h2>
                  <p className="text-slate-600">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'
import { motion } from 'framer-motion'
import { Leaf, Heart, Sun, Moon } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-amber-500" />,
    title: "Holistic Approach",
    description: "We integrate mind, body, and spirit in all our classes for complete wellness."
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "Experienced Instructors",
    description: "Our certified teachers guide you with care and expertise at every level."
  },
  {
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    title: "Variety of Styles",
    description: "From Vinyasa to Yin, we offer diverse yoga styles to suit your needs."
  },
  {
    icon: <Moon className="w-8 h-8 text-amber-500" />,
    title: "Community Focus",
    description: "Join our supportive community of yogis on the journey to wellbeing."
  }
]

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Why Choose YOGASMITH
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're committed to providing an authentic yoga experience that nurtures your whole being.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
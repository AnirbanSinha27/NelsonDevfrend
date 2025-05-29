'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: "Sarah J.",
    role: "Yoga Practitioner",
    content: "YOGASMITH has transformed my practice. The instructors are knowledgeable and create such a welcoming environment. I leave every class feeling refreshed and centered.",
    stars: 5
  },
  {
    name: "Michael T.",
    role: "Beginner Yogi",
    content: "As someone new to yoga, I was nervous to start. The beginner classes at YOGASMITH made me feel comfortable and supported. I'm hooked now!",
    stars: 5
  },
  {
    name: "Priya K.",
    role: "Advanced Practitioner",
    content: "The advanced classes challenge me in all the right ways. The studio has a beautiful energy that enhances every practice session.",
    stars: 5
  },
  {
    name: "David L.",
    role: "Corporate Client",
    content: "The team classes have improved our workplace wellness significantly. Everyone looks forward to our weekly YOGASMITH sessions.",
    stars: 5
  },
  {
    name: "Emma S.",
    role: "Senior Practitioner",
    content: "I've practiced yoga for 20 years and YOGASMITH offers some of the most authentic instruction I've found in the area.",
    stars: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className="bg-slate-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our community about their experiences at YOGASMITH.
          </p>
        </motion.div>

        {/* Desktop Grid (unchanged) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-x-hidden">
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={{
              x: isMobile ? `-${currentIndex * 100}%` : 0,
            }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-amber-500' : 'bg-slate-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-sm h-full"
    >
      <div className="flex mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 italic mb-6">"{testimonial.content}"</p>
      <div>
        <p className="font-semibold text-slate-800">{testimonial.name}</p>
        <p className="text-sm text-slate-500">{testimonial.role}</p>
      </div>
    </motion.div>
  )
}
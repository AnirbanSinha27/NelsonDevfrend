'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Story</h1>
          <p className="text-lg text-slate-600">
            YOGASMITH was founded with a vision to create a welcoming space where everyone can experience the transformative power of yoga.
          </p>
        </motion.div>

        {/* Studio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[400px]"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/about-1.jpg"
                alt="Yoga studio"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Studio</h2>
            <p className="text-slate-600 mb-4">
              Nestled in the heart of Portsmouth, our studio is designed to be a sanctuary from the busyness of daily life. With natural light, sustainable materials, and a calming aesthetic, we've created an environment that supports your practice.
            </p>
            <p className="text-slate-600">
              Our space features high-quality props, eco-friendly flooring, and a carefully curated ambiance to enhance your yoga experience.
            </p>
          </motion.div>
        </div>

        {/* Teachers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:order-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/about-2.png"
                alt="Yoga instructors"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Teachers</h2>
            <p className="text-slate-600 mb-4">
              Our instructors bring diverse backgrounds and specialties to YOGASMITH, united by a shared passion for authentic yoga teaching. Each teacher completes rigorous training and continues their education to bring you the best possible instruction.
            </p>
            <p className="text-slate-600">
              Whether you're looking for dynamic movement, deep relaxation, or precise alignment, our teachers will guide you with expertise and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

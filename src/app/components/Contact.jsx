'use client'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">
            We'd love to hear from you. Reach out with questions or to learn more about our offerings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm h-fit"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Studio Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Address</h3>
                  <p className="text-slate-600">123 Yoga Lane, Portsmouth, NH 03801</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">(603) 583-3540</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">hello@yogasmith.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 6:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.843272746322!2d-70.76048992405003!3d43.00593097114979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2c3a9c3b13a8d%3A0x6b6b0a9b9b9b9b9b!2sPortsmouth%2C%20NH%2003801!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="min-h-[300px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
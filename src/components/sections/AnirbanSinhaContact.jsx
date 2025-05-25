'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Card */}
          <motion.div
            className="bg-gray-900 p-8 shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 text-gray-500 mb-2">
              <Phone className="text-amber-400" /> Call: 1.800.218.20.20
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <Mail className="text-amber-400" /> Write: hello@example.com
            </p>
          </motion.div>

          {/* Appointment Card */}
          <motion.div
            className="bg-gray-900 p-8 shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Appointment</h3>
            <p className="text-gray-400 mb-2">Working Hours</p>
            <p className="text-gray-500 mb-1">Mon – Sat: 9am – 8pm</p>
            <p className="text-gray-500 mb-4">Sun: 9am – 6pm</p>
            <button className="
  border-2 border-amber-400 
  bg-transparent 
  text-amber-400 dark:text-amber-400 
  font-semibold 
  py-2 px-4 
  hover:bg-amber-400 hover:text-black 
  transition-all
  duration-300
  ease-in-out
">
  Choose a Stylist
</button>
          </motion.div>
        </div>

        {/* Location Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-300 mb-2">128 Winston St,</p>
          <p className="text-gray-300 mb-4">New York, NY 05120</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:underline font-medium"
          >
            <MapPin /> Get Directions
          </a>
        </motion.div>

        {/* Embedded Google Map */}
        <div className="w-full h-[400px] overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9821951292744!2d-74.00601508459335!3d40.71277597933124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316dfdd85d%3A0xe86ef7500d49cf8d!2s128%20Winston%20St%2C%20New%20York%2C%20NY%2010027!5e0!3m2!1sen!2sus!4v1653346048393!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

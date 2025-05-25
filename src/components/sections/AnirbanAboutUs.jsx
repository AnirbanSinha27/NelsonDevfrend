// components/AboutUs.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUp, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function AboutUs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 md:h-[550px] w-full rounded-lg overflow-hidden">
              <Image
                src="/about.png"
                alt="Nelson Hair Salon"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section - Centered with max-width */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Service beyond expectation
            </h2>
            
            <div className="space-y-6 text-gray-500 mb-10 max-w-lg">
              <p className="text-xl">
                Our Hair Salon is the place created for women who appreciate high quality, perfect service and first-class look.
              </p>
              <p className="text-xl">
                Welcome to Nelson!
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button className="bg-transparent hover:bg-transparent text-amber-400 border-2 border-amber-400 px-10 py-7 rounded-none font-bold text-lg group-hover:text-black transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  READ MORE ABOUT US
                  <ChevronRight className="ml-3 h-6 w-6" />
                </span>
                {/* Hover fill effect */}
                <span className="absolute inset-0 bg-amber-400 w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-400 hover:bg-amber-500 text-black p-4  shadow-xl z-50 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
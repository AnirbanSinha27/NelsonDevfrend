// components/Hero.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/herologo.jpeg"
          alt="Nelson Barber Shop"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="ml-[15%] max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="relative pb-4 mb-6" variants={itemVariants}>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
              >
                Feel your new <span className="text-amber-400">Nelson</span> style
              </motion.h1>
              {/* Animated underline */}
              <motion.div 
                className="absolute bottom-0 left-0 w-20 h-1 bg-gray-600 origin-left"
                variants={underlineVariants}
              />
            </motion.div>
            
            {/* Button */}
            <motion.div className="flex justify-start" variants={itemVariants}>
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-amber-400 hover:bg-amber-500 text-black text-lg px-8 py-6 rounded-none font-bold"
                  whilehover={{ scale: 1.05 }}
                  whiletap={{ scale: 0.95 }}
                >
                  View our services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
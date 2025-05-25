// components/Services.js
'use client';

import { motion } from 'framer-motion';
import { Scissors, Combine, Palette, SprayCan } from 'lucide-react';
import { Button } from '../ui/button';

export default function Services() {
  const services = [
    {
      title: "Haircut",
      description: "Any cut to your taste followed by a relaxing shampoo and style",
      icon: <Scissors className="h-12 w-12 text-amber-400" />
    },
    {
      title: "Styling",
      description: "Keep looking your best with our professional stylists and premium products",
      icon: <Combine className="h-12 w-12 text-amber-400" />
    },
    {
      title: "Color",
      description: "For premium results, we combine expert techniques with top-quality dyes",
      icon: <Palette className="h-12 w-12 text-amber-400" />
    },
    {
      title: "Treatment",
      description: "Looking to try something new with your hair? We offer specialized treatments",
      icon: <SprayCan className="h-12 w-12 text-amber-400" />
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8  hover:bg-gray-700 transition-all duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-700 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow text-center">{service.description}</p>
              <div className="mt-auto text-center">
                <Button 
                  variant="outline" 
                  className="text-amber-500 border-amber-500 hover:bg-amber-400 hover:text-black px-6 py-3 transition-colors"
                >
                  Read more
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    { src: '/gallery1.png', alt: 'Hair style 1' },
    { src: '/gallery2.png', alt: 'Hair style 2' },
    { src: '/gallery3.png', alt: 'Hair style 3' },
    { src: '/gallery4.png', alt: 'Hair style 4' },
    { src: '/gallery5.png', alt: 'Hair style 5' },
    { src: '/gallery6.png', alt: 'Hair style 6' },
  ];

  const HoverOverlay = () => (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      <motion.div
        className="border-2 border-white/50 rounded-full p-4 group-hover:border-amber-400 transition-all"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
      >
        <Search className="h-12 w-12 text-white/50 group-hover:text-amber-400" />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 w-full h-[600px]"> {/* Reduced height */}
        {/* Column 1 - Tall image */}
        <div className="relative group overflow-hidden h-full">
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
          <HoverOverlay />
        </div>

        {/* Column 2 - Two stacked images */}
        <div className="flex flex-col">
          {[1, 2].map((index) => (
            <div key={index} className="relative group overflow-hidden flex-1">
              <Image
                src={galleryImages[index].src}
                alt={galleryImages[index].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              <HoverOverlay />
            </div>
          ))}
        </div>

        {/* Column 3 - Tall image */}
        <div className="relative group overflow-hidden h-full">
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
          <HoverOverlay />
        </div>

        {/* Column 4 - Two stacked images */}
        <div className="flex flex-col">
          {[4, 5].map((index) => (
            <div key={index} className="relative group overflow-hidden flex-1">
              <Image
                src={galleryImages[index].src}
                alt={galleryImages[index].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              <HoverOverlay />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
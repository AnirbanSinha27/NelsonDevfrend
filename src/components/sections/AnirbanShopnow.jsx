'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ShopNow() {
  const products = [
    {
      id: 1,
      name: "Hair Shampoo",
      description: "Keep your hair looking clean and...",
      price: "$25.00 – $30.00",
      discount: "-43%",
      image: "/product1.png"
    },
    {
      id: 2,
      name: "Lavender Balm",
      description: "Moisture plus magic manages dryness, and...",
      originalPrice: "$21.00",
      price: "$12.00",
      image: "/product2.png"
    },
    {
      id: 3,
      name: "Hair Spray",
      description: "Tame your flyaways, add shine and...",
      price: "$23.00",
      image: "/product3.png"
    },
    {
      id: 4,
      name: "Oil For Colored Hair",
      description: "Closely resembles the natural sebum of...",
      price: "$45.00",
      image: "/product4.png"
    },
    {
      id: 5,
      name: "Luxury Hair Butter",
      description: "Deeply conditioning, this luxurious moisture butter...",
      price: "$25.00",
      image: "/product5.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop Now</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 overflow-hidden">
            {getVisibleProducts().map((product) => (
              <motion.div
                key={product.id}
                className="p-4 bg-gray-900 w-[300px] h-[500px] flex flex-col justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative group overflow-hidden mb-4 w-[240px] h-[240px] mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <motion.div
                      className="border-2 border-white/50 rounded-full p-3 group-hover:border-amber-400 transition-all"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
                    >
                      <Search className="h-6 w-6 text-white/50 group-hover:text-amber-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{product.description}</p>

                  <div className="flex justify-center items-center gap-2 mb-2">
                    {product.discount && (
                      <span className="bg-purple-700 text-black text-xs px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    )}
                    <p className="text-purple-700  text-sm">
                      {product.price}
                    </p>
                  </div>

                  {product.originalPrice && (
                    <div className="text-xs text-gray-500">
                      <p className="line-through">Original: {product.originalPrice}</p>
                      <p className="text-purple-700">Now: {product.price}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          {/* Navigation */}
<button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-2 rounded-full hover:bg-amber-500 transition-all z-10"
>
  <ChevronLeft className="h-6 w-6" />
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-2 rounded-full hover:bg-amber-500 transition-all z-10"
>
  <ChevronRight className="h-6 w-6" />
</button>
        </div>
      </div>
    </section>
  );
}

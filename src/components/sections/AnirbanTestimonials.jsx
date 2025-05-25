'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "I am happy that I have used some of your premium products and feel absolutely great. Your hairdressers are the best. Keep it up!",
      name: "Samantha Edison"
    },
    {
      id: 2,
      quote: "Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!",
      name: "Emma Graceland"
    },
    {
      id: 3,
      quote: "Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!",
      name: "Fiona Willson"
    },
    {
      id: 4,
      quote: "You don't get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.",
      name: "Helen Blackwood"
    },
    {
      id: 5,
      quote: "The best haircut I've ever had! The attention to detail is incredible and the service is top-notch.",
      name: "Michael Johnson"
    },
    {
      id: 6,
      quote: "I've been coming here for years and they never disappoint. Always leave feeling like a million bucks!",
      name: "Sarah Williams"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-950 p-8 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-400 text-6xl mb-4">"</div>
                <p className="text-gray-500 text-lg mb-6">{testimonial.quote}</p>
                <p className="text-cyan-900 font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows - Fixed Positioning */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-2 rounded-full hover:bg-amber-500 transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-2 rounded-full hover:bg-amber-500 transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
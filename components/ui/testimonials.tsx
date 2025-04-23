"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { contentConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonials = contentConfig.testimonials;
  const testimonialsIndex = Math.abs(page % testimonials.length);
  
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from businesses and individuals who have used our printing services
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-16 top-0 z-0 hidden lg:block">
            <Quote className="h-32 w-32 text-blue-100 dark:text-blue-900/20 rotate-180" />
          </div>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                    <Image
                      src={testimonials[testimonialsIndex].image}
                      alt={testimonials[testimonialsIndex].author}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-6">
                    "{testimonials[testimonialsIndex].quote}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[testimonialsIndex].author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[testimonialsIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center space-x-2 mt-10">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="sm" 
                className={`w-2 h-2 rounded-full p-0 ${
                  index === testimonialsIndex 
                    ? "bg-blue-600 dark:bg-blue-400" 
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setPage([index, index > testimonialsIndex ? 1 : -1])}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
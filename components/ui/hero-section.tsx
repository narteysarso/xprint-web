"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentConfig } from "@/config/site";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CITIES } from "@/lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function HeroSection() {
  const [location, setLocation] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const checkAvailability = () => {
    if (!location.trim()) {
      setAvailabilityMessage("Please enter a city name.");
    } else {
      const isExactMatch = CITIES.some(city => city.toLowerCase() === location.toLowerCase());
      const isPartialMatch = CITIES.some(city => city.toLowerCase().includes(location.toLowerCase()));

      if (isExactMatch) {
        setAvailabilityMessage("Service is available in your area!");
      } else if (isPartialMatch) {
        setAvailabilityMessage("Did you mean one of these cities? " + 
          CITIES.filter(city => city.toLowerCase().includes(location.toLowerCase())).join(", "));
      } else {
        setAvailabilityMessage("Sorry, we don't service your area yet.");
      }
    }
    setIsPopoverOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-blue-100 dark:bg-blue-900/20 transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-100/50 to-transparent dark:from-blue-900/10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            {contentConfig.heroSection.title}
          </motion.h1>
          
          <motion.p 
            className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            {contentConfig.heroSection.subtitle}
          </motion.p>
          
          <motion.div 
            className="mt-10 w-full max-w-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Enter your location" 
                className="pl-10 pr-20 py-6 text-base"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkAvailability();
                  }
                }}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button size="sm" variant="ghost" onClick={checkAvailability}>
                      <Search className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p>{availabilityMessage}</p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { contentConfig } from "@/config/site";
import { DivideIcon as LucideIcon } from "lucide-react";
import { Search, Upload, ShoppingCart, Package, Store, List, CheckCircle, DollarSign } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  upload: Upload,
  "shopping-cart": ShoppingCart,
  package: Package,
  store: Store,
  list: List,
  "check-circle": CheckCircle,
  "dollar-sign": DollarSign,
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HowItWorks() {
  const { customer, vendor } = contentConfig.howItWorks;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, convenient printing services for everyone
          </p>
        </div>

        {/* For Customers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-24"
        >
          <motion.h3 
            variants={fadeIn}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            {customer.title}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customer.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                      {Icon && <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="text-center text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  
                  {index < customer.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* For Vendors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h3 
            variants={fadeIn}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            {vendor.title}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendor.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              
              return (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
                      {Icon && <Icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="text-center text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  
                  {index < vendor.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Printer, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your printing experience?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of customers and print shops on our platform. Whether you need print services or want to grow your print business, Xprint has you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/signup">
                  Create an Account
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-blue-700/20"
                asChild
              >
                <Link href="/vendor/signup">
                  Register as a Vendor
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="mb-4 p-3 bg-white/20 w-fit rounded-lg">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1,200+</h3>
              <p className="text-blue-100">Print shops nationwide</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="mb-4 p-3 bg-white/20 w-fit rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">25,000+</h3>
              <p className="text-blue-100">Satisfied customers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl sm:col-span-2">
              <div className="mb-4 p-3 bg-white/20 w-fit rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">500,000+</h3>
              <p className="text-blue-100">Print orders completed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
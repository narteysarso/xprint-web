"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contentConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { HowItWorks as HowItWorksSection } from "@/components/ui/how-it-works";

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

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              How Xprint Works
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              A simple, streamlined process for all your printing needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Main How It Works section (reused component) */}
      <HowItWorksSection />
      
      {/* Detailed Process for Customers */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Detailed Process for Customers
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about ordering prints through Xprint
            </p>
          </div>
          
          <motion.div 
            className="space-y-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Create an Account
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Sign up for a free Xprint account using your email or social media accounts. This will allow you to track orders, save favorite printers, and access your printing history.
                </p>
                <Button asChild>
                  <Link href="/signup">
                    Create an Account
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Creating an account"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Finding a printer"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
              </div>
              <div>
                <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Find a Printer Near You
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Use our location-based search to find print shops in your area. Filter results based on services offered, ratings, price range, and distance to find the perfect match for your needs.
                </p>
                <Button asChild>
                  <Link href="/customer/search">
                    Find a Printer
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Upload Your Files
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Upload your design files directly through the platform. We support various file formats including PDF, JPEG, PNG, and more. Add specific instructions for the printer if needed.
                </p>
                <Button asChild>
                  <Link href="/customer/upload">
                    Learn About File Uploads
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Uploading files"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Placing an order"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-lg -z-10"></div>
              </div>
              <div>
                <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Place Your Order
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Review your order details, select delivery or pickup options, and complete your payment securely through our platform. You'll receive an immediate confirmation of your order.
                </p>
                <Button asChild>
                  <Link href="/customer/search">
                    Start an Order
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step 5
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Track Your Order
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Stay updated on your order's progress in real-time. Communicate directly with the printer if you have questions or need to make changes to your order.
                </p>
                <Button asChild>
                  <Link href="/customer/orders">
                    View Order Tracking
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/7605878/pexels-photo-7605878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Tracking an order"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Get answers to common questions about the Xprint process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {contentConfig.faqs.slice(0, 4).map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/faqs">
                View All FAQs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contentConfig } from "@/config/site";

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

export default function AboutPage() {
  const { mission, vision, values, team } = contentConfig.aboutUs;
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              About Xprint
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              We're on a mission to revolutionize the printing industry by connecting customers with local print shops through our innovative platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {mission}
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {vision}
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Printing process"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The guiding principles that drive everything we do at Xprint
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The talented people behind Xprint's success
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-300">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
              <div className="text-gray-300">Print Shops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">25,000+</div>
              <div className="text-gray-300">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500,000+</div>
              <div className="text-gray-300">Orders Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
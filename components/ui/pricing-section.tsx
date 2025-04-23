"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { contentConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export function PricingSection() {
  const { customer, vendor } = contentConfig.pricingPlans;
  
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you or your business
          </p>
        </div>
        
        <Tabs defaultValue="customer" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="customer">For Customers</TabsTrigger>
            <TabsTrigger value="vendor">For Vendors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="customer">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.h3 
                variants={fadeIn}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                {customer.title}
              </motion.h3>
              <motion.p 
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {customer.description}
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {customer.plans.map((plan, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className={`h-full ${plan.recommended ? 'border-blue-400 dark:border-blue-500 shadow-xl' : ''}`}>
                    {plan.recommended && (
                      <div className="bg-blue-500 text-white text-sm font-medium py-1 px-4 rounded-t-lg text-center">
                        Recommended
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.title}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={plan.recommended ? "default" : "outline"}
                        asChild
                      >
                        <Link href={plan.recommended ? "/signup" : "/"}>
                          {plan.recommended ? "Get Started" : "Learn More"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="vendor">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.h3 
                variants={fadeIn}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                {vendor.title}
              </motion.h3>
              <motion.p 
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {vendor.description}
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {vendor.plans.map((plan, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className={`h-full ${plan.recommended ? 'border-orange-400 dark:border-orange-500 shadow-xl' : ''}`}>
                    {plan.recommended && (
                      <div className="bg-orange-500 text-white text-sm font-medium py-1 px-4 rounded-t-lg text-center">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.title}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Plus {plan.commission} commission
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant={plan.recommended ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/vendor/signup">
                          {plan.recommended ? "Get Started" : "Choose Plan"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
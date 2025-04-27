"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { contentConfig } from "@/config/site";
import { PRINTING_SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
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

export function ServicesSection() {
  // Get the first 4 services for the featured section
  const featuredServices = PRINTING_SERVICES.slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Professional Printing Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From document printing to custom merchandising, find the perfect print solution for your needs
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {service.variants.map((variant, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{variant.name}</span>
                        <span className="font-medium">{variant.priceRange}</span>
                      </li>
                    ))}
                  </ul> */}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/services/${service.id}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
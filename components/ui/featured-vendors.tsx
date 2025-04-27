"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, ChevronRight } from "lucide-react";
import { FEATURED_VENDORS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export function FeaturedVendors() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
            Featured Print Shops
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover top-rated local print shops in our network
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {FEATURED_VENDORS.map((vendor) => (
            <motion.div key={vendor.id} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={vendor.image}
                    alt={vendor.businessName}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center text-white mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{vendor.rating}</span>
                      <span className="text-xs ml-1">({vendor.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-semibold">{vendor.businessName}</h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{vendor.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {vendor.services.map((service, index) => (
                      <Badge key={index} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/vendors/${vendor.id}`}>
                      <span className="flex items-center">
                        View Profile <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/customer/search">
              Find More Print Shops
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
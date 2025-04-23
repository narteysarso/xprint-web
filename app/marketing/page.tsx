import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { FeaturedVendors } from "@/components/ui/featured-vendors";
import { Testimonials } from "@/components/ui/testimonials";
import { PricingSection } from "@/components/ui/pricing-section";
import { CTASection } from "@/components/ui/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      {/* <FeaturedVendors /> */}
      <Testimonials />
      {/* <PricingSection /> */}
      <CTASection />
    </>
  );
}
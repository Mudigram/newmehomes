import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewMe Independent Living | Home Away From Home",
  description: "Safe, supportive, and affordable home environment for independent seniors, veterans, and adults in transition. Drug-free living with 24/7 surveillance.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}

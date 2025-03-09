
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import CodeSection from "@/components/CodeSection";
import BlogSection from "@/components/BlogSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const controls = useAnimation();

  // Trigger animation when page loads
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });

    // Check for user's preferred theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }, [controls]);

  // Smooth scroll to section when clicking on nav links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen overflow-hidden px-3 md:px-0"
    >
      <Header />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <AnalyticsSection />
        <CodeSection />
        <BlogSection />
        <PartnersSection />
        <PricingSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;

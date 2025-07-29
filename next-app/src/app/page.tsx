import HeroSection from "./components/home/HeroSection";
import PhilosophySection from "./components/home/PhilosophySection";
import AboutOwnerSection from "@/app/components/home/AboutOwnerSection";
import TestimonialsCarousel from "@/app/components/home/TestimonialsCarousel";
import OfficePreviewSection from "@/app/components/home/OfficePreviewSection";
import QuoteSection from "@/app/components/home/QuoteSection";
import StatsSection from "@/app/components/home/StatsSection";
import CompaniesCarousel from "@/app/components/home/CompaniesCarousel";
import Footer from "@/app/components/Footer";
import ServicesSection from "@/app/components/services/ServicesSection";
import BlogPreviewSection from "@/app/components/home/BlogPreviewSection";

export default function Home() {
  return (
      <main>
          <HeroSection />
          <PhilosophySection />
          <AboutOwnerSection />
          <ServicesSection preview/>
          <QuoteSection />
          <OfficePreviewSection />
          <TestimonialsCarousel />
          <StatsSection />
          <BlogPreviewSection />
          <CompaniesCarousel />
          <Footer />
      </main>
  );
}

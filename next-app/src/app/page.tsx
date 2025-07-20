import HeroSection from "./components/home/HeroSection";
import PhilosophySection from "./components/home/PhilosophySection";
import AboutOwnerSection from "@/app/components/home/AboutOwnerSection";
import TestimonialsCarousel from "@/app/components/home/TestimonialsCarousel";
import SocialSection from "@/app/components/home/SocialSection";
import OfficePreviewSection from "@/app/components/home/OfficePreviewSection";
import QuoteSection from "@/app/components/home/QuoteSection";
import StatsSection from "@/app/components/home/StatsSection";
import MediaPreviewSection from "@/app/components/home/MediaPreviewSection";
import CompaniesCarousel from "@/app/components/home/CompaniesCarousel";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <main>
          <HeroSection />
          <SocialSection />
          <PhilosophySection />
          <AboutOwnerSection />
          <StatsSection />
          <CompaniesCarousel />
          <TestimonialsCarousel />
          <OfficePreviewSection />
          <QuoteSection />
          <MediaPreviewSection />
          <Footer />
      </main>
  );
}

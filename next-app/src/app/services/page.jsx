import IntroSection from "../components/services/IntroSection";
import FirstSession from "../components/services/FirstSession";
import DietApproach from "../components/services/DietApproach/DietApproach";
import NlpSection from "../components/services/NlpSection";
import ServicesSection from "../components/services/ServicesSection";
import OnlineSessions from "../components/services/OnlineSession";
import Footer from "../components/Footer";


export default function ServicesPage() {
  return (
    <main className="w-full pt-[10%]">
      <IntroSection />

      <ServicesSection />

      {/*<NlpSection />*/}

      <FirstSession />

      <DietApproach />

      <OnlineSessions />

      <Footer />

    </main>
  );
}

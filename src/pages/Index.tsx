import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InternalSystemsSection from "@/components/InternalSystemsSection";
import AILeadsSection from "@/components/AILeadsSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import CaseStudySection from "@/components/CaseStudySection";
import AutomationDevicesSection from "@/components/AutomationDevicesSection";
 import FreezerMonitorSection from "@/components/FreezerMonitorSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import StatsBarSection from "@/components/StatsBarSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InternalSystemsSection />
        <StatsBarSection />
        <AILeadsSection />
        <CaseStudySection />
        <InfiniteMarquee />
         <FreezerMonitorSection />
        <AutomationDevicesSection />
        <ServicesSection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

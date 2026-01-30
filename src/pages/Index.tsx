import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InternalSystemsSection from "@/components/InternalSystemsSection";
import DataUnificationSection from "@/components/DataUnificationSection";
import AILeadsSection from "@/components/AILeadsSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import CaseStudySection from "@/components/CaseStudySection";
import BusinessSectorsSection from "@/components/BusinessSectorsSection";
import CompanyInHandSection from "@/components/CompanyInHandSection";
import AutomationDevicesSection from "@/components/AutomationDevicesSection";
import FreezerMonitorSection from "@/components/FreezerMonitorSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InternalSystemsSection />
        <DataUnificationSection />
        <CaseStudySection />
        <AILeadsSection />
        <InfiniteMarquee />
        <BusinessSectorsSection />
        <CompanyInHandSection />
        <AutomationDevicesSection />
        <FreezerMonitorSection />
        <ServicesSection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

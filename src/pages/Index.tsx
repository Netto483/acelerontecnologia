import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InternalSystemsSection from "@/components/InternalSystemsSection";
import BusinessSectorsSection from "@/components/BusinessSectorsSection";
import CompanyInHandSection from "@/components/CompanyInHandSection";
import AutomationDevicesSection from "@/components/AutomationDevicesSection";
import FreezerMonitorSection from "@/components/FreezerMonitorSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InternalSystemsSection />
        <BusinessSectorsSection />
        <CompanyInHandSection />
        <AutomationDevicesSection />
        <FreezerMonitorSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

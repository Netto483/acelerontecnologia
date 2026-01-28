import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InternalSystemsSection from "@/components/InternalSystemsSection";
import CompanyInHandSection from "@/components/CompanyInHandSection";
import AutomationDevicesSection from "@/components/AutomationDevicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <InternalSystemsSection />
        <CompanyInHandSection />
        <AutomationDevicesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

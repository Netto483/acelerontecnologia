import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LazySection from "@/components/LazySection";
import Footer from "@/components/Footer";

// Lazy load below-fold sections
const InternalSystemsSection = lazy(() => import("@/components/InternalSystemsSection"));
const StatsBarSection = lazy(() => import("@/components/StatsBarSection"));
const AILeadsSection = lazy(() => import("@/components/AILeadsSection"));
const CaseStudySection = lazy(() => import("@/components/CaseStudySection"));
const InfiniteMarquee = lazy(() => import("@/components/InfiniteMarquee"));
const StrategicSitesSection = lazy(() => import("@/components/StrategicSitesSection"));
const FreezerMonitorSection = lazy(() => import("@/components/FreezerMonitorSection"));
const AutomationDevicesSection = lazy(() => import("@/components/AutomationDevicesSection"));
const SensorStatsSection = lazy(() => import("@/components/SensorStatsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactFormSection = lazy(() => import("@/components/ContactFormSection"));

const SectionFallback = () => <div style={{ minHeight: "200px" }} />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        
        <LazySection fallbackHeight="500px">
          <Suspense fallback={<SectionFallback />}>
            <InternalSystemsSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="98px">
          <Suspense fallback={<SectionFallback />}>
            <StatsBarSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="500px">
          <Suspense fallback={<SectionFallback />}>
            <AILeadsSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="500px">
          <Suspense fallback={<SectionFallback />}>
            <CaseStudySection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="98px">
          <Suspense fallback={<SectionFallback />}>
            <InfiniteMarquee />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="500px">
          <Suspense fallback={<SectionFallback />}>
            <StrategicSitesSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="320px">
          <Suspense fallback={<SectionFallback />}>
            <FreezerMonitorSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="450px">
          <Suspense fallback={<SectionFallback />}>
            <AutomationDevicesSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="98px">
          <Suspense fallback={<SectionFallback />}>
            <SensorStatsSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="500px">
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="600px">
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </LazySection>

        <LazySection fallbackHeight="600px">
          <Suspense fallback={<SectionFallback />}>
            <ContactFormSection />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import strategicSiteExample from "@/assets/strategic-sites-section.png";

const StrategicSitesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[500px] md:min-h-0 md:py-20 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Mobile: Dark background */}
      <div className="absolute inset-0 bg-[#171417] md:hidden" />
      
      {/* Desktop: Normal background */}
      <div className="absolute inset-0 bg-[#F5F4F3] hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-12 md:py-0">
          {/* Content - Left side */}
          <div className="flex-1 text-left">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Sites Estratégicos
            </span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white md:text-gray-900 mt-4 mb-4 md:mb-6">
              Sites que convertem visitantes em{" "}
              <span className="text-[#EB1614]">clientes</span>
            </h2>
            <p className="text-white/80 md:text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Desenvolvemos sites estratégicos focados em resultados. Cada elemento é pensado 
              para guiar o visitante até a conversão, utilizando técnicas avançadas de UX/UI, 
              copywriting persuasivo e otimização para SEO.
            </p>

            {/* Mobile image - above button */}
            <div className="md:hidden mb-6">
              <img 
                src={strategicSiteExample} 
                alt="Site estratégico com dashboard de conversão" 
                className="w-full max-w-md mx-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Link style button */}
            <a 
              href="/sites-estrategicos"
              className="inline-flex items-center gap-2 text-white md:text-gray-900 font-semibold text-base md:text-lg group hover:text-[#EB1614] transition-colors relative cursor-pointer"
            >
              Quero um site estratégico para minha empresa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white md:bg-gray-900 group-hover:bg-[#EB1614] transition-colors" />
            </a>
          </div>

          {/* Image - Right side (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center lg:justify-end">
            <img 
              src={strategicSiteExample} 
              alt="Site estratégico com dashboard de conversão" 
              className="w-auto max-w-full max-h-[600px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSitesSection;

import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import crmDashboard from "@/assets/crm-dashboard.png";

const StrategicSitesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 bg-[#F5F4F3] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left side */}
          <div className="flex-1 text-left">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Sites Estratégicos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Sites que convertem visitantes em{" "}
              <span className="text-[#EB1614]">clientes</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Desenvolvemos sites estratégicos focados em resultados. Cada elemento é pensado 
              para guiar o visitante até a conversão, utilizando técnicas avançadas de UX/UI, 
              copywriting persuasivo e otimização para SEO.
            </p>

            {/* Link style button */}
            <a 
              href="/sites-estrategicos"
              className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group hover:text-[#EB1614] transition-colors relative cursor-pointer"
            >
              Quero um site estratégico para minha empresa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 group-hover:bg-[#EB1614] transition-colors" />
            </a>
          </div>

          {/* Image - Right side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src={crmDashboard} 
              alt="Site estratégico com dashboard de conversão" 
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSitesSection;

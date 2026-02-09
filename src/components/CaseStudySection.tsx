import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import institutoMecaImage from "@/assets/instituto-meca.png";

const CaseStudySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="case"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[500px] md:min-h-0 md:pt-32 md:pb-20 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Mobile: Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${institutoMecaImage})` }}
      />
      <div className="absolute inset-0 bg-black/70 md:hidden" />
      
      {/* Desktop: Normal background */}
      <div className="absolute inset-0 bg-[#F5F4F3] hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-12 md:py-0">
          {/* Image - Left side (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[4/3] rounded-2xl bg-muted/50 border border-border overflow-hidden">
                <img 
                  src={institutoMecaImage} 
                  alt="Instituto MECA - Medicina Estética e Capilar Avançada"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="text-left flex-1 max-w-xl">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Case de Sucesso
            </span>
            <h2 className="font-subtitle text-xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 md:mb-6 leading-tight text-white md:text-gray-900">
              O Instituto Meca economizou mais de{" "}
              <span className="text-[#EB1614]">R$ 30.000</span>{" "}
              por ano após implementar IA no atendimento
            </h2>
            <p className="text-white/80 md:text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              Descubra como a Inteligência Artificial pode aumentar a produtividade 
              da sua operação e reduzir custos.
            </p>

            {/* Link style button */}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-white md:text-gray-900 font-thin text-base md:text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero resultados como esse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white md:bg-gray-900 group-hover:bg-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

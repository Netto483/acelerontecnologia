import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import institutoMecaImage from "@/assets/instituto-meca.png";

const CaseStudySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`pt-32 pb-20 px-6 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image - Left side */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[4/3] rounded-2xl bg-muted/50 border border-border overflow-hidden">
                <img 
                  src={institutoMecaImage} 
                  alt="Instituto MECA - Medicina Estética e Capilar Avançada"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="text-left flex-1 max-w-xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Case de Sucesso
            </span>
            <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-6 leading-tight">
              O Instituto Meca economizou mais de{" "}
              <span className="text-gradient-accent">R$ 30.000</span>{" "}
              por ano após implementar IA no atendimento
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
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
              className="inline-flex items-center gap-2 text-foreground font-thin text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero resultados como esse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

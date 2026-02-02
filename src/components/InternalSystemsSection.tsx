import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import crmDashboard from "@/assets/crm-dashboard.png";
import useScrollReveal from "@/hooks/useScrollReveal";

const InternalSystemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto" style={{ maxWidth: '1000px', maxHeight: '366px' }}>
        <div className="flex gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Criamos o seu sistema interno{' '}
              <span className="text-primary font-thin">100% personalizado</span>{' '}
              às suas necessidades.
            </h2>
            
            <p className="text-muted-foreground text-base leading-relaxed">
              Desenvolvemos soluções sob medida que se adaptam perfeitamente aos processos 
              da sua empresa, aumentando a eficiência e reduzindo custos operacionais.
            </p>

            <Button 
              variant="hero" 
              className="group font-thin"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Analisar Oportunidade
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0" style={{ width: '540px', height: '336px' }}>
            <img 
              src={crmDashboard} 
              alt="Dashboard CRM personalizado" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalSystemsSection;

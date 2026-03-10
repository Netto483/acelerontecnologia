import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import crmDashboard from "@/assets/crm-dashboard.png?format=webp&quality=80";
import useScrollReveal from "@/hooks/useScrollReveal";

const DataUnificationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`pt-24 pb-12 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: '#191518' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1000px', maxHeight: '366px' }}>
        <div className="flex gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0" style={{ width: '540px', height: '336px' }}>
            <img 
              src={crmDashboard} 
              alt="Sistema de gestão unificado" 
              width={540}
              height={336}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-4 flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight text-white">
              Todos os dados da sua empresa{' '}
              <span className="text-primary font-thin">em um só lugar</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Dashboard's completos e atualizados em tempo real.
            </p>
            <Button variant="hero" className="group font-thin">
              Saber Mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataUnificationSection;

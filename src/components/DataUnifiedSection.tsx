import useScrollReveal from "@/hooks/useScrollReveal";
import { LayoutDashboard, RefreshCw, Network, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DataUnifiedSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    { icon: LayoutDashboard, text: "Um único painel com todas as informações da empresa" },
    { icon: RefreshCw, text: "Dados atualizados em tempo real, sem versões diferentes" },
    { icon: Network, text: "Processos integrados entre setores" },
    { icon: CheckCircle, text: "Menos tarefas manuais e menos erros operacionais" },
    { icon: Zap, text: "Decisões mais rápidas com dados confiáveis" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#191518" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left side - Titles */}
          <div className="flex-1">
            {/* Small title */}
            <span className="text-[#EB1614] text-sm md:text-base font-medium mb-3 block">
              Unificação de dados
            </span>
            
            {/* Main Title */}
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Tudo em um só lugar
            </h2>

            {/* CTA Button */}
            <Button 
              variant="default"
              className="bg-[#EB1614] hover:bg-[#EB1614]/90 text-white font-thin text-sm md:text-base group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descrever minha necessidade
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Text + List */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              Centralize informações, processos e dados em um único sistema. Com tudo integrado, sua empresa ganha mais controle, reduz erros, elimina retrabalho e acelera a tomada de decisões.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-white/80 text-sm md:text-base"
                >
                  <benefit.icon className="w-5 h-5 text-[#EB1614] mt-0.5 flex-shrink-0" />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataUnifiedSection;

import { Cog, Zap, BarChart3, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const AIProcessAutomationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    { icon: Cog, text: "Automatize do comercial ao financeiro" },
    { icon: Zap, text: "Elimine processos manuais e repetitivos" },
    { icon: BarChart3, text: "Opere com eficiência total em todos os setores" },
    { icon: Workflow, text: "Fluxos inteligentes do atendimento à operação" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-20 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#F5F4F3" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1">
            <span className="text-sm mb-2 block" style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400, color: "#EB1614" }}>
              Chega de tarefas manuais
            </span>
            <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-8">
              Automação de processos
            </h2>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                >
                  <feature.icon className="w-5 h-5 text-[#EB1614] flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              className="bg-[#EB1614] hover:bg-[#EB1614]/90 text-white font-thin text-sm md:text-base group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero automatizar processos
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Text */}
          <div className="flex-1">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Automatize todos os setores possíveis da sua empresa e pare de depender de processos manuais. Comece a operar com eficiência total. Do comercial ao financeiro, do atendimento à operação.
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Atividades que antes consumiam tempo do time passam a acontecer de forma automática, com mais agilidade e menos erros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProcessAutomationSection;

import { Bot, User } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const AIVsHumanSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const comparisons = [
    {
      category: "Tempo de resposta",
      ai: "Imediato",
      human: "Varia (pode demorar minutos ou horas)",
    },
    {
      category: "Custo mensal",
      ai: "A partir de R$999,00(pagamento único)",
      human: "R$2.000,00 + riscos",
    },
    {
      category: "Disponibilidade",
      ai: "24 horas, 7 dias por semana",
      human: "Horário comercial",
    },
    {
      category: "Capacidade de atendimento",
      ai: "Centenas de clientes ao mesmo tempo",
      human: "1 cliente por vez",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#191518" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center mb-12">
          Inteligência Artificial <span className="text-[#EB1614] font-thin">Vs.</span> Humano
        </h2>

        {/* Comparison Table */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/5">
            <div className="p-4 md:p-6 text-white/60 text-sm md:text-base font-medium">
              Categoria
            </div>
            <div className="p-4 md:p-6 text-center border-l border-white/10">
              <div className="flex items-center justify-center gap-2 text-[#EB1614] font-semibold text-sm md:text-base">
                <Bot className="w-5 h-5" />
                <span>IA</span>
              </div>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-white/10">
              <div className="flex items-center justify-center gap-2 text-white/80 font-semibold text-sm md:text-base">
                <User className="w-5 h-5" />
                <span>Humano</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
            >
              <div className="p-4 md:p-6 text-white/80 text-sm md:text-base border-t border-white/10">
                {item.category}
              </div>
              <div className="p-4 md:p-6 text-center text-[#EB1614] text-sm md:text-base border-t border-l border-white/10 font-medium">
                {item.ai}
              </div>
              <div className="p-4 md:p-6 text-center text-white/60 text-sm md:text-base border-t border-l border-white/10">
                {item.human}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVsHumanSection;

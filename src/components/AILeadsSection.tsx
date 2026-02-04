import { ArrowRight, Bot, MessageSquare, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const AILeadsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left side */}
          <div className="text-left flex-1 max-w-2xl">
            <span className="text-[#1800AD] font-semibold text-sm uppercase tracking-wider">
              Inteligência Artificial
            </span>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Automatize o atendimento dos leads com{" "}
              <span className="text-[#1800AD]">Inteligência Artificial</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Utilize inteligência artificial para qualificar, nutrir e converter 
              seus leads automaticamente, 24 horas por dia, 7 dias por semana.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span>Respostas instantâneas e personalizadas</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span>Qualificação automática de leads</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span>Integração com WhatsApp e outras plataformas</span>
              </li>
            </ul>

            {/* Link style button */}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-foreground font-thin text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero automatizar meu atendimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Visual - Right side: WhatsApp-style chat */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              {/* User message - right aligned */}
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] text-gray-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md">
                  <p className="text-base">Olá</p>
                  <span className="text-xs text-gray-500 float-right mt-1 ml-2">10:30</span>
                </div>
              </div>
              
              {/* Bot response - left aligned */}
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[90%] shadow-md border border-gray-100">
                  <p className="text-base">Olá, sou a Ana, atendente da Clínica Mais Cabelo. Como posso te ajudar?😁</p>
                  <span className="text-xs text-gray-500 float-right mt-1 ml-2">10:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILeadsSection;

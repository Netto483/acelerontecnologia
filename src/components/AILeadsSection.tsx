import { ArrowRight, Bot, MessageSquare, Zap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import automacoesCard from "@/assets/automacoes-ia-card.png";

const AILeadsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 md:py-20 px-4 md:px-6 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Content - Left side */}
          <div className="text-left flex-1 max-w-2xl">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Inteligência Artificial
            </span>
            <h2 className="font-subtitle text-2xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Automatize o atendimento dos leads com{" "}
              <span className="text-[#EB1614] font-thin">Inteligência Artificial</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
              Utilize inteligência artificial para qualificar, nutrir e converter 
              seus leads automaticamente, 24 horas por dia, 7 dias por semana.
            </p>

            {/* Features list */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <li className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                <MessageSquare className="w-5 h-5 text-[#EB1614] flex-shrink-0" />
                <span>Respostas instantâneas e personalizadas</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                <Bot className="w-5 h-5 text-[#EB1614] flex-shrink-0" />
                <span>Qualificação automática de leads</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                <Zap className="w-5 h-5 text-[#EB1614] flex-shrink-0" />
                <span>Integração com WhatsApp e outras plataformas</span>
              </li>
            </ul>

            {/* Mobile: WhatsApp chat (same as desktop) */}
            <div className="md:hidden mb-6">
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] text-gray-900 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                    <p className="text-base">Olá</p>
                    <span className="text-xs text-gray-500 float-right mt-1 ml-3">10:30</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg border border-gray-100">
                    <p className="text-base">Olá, sou a Ana, atendente da Clínica Mais Cabelo. Como posso te ajudar?😁</p>
                    <span className="text-xs text-gray-500 float-right mt-1 ml-3">10:30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Link style button */}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-foreground font-thin text-base md:text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero automatizar meu atendimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Visual - Right side: WhatsApp-style chat (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center lg:justify-end w-full">
            <div className="flex flex-col gap-4 md:gap-5 w-full max-w-md">
              {/* User message - right aligned */}
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] text-gray-900 px-4 md:px-5 py-2 md:py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                  <p className="text-base md:text-lg">Olá</p>
                  <span className="text-xs md:text-sm text-gray-500 float-right mt-1 ml-3">10:30</span>
                </div>
              </div>
              
              {/* Bot response - left aligned */}
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 px-4 md:px-5 py-2 md:py-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg border border-gray-100">
                  <p className="text-base md:text-lg">Olá, sou a Ana, atendente da Clínica Mais Cabelo. Como posso te ajudar?😁</p>
                  <span className="text-xs md:text-sm text-gray-500 float-right mt-1 ml-3">10:30</span>
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

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
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Inteligência Artificial
            </span>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Automatize o atendimento dos leads com{" "}
              <span className="text-gradient-accent">I.A</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Utilize inteligência artificial para qualificar, nutrir e converter 
              seus leads automaticamente, 24 horas por dia, 7 dias por semana.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <span>Respostas instantâneas e personalizadas</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-secondary" />
                </div>
                <span>Qualificação automática de leads</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span>Integração com WhatsApp e outras plataformas</span>
              </li>
            </ul>

            {/* Link style button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-foreground font-semibold text-lg group hover:text-primary transition-colors relative"
            >
              Quero automatizar meu atendimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Visual - Right side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/20 animate-pulse-slow" />
              </div>
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-secondary/20 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-primary/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Bot className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center animate-float">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute bottom-8 left-4 w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILeadsSection;

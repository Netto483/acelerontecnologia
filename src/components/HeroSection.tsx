import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Soluções de Hardware & Software
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Criamos{' '}
          <span className="text-gradient-primary">sites</span>,{' '}
          <span className="text-gradient-accent">sistemas internos</span>{' '}
          e{' '}
          <span className="relative inline-block">
            <span className="text-gradient-primary">Automações</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>{' '}
          estratégicas para o seu negócio
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Transformamos sua visão em realidade digital com tecnologia de ponta e 
          inteligência artificial para impulsionar resultados.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <Button variant="hero" className="group">
            Começar Projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="heroOutline">
            Ver Portfólio
          </Button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Anos de Mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aoIcon from "@/assets/ao-icon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-[hsl(220,30%,8%)]">
      {/* Animated tech background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(195,100%,50%,0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(195,100%,50%,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Animated floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse-slow opacity-80" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-slow opacity-70" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse-slow opacity-60" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(356,85%,57%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(356,85%,57%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(356,85%,57%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(195,100%,50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(195,100%,50%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(195,100%,50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGrad1)" strokeWidth="1" className="animate-pulse-slow" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </svg>
        
        {/* Circuit-like patterns */}
        <div className="absolute top-20 left-10 w-40 h-40 border border-secondary/10 rounded-lg rotate-45 animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary/10 rounded-lg rotate-12 animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 left-20 w-24 h-24 border border-secondary/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-3 py-1.5 mb-8 animate-fade-in">
          <img src={aoIcon} alt="AO" className="h-5 w-auto" />
        </div>

        {/* Main Headline */}
        <h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in text-white"
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
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in"
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
      </div>
    </section>
  );
};

export default HeroSection;

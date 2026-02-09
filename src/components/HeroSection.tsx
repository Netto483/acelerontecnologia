import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center right',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-left">
          {/* Main Headline */}
          <h1 
            className="font-subtitle text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in text-white"
            style={{ animationDelay: '0.1s' }}
          >
            Criamos{' '}
            <span className="font-thin">sites</span>,{' '}
            <span className="font-thin">sistemas internos</span>{' '}
            e{' '}
            <span className="relative inline-block">
              <span className="font-thin">Automações</span>
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            estratégicas para o seu negócio
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Unifique dados espalhados | Automatize tarefas repetitivas | Posicione-se estrategicamente.
          </p>

          {/* CTA Button */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              variant="hero" 
              className="group font-thin text-sm md:text-base"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Falar com Especialista
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

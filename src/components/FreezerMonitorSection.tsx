import { useEffect, useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import freezerBackground from "@/assets/freezer-background.png";

const FreezerMonitorSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && bgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        bgRef.current.style.transform = `translateY(${-rect.top * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`min-h-[320px] md:h-[320px] relative flex items-center overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Parallax Background image */}
      <div 
        ref={bgRef}
        className="absolute inset-[-50px] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${freezerBackground})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10 py-8 md:py-0">
        {/* Small label */}
        <span className="text-[#EB1614] font-semibold text-xs uppercase tracking-wider mb-3 block">
          Automação eletrônica
        </span>
        
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
          {/* Title - Left side */}
          <div className="flex-1">
            <h2 className="font-display text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Para <span className="font-thin">Supermercados</span>,{" "}
              <span className="font-thin">Frigoríficos</span> e{" "}
              <span className="font-thin">Distribuidoras alimentícias</span>
            </h2>
          </div>
          
          {/* Vertical divider */}
          <div className="hidden md:block w-px h-24 bg-white/30" />
          
          {/* Text - Right side */}
          <div className="flex-1">
            <p className="font-subtitle text-sm md:text-base text-gray-200 leading-relaxed font-light">
              Freezers não escolhem horário para quebrar. Durante a noite, um simples desligamento pode destruir todo o estoque congelado antes do primeiro funcionário chegar. Quando o problema é percebido, o prejuízo já está feito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreezerMonitorSection;

import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const AutomationDevicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header - aligned left */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Hardware & IoT
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Automatize sua empresa com{" "}
            <span className="text-gradient-accent">dispositivos personalizados</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Desenvolvemos hardware especializado e soluções IoT que transformam 
            a maneira como sua empresa opera.
          </p>

          {/* Link style button */}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-foreground font-semibold text-lg group hover:text-primary transition-colors relative"
          >
            Quero um dispositivo personalizado
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground group-hover:bg-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AutomationDevicesSection;

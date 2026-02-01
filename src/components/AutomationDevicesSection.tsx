import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import iotDevice from "@/assets/iot-device.png";

const AutomationDevicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 relative overflow-hidden transition-all duration-700 bg-[#171417] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Dispositivos Eletrônicos Personalizados
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left side */}
          <div className="text-left flex-1 max-w-2xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Para Distribuidoras e Supermercados
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 text-white">
              Automatize sua empresa com{" "}
              <span className="text-gradient-accent">dispositivos personalizados</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Desenvolvemos hardware especializado e soluções IoT que transformam 
              a maneira como sua empresa opera.
            </p>

            {/* Link style button */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-white font-thin text-lg group hover:text-primary transition-colors relative"
            >
              Quero um dispositivo personalizado
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Image - Right side with labels */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Top label - Sensor de temperatura */}
              <div className="absolute -top-[41px] -left-12 md:-left-24 flex items-center gap-3">
                <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                  Sensor de temperatura e humidade
                </span>
                <div className="flex items-center">
                  <div className="w-8 md:w-12 h-px bg-gray-400" />
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
              </div>
              
              <img 
                src={iotDevice} 
                alt="Dispositivo IoT personalizado" 
                className="w-64 md:w-80 lg:w-96 h-auto animate-float drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              />
              
              {/* Bottom label - Envia dados */}
              <div className="absolute -bottom-[41px] -right-8 md:-right-20 flex items-center gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <div className="w-8 md:w-12 h-px bg-gray-400" />
                </div>
                <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                  Envia dados para qualquer dispositivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDevicesSection;

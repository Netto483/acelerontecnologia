import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import iotDevice from "@/assets/iot-device.png";

const AutomationDevicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[450px] md:min-h-0 md:py-12 px-4 md:px-6 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Mobile: Same dark background as desktop */}
      <div className="absolute inset-0 bg-[#191518] md:hidden" />
      
      {/* Desktop: Normal background */}
      <div className="absolute inset-0 bg-[#191518] hidden md:block" />

      {/* Background decoration (desktop only) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 py-12 md:py-0">
          {/* Content - Left side */}
          <div className="text-left flex-1 max-w-xl">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Sensores de Monitoramento Personalizados
            </span>
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-3 text-white">
              Monitore a temperatura dos seus freezers de qualquer lugar,{" "}
              <span className="text-[#EB1614] font-thin">em tempo real</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Evite perdas de produtos com o monitoramento contínuo de temperatura.
            </p>

            {/* Mobile image - above button */}
            <div className="md:hidden mb-6">
              <img 
                src={iotDevice} 
                alt="Dispositivo IoT personalizado" 
                className="w-48 h-auto mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>

            {/* Link style button */}
            <a 
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-white font-thin text-sm md:text-base group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero monitorar meus produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Image - Right side (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center lg:justify-start">
            <img 
              src={iotDevice} 
              alt="Dispositivo IoT personalizado" 
              className="w-64 md:w-72 lg:w-80 h-auto animate-float drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDevicesSection;

import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import iotDevice from "@/assets/iot-device.png";

const AutomationDevicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 relative overflow-hidden transition-all duration-700 bg-[#191518] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left side */}
          <div className="text-left flex-1 max-w-2xl">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Sensores de Monitoramento Personalizados
            </span>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-4 text-white">
              Monitore a temperatura dos seus freezers de qualquer lugar,{" "}
              <span className="text-[#EB1614] font-thin">em tempo real</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Evite perdas de produtos com o monitoramento contínuo de temperatura.
            </p>

            {/* Link style button */}
            <a 
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-white font-thin text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Quero monitorar meus produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white group-hover:bg-primary transition-colors" />
            </a>
          </div>

          {/* Image - Right side */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img 
              src={iotDevice} 
              alt="Dispositivo IoT personalizado" 
              className="w-80 md:w-96 lg:w-[500px] h-auto animate-float drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDevicesSection;

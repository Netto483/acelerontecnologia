import { ArrowRight } from "lucide-react";
import logoAceleron from "@/assets/logo-aceleron.png";
import useScrollReveal from "@/hooks/useScrollReveal";

const NoSystemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-20 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#F5F4F3" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left side - Logo + Title */}
          <div className="flex-1">
            {/* Logo */}
            <img 
              src={logoAceleron} 
              alt="Aceleron Tecnologias" 
              className="h-8 md:h-10 w-auto mb-6"
            />
            
            {/* Title */}
            <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Sem{" "}
              <span className="text-[#EB1614] font-thin">Sistema</span>, Sem{" "}
              <span className="text-[#EB1614] font-thin">Controle</span>, Sem{" "}
              <span className="text-[#EB1614] font-thin">Crescimento</span>
            </h2>
          </div>

          {/* Right side - Text + Button */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="font-subtitle text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Sem um sistema interno, a empresa perde o controle da operação, acumula erros e toma decisões no achismo. Processos manuais não escalam, a informação se perde e o crescimento vira um risco em vez de uma oportunidade.
            </p>

            {/* Link style button */}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-gray-900 font-thin text-base md:text-lg group hover:text-[#EB1614] transition-colors relative cursor-pointer w-fit"
            >
              Falar com um especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 group-hover:bg-[#EB1614] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoSystemSection;

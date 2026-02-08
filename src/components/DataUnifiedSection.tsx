import useScrollReveal from "@/hooks/useScrollReveal";

const DataUnifiedSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    "Um único painel com todas as informações da empresa",
    "Dados atualizados em tempo real, sem versões diferentes",
    "Processos integrados entre setores",
    "Menos tarefas manuais e menos erros operacionais",
    "Decisões mais rápidas com dados confiáveis",
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#191518" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left side - Titles */}
          <div className="flex-1">
            {/* Small title */}
            <span className="text-[#EB1614] text-sm md:text-base font-medium mb-3 block">
              Unificação de dados
            </span>
            
            {/* Main Title */}
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Tudo em um só lugar
            </h2>
          </div>

          {/* Right side - Text + List */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              Centralize informações, processos e dados em um único sistema. Com tudo integrado, sua empresa ganha mais controle, reduz erros, elimina retrabalho e acelera a tomada de decisões.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-white/80 text-sm md:text-base"
                >
                  <span className="text-[#EB1614] mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataUnifiedSection;

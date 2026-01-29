import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Sites Estratégicos",
    description: "Desenvolvemos sites que convertem visitantes em clientes com design focado em resultados.",
    link: "/sites-estrategicos",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Sistemas Personalizados",
    description: "Soluções sob medida para otimizar processos e aumentar a eficiência da sua empresa.",
    link: "/sistemas-personalizados",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Automações com I.A.",
    description: "Inteligência artificial aplicada para automatizar tarefas e multiplicar resultados.",
    link: "/automacoes-ia",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Dispositivos Personalizados",
    description: "Hardware IoT sob medida para monitoramento e automação do seu negócio.",
    link: "/dispositivos-personalizados",
    gradient: "from-violet-500/20 to-pink-500/20",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#171417]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">
          <span className="font-light">Entenda mais</span>{" "}
          <span className="font-bold">sobre nossos serviços</span>
        </h2>

        {/* Subtitle */}
        <p className="font-subtitle text-lg md:text-xl text-white/70 text-center mb-16">
          Como nossos serviços irão atuar na sua empresa
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 -translate-x-4 md:-translate-x-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 translate-x-4 md:translate-x-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 px-8 md:px-16 overflow-hidden">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + services.length) % services.length;
              const isNext = index === (activeIndex + 1) % services.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className={`
                    relative flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-500 ease-out
                    ${isActive 
                      ? "w-full md:w-[500px] h-[350px] md:h-[400px] z-10 scale-100 opacity-100" 
                      : "w-[200px] md:w-[300px] h-[280px] md:h-[320px] z-0 scale-90 opacity-60"
                    }
                    ${!isActive ? "blur-[2px] pointer-events-none hidden md:block" : ""}
                  `}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      handleDotClick(index);
                    }
                  }}
                >
                  {/* Glass Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-xl`} />
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
                  <div className="absolute inset-0 border border-white/50 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                    <h3 className={`font-subtitle font-bold text-gray-900 mb-3 transition-all duration-300 ${
                      isActive ? "text-2xl md:text-3xl" : "text-xl"
                    }`}>
                      {service.title}
                    </h3>
                    {isActive && (
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed animate-fade-in">
                        {service.description}
                      </p>
                    )}
                    {isActive && (
                      <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold animate-fade-in">
                        Saiba mais
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

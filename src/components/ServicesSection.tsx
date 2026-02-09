import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dispositivosCard from "@/assets/dispositivos-card.png";
import sitesCard from "@/assets/sites-card.png";
import sistemasCard from "@/assets/sistemas-card.png";
import automacoesIaCard from "@/assets/automacoes-ia-card.png";

const services = [
  {
    title: "Sites Estratégicos",
    description: "Desenvolvemos sites que convertem visitantes em clientes com design focado em resultados.",
    link: "/sites-estrategicos",
    gradient: "from-blue-500/20 to-purple-500/20",
    image: sitesCard,
  },
  {
    title: "Sistemas Personalizados",
    description: "Soluções sob medida para otimizar processos e aumentar a eficiência da sua empresa.",
    link: "/sistemas-personalizados",
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: sistemasCard,
  },
  {
    title: "Automações com I.A.",
    description: "Inteligência artificial aplicada para automatizar tarefas e multiplicar resultados.",
    link: "/automacoes-ia",
    gradient: "from-orange-500/20 to-red-500/20",
    image: automacoesIaCard,
  },
  {
    title: "Dispositivos Personalizados",
    description: "Hardware IoT sob medida para monitoramento e automação do seu negócio.",
    link: "/dispositivos-personalizados",
    gradient: "from-violet-500/20 to-pink-500/20",
    image: dispositivosCard,
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

  // Calculate positions for each card
  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + services.length) % services.length);
    
    // Map positions: 0 = center, 1 = right, 2 = far right/hidden, 3 = left
    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === 1) return "right";
    if (normalizedDiff === services.length - 1) return "left";
    return "hidden";
  };

  return (
    <section id="servicos" className="py-20 px-4 md:px-8 bg-[#171417]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">
          <span className="font-thin">Entenda mais</span>{" "}
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
          <div className="relative h-[400px] md:h-[450px] flex items-center justify-center px-8 md:px-16">
            {services.map((service, index) => {
              const position = getCardPosition(index);
              
              if (position === "hidden") return null;

              const isCenter = position === "center";
              const isLeft = position === "left";
              const isRight = position === "right";

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className={`
                    absolute rounded-3xl overflow-hidden transition-all duration-500 ease-out
                    ${isCenter 
                      ? "w-[90%] md:w-[500px] h-[350px] md:h-[400px] z-10 opacity-100" 
                      : "w-[200px] md:w-[300px] h-[280px] md:h-[320px] z-0 opacity-60 blur-[2px] pointer-events-none hidden md:block"
                    }
                  `}
                  style={{
                    transform: isCenter 
                      ? "translateX(0) scale(1)" 
                      : isLeft 
                        ? "translateX(-120%) scale(0.85)" 
                        : "translateX(120%) scale(0.85)",
                  }}
                  onClick={(e) => {
                    if (!isCenter) {
                      e.preventDefault();
                      handleDotClick(index);
                    }
                  }}
                >
                  {/* Glass Background */}
                  {service.image ? (
                    <>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 to-gray-400/30 backdrop-blur-xl" />
                      <div className="absolute inset-0 bg-gray-100/60 backdrop-blur-md" />
                    </>
                  )}
                  <div className="absolute inset-0 border border-gray-300/50 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                    <h3 className={`font-subtitle font-bold mb-3 transition-all duration-300 ${
                      isCenter ? "text-2xl md:text-3xl" : "text-xl"
                    } ${service.image ? "text-white" : "text-gray-900"}`}>
                      {service.title}
                    </h3>
                    {isCenter && (
                      <p className={`text-base md:text-lg leading-relaxed animate-fade-in ${
                        service.image ? "text-white/90" : "text-gray-700"
                      }`}>
                        {service.description}
                      </p>
                    )}
                    {isCenter && (
                      <div className={`mt-6 inline-flex items-center gap-2 font-semibold animate-fade-in ${
                        service.image ? "text-white" : "text-primary"
                      }`}>
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

import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const StepCard = ({ stepNumber, title, description, delay, isVisible }: StepCardProps) => (
  <div 
    className="rounded-2xl border border-white/20 p-6 transition-all duration-700 ease-out"
    style={{ 
      backgroundColor: "#191518",
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      opacity: isVisible ? 1 : 0,
      transitionDelay: `${delay}ms`
    }}
  >
    <span 
      className="text-sm mb-2 block" 
      style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400, color: "#EB1614" }}
    >
      {stepNumber}
    </span>
    <h3 
      className="text-lg text-white font-thin mb-2" 
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {title}
    </h3>
    <p 
      className="text-sm leading-relaxed transition-all duration-700 ease-out"
      style={{ 
        color: "#9ca3af",
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay + 150}ms`
      }}
    >
      {description}
    </p>
  </div>
);

const JourneySectionWithReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      stepNumber: "1° Etapa",
      title: "Briefing",
      description: "Reunião inicial para entender seu negócio, objetivos e diferenciais competitivos."
    },
    {
      stepNumber: "2° Etapa",
      title: "Conteúdo",
      description: "Criação de textos persuasivos e estrutura de informações otimizada para conversão."
    },
    {
      stepNumber: "3° Etapa",
      title: "Protótipo",
      description: "Wireframe da estrutura do site para validação antes do design final."
    },
    {
      stepNumber: "4° Etapa",
      title: "Design",
      description: "Criação visual completa com identidade única e elementos que transmitem autoridade."
    },
    {
      stepNumber: "5° Etapa",
      title: "Entrega",
      description: "Site publicado, otimizado e pronto para gerar resultados desde o primeiro dia."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6" style={{ backgroundColor: "#191518" }}>
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 
          className="text-2xl md:text-4xl text-white text-center mb-4 transition-all duration-700 ease-out" 
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0
          }}
        >
          A Sua{" "}
          <span className="font-thin" style={{ color: "#EB1614" }}>Jornada Conosco</span>
        </h2>

        {/* Subtítulo */}
        <p 
          className="text-center text-sm md:text-base mb-12 max-w-2xl mx-auto transition-all duration-700 ease-out"
          style={{ 
            color: "#9ca3af",
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '100ms'
          }}
        >
          Essas serão as etapas que você irá seguir assim que começarmos a trabalhar no seu projeto
        </p>

        {/* Cards das Etapas - Layout de Funil */}
        <div className="flex flex-col gap-6">
          {/* Primeira linha: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.slice(0, 3).map((step, index) => (
              <StepCard 
                key={step.title}
                {...step}
                delay={200 + (index * 100)}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Segunda linha: 2 cards centralizados (formato funil) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {steps.slice(3, 5).map((step, index) => (
              <StepCard 
                key={step.title}
                {...step}
                delay={500 + (index * 100)}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-16">
          <Separator className="bg-gray-600/50" />
        </div>
      </div>
    </section>
  );
};

export default JourneySectionWithReveal;

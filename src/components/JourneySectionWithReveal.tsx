import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";

interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
}

interface StepCardProps extends StepItem {
  delay: number;
  isVisible: boolean;
  variant: "dark" | "light";
}

interface JourneySectionProps {
  steps?: StepItem[];
  variant?: "dark" | "light";
}

const StepCard = ({ stepNumber, title, description, delay, isVisible, variant }: StepCardProps) => {
  const isLight = variant === "light";
  return (
    <div 
      className={`rounded-2xl border p-6 transition-all duration-700 ease-out ${
        isLight ? "border-gray-200 bg-white" : "border-white/20"
      }`}
      style={{ 
        ...(isLight ? {} : { backgroundColor: "#191518" }),
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
        className={`text-lg font-thin mb-2 ${isLight ? "text-gray-900" : "text-white"}`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
      </h3>
      <p 
        className="text-sm leading-relaxed transition-all duration-700 ease-out"
        style={{ 
          color: isLight ? "#6b7280" : "#9ca3af",
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${delay + 150}ms`
        }}
      >
        {description}
      </p>
    </div>
  );
};

const JourneySectionWithReveal = ({ steps: customSteps, variant = "dark" }: JourneySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLight = variant === "light";

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

  const defaultSteps: StepItem[] = [
    { stepNumber: "1° Etapa", title: "Briefing", description: "Reunião inicial para entender seu negócio, objetivos e diferenciais competitivos." },
    { stepNumber: "2° Etapa", title: "Conteúdo", description: "Criação de textos persuasivos e estrutura de informações otimizada para conversão." },
    { stepNumber: "3° Etapa", title: "Protótipo", description: "Wireframe da estrutura do site para validação antes do design final." },
    { stepNumber: "4° Etapa", title: "Design", description: "Criação visual completa com identidade única e elementos que transmitem autoridade." },
    { stepNumber: "5° Etapa", title: "Entrega", description: "Site publicado, otimizado e pronto para gerar resultados desde o primeiro dia." },
  ];

  const steps = customSteps || defaultSteps;
  const firstRowCount = steps.length <= 4 ? steps.length : 3;
  const secondRowSteps = steps.slice(firstRowCount);

  return (
    <section ref={sectionRef} className="py-20 px-6" style={{ backgroundColor: isLight ? "#F5F4F3" : "#191518" }}>
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-2xl md:text-4xl text-center mb-4 transition-all duration-700 ease-out ${isLight ? "text-gray-900" : "text-white"}`}
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0
          }}
        >
          A Sua{" "}
          <span className="font-thin" style={{ color: "#EB1614" }}>Jornada Conosco</span>
        </h2>

        <p 
          className="text-center text-sm md:text-base mb-12 max-w-2xl mx-auto transition-all duration-700 ease-out"
          style={{ 
            color: isLight ? "#6b7280" : "#9ca3af",
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '100ms'
          }}
        >
          Essas são as etapas que seguiremos assim que iniciarmos o seu projeto.
        </p>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.slice(0, firstRowCount).map((step, index) => (
              <StepCard 
                key={step.title}
                {...step}
                delay={200 + (index * 100)}
                isVisible={isVisible}
                variant={variant}
              />
            ))}
          </div>

          {secondRowSteps.length > 0 && (
            <div className={`grid grid-cols-1 gap-6 mx-auto w-full ${
              secondRowSteps.length === 1 ? 'md:grid-cols-1 md:max-w-sm' :
              secondRowSteps.length === 2 ? 'md:grid-cols-2 md:max-w-[calc(66.666%+0.75rem)]' :
              'md:grid-cols-3 md:max-w-6xl'
            }`}>
              {secondRowSteps.map((step, index) => (
                <StepCard 
                  key={step.title}
                  {...step}
                  delay={200 + (firstRowCount + index) * 100}
                  isVisible={isVisible}
                  variant={variant}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16">
          <Separator className={isLight ? "bg-gray-300" : "bg-gray-600/50"} />
        </div>
      </div>
    </section>
  );
};

export default JourneySectionWithReveal;

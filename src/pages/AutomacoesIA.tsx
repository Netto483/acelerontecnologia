import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import AICustomerServiceSection from "@/components/AICustomerServiceSection";
import AIStatsSection from "@/components/AIStatsSection";
import AIVsHumanSection from "@/components/AIVsHumanSection";
import AIProcessAutomationSection from "@/components/AIProcessAutomationSection";
import JourneySectionWithReveal from "@/components/JourneySectionWithReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import bannerAutomacao from "@/assets/banner-page-automacao.png?format=webp&quality=80";

const AutomacoesIA = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
      rafRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          <div 
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${bannerAutomacao})`,
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

          <div className="relative max-w-7xl mx-auto w-full">
            <div className="max-w-3xl text-left">
              <h1 
                className="font-subtitle text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in text-white"
                style={{ animationDelay: '0.1s' }}
              >
                Automações com IA.
              </h1>
              <p 
                className="text-base md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Inteligência artificial aplicada para automatizar tarefas repetitivas, 
                economizar recursos e multiplicar os resultados da sua empresa.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button 
                  variant="hero" 
                  className="group font-thin text-sm md:text-base"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero automatizar minha empresa
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AICustomerServiceSection />
        <AIStatsSection />
        <AIVsHumanSection />
        <AIProcessAutomationSection />

        <JourneySectionWithReveal 
          variant="light"
          steps={[
            { stepNumber: "1° Etapa", title: "Entendimento e Mapeamento", description: "Conhecemos a empresa, seus setores, processos, desafios operacionais e desenhamos os fluxos atuais, identificando pontos de melhoria e automação." },
            { stepNumber: "2° Etapa", title: "Desenho das automações", description: "Criamos os fluxos, regras e exceções de cada processo." },
            { stepNumber: "3° Etapa", title: "Implementação de teste", description: "Testamos as automações em cenários reais para garantir estabilidade." },
            { stepNumber: "4° Etapa", title: "Entrega", description: "Entregamos as automações e acompanhamos a operação inicial." },
            { stepNumber: "5° Etapa", title: "Acompanhamento & Evolução", description: "Ajustamos e expandimos as automações conforme a empresa evolui." },
          ]}
        />

        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default AutomacoesIA;

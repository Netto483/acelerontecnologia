import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import NoSystemSection from "@/components/NoSystemSection";
import SystemsStatsSection from "@/components/SystemsStatsSection";
import DataUnifiedSection from "@/components/DataUnifiedSection";
import JourneySectionWithReveal from "@/components/JourneySectionWithReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import crmDashboard from "@/assets/crm-dashboard.png";

const SistemasPersonalizados = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
          {/* Parallax Background */}
          <div 
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${crmDashboard})`,
              backgroundPosition: 'center right',
            }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

          <div className="relative max-w-7xl mx-auto w-full">
            <div className="max-w-3xl text-left">
              {/* Main Headline */}
              <h1 
                className="font-subtitle text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in text-white"
                style={{ animationDelay: '0.1s' }}
              >
                Sistemas Internos
              </h1>

              {/* Subtitle */}
              <p 
                className="text-base md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Desenvolvemos sistemas internos 100% personalizados para otimizar processos, 
                centralizar dados e aumentar a eficiência da sua empresa.
              </p>

              {/* CTA Button */}
              <div 
                className="animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                <Button 
                  variant="hero" 
                  className="group font-thin text-sm md:text-base"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero meu sistema personalizado
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Sem Sistema */}
        <NoSystemSection />

        {/* Barra de Estatísticas */}
        <SystemsStatsSection />

        {/* Seção Tudo em um só lugar */}
        <DataUnifiedSection />

        {/* Seção: A Sua Jornada Conosco */}
        <JourneySectionWithReveal variant="light" steps={[
          { stepNumber: "1° Etapa", title: "Diagnóstico & Briefing", description: "Aqui mapeamos como a empresa funciona hoje e o que precisa melhorar." },
          { stepNumber: "2° Etapa", title: "Arquitetura & Planejamento do Sistema", description: "Definimos a estrutura do sistema, módulos, integrações, regras de negócio, níveis de acesso e segurança." },
          { stepNumber: "3° Etapa", title: "Protótipo", description: "Criamos protótipos navegáveis para validar telas, fluxos e usabilidade antes de desenvolver." },
          { stepNumber: "4° Etapa", title: "Testes & Validação", description: "Testamos fluxos, regras e cenários reais com o time do cliente para garantir que tudo funcione na prática." },
          { stepNumber: "5° Etapa", title: "Implantação", description: "Colocamos o sistema no ar, fazemos a migração de dados e configuramos acessos." },
          { stepNumber: "6° Etapa", title: "Treinamento do Time", description: "Capacitamos os usuários para extrair o máximo do sistema desde o primeiro dia." },
        ]} />

        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default SistemasPersonalizados;

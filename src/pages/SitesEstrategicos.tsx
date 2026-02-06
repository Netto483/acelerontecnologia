import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/sites-estrategicos-hero.png";

const SitesEstrategicos = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: 'center right',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

          <div className="relative max-w-7xl mx-auto w-full">
            <div className="max-w-3xl text-left">
              {/* Main Headline */}
              <h1 
                className="font-subtitle text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in text-white"
                style={{ animationDelay: '0.1s' }}
              >
                Sites Estratégicos
              </h1>

              {/* Subtitle */}
              <p 
                className="text-base md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Desenvolvemos sites pensados para capturar atenção nos primeiros segundos, gerar desejo e converter Leads em Clientes.
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
                  Quero um site estratégico
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Seção Sites Estratégicos para Conversão */}
            <div className="mb-16">
              <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Sites Estratégicos com o objetivo de potencializar a conversão
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cada elemento do seu site é pensado estrategicamente para guiar o visitante até a conversão. 
                Utilizamos <strong className="text-foreground">técnicas avançadas de UX/UI</strong>, copywriting persuasivo e 
                gatilhos mentais que transformam curiosos em leads qualificados e leads em clientes. 
                Nossos sites são otimizados para SEO, garantindo que sua empresa seja encontrada no Google, 
                e possuem <strong className="text-foreground">velocidade de carregamento superior</strong> para não perder nenhuma oportunidade. 
                Com design responsivo e testes A/B contínuos, maximizamos suas taxas de conversão e 
                <strong className="text-foreground"> multiplicamos seu retorno sobre investimento</strong>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default SitesEstrategicos;

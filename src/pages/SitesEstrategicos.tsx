import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import SitesStatsSection from "@/components/SitesStatsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/sites-estrategicos-hero.png";

const SitesEstrategicos = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Garante que a página sempre abra no topo ao navegar para esta rota
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setScrollY(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const problemItems = [
    "Leads não convertem",
    "O comercial perde tempo explicando o básico",
    "Ciclo de vendas fica caro",
    "A empresa não passa confiança",
  ];

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

        {/* Seção "Seu site não passa credibilidade" */}
        <section
          className="min-h-[320px] py-16 md:py-12 px-6 flex items-center"
          style={{ backgroundColor: "#191518" }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              {/* Título - Esquerda */}
              <div className="flex-1 text-left">
                <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Falta de Estratégia
                </span>
                <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                  Seu site não passa{" "}
                  <span className="text-[#EB1614] font-thin">credibilidade</span>
                </h2>

                {/* Lista de problemas (abaixo do título) */}
                <ul className="mt-6 space-y-2">
                  {problemItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                      <X className="w-4 h-4 text-[#EB1614] flex-shrink-0" />
                      <span className="font-subtitle font-thin">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Linha Vertical Divisória */}
              <div className="hidden md:block w-px h-48 bg-white/30 self-center" />

              {/* Texto - Direita */}
              <div className="flex-1 text-left">
                <p className="font-subtitle font-thin text-white/80 text-sm md:text-base leading-relaxed">
                  Um site sem estratégia desperdiça tráfego, atrai leads que não convertem e gera contatos totalmente
                  desqualificados. Pior: ele não transmite confiança nem credibilidade.
                  <br />
                  <br />O resultado é um ciclo de vendas mais longo, mais caro e um time comercial sobrecarregado,
                  perdendo tempo explicando o básico para quem ainda não está pronto para comprar. Enquanto isso,
                  oportunidades reais escorrem para o concorrente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <SitesStatsSection />

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
                Utilizamos <strong className="text-foreground">técnicas avançadas de UX/UI</strong>, copywriting persuasivo
                e gatilhos mentais que transformam curiosos em leads qualificados e leads em clientes. Nossos sites são
                otimizados para SEO, garantindo que sua empresa seja encontrada no Google, e possuem{" "}
                <strong className="text-foreground">velocidade de carregamento superior</strong> para não perder nenhuma
                oportunidade. Com design responsivo e testes A/B contínuos, maximizamos suas taxas de conversão e
                <strong className="text-foreground"> multiplicamos seu retorno sobre investimento</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Seção: Converta Leads em Clientes */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Converta Leads em Clientes com a sua página
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estruturamos a sua página para prender atenção nos primeiros segundos e conduzir o visitante até o
              contato — com copy, UX e hierarquia visual pensadas para conversão.
            </p>
          </div>
        </section>
        
        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default SitesEstrategicos;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import SitesStatsSection from "@/components/SitesStatsSection";
import JourneySectionWithReveal from "@/components/JourneySectionWithReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import heroBackground from "@/assets/sites-estrategicos-hero.png";
import aoIcon from "@/assets/ao-icon.png";

const SitesEstrategicos = () => {
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
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: 'center right',
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
          className="min-h-[320px] py-16 md:py-12 px-6 flex items-center bg-[#F5F4F3] md:bg-[#191518]"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              {/* Título - Esquerda */}
              <div className="flex-1 text-left">
                <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Falta de Estratégia
                </span>
                <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 md:text-white leading-tight">
                  Seu site não passa{" "}
                  <span className="text-[#EB1614] font-thin">credibilidade</span>
                </h2>

                {/* Lista de problemas (abaixo do título) */}
                <ul className="mt-6 space-y-2">
                  {problemItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 md:text-white/80 text-sm">
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
                <p className="font-subtitle font-thin text-gray-600 md:text-white/80 text-sm md:text-base leading-relaxed">
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

        {/* Seção: Converta Leads em Clientes */}
        <section className="py-20 px-6" style={{ backgroundColor: "#F5F4F3" }}>
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={aoIcon} alt="Aceleron Logo" className="h-16 w-auto" />
            </div>

            {/* Título */}
            <h2 className="font-subtitle text-2xl md:text-4xl text-gray-900 text-center mb-12">
              <span className="font-thin">Converta Leads em Clientes</span>{" "}
              <span className="text-[#EB1614]" style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}>com a sua página</span>
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card SEO */}
              <div className="rounded-2xl border border-gray-300 p-6" style={{ backgroundColor: "#F5F4F3" }}>
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}>
                  <span className="text-[#EB1614]">SEO</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Otimização para mecanismos de busca que coloca sua empresa nas primeiras posições do Google e atrai tráfego qualificado.
                </p>
              </div>

              {/* Card Posicionamento */}
              <div className="rounded-2xl border border-gray-300 p-6" style={{ backgroundColor: "#F5F4F3" }}>
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}>
                  Posicionamento <span className="text-[#EB1614]">claro</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comunicação objetiva que transmite credibilidade e diferencia sua empresa da concorrência em segundos.
                </p>
              </div>

              {/* Card Copywriting */}
              <div className="rounded-2xl border border-gray-300 p-6" style={{ backgroundColor: "#F5F4F3" }}>
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}>
                  Copywriting <span className="text-[#EB1614]">orientado à conversão</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Textos persuasivos com gatilhos mentais que guiam o visitante do interesse à ação de contato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: A Sua Jornada Conosco */}
        <JourneySectionWithReveal />
        
        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default SitesEstrategicos;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

const SitesEstrategicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Sites Estratégicos
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Desenvolvemos sites que não apenas impressionam visualmente, mas também convertem visitantes em clientes.
          </p>
          
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
        
        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default SitesEstrategicos;

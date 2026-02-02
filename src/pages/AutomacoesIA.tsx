import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

const AutomacoesIA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Automações com Inteligência Artificial
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Inteligência artificial aplicada para automatizar tarefas repetitivas, economizar e multiplicar resultados.
          </p>
          
          {/* Seção Atendimento e Suporte */}
          <div className="mb-16">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Automações para Atendimento e Suporte
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Imagine ter um atendente que trabalha <strong className="text-foreground">24 horas por dia, 7 dias por semana</strong>, sem pausas, férias ou folgas. 
              Nossas automações com inteligência artificial custam até <strong className="text-foreground">10 vezes menos que um funcionário ao ano</strong>, 
              respondendo instantaneamente a centenas de clientes simultaneamente. Enquanto um colaborador humano atende um cliente por vez, 
              nossa I.A. qualifica leads, agenda reuniões, responde dúvidas frequentes e escala apenas os casos complexos para sua equipe. 
              O resultado? Redução drástica de custos operacionais, aumento na satisfação do cliente e sua equipe focada no que realmente importa: 
              fechar negócios e criar relacionamentos.
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

export default AutomacoesIA;

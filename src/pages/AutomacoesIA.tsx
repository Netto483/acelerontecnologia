import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AutomacoesIA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Automações com I.A.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Inteligência artificial aplicada para automatizar tarefas e multiplicar resultados.
          </p>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Atendimento Automatizado</h2>
              <p className="text-muted-foreground">
                Chatbots inteligentes que respondem 24/7 e qualificam leads automaticamente.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Automação de Processos</h2>
              <p className="text-muted-foreground">
                Elimine tarefas repetitivas e libere sua equipe para o que realmente importa.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Análise Preditiva</h2>
              <p className="text-muted-foreground">
                Antecipe tendências e comportamentos com machine learning avançado.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutomacoesIA;

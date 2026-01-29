import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SistemasPersonalizados = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Sistemas Personalizados
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Soluções sob medida para otimizar processos e aumentar a eficiência da sua empresa.
          </p>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">CRM Personalizado</h2>
              <p className="text-muted-foreground">
                Gerencie clientes, vendas e relacionamentos com um sistema feito para seu negócio.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">ERP Integrado</h2>
              <p className="text-muted-foreground">
                Unifique todos os processos da empresa em uma única plataforma inteligente.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Dashboards e Relatórios</h2>
              <p className="text-muted-foreground">
                Visualize dados em tempo real e tome decisões baseadas em informações precisas.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SistemasPersonalizados;

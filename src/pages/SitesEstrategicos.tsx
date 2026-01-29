import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SitesEstrategicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Sites Estratégicos
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Desenvolvemos sites que não apenas impressionam visualmente, mas também convertem visitantes em clientes.
          </p>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Landing Pages de Alta Conversão</h2>
              <p className="text-muted-foreground">
                Páginas otimizadas para capturar leads e gerar vendas, com design focado em resultados.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Sites Institucionais</h2>
              <p className="text-muted-foreground">
                Presença digital profissional que transmite credibilidade e fortalece sua marca.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">E-commerce</h2>
              <p className="text-muted-foreground">
                Lojas virtuais completas com integração de pagamento e gestão de estoque.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitesEstrategicos;

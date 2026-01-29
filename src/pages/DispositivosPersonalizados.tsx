import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DispositivosPersonalizados = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dispositivos Personalizados
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Hardware IoT sob medida para monitoramento e automação do seu negócio.
          </p>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Sensores IoT</h2>
              <p className="text-muted-foreground">
                Monitore temperatura, umidade e outros parâmetros críticos em tempo real.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Controladores Inteligentes</h2>
              <p className="text-muted-foreground">
                Automatize equipamentos e processos com dispositivos programáveis.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-subtitle text-2xl font-semibold mb-4">Integração com Sistemas</h2>
              <p className="text-muted-foreground">
                Conecte dispositivos físicos aos seus sistemas de gestão existentes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DispositivosPersonalizados;

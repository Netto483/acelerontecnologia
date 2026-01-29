import { Thermometer, Wifi, Bell, Clock } from "lucide-react";

const freezerData = [
  { name: "Freezer 01", temp: -18, status: "normal" },
  { name: "Freezer 02", temp: -16, status: "warning" },
  { name: "Freezer 03", temp: -20, status: "normal" },
  { name: "Freezer 04", temp: -17, status: "normal" },
];

const features = [
  {
    title: "Monitoramento 24/7",
    description: "Acompanhe a temperatura dos seus freezers em tempo real.",
  },
  {
    title: "Alertas Inteligentes",
    description: "Receba notificações quando a temperatura sair do ideal.",
  },
  {
    title: "Histórico Completo",
    description: "Acesse relatórios detalhados de variação de temperatura.",
  },
  {
    title: "Multi-dispositivos",
    description: "Gerencie todos os equipamentos em um só lugar.",
  },
];

const FreezerMonitorSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="wave-pattern" x="0" y="0" width="100" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5 Q25 0, 50 5 T100 5" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary/20" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[280px] h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                
                {/* Phone Screen */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-12 bg-primary/10 flex items-center justify-center pt-6">
                    <span className="text-xs text-muted-foreground">9:41</span>
                  </div>

                  {/* App Content */}
                  <div className="p-4">
                    {/* App Header */}
                    <div className="text-center mb-6">
                      <h3 className="font-display font-bold text-foreground text-lg">
                        Monitor de Freezers
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Atualizado há 2 minutos
                      </p>
                    </div>

                    {/* Freezer Cards */}
                    <div className="space-y-3">
                      {freezerData.map((freezer, index) => (
                        <div
                          key={freezer.name}
                          className={`p-3 rounded-xl border ${
                            freezer.status === "warning"
                              ? "bg-amber-50 border-amber-200"
                              : "bg-card border-border"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                freezer.status === "warning"
                                  ? "bg-amber-100"
                                  : "bg-primary/10"
                              }`}>
                                <Thermometer className={`w-4 h-4 ${
                                  freezer.status === "warning"
                                    ? "text-amber-600"
                                    : "text-primary"
                                }`} />
                              </div>
                              <div>
                                <p className="font-medium text-sm text-foreground">
                                  {freezer.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {freezer.status === "warning" ? "Atenção" : "Normal"}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-display font-bold text-xl ${
                                freezer.status === "warning"
                                  ? "text-amber-600"
                                  : "text-primary"
                              }`}>
                                {freezer.temp}°C
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-primary/5 rounded-lg p-2 text-center">
                        <Wifi className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Online</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-2 text-center">
                        <Bell className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Alertas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Monitore a temperatura dos seus{" "}
              <span className="font-sans italic text-gradient-primary">
                Freezer's
              </span>{" "}
              de qualquer lugar
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Sistema IoT completo para controle de temperatura refrigerada em tempo real.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card p-4 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreezerMonitorSection;

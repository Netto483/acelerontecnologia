import { Cpu, Wifi, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const devices = [
  {
    icon: Cpu,
    title: "Hardware Sob Medida",
    description: "Dispositivos IoT personalizados para sua operação específica.",
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description: "Integração em tempo real com seus sistemas existentes.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Processos automatizados que economizam tempo e recursos.",
  },
  {
    icon: Settings,
    title: "Manutenção Preditiva",
    description: "Alertas e diagnósticos antes que problemas aconteçam.",
  },
];

const AutomationDevicesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Hardware & IoT
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Automatize sua empresa com{" "}
            <span className="text-gradient-accent">dispositivos personalizados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvemos hardware especializado e soluções IoT que transformam 
            a maneira como sua empresa opera.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {devices.map((device, index) => (
            <div
              key={device.title}
              className="glass-card p-8 flex items-start gap-5 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0">
                <device.icon className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {device.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {device.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" className="group">
            Conhecer Soluções de Hardware
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationDevicesSection;

import { Wrench, Shield, Battery, Smartphone, Bell } from "lucide-react";
import statsBackground from "@/assets/stats-background.png";

const SensorStatsSection = () => {
  const stats = [
    {
      icon: Wrench,
      label: "Instalação:",
      value: "Não invasiva",
    },
    {
      icon: Shield,
      label: "Garantia:",
      value: "4 meses",
    },
    {
      icon: Battery,
      label: "Autonomia de bateria:",
      value: "15 dias",
    },
    {
      icon: Smartphone,
      label: "Dispositivos compatíveis:",
      value: "Qualquer dispositivo com internet",
    },
    {
      icon: Bell,
      label: "Monitoramento:",
      value: "Alerta de temperatura fora do padrão",
    },
  ];

  return (
    <section className="h-[98px] relative flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBackground})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="flex items-center justify-between gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-white font-semibold">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SensorStatsSection;

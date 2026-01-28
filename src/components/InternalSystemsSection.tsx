import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Award } from "lucide-react";
import crmDashboard from "@/assets/crm-dashboard.png";

const benefits = [
  {
    icon: Zap,
    title: "Mais produtividade",
  },
  {
    icon: Target,
    title: "Eficiência operacional",
  },
  {
    icon: Award,
    title: "Melhores entregas",
  },
];

const InternalSystemsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Criamos o seu sistema interno{' '}
              <span className="text-primary">100% personalizado</span>{' '}
              às suas necessidades.
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Desenvolvemos soluções sob medida que se adaptam perfeitamente aos processos 
              da sua empresa, aumentando a eficiência e reduzindo custos operacionais.
            </p>

            <Button variant="hero" className="group">
              Analisar Oportunidade
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Card with Benefits and Image */}
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-center text-foreground font-semibold text-lg mb-6">
              Com um sistema personalizado, sua empresa terá:
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground max-w-[100px]">
                    {benefit.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CRM Dashboard Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={crmDashboard} 
                alt="Dashboard CRM personalizado" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalSystemsSection;

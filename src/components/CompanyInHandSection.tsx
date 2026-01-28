import { Smartphone, Monitor, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Acesso Mobile",
    description: "Gerencie tudo pelo celular, em qualquer lugar.",
  },
  {
    icon: Monitor,
    title: "Dashboard Completo",
    description: "Visualize todos os dados em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Insights automáticos para decisões estratégicas.",
  },
  {
    icon: Users,
    title: "Gestão de Equipes",
    description: "Controle de colaboradores e produtividade.",
  },
];

const CompanyInHandSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Toda a sua empresa,{" "}
            <span className="font-sans italic text-gradient-primary">
              na palma da sua mão
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Sistemas integrados que permitem gerenciar seu negócio de qualquer 
            lugar, com total controle e visibilidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInHandSection;

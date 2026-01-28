import { Globe, Cpu, Bot, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites modernos e responsivos que convertem visitantes em clientes com design impactante e performance otimizada.",
    features: ["Design Responsivo", "SEO Otimizado", "Alta Performance"],
    gradient: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Cpu,
    title: "Sistemas Internos",
    description: "Sistemas personalizados que automatizam processos e aumentam a eficiência operacional da sua empresa.",
    features: ["Dashboards", "Gestão de Dados", "Integração API"],
    gradient: "from-secondary/10 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Bot,
    title: "Automação com I.A.",
    description: "Soluções inteligentes com inteligência artificial para automatizar tarefas e otimizar a tomada de decisões.",
    features: ["Chatbots", "Análise Preditiva", "Processos Automatizados"],
    gradient: "from-primary/10 to-secondary/5",
    iconColor: "text-primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Soluções completas para sua{' '}
            <span className="text-gradient-primary">transformação digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos serviços especializados em tecnologia para empresas que buscam 
            inovação e resultados mensuráveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

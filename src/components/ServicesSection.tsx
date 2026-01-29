import { useState } from "react";

const services = [
  {
    category: "CRM",
    title: "Sistema CRM completo para gestão de clientes e vendas",
    image: "/placeholder.svg",
  },
  {
    category: "Automação",
    title: "Automação de processos internos e externos da empresa",
    image: "/placeholder.svg",
  },
  {
    category: "IoT",
    title: "Dispositivos IoT para monitoramento em tempo real",
    image: "/placeholder.svg",
  },
];

const categories = ["Em Alta", "CRM", "Automação", "IoT"];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Em Alta");

  const filteredServices = activeCategory === "Em Alta" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          <span className="font-light">Entenda mais</span>{" "}
          <span className="font-bold">sobre nossos serviços</span>
        </h2>

        {/* Subtitle */}
        <p className="font-subtitle text-lg md:text-xl text-muted-foreground text-center mb-10">
          Como nossos serviços irão atuar na sua empresa
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium text-sm ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/50 text-foreground border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/20 font-subtitle">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-subtitle font-semibold text-lg text-card-foreground leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

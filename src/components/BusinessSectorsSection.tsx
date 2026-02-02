import useScrollReveal from "@/hooks/useScrollReveal";

const sectors = [
  { name: "Moda", percentage: 3.1 },
  { name: "Consultoria", percentage: 3.2 },
  { name: "Automotivo", percentage: 3.2 },
  { name: "Energia", percentage: 3.7 },
  { name: "Marketing", percentage: 3.7 },
  { name: "Agronegócio", percentage: 3.7 },
  { name: "Alimentos", percentage: 4.4 },
  { name: "Financeiro", percentage: 4.6 },
  { name: "Educação", percentage: 4.9 },
  { name: "Construção", percentage: 7.3 },
  { name: "Tecnologia", percentage: 7.9 },
];

const maxPercentage = Math.max(...sectors.map(s => s.percentage));

const BusinessSectorsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`pt-32 pb-16 px-6 bg-[#171417] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto" style={{ maxWidth: '1169px', height: '520px' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Setores empresariais que mais necessitam de automação
          </h2>
          <p className="text-white/70 text-base max-w-3xl mx-auto">
            Veja alguns exemplos de setores que podem evoluir com nossas soluções. 
            Independentemente do seu segmento, nossas soluções são pensadas para 
            acelerar o crescimento da sua empresa.
          </p>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-center gap-2 md:gap-4 h-[280px]">
          {sectors.map((sector, index) => {
            const height = (sector.percentage / maxPercentage) * 200;
            return (
              <div 
                key={sector.name} 
                className="flex flex-col items-center"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.05}s`
                }}
              >
                {/* Bar */}
                <div 
                  className="w-12 md:w-16 rounded-t-lg bg-gradient-to-t from-primary/80 to-primary flex items-start justify-center pt-2 transition-all duration-300 hover:from-primary hover:to-primary/90"
                  style={{ height: `${height}px` }}
                >
                  <span className="text-primary-foreground font-bold text-xs md:text-sm">
                    {sector.percentage}%
                  </span>
                </div>
                {/* Label */}
                <span className="text-xs md:text-sm text-white/70 mt-3 text-center max-w-[60px] md:max-w-[80px]">
                  {sector.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer text */}
        <p className="text-center text-white/60 text-sm mt-8 max-w-4xl mx-auto italic">
          "Estes são apenas alguns dos segmentos que já impulsionaram seus resultados com automação. 
          Independentemente do setor, nossa metodologia é adaptável e comprovada para gerar crescimento em diferentes mercados."
        </p>
      </div>
    </section>
  );
};

export default BusinessSectorsSection;

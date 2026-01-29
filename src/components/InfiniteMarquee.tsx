const phrases = [
  { bold: "Corte", rest: " gastos desnecessários" },
  { bold: "Automatize", rest: " processos repetitivos" },
  { bold: "Deixe", rest: " seu site estratégico" },
  { bold: "Crie", rest: " dispositivos personalizados" },
  { bold: "Obtenha", rest: " tudo sobre sua empresa em um só lugar" },
];

const InfiniteMarquee = () => {
  return (
    <section className="py-8 bg-[#171417] overflow-hidden">
      <div className="relative flex">
        {/* First copy */}
        <div className="flex animate-marquee whitespace-nowrap">
          {phrases.map((phrase, index) => (
            <span
              key={index}
              className="mx-8 md:mx-12 text-white font-subtitle text-lg md:text-xl lg:text-2xl"
            >
              <span className="font-bold">#{phrase.bold}</span>
              <span className="font-normal">{phrase.rest}</span>
            </span>
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <span
              key={`copy-${index}`}
              className="mx-8 md:mx-12 text-white font-subtitle text-lg md:text-xl lg:text-2xl"
            >
              <span className="font-bold">#{phrase.bold}</span>
              <span className="font-normal">{phrase.rest}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;

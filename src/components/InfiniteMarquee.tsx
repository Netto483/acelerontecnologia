import statsBackground from "@/assets/stats-background.png";

const phrases = [
  { bold: "Corte", rest: " gastos desnecessários", thinPart: "" },
  { bold: "Automatize", rest: " ", thinPart: "processos repetitivos" },
  { bold: "Deixe", rest: " ", thinPart: "seu site estratégico" },
  { bold: "Crie", rest: " ", thinPart: "dispositivos personalizados" },
  { bold: "Obtenha", rest: " ", thinPart: "tudo sobre sua empresa em um só lugar" },
];

const InfiniteMarquee = () => {
  return (
    <section className="h-[98px] relative flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBackground})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 flex w-full">
        {/* First copy */}
        <div className="flex animate-marquee whitespace-nowrap">
          {phrases.map((phrase, index) => (
            <span
              key={index}
              className="mx-6 md:mx-10 text-white font-subtitle text-sm md:text-base lg:text-lg"
            >
              <span className="font-bold">#{phrase.bold}</span>
              <span className="font-normal">{phrase.rest}</span>
              <span className="font-thin">{phrase.thinPart}</span>
            </span>
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <span
              key={`copy-${index}`}
              className="mx-6 md:mx-10 text-white font-subtitle text-sm md:text-base lg:text-lg"
            >
              <span className="font-bold">#{phrase.bold}</span>
              <span className="font-normal">{phrase.rest}</span>
              <span className="font-thin">{phrase.thinPart}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;

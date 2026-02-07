import { Clock, RefreshCw, Shield, DollarSign, Headphones } from "lucide-react";
import statsBackground from "@/assets/sites-stats-background.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

const SitesStatsSection = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const showCarousel = isMobile || isTablet;
  
  const stats = [
    {
      icon: Clock,
      label: "Prazo de Entrega:",
      value: "1 semana - 1 mês",
    },
    {
      icon: RefreshCw,
      label: "Atualizações:",
      value: "Semanal",
    },
    {
      icon: Shield,
      label: "Garantia:",
      value: "30 dias",
    },
    {
      icon: DollarSign,
      label: "Preços:",
      value: "a partir de R$990,00",
    },
    {
      icon: Headphones,
      label: "Suporte durante o projeto:",
      value: "24/7",
    },
  ];

  const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
    <div key={index} className="flex items-center gap-2 md:gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
        <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-gray-400 text-xs md:text-sm truncate">{stat.label}</span>
        <span className="text-white font-semibold text-xs md:text-base truncate">{stat.value}</span>
      </div>
    </div>
  );

  return (
    <section className="min-h-[98px] py-4 md:py-0 md:h-[98px] relative flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${statsBackground})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10">
        {/* Mobile/Tablet: Carousel */}
        {showCarousel ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {stats.map((stat, index) => (
                <CarouselItem key={index} className="pl-2 basis-1/2">
                  <StatItem stat={stat} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          /* Desktop: Regular grid */
          <div className="flex items-center justify-between gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SitesStatsSection;

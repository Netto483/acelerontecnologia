import useScrollReveal from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

const dataNodes = [
  { label: "Financeiro", angle: 0 },
  { label: "Leads", angle: 60 },
  { label: "Setor de compras", angle: 120 },
  { label: "Operacional", angle: 180 },
  { label: "Metas", angle: 240 },
  { label: "Estratégico", angle: 300 },
];

const CompanyInHandSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.02;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 px-6 bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            <span className="font-light">Toda a sua empresa,</span>
            <br className="hidden sm:block" />
            <span className="font-subtitle font-semibold italic text-gradient-primary">
              na palma da sua mão
            </span>
          </h2>
          <p className="font-subtitle text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Criamos o Seu próprio sistema de gestão da Sua Empresa de acordo com as suas necessidades.
          </p>
        </div>

        {/* Data Unification Art */}
        <div className="relative flex justify-center items-center py-12">
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div 
                className="relative flex items-center justify-center"
                style={{
                  transform: `scale(${0.8 + animationProgress * 0.2})`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Outer glow ring */}
                <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/20 animate-pulse-slow" />
                {/* Inner circle */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white font-subtitle font-bold text-sm md:text-base">Seu Sistema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Nodes */}
            {dataNodes.map((node, index) => {
              const radius = 200;
              const angleRad = (node.angle * Math.PI) / 180;
              const startX = Math.cos(angleRad) * (radius + 80);
              const startY = Math.sin(angleRad) * (radius + 80);
              const endX = Math.cos(angleRad) * 60;
              const endY = Math.sin(angleRad) * 60;
              
              const currentX = startX + (endX - startX) * animationProgress;
              const currentY = startY + (endY - startY) * animationProgress;

              return (
                <div key={index}>
                  {/* Connection Line */}
                  <svg 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                    style={{ zIndex: 5 }}
                  >
                    <defs>
                      <linearGradient id={`lineGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(356, 85%, 57%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(356, 85%, 57%)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <line
                      x1={250 + currentX}
                      y1={250 + currentY}
                      x2={250}
                      y2={250}
                      stroke={`url(#lineGradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray="6,4"
                      style={{
                        opacity: animationProgress,
                        transition: 'opacity 0.3s ease-out'
                      }}
                    />
                  </svg>

                  {/* Node */}
                  <div
                    className="absolute left-1/2 top-1/2 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`,
                      transition: 'opacity 0.3s ease-out'
                    }}
                  >
                    <div 
                      className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
                      style={{
                        opacity: 1 - animationProgress * 0.3,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-subtitle text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Animated particles flowing to center */}
            {isVisible && dataNodes.map((node, index) => {
              const angleRad = (node.angle * Math.PI) / 180;
              const startRadius = 220;
              
              return (
                <div
                  key={`particle-${index}`}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-primary/60"
                  style={{
                    transform: `translate(-50%, -50%)`,
                    animation: `flowToCenter-${index} 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Flow animation keyframes */}
        <style>{`
          ${dataNodes.map((node, index) => {
            const angleRad = (node.angle * Math.PI) / 180;
            const startX = Math.cos(angleRad) * 180;
            const startY = Math.sin(angleRad) * 180;
            return `
              @keyframes flowToCenter-${index} {
                0% {
                  transform: translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px));
                  opacity: 1;
                }
                100% {
                  transform: translate(-50%, -50%);
                  opacity: 0;
                }
              }
            `;
          }).join('')}
        `}</style>

      </div>
    </section>
  );
};

export default CompanyInHandSection;

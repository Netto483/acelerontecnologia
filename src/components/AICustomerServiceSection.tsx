import { MessageCircle, Clock, DollarSign, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import whatsappChat from "@/assets/whatsapp-ia-chat.png";

const AICustomerServiceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    { icon: MessageCircle, text: "Respostas naturais" },
    { icon: Clock, text: "Atende enquanto sua empresa está fechada" },
    { icon: DollarSign, text: "Custa até 10X menos que um funcionário ao ano" },
    { icon: Brain, text: "Conhece tudo da sua empresa" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-20 px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "#F5F4F3" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="font-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-8">
              Atenda seus clientes usando IA
            </h2>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                >
                  <feature.icon className="w-5 h-5 text-[#EB1614] flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant="default"
              className="bg-[#EB1614] hover:bg-[#EB1614]/90 text-white font-thin text-sm md:text-base group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero uma IA atendendo meus clientes
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={whatsappChat}
              alt="Chat de atendimento com IA"
              className="w-full max-w-none md:max-w-lg lg:max-w-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICustomerServiceSection;

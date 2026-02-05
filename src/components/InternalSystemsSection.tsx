import { ArrowRight, Database, Settings, BarChart3 } from "lucide-react";
import crmDashboard from "@/assets/crm-dashboard.png";
import useScrollReveal from "@/hooks/useScrollReveal";

const InternalSystemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 bg-[#F5F4F3] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image - Left side */}
          <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]">
              <img 
                src={crmDashboard} 
                alt="Dashboard CRM personalizado" 
                className="w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="text-left flex-1 max-w-2xl order-1 lg:order-2">
            <span className="text-[#EB1614] font-semibold text-sm uppercase tracking-wider">
              Sistemas Personalizados
            </span>
            <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-gray-900">
              Criamos o seu sistema interno{" "}
              <span className="text-[#EB1614] font-thin">100% personalizado</span>{" "}
              as suas necessidades.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Desenvolvemos o sistema interno da sua empresa sob medida. Adaptado perfeitamente 
              aos processos dela, aumentando a eficiência e reduzindo dados dispersos.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <Database className="w-5 h-5 text-[#EB1614]" />
                <span>Todos os dados em um só lugar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Settings className="w-5 h-5 text-[#EB1614]" />
                <span>Processos automatizados e otimizados</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <BarChart3 className="w-5 h-5 text-[#EB1614]" />
                <span>Dashboards completos em tempo real</span>
              </li>
            </ul>

            {/* Link style button */}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-gray-900 font-thin text-lg group hover:text-primary transition-colors relative cursor-pointer"
            >
              Saber Mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 group-hover:bg-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalSystemsSection;

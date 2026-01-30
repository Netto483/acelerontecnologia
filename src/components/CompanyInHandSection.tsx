import useScrollReveal from "@/hooks/useScrollReveal";

const CompanyInHandSection = () => {
  const { ref, isVisible } = useScrollReveal();

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
          <h2 className="font-subtitle text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Toda a sua empresa,{" "}
            <br className="hidden sm:block" />
            <span className="font-subtitle italic text-gradient-primary">
              na palma da sua mão
            </span>
          </h2>
          <p className="font-subtitle text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Sistemas integrados que permitem gerenciar seu negócio de qualquer 
            lugar, com total controle e visibilidade.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanyInHandSection;

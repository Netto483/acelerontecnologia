import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollReveal from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "O que a Aceleron faz?",
    answer: "A Aceleron é especializada em criar soluções de software e hardware personalizadas para empresas. Desenvolvemos sites, sistemas internos e automações com inteligência artificial para otimizar processos e acelerar resultados."
  },
  {
    question: "Quais tipos de sites vocês desenvolvem?",
    answer: "Desenvolvemos sites institucionais, landing pages, e-commerces, portais e aplicações web completas. Todos os projetos são responsivos, otimizados para SEO e construídos com as tecnologias mais modernas do mercado."
  },
  {
    question: "Como funciona a automação com I.A.?",
    answer: "Implementamos soluções de inteligência artificial para automatizar tarefas repetitivas, análise de dados, atendimento ao cliente, processamento de documentos e muito mais. Cada solução é personalizada conforme as necessidades do seu negócio."
  },
  {
    question: "Vocês desenvolvem sistemas internos personalizados?",
    answer: "Sim! Criamos sistemas de gestão, CRMs, ERPs, dashboards analíticos e qualquer tipo de software interno que sua empresa precise. Tudo desenvolvido sob medida para atender suas demandas específicas."
  },
  {
    question: "Qual o prazo médio de entrega dos projetos?",
    answer: "O prazo varia conforme a complexidade do projeto. Sites simples podem ser entregues em 2-4 semanas, enquanto sistemas mais robustos podem levar de 2 a 6 meses. Sempre definimos cronogramas claros no início de cada projeto."
  },
  {
    question: "Como é o processo de desenvolvimento?",
    answer: "Seguimos uma metodologia ágil que inclui: briefing inicial, prototipação, desenvolvimento iterativo com entregas parciais, testes rigorosos e lançamento. Você acompanha cada etapa e pode dar feedback em tempo real."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos planos de suporte e manutenção contínua para garantir que sua solução continue funcionando perfeitamente. Também realizamos atualizações, melhorias e novas implementações conforme sua empresa cresce."
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-32 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            <span className="font-light">Dúvidas</span> <span className="font-bold">mais frequentes</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Encontre aqui respostas para as principais dúvidas sobre nossos serviços, processos de desenvolvimento e muito mais.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-white/20 py-2"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.4s ease-out ${index * 0.05}s`
              }}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

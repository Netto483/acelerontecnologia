import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

const AutomacoesIA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Automações com Inteligência Artificial
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            Inteligência artificial aplicada para automatizar tarefas repetitivas, economizar e multiplicar resultados.
          </p>
          
          {/* Seção Atendimento e Suporte */}
          <div className="mb-16">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Automações para Atendimento e Suporte
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Imagine ter um atendente que trabalha <strong className="text-foreground">24 horas por dia, 7 dias por semana</strong>, sem pausas, férias ou folgas. 
              Nossas automações com inteligência artificial custam até <strong className="text-foreground">10 vezes menos que um funcionário ao ano</strong>, 
              respondendo instantaneamente a centenas de clientes simultaneamente. Enquanto um colaborador humano atende um cliente por vez, 
              nossa I.A. qualifica leads, agenda reuniões, responde dúvidas frequentes e escala apenas os casos complexos para sua equipe. 
              O resultado? Redução drástica de custos operacionais, aumento na satisfação do cliente e sua equipe focada no que realmente importa: 
              fechar negócios e criar relacionamentos.
            </p>
          </div>

          {/* Seção Recursos Humanos e Recrutamento */}
          <div className="mb-16">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Recursos Humanos e Recrutamento
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Transforme seu departamento de RH com automações que <strong className="text-foreground">analisam milhares de currículos em minutos</strong>, 
              identificando os candidatos mais qualificados com base em critérios personalizados. Nossa I.A. realiza triagem automática, 
              agenda entrevistas, envia feedbacks personalizados e mantém candidatos engajados durante todo o processo seletivo. 
              Além disso, automatize processos de onboarding, gestão de documentos trabalhistas e avaliações de desempenho, 
              liberando seu time de RH para focar no que realmente importa: <strong className="text-foreground">desenvolver pessoas e cultura organizacional</strong>.
            </p>
          </div>

          {/* Seção Processamento Inteligente de Documentos */}
          <div className="mb-16">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Processamento Inteligente de Documentos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Elimine horas de trabalho manual com nossa I.A. que <strong className="text-foreground">extrai, classifica e organiza informações automaticamente</strong> 
              de contratos, notas fiscais, relatórios e qualquer tipo de documento. Nossa tecnologia de OCR avançado e processamento de linguagem natural 
              entende o contexto dos seus documentos, preenche formulários automaticamente, detecta inconsistências e alimenta seus sistemas internos 
              sem intervenção humana. <strong className="text-foreground">Reduza erros em até 95%</strong> e processe em segundos o que antes levava horas.
            </p>
          </div>

          {/* Seção Automação de E-mails */}
          <div className="mb-16">
            <h2 className="font-subtitle text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Automação de E-mails
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nunca mais perca uma oportunidade por falta de follow-up. Nossa I.A. <strong className="text-foreground">lê, interpreta e responde e-mails automaticamente</strong>, 
              classificando mensagens por prioridade, encaminhando para os departamentos corretos e respondendo perguntas frequentes instantaneamente. 
              Crie sequências de nurturing personalizadas que se adaptam ao comportamento de cada lead, envie propostas no momento certo e 
              mantenha seus clientes informados sem esforço manual. <strong className="text-foreground">Aumente suas taxas de resposta em até 300%</strong> 
              enquanto sua equipe foca em conversas que realmente precisam do toque humano.
            </p>
          </div>
        </div>
        
        {/* Formulário de Contato */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default AutomacoesIA;

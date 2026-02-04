import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
              <p>
                A Aceleron coleta informações que você nos fornece diretamente, incluindo nome, 
                e-mail, telefone, nome da empresa e informações sobre seu negócio quando você 
                entra em contato conosco através do formulário de contato ou outros meios de comunicação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responder às suas solicitações e fornecer suporte</li>
                <li>Enviar informações sobre nossos serviços</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins de marketing. Podemos compartilhar informações apenas com prestadores 
                de serviços que nos auxiliam em nossas operações comerciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar o consentimento para o uso de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
              <p>
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. 
                Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
                algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contato</h2>
              <p>
                Para questões relacionadas à privacidade, entre em contato conosco através do 
                e-mail: joaofirmino@aceleronai.com.br
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;

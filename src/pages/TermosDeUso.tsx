import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site da Aceleron, você concorda em cumprir e estar vinculado 
                a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Serviços</h2>
              <p>
                A Aceleron oferece serviços de desenvolvimento de software, incluindo criação de 
                sites, sistemas internos, automações com inteligência artificial e dispositivos 
                personalizados. Os detalhes específicos de cada projeto são definidos em contratos 
                individuais com cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente neste site, incluindo textos, gráficos, logos, ícones, 
                imagens e software, é propriedade da Aceleron ou de seus licenciadores e está 
                protegido por leis de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Uso Aceitável</h2>
              <p>Você concorda em não:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Usar o site para qualquer finalidade ilegal</li>
                <li>Tentar obter acesso não autorizado a qualquer parte do site</li>
                <li>Interferir no funcionamento adequado do site</li>
                <li>Copiar ou reproduzir conteúdo sem autorização prévia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
              <p>
                A Aceleron não será responsável por quaisquer danos diretos, indiretos, incidentais, 
                consequenciais ou punitivos resultantes do uso ou incapacidade de uso do site ou 
                de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links Externos</h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre 
                o conteúdo desses sites e não somos responsáveis por suas políticas de privacidade 
                ou práticas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificações</h2>
              <p>
                A Aceleron reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após sua publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa relacionada a estes termos será submetida à jurisdição dos 
                tribunais de Maceió, Alagoas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
              <p>
                Para questões relacionadas a estes Termos de Uso, entre em contato conosco 
                através do e-mail: joaofirmino@aceleronai.com.br
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosDeUso;

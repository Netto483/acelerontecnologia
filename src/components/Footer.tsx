import { Link } from "react-router-dom";
import logoAceleron from "@/assets/logo-aceleron.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="py-16 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoAceleron} 
                alt="Aceleron Logo" 
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-xl">Aceleron</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Criamos soluções de hardware e software que transformam empresas. 
              Sites, sistemas internos e automação com I.A. para acelerar seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sites-estrategicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sites Estratégicos
                </Link>
              </li>
              <li>
                <Link to="/sistemas-personalizados" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sistemas Personalizados
                </Link>
              </li>
              <li>
                <Link to="/automacoes-ia" className="text-muted-foreground hover:text-foreground transition-colors">
                  Automações com I.A.
                </Link>
              </li>
              <li>
                <Link to="/dispositivos-personalizados" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dispositivos Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>contato@aceleron.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aceleron. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="py-16 px-6 border-t border-black/20 bg-[#F5F4F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoFooter} 
                alt="Aceleron Tecnologias Logo" 
                className="h-48 w-auto"
              />
            </div>
            <p className="text-black max-w-md leading-relaxed">
              Criamos soluções de hardware e software que transformam empresas. 
              Sites, sistemas internos e automação com I.A. para acelerar seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sites-estrategicos" className="text-black hover:text-black/70 transition-colors">
                  Sites Estratégicos
                </Link>
              </li>
              <li>
                <Link to="/sistemas-personalizados" className="text-black hover:text-black/70 transition-colors">
                  Sistemas Personalizados
                </Link>
              </li>
              <li>
                <Link to="/automacoes-ia" className="text-black hover:text-black/70 transition-colors">
                  Automações com I.A.
                </Link>
              </li>
              <li>
                <Link to="/dispositivos-personalizados" className="text-black hover:text-black/70 transition-colors">
                  Dispositivos Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Contato</h4>
            <ul className="space-y-3 text-black">
              <li>joaofirmino@aceleronai.com.br</li>
              <li>(82) 991881260</li>
              <li>Maceió - AL</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black">
            © {currentYear} Aceleron. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidade" className="text-sm text-black hover:text-black/70 transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-sm text-black hover:text-black/70 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

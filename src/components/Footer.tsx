import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="py-12 md:py-16 px-4 md:px-6 border-t border-black/20 bg-[#F5F4F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <a
                href="/"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.location.reload();
                  }
                }}
              >
                <img 
                  src={logoFooter} 
                  alt="Aceleron Tecnologias Logo" 
                  className="h-32 md:h-48 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
            <p className="text-black max-w-md leading-relaxed text-sm md:text-base">
              Criamos soluções de hardware e software para empresas que querem operar melhor, vender mais e crescer com tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Serviços</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/sites-estrategicos" className="text-black hover:text-[#EB1614] transition-colors text-sm md:text-base">
                  Sites Estratégicos
                </Link>
              </li>
              <li>
                <Link to="/sistemas-personalizados" className="text-black hover:text-[#EB1614] transition-colors text-sm md:text-base">
                  Sistemas Personalizados
                </Link>
              </li>
              <li>
                <Link to="/automacoes-ia" className="text-black hover:text-[#EB1614] transition-colors text-sm md:text-base">
                  Automações com I.A.
                </Link>
              </li>
              <li>
                <Link to="/dispositivos-personalizados" className="text-black hover:text-[#EB1614] transition-colors text-sm md:text-base">
                  Dispositivos Personalizados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Contato</h4>
            <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
              <li className="break-all">joaofirmino@aceleronai.com.br</li>
              <li>(82) 9 9990-7820</li>
              <li>Maceió - AL</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-black/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-black text-center md:text-left">
            © {currentYear} Aceleron. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/politica-de-privacidade" className="text-xs md:text-sm text-black hover:text-[#EB1614] transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-xs md:text-sm text-black hover:text-[#EB1614] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

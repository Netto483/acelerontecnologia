import { Button } from "@/components/ui/button";
import logoAceleron from "@/assets/logo-aceleron.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white px-6 py-3 flex items-center justify-between rounded-2xl shadow-lg">
          <div className="flex items-center gap-3">
            <img 
              src={logoAceleron} 
              alt="Aceleron Logo" 
              className="h-10 w-auto"
            />
            <span className="font-display font-bold text-xl text-gray-900">
              Aceleron
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="font-subtitle text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="font-subtitle text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="font-subtitle text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contato
            </a>
          </div>

          <Button variant="default" size="sm">
            Fale Conosco
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

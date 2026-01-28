import { Button } from "@/components/ui/button";
import logoAceleron from "@/assets/logo-aceleron.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-card px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoAceleron} 
              alt="Aceleron Logo" 
              className="h-10 w-auto"
            />
            <span className="font-display font-bold text-xl text-foreground">
              Aceleron
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
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

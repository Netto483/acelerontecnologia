import { Button } from "@/components/ui/button";
import logoAceleron from "@/assets/logo-aceleron.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className={`px-6 py-3 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20" 
            : "bg-transparent"
        }`}>
          <Link to="/" className="flex items-center">
            <img 
              src={logoAceleron} 
              alt="Aceleron Logo" 
              className="h-14 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('servicos')} 
              className={`font-subtitle transition-colors font-medium ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('case')} 
              className={`font-subtitle transition-colors font-medium ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Case
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className={`font-subtitle transition-colors font-medium ${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
            >
              Contato
            </button>
          </div>

          <Button 
            variant="default" 
            size="sm"
            onClick={() => scrollToSection('contato')}
          >
            Fale Conosco
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

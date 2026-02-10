import { Button } from "@/components/ui/button";
import aoIcon from "@/assets/ao-icon.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 py-2 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <nav className={`px-4 md:px-6 py-2 md:py-3 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20" 
            : "bg-transparent"
        }`}>
          <a
            href="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload();
              }
            }}
            className="flex items-center"
          >
            <img 
              src={aoIcon} 
              alt="Aceleron Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </a>
          
          {/* Desktop menu */}
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

          {/* Desktop CTA */}
          <Button 
            variant="default" 
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => scrollToSection('contato')}
          >
            Fale Conosco
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="font-subtitle text-gray-900 font-medium text-left py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('case')} 
                className="font-subtitle text-gray-900 font-medium text-left py-2"
              >
                Case
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="font-subtitle text-gray-900 font-medium text-left py-2"
              >
                Contato
              </button>
              <Button 
                variant="default" 
                size="sm"
                className="w-full mt-2"
                onClick={() => scrollToSection('contato')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

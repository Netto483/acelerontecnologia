import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Construction, Wrench, Cpu } from "lucide-react";
import { useEffect } from "react";

const DispositivosPersonalizados = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Wrench className="w-8 h-8 text-muted-foreground animate-pulse" />
            <Construction className="w-14 h-14 text-[#EB1614]" />
            <Cpu className="w-8 h-8 text-muted-foreground animate-pulse" />
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "white" }}
          >
            Página em construção
          </h1>

          <p
            className="text-base md:text-lg max-w-md mx-auto mb-8"
            style={{ color: "#9ca3af" }}
          >
            Estamos preparando algo incrível para você. Em breve, nossos
            dispositivos personalizados estarão disponíveis aqui.
          </p>

          {/* Progress bar decorativa */}
          <div className="w-full max-w-xs mx-auto h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#2a2a2a" }}>
            <div
              className="h-full rounded-full animate-pulse"
              style={{ width: "65%", backgroundColor: "#EB1614" }}
            />
          </div>
          <p className="text-xs mt-3" style={{ color: "#6b7280" }}>
            65% concluído
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DispositivosPersonalizados;

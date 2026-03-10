import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load sub-pages (not needed on initial load)
const NotFound = lazy(() => import("./pages/NotFound"));
const SitesEstrategicos = lazy(() => import("./pages/SitesEstrategicos"));
const SistemasPersonalizados = lazy(() => import("./pages/SistemasPersonalizados"));
const AutomacoesIA = lazy(() => import("./pages/AutomacoesIA"));
const DispositivosPersonalizados = lazy(() => import("./pages/DispositivosPersonalizados"));
const PoliticaDePrivacidade = lazy(() => import("./pages/PoliticaDePrivacidade"));
const TermosDeUso = lazy(() => import("./pages/TermosDeUso"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sites-estrategicos" element={<SitesEstrategicos />} />
            <Route path="/sistemas-personalizados" element={<SistemasPersonalizados />} />
            <Route path="/automacoes-ia" element={<AutomacoesIA />} />
            <Route path="/dispositivos-personalizados" element={<DispositivosPersonalizados />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

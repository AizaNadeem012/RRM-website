import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Areas from "./pages/Areas";
import RenderCleaning from "./pages/RenderCleaning";
import RenderCleaningHuyton from "./pages/RenderCleaningHuyton";
import RenderCleaningLiverpool from "./pages/RenderCleaningLiverpool";
import RenderCleaningLymm from "./pages/RenderCleaningLymm";
import ExteriorCleaningHuyton from "./pages/ExteriorCleaningHuyton";
import CladdingCleaningGolborne from "./pages/CladdingCleaningGolborne";
import DrivewayCleaningGolborne from "./pages/DrivewayCleaningGolborne";
import ConservatoryCleaningGolborne from "./pages/ConservatoryCleaningGolborne";
import RoofCleaningGolborne from "./pages/RoofCleaningGolborne";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LocationServicePage from "./pages/seo/LocationServicePage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/render-cleaning-golborne" element={<RenderCleaning />} />
            <Route path="/render-cleaning-huyton" element={<RenderCleaningHuyton />} />
            <Route path="/render-cleaning-liverpool" element={<RenderCleaningLiverpool />} />
            <Route path="/render-cleaning-lymm" element={<RenderCleaningLymm />} />
            <Route path="/exterior-cleaning-companies-huyton" element={<ExteriorCleaningHuyton />} />
            <Route path="/cladding-cleaning-golborne" element={<CladdingCleaningGolborne />} />
            <Route path="/driveway-cleaning-golborne" element={<DrivewayCleaningGolborne />} />
            <Route path="/conservatory-cleaning-golborne" element={<ConservatoryCleaningGolborne />} />
            <Route path="/roof-cleaning-golborne" element={<RoofCleaningGolborne />} />
            <Route path="/contact" element={<Contact />} />
            {/* SEO Location + Service Pages (100+ combinations) */}
            <Route path="/:location/:service" element={<LocationServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

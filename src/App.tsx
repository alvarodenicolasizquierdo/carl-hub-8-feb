import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PresentationProvider } from "@/contexts/PresentationContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { PreviewLayout } from "@/components/layout/PreviewLayout";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import Apps from "./pages/Apps";
import Compare from "./pages/Compare";
import Collateral from "./pages/Collateral";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PresentationProvider>
          <Routes>
            {/* Main layout with sidebar */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/collateral" element={<Collateral />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            {/* Standalone preview — shareable, no sidebar */}
            <Route element={<PreviewLayout />}>
              <Route path="/preview" element={<Index />} />
              <Route path="/preview/demo" element={<Demo />} />
              <Route path="/preview/apps" element={<Apps />} />
              <Route path="/preview/compare" element={<Compare />} />
              <Route path="/preview/collateral" element={<Collateral />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </PresentationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

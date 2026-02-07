import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Home,
  Play,
  LayoutGrid,
  GitCompare,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePresentation } from "@/contexts/PresentationContext";
import sgsLogo from "@/assets/sgs-logo.png";

const SLIDES = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Demo", icon: Play, path: "/demo" },
  { label: "Apps", icon: LayoutGrid, path: "/apps" },
  { label: "Compare", icon: GitCompare, path: "/compare" },
  { label: "Collateral", icon: Download, path: "/collateral" },
];

export function PresentationControls() {
  const { isPresenting, stopPresentation } = usePresentation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = SLIDES.findIndex((s) => s.path === location.pathname);

  const goPrev = () => {
    const prev = currentIndex > 0 ? currentIndex - 1 : SLIDES.length - 1;
    navigate(SLIDES[prev].path);
  };

  const goNext = () => {
    const next = currentIndex < SLIDES.length - 1 ? currentIndex + 1 : 0;
    navigate(SLIDES[next].path);
  };

  return (
    <AnimatePresence>
      {isPresenting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-card/90 backdrop-blur-xl border border-border/40 shadow-2xl px-2 py-1.5"
        >
          {/* Logo */}
          <img src={sgsLogo} alt="SGS" className="h-5 w-auto mx-2" />

          <div className="w-px h-6 bg-border/40" />

          {/* Prev */}
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={goPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Slide indicators */}
          <div className="flex items-center gap-1 px-1">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.path}
                onClick={() => navigate(slide.path)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  i === currentIndex
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                title={slide.label}
              >
                <slide.icon className="h-3.5 w-3.5" />
                {i === currentIndex && <span>{slide.label}</span>}
              </button>
            ))}
          </div>

          {/* Next */}
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={goNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-border/40" />

          {/* Exit */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-muted-foreground hover:text-destructive"
            onClick={stopPresentation}
          >
            <X className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

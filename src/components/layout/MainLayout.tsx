import { AppSidebar } from "./AppSidebar";
import { Footer } from "./Footer";
import { PresentationControls } from "./PresentationControls";
import { AnimatedOutlet } from "./AnimatedOutlet";
import { usePresentation } from "@/contexts/PresentationContext";
export function MainLayout() {
  const { isPresenting } = usePresentation();

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {!isPresenting && <AppSidebar />}
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 overflow-y-auto">
          <AnimatedOutlet />
        </main>
        {!isPresenting && <Footer />}
      </div>
      <PresentationControls />
    </div>
  );
}

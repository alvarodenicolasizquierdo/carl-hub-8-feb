import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Footer } from "./Footer";

export function MainLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

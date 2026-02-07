import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Play,
  LayoutGrid,
  GitCompare,
  Download,
  Settings,
  PanelLeftClose,
  PanelLeft,
  Presentation,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePresentation } from "@/contexts/PresentationContext";
import sgsLogo from "@/assets/sgs-logo.png";

const NAV_ITEMS = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Guided Demo", icon: Play, path: "/demo" },
  { label: "Apps", icon: LayoutGrid, path: "/apps" },
  { label: "Compare", icon: GitCompare, path: "/compare" },
  { label: "Collateral", icon: Download, path: "/collateral" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { startPresentation } = usePresentation();

  return (
    <aside
      className={cn(
        "h-full flex flex-col bg-sgs-dark border-r border-border/20 transition-all duration-300 shrink-0",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-2 px-4 border-b border-border/20">
        <img src={sgsLogo} alt="SGS" className="h-8 w-auto shrink-0" />
        {!collapsed && (
          <span className="font-display font-semibold text-foreground tracking-tight">
            CARLOS
          </span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom: Present + Settings + Collapse */}
      <div className="px-2 pb-4 flex flex-col gap-1">
        {/* Present button */}
        <button
          onClick={startPresentation}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <Presentation className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Present</span>}
        </button>

        <NavLink
          to="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
            location.pathname === "/settings"
              ? "bg-primary/10 text-primary border-l-2 border-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          )}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Settings</span>}
        </NavLink>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
        >
          {collapsed ? (
            <PanelLeft className="w-5 h-5 shrink-0" />
          ) : (
            <>
              <PanelLeftClose className="w-5 h-5 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

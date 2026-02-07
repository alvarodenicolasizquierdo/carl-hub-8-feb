import { getPresenterName } from "@/config/constants";

export function Footer() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="h-8 flex items-center justify-between px-4 bg-sgs-dark text-muted-foreground text-xs shrink-0 border-t border-border/20">
      <span className="tracking-wide uppercase">
        Prototype — Design Vision — Not Production Software
      </span>
      <span>{today}</span>
      <span>Presenter: {getPresenterName()}</span>
    </footer>
  );
}

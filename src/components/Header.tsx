import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/job-seekers" as const, label: "Job Seekers" },
  { to: "/employers" as const, label: "Employers" },
  { to: "/about" as const, label: "About Us" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container-narrow flex h-16 items-center justify-between px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-lg font-bold text-primary-foreground">W</span>
          </div>
          <span className="font-heading text-lg font-semibold text-foreground">
            Workforce<span className="text-primary"> Managing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+18431234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            (843) 123-4567
          </a>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "block rounded-md px-3 py-2.5 text-sm font-medium text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 w-full" asChild>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-emerald-900/95 via-teal-900/95 to-blue-900/95 backdrop-blur-md">
      <div className="container-narrow flex h-16 items-center justify-between px-4 md:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
            <span className="font-heading text-lg font-bold text-white">W</span>
          </div>
          <span className="font-heading text-lg font-semibold text-white">
            Workforce<span className="text-emerald-300"> Managing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-emerald-300" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+18433681883" className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white">
            <Phone className="h-4 w-4" />
            (843) 368-1883
          </a>
          <Button className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-gradient-to-b from-teal-900 to-blue-900 px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "block rounded-md px-3 py-2.5 text-sm font-medium text-emerald-300" }}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 w-full bg-emerald-400 text-emerald-950 hover:bg-emerald-300" asChild>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

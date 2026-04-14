import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-coastal-deep text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/20">
                <span className="font-heading text-sm font-bold">W</span>
              </div>
              <span className="font-heading text-lg font-semibold">Workforce Managing</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Reliable staffing and workforce solutions serving Hilton Head, Bluffton, Beaufort,
              and the Lowcountry.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/services" as const, label: "Services" },
                { to: "/job-seekers" as const, label: "Find a Job" },
                { to: "/employers" as const, label: "Hire Talent" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Industries</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>Hospitality & Tourism</li>
              <li>Construction & Trades</li>
              <li>Administrative & Office</li>
              <li>Warehouse & Logistics</li>
              <li>Healthcare Support</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Hilton Head Island, SC 29928</span>
              </div>
              <a href="tel:+18433681883" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                (843) 368-1883
              </a>
              <a href="mailto:info@workforcemanaging.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                info@workforcemanaging.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Workforce Managing. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Serving Hilton Head · Bluffton · Beaufort · Lowcountry
          </p>
        </div>
      </div>
    </footer>
  );
}

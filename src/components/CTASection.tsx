import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryTo: "/" | "/services" | "/job-seekers" | "/employers" | "/about" | "/contact";
  secondaryLabel?: string;
  secondaryTo?: "/" | "/services" | "/job-seekers" | "/employers" | "/about" | "/contact";
}

export function CTASection({ title, subtitle, primaryLabel, primaryTo, secondaryLabel, secondaryTo }: CTASectionProps) {
  return (
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <Link to={primaryTo}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

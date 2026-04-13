import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Users, Clock, Shield, MapPin, Star, Briefcase, ArrowRight, Building2, HardHat } from "lucide-react";
import heroImage from "@/assets/hero-workforce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workforce Managing — Staffing Agency Hilton Head SC" },
      { name: "description", content: "Reliable workforce solutions in Hilton Head & the Lowcountry. Temporary staffing, temp-to-hire, and direct hire for businesses and job seekers." },
      { property: "og:title", content: "Workforce Managing — Staffing Agency Hilton Head SC" },
      { property: "og:description", content: "Reliable workforce solutions in Hilton Head & the Lowcountry." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const trustSignals = [
  { icon: MapPin, title: "Locally Rooted", desc: "Deep knowledge of the Hilton Head & Lowcountry market" },
  { icon: Clock, title: "Fast Placement", desc: "Qualified candidates ready within 24–48 hours" },
  { icon: Shield, title: "Fully Vetted", desc: "Background checks, skills testing, and reference verification" },
  { icon: Users, title: "Dedicated Support", desc: "A personal account manager for every client" },
];

const testimonials = [
  { name: "Sarah M.", role: "Hotel Operations Manager", text: "Workforce Managing has been our go-to for seasonal staffing. They consistently deliver reliable, hard-working team members." },
  { name: "James T.", role: "General Contractor", text: "Finding skilled tradespeople was always a challenge until we partnered with Workforce Managing. Game changer." },
  { name: "Maria L.", role: "Job Seeker", text: "They helped me find a great position within a week. The team was supportive every step of the way." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Workforce team in Hilton Head" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-coastal-deep/80" />
        </div>
        <div className="container-narrow relative z-10 px-4 py-24 md:px-8 md:py-32 lg:px-16 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Reliable Workforce Solutions in Hilton Head & the Lowcountry
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl leading-relaxed">
              Connecting businesses with qualified talent and helping job seekers find meaningful
              employment across Hilton Head, Bluffton, Beaufort, and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link to="/job-seekers">
                  <Briefcase className="h-5 w-5" />
                  Find a Job
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/employers">
                  <Building2 className="h-5 w-5" />
                  Hire Talent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Staffing Solutions That Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From temporary placements to permanent hires, we provide flexible workforce
              solutions tailored to the Lowcountry's unique needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Temporary Staffing", desc: "Flexible workers for short-term projects and seasonal demands." },
              { icon: ArrowRight, title: "Temp-to-Hire", desc: "Try before you commit with our temp-to-hire program." },
              { icon: Users, title: "Direct Hire", desc: "We find the perfect long-term match for your team." },
              { icon: HardHat, title: "Workforce Management", desc: "End-to-end staffing strategy and on-site coordination." },
            ].map((svc) => (
              <div key={svc.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-coastal-seafoam/50">
                  <svc.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-coastal-sand">
        <div className="container-narrow">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Your Trusted Local Partner</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((t) => (
              <div key={t.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <t.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">What People Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Whether you're looking for top talent or your next career opportunity, we're here to help."
        primaryLabel="Find a Job"
        primaryTo="/job-seekers"
        secondaryLabel="Hire Talent"
        secondaryTo="/employers"
      />
    </>
  );
}

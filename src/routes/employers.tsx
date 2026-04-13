import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { AlertTriangle, TrendingDown, CalendarClock, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Hire Talent in Hilton Head SC — Workforce Managing" },
      { name: "description", content: "Struggling with staffing? Workforce Managing provides reliable temporary, temp-to-hire, and direct hire solutions for Lowcountry businesses." },
      { property: "og:title", content: "Hire Talent — Workforce Managing" },
      { property: "og:description", content: "Reliable staffing solutions for Lowcountry businesses." },
    ],
  }),
  component: EmployersPage,
});

const painPoints = [
  { icon: TrendingDown, title: "High Turnover", desc: "Constantly replacing employees drains time and money." },
  { icon: CalendarClock, title: "Seasonal Demands", desc: "Tourism peaks create urgent staffing needs you can't always predict." },
  { icon: AlertTriangle, title: "Recruitment Burden", desc: "Posting jobs, screening, and interviewing pulls you away from your business." },
];

const solutions = [
  "Pre-screened, background-checked candidates ready to work",
  "Flexible staffing models: temporary, temp-to-hire, or direct placement",
  "Industry-specific expertise in hospitality, construction, and more",
  "Dedicated account manager who understands your business",
  "Rapid response—qualified workers within 24–48 hours",
  "Payroll, compliance, and workers' comp handled by us",
];

function EmployersPage() {
  return (
    <>
      <section className="bg-coastal-sand section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">For Employers</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            The Workforce You Need, When You Need It
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Stop struggling with staffing shortages. We deliver qualified, reliable workers
            so you can focus on running your business.
          </p>
          <Button size="lg" className="mt-8 gap-2" asChild>
            <Link to="/contact">
              Request Employees
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold text-foreground">Common Challenges We Solve</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="rounded-xl border border-border p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
                  <p.icon className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-coastal-sand">
        <div className="container-narrow lg:flex lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Solutions</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">How We Help Your Business Thrive</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We take the hassle out of hiring so you can focus on what matters most—growing your business
              and serving your customers across Hilton Head and the Lowcountry.
            </p>
          </div>
          <div className="mt-8 flex-1 lg:mt-0">
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Solve Your Staffing Challenges"
        subtitle="Get a free consultation and find out how we can support your workforce needs."
        primaryLabel="Get a Consultation"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  );
}

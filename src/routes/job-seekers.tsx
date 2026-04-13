import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, Briefcase, Heart, TrendingUp, DollarSign, ClipboardList, UserCheck, Send } from "lucide-react";

export const Route = createFileRoute("/job-seekers")({
  head: () => ({
    meta: [
      { title: "Find a Job in Hilton Head SC — Workforce Managing" },
      { name: "description", content: "Looking for employment in Hilton Head, Bluffton, or Beaufort? Browse job categories and apply today with Workforce Managing." },
      { property: "og:title", content: "Find a Job — Workforce Managing" },
      { property: "og:description", content: "Local employment opportunities in the Lowcountry." },
    ],
  }),
  component: JobSeekersPage,
});

const steps = [
  { icon: ClipboardList, title: "Apply", desc: "Submit your application online or visit our office." },
  { icon: UserCheck, title: "Get Matched", desc: "We match your skills and preferences to open positions." },
  { icon: Send, title: "Start Working", desc: "Begin your new role—we support you every step of the way." },
];

const categories = [
  "Hospitality & Tourism", "Construction & Skilled Trades", "Administrative & Office",
  "Warehouse & Logistics", "Healthcare Support", "Retail & Customer Service",
  "Food Service & Catering", "Property Maintenance",
];

const benefits = [
  { icon: DollarSign, text: "Competitive pay rates" },
  { icon: Heart, text: "Supportive, personal service" },
  { icon: Briefcase, text: "Variety of job types and schedules" },
  { icon: TrendingUp, text: "Opportunities for temp-to-hire conversion" },
];

function JobSeekersPage() {
  return (
    <>
      <section className="bg-coastal-sand section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Job Seekers</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Your Next Opportunity Starts Here
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you're looking for temporary work, a career change, or your first job in the
            Lowcountry, we'll help you find the right fit.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold text-foreground">How It Works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 text-3xl font-bold text-primary/30">{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-coastal-sand">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold text-foreground">Job Categories</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            We place workers across a wide range of industries throughout Hilton Head, Bluffton, Beaufort, and the Lowcountry.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold text-foreground">Why Work With Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-start gap-3 rounded-xl border border-border p-5">
                <b.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Next Role?"
        subtitle="Apply today and let us connect you with great employers in the Lowcountry."
        primaryLabel="Apply Now"
        primaryTo="/contact"
      />
    </>
  );
}

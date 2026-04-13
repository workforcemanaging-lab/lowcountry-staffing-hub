import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { Clock, ArrowRight, Users, HardHat, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Staffing Services — Workforce Managing | Hilton Head SC" },
      { name: "description", content: "Temporary staffing, temp-to-hire, direct hire, and workforce management solutions for Hilton Head and the Lowcountry." },
      { property: "og:title", content: "Staffing Services — Workforce Managing" },
      { property: "og:description", content: "Flexible workforce solutions for every business need in the Lowcountry." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Clock,
    title: "Temporary Staffing",
    desc: "Need workers fast? Our temporary staffing solutions provide qualified, vetted employees for short-term projects, seasonal peaks, and unexpected vacancies.",
    benefits: ["Rapid deployment within 24–48 hours", "Pre-screened and background-checked workers", "Flexible durations from one day to several months", "No long-term commitment required"],
    audience: "Ideal for hospitality businesses during peak tourism season, construction projects with tight deadlines, and companies covering employee leave.",
  },
  {
    icon: ArrowRight,
    title: "Temp-to-Hire",
    desc: "Not sure if a candidate is the right fit? Our temp-to-hire program lets you evaluate workers on the job before making a permanent offer.",
    benefits: ["Risk-free hiring with a trial period", "Seamless transition to full-time employment", "Reduced turnover and better cultural fit", "We handle payroll and benefits during the trial"],
    audience: "Perfect for growing businesses that want to ensure the right fit before committing, and for job seekers looking for a path to permanent employment.",
  },
  {
    icon: Users,
    title: "Direct Hire",
    desc: "When you know exactly what you need, our direct hire service delivers top-tier candidates who are ready to join your team permanently.",
    benefits: ["Access to our extensive local talent network", "Thorough screening and skills assessment", "Industry-specific recruitment expertise", "Guaranteed placement satisfaction"],
    audience: "Best for companies filling critical roles in management, skilled trades, healthcare support, and administrative leadership.",
  },
  {
    icon: HardHat,
    title: "Workforce Management Solutions",
    desc: "Beyond placement, we provide comprehensive workforce management including on-site coordination, scheduling, compliance, and performance monitoring.",
    benefits: ["Dedicated on-site workforce coordinator", "Attendance tracking and reporting", "Safety compliance and training", "Scalable workforce planning"],
    audience: "Designed for large-scale operations, construction sites, resort properties, and businesses managing teams of 10+ temporary employees.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coastal-sand section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Staffing Solutions for Every Need
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From temporary placements to full workforce management, we deliver flexible solutions
            tailored to the Lowcountry's unique business landscape.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-narrow space-y-16">
          {services.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col gap-8 lg:flex-row lg:items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-coastal-seafoam/50">
                  <svc.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{svc.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{svc.desc}</p>
                <p className="mt-4 text-sm text-muted-foreground italic">{svc.audience}</p>
              </div>
              <div className="flex-1 rounded-xl border border-border bg-muted/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Key Benefits</h3>
                <ul className="mt-4 space-y-3">
                  {svc.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Let's Find the Right Solution for You"
        subtitle="Contact us today to discuss your staffing needs and get a customized plan."
        primaryLabel="Request a Consultation"
        primaryTo="/contact"
        secondaryLabel="View Open Positions"
        secondaryTo="/job-seekers"
      />
    </>
  );
}

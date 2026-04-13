import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { Heart, Users, MapPin, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Workforce Managing | Hilton Head SC" },
      { name: "description", content: "Learn about Workforce Managing's mission, local roots, and commitment to the Hilton Head and Lowcountry community." },
      { property: "og:title", content: "About Us — Workforce Managing" },
      { property: "og:description", content: "Locally rooted workforce solutions in the Lowcountry." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "People First", desc: "Every placement starts with understanding the human behind the résumé and the culture behind the company." },
  { icon: MapPin, title: "Locally Invested", desc: "We live and work here. Our success is tied to the success of Lowcountry businesses and families." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of service, integrity, and professionalism." },
  { icon: Users, title: "Community Impact", desc: "We're committed to workforce development programs that uplift underserved communities in our region." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-coastal-sand section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Built for the Lowcountry
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Workforce Managing was founded with a simple mission: connect great people with great
            opportunities, right here in our community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow lg:flex lg:gap-16 lg:items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Workforce Managing, we believe that the right job changes lives and the right team
              transforms businesses. Our mission is to bridge the gap between talented job seekers
              and the employers who need them most in Hilton Head Island, Bluffton, Beaufort, and
              the surrounding Lowcountry communities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're not a faceless national agency. We're your neighbors, deeply embedded in the
              local economy and invested in seeing our region thrive. From hospitality and tourism
              to construction and healthcare, we understand the industries that power the Lowcountry.
            </p>
          </div>
          <div className="mt-8 flex-1 rounded-xl bg-coastal-sand p-8 lg:mt-0">
            <h3 className="text-xl font-semibold text-foreground">Local Roots, Real Results</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Workers placed annually</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client satisfaction rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24hr</p>
                <p className="text-sm text-muted-foreground">Average placement time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Industries served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-sand">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-bold text-foreground">Our Values</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Mission"
        subtitle="Whether you're looking for work or looking for workers, let's build the Lowcountry together."
        primaryLabel="Find a Job"
        primaryTo="/job-seekers"
        secondaryLabel="Hire Talent"
        secondaryTo="/employers"
      />
    </>
  );
}

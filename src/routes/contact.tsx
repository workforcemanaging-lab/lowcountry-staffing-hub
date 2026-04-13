import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Workforce Managing | Hilton Head SC" },
      { name: "description", content: "Get in touch with Workforce Managing. Contact us for staffing solutions or employment opportunities in Hilton Head and the Lowcountry." },
      { property: "og:title", content: "Contact Us — Workforce Managing" },
      { property: "og:description", content: "Reach out for staffing solutions in the Lowcountry." },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Hilton Head Island, SC 29928" },
  { icon: Phone, label: "Phone", value: "(843) 123-4567", href: "tel:+18431234567" },
  { icon: Mail, label: "Email", value: "info@workforcemanaging.com", href: "mailto:info@workforcemanaging.com" },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri: 8AM – 5PM EST" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-coastal-sand section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact Us</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Let's Talk
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ready to solve your staffing challenges or find your next job? Reach out and we'll
            get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow lg:flex lg:gap-16">
          {/* Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="rounded-xl border border-accent bg-coastal-seafoam/30 p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Thank You!</h2>
                <p className="mt-3 text-muted-foreground">
                  We've received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="John Smith" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(843) 555-0000" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="interest">I'm interested in…</Label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select an option</option>
                    <option value="hiring">Hiring employees for my business</option>
                    <option value="job">Finding a job</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help…" className="mt-1.5" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex-shrink-0 lg:mt-0 lg:w-80">
            <div className="rounded-xl border border-border bg-muted/50 p-6 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-foreground hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-sm text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Hilton Head Island Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107644.47934809478!2d-80.82!3d32.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc7b66e4b3df43%3A0xc4d5e5efbc7f7ed8!2sHilton%20Head%20Island%2C%20SC!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

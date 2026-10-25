import { ArrowRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/content";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak to us about enrolment or partnering with your ECD.",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we will get back to you.",
    value: site.email,
    href: site.emailHref,
  },
];

export const metadata = {
  title: "Contact | Thuto Ke Bokamoso",
  description: "Get in touch to enrol your child or partner with us.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        badge="Get In Touch"
        title="Contact Us"
        description="Ready to start? Reach out and let’s build a brighter tomorrow together."
      />

      {/* Contact method cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {contactMethods.map((method, index) => (
          <Card
            key={method.title}
            className="animate-route-enter"
            style={{ animationDelay: `${180 + index * 100}ms` }}
          >
            <CardHeader>
              <span className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <method.icon className="size-6" aria-hidden />
              </span>
              <CardTitle className="text-xl">{method.title}</CardTitle>
              <CardDescription>{method.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a href={method.href}>
                  {method.value}
                  <ArrowRight data-icon="inline-end" aria-hidden />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enrolment call to action */}
      <section
        aria-labelledby="contact-cta-heading"
        className="animate-route-enter mt-14 flex flex-col items-center gap-4 rounded-4xl bg-primary px-8 py-10 text-center text-primary-foreground"
        style={{ animationDelay: "450ms" }}
      >
        <h2
          id="contact-cta-heading"
          className="font-heading text-2xl font-semibold text-balance sm:text-3xl"
        >
          Small Coders, Big Dreams
        </h2>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="bg-orange brightness-110 dark:bg-orange/90"
        >
          <a href={site.emailHref}>
            Enrol Your Child
            <ArrowRight data-icon="inline-end" aria-hidden />
          </a>
        </Button>
      </section>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { benefits } from "@/lib/content";

export const metadata = {
  title: "Benefits | Thuto Ke Bokamoso",
  description:
    "Confidence, problem-solving, future readiness, and fun learning for every child.",
};

export default function BenefitsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        badge="Why It Matters"
        title="Key Benefits"
        description="Every lesson builds more than technical skill — it builds character."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card
            key={benefit.title}
            size="sm"
            className="animate-route-enter"
            style={{ animationDelay: `${180 + index * 90}ms` }}
          >
            <CardContent className="flex flex-col gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <benefit.icon className="size-5" />
              </span>
              <h2 className="font-heading text-base font-semibold">
                {benefit.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className="animate-route-enter mt-14 flex flex-col items-center gap-2 rounded-4xl bg-primary px-8 py-10 text-center text-primary-foreground"
        style={{ animationDelay: "600ms" }}
      >
        <p className="font-heading text-2xl font-semibold text-balance sm:text-3xl">
          “Today a learner, Tomorrow a leader!”
        </p>
        <p className="text-sm text-primary-foreground/80">
          Join us in shaping the next generation of creators.
        </p>
      </div>
    </section>
  );
}

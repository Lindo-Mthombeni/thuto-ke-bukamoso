import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Our Programs | Thuto Ke Bokamoso",
  description:
    "ECD partnerships and individual teaching that bring digital skills to children.",
};

export default function ProgramsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        badge="Our Services"
        title="Our Programs"
        description="Flexible ways to bring digital skills to the children in your community."
      />

      {/* Program offering cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {programs.map((program, index) => (
          <Card
            key={program.title}
            className="animate-route-enter transition-shadow hover:shadow-lg"
            style={{ animationDelay: `${180 + index * 100}ms` }}
          >
            <CardHeader>
              <span className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <program.icon className="size-6" aria-hidden />
              </span>
              <CardTitle className="text-xl">{program.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {program.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { curriculum } from "@/lib/content";

export const metadata = {
  title: "Curriculum | Thuto Ke Bokamoso",
  description:
    "Hands-on coding, computer literacy, and engaging classes for children aged 5 – 10.",
};

export default function CurriculumPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        badge="Curriculum & Target Age"
        title={
          <>
            We teach children aged{" "}
            <span className="text-primary">5 – 10 years</span>
          </>
        }
        description="A playful, hands-on curriculum built around curiosity and creativity."
      />

      {/* Curriculum topic cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {curriculum.map((item, index) => (
          <Card
            key={item.title}
            size="sm"
            className="animate-route-enter bg-background"
            style={{ animationDelay: `${180 + index * 100}ms` }}
          >
            <CardHeader>
              <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

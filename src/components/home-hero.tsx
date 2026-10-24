import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  // Heart,
  // Lightbulb,
  Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { HeroCodeSection } from "./hero-code-section";

const highlights = ["Ages 5 – 10", "ECD Partnerships", "Individual Teaching"];

const letterTilts = [-5, 4, -3, 6, -6, 3, -4, 5, -2, 2];
const letterColors = ["text-yellow", "text-green", "text-orange", "text-blue"];

function getLetterColor(index: number) {
  return letterColors[Math.floor(index / 5) % letterColors.length];
}

function LiftWord({
  text,
  startIndex = 0,
}: {
  text: string;
  startIndex?: number;
}) {
  return (
    <span className="inline-block">
      {Array.from(text).map((letter, index) => {
        const position = startIndex + index;

        return (
          <span
            key={`${letter}-${index}`}
            className="group/letter inline-block"
            style={
              {
                "--letter-tilt": `${letterTilts[position % letterTilts.length]}deg`,
              } as CSSProperties
            }
          >
            <span
              className={cn(
                "inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/letter:translate-y-[-0.18em] group-hover/letter:rotate-(--letter-tilt) motion-reduce:transition-none motion-reduce:group-hover/letter:translate-y-0 motion-reduce:group-hover/letter:rotate-0",
                getLetterColor(position),
              )}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function HomeHero() {
  return (
    <section className="px-3 py-3 sm:px-5 sm:py-5">
      <div className="relative isolate mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-navy sm:rounded-[2.75rem]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.28),transparent_45%)]"
        />
        <div
          aria-hidden
          className="absolute -top-32 right-0 size-128 rounded-full bg-cyan-300/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 left-1/4 size-120 rounded-full bg-fuchsia-400/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[56px_56px]"
        />

        <div className="relative grid items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-14 lg:py-24">
          <div className="flex max-w-2xl flex-col items-start gap-6 text-primary-foreground">
            <div
              className="animate-route-enter space-y-5"
              style={{ animationDelay: "100ms" }}
            >
              <h1 className="font-heading text-4xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                <LiftWord text="Learning." startIndex={0} />{" "}
                <LiftWord text="Coding." startIndex={9} />{" "}
                <LiftWord text="Creating." startIndex={16} />
                <br />
                <LiftWord text="A" startIndex={25} />{" "}
                <LiftWord text="Brighter" startIndex={26} />{" "}
                <LiftWord text="Tomorrow!" startIndex={34} />
              </h1>
              <p className="font-heading text-xs font-semibold tracking-[0.32em] text-white/70 uppercase">
                Small Coders, Big Dreams
              </p>
            </div>

            <p
              className="animate-route-enter max-w-lg text-base leading-relaxed text-white/80 text-pretty sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              {site.subTagline}. We introduce children aged 5–10 to the joy of
              coding and digital skills through playful, hands-on lessons.
            </p>

            <div
              className="animate-route-enter flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-2 pl-5 text-primary hover:bg-white/90"
              >
                <a href={site.emailHref}>
                  Enrol Your Child
                  <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ArrowRight className="size-4" />
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/30 bg-white/5 px-5 text-white hover:bg-white/15 hover:text-white"
              >
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>

            <div
              className="animate-route-enter flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/75"
              style={{ animationDelay: "400ms" }}
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 font-heading"
                >
                  <CheckCircle2 className="size-4 text-cyan-200" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            className="animate-route-enter-scale relative mx-auto w-full max-w-md pb-8 lg:pb-0"
            style={{ animationDelay: "250ms" }}
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"
            />

            <HeroCodeSection />

            <div className="absolute -top-5 -left-4 flex items-center gap-2 rounded-2xl bg-background px-3.5 py-2.5 shadow-xl sm:-left-8">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Code2 className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="font-heading text-sm font-semibold text-foreground">
                  Ages 5–10
                </p>
                <p className="text-[0.65rem] text-muted-foreground">
                  Small coders welcome
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -bottom-2 flex items-center gap-3 rounded-2xl bg-background p-3 shadow-xl sm:-right-6">
              <div className="flex -space-x-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-primary">
                  <Rocket className="size-3.5" />
                </span>
              </div>
              <div className="leading-tight">
                <p className="font-heading text-lg font-semibold text-foreground">
                  Big Dreams
                </p>
                <p className="text-[0.65rem] text-muted-foreground">
                  Confidence • Creativity • Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

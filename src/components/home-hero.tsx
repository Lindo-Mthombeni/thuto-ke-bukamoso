import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  // Heart,
  // Lightbulb,
  Rocket,
} from "lucide-react";

import girlCodingImage from "@/assets/girl-coding-image.webp";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { HeroCodeFigure } from "./hero-code-section";

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
    <section
      aria-labelledby="home-hero-heading"
      className="px-3 py-3 sm:px-5 sm:py-5"
    >
      <div className="animate-hero-grow relative isolate mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-navy sm:rounded-[2.75rem]">
        <Image
          src={girlCodingImage}
          alt=""
          aria-hidden
          fill
          priority
          sizes="(min-width: 80rem) 80rem, 100vw"
          className="animate-hero-bg object-cover object-center"
        />
        {/* Overlay to keep the foreground content readable */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-navy/70 via-navy/60 to-navy/20"
        />
        <div aria-hidden className="absolute inset-0 bg-navy/20" />

        <div className="relative grid items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-14 lg:py-24">
          <div className="flex max-w-2xl flex-col items-start gap-6 text-primary-foreground">
            <header
              className="animate-route-enter space-y-5"
              style={{ animationDelay: "100ms" }}
            >
              <h1
                id="home-hero-heading"
                className="font-heading text-4xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
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
            </header>

            <p
              className="animate-route-enter max-w-lg text-base leading-relaxed text-white/80 text-pretty sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              {site.subTagline}. We introduce children aged 5–10 to the joy of
              coding and digital skills through playful, hands-on lessons.
            </p>

            {/* Primary and secondary calls to action */}
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
                    <ArrowRight className="size-4" aria-hidden />
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

            {/* Offering highlights */}
            <ul
              className="animate-route-enter flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/75"
              style={{ animationDelay: "400ms" }}
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 font-heading"
                >
                  <CheckCircle2 className="size-4 text-cyan-200" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating code editor preview with achievement card */}
          <div
            className="animate-route-enter-scale relative mx-auto w-full max-w-md pb-8 lg:pb-0"
            style={{ animationDelay: "250ms" }}
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"
            />

            <HeroCodeFigure />

            <div className="absolute -right-3 -bottom-2 flex items-center gap-3 rounded-2xl bg-background p-3 shadow-xl sm:-right-6">
              <div className="flex -space-x-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-primary">
                  <Rocket className="size-3.5" aria-hidden />
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

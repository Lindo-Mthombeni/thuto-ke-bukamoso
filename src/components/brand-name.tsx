import { cn } from "@/lib/utils";

const bokamosoColors = [
  "text-blue",
  "text-yellow",
  "text-green",
  "text-orange",
  "text-green",
  "text-orange",
  "text-blue",
  "text-yellow",
];

export function BrandName({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex flex-wrap items-baseline gap-x-2", className)}
    >
      <span className="text-foreground">THUTO KE</span>
      <span className="inline-flex">
        <span className="sr-only">BOKAMOSO</span>
        {Array.from("BOKAMOSO").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={bokamosoColors[index]}
            aria-hidden
          >
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}

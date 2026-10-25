import { Star } from "lucide-react";

export function HeroCodeFigure() {
  return (
    <figure className="relative rotate-1 rounded-[1.75rem] bg-white/15 p-1.5 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 hover:rotate-0">
      <figcaption className="sr-only">
        Example of a child&apos;s first Python program
      </figcaption>

      <div className="overflow-hidden rounded-[1.35rem] bg-[#0b1026]">
        {/* Editor window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span aria-hidden className="size-2.5 rounded-full bg-red-400" />
          <span aria-hidden className="size-2.5 rounded-full bg-amber-300" />
          <span aria-hidden className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[0.65rem] tracking-wide text-white/40">
            my_first_program.py
          </span>
        </div>

        {/* Sample code a child would write */}
        <pre className="p-5 font-mono text-xs leading-6 sm:text-sm">
          <code className="block space-y-1.5 whitespace-normal">
            <span className="block">
              <span className="text-fuchsia-300">name</span>
              <span className="text-white/50"> = </span>
              <span className="text-amber-200">&quot;Future Coder&quot;</span>
            </span>
            <span className="block">
              <span className="text-cyan-300">print</span>
              <span className="text-white/50">(</span>
              <span className="text-amber-200">&quot;Hello, world!&quot;</span>
              <span className="text-white/50">)</span>
            </span>
            <span className="block pt-2 text-white/35">
              # dream big, build bigger
            </span>
            <span className="block">
              <span className="text-fuchsia-300">for</span>
              <span className="text-white/60"> day </span>
              <span className="text-fuchsia-300">in</span>
              <span className="text-white/60"> week:</span>
            </span>
            <span className="block">
              <span className="whitespace-pre">{"    "}</span>
              <span className="text-cyan-300">learn</span>
              <span className="text-white/50">(</span>
              <span className="text-emerald-300">code</span>
              <span className="text-white/50">, </span>
              <span className="text-emerald-300">create</span>
              <span className="text-white/50">)</span>
            </span>
          </code>
        </pre>

        {/* Lesson-complete toast */}
        <div className="flex items-center gap-2 border-t border-white/10 bg-white/5 px-4 py-3 text-xs text-emerald-200">
          <span className="flex size-5 items-center justify-center rounded-full bg-emerald-400/20">
            <Star className="size-3" aria-hidden />
          </span>
          Lesson complete — badge unlocked!
        </div>
      </div>
    </figure>
  );
}

import { Star } from "lucide-react";

export function HeroCodeSection() {
  return (
    <div className="relative rotate-1 rounded-[1.75rem] bg-white/15 p-1.5 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 hover:rotate-0">
      <div className="overflow-hidden rounded-[1.35rem] bg-[#0b1026]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[0.65rem] tracking-wide text-white/40">
            my_first_program.py
          </span>
        </div>

        <div className="space-y-1.5 p-5 font-mono text-xs leading-6 sm:text-sm">
          <p>
            <span className="text-fuchsia-300">name</span>
            <span className="text-white/50"> = </span>
            <span className="text-amber-200">&quot;Future Coder&quot;</span>
          </p>
          <p>
            <span className="text-cyan-300">print</span>
            <span className="text-white/50">(</span>
            <span className="text-amber-200">&quot;Hello, world!&quot;</span>
            <span className="text-white/50">)</span>
          </p>
          <p className="pt-2 text-white/35"># dream big, build bigger</p>
          <p>
            <span className="text-fuchsia-300">for</span>
            <span className="text-white/60"> day </span>
            <span className="text-fuchsia-300">in</span>
            <span className="text-white/60"> week:</span>
          </p>
          <p className="pl-4">
            <span className="text-cyan-300">learn</span>
            <span className="text-white/50">(</span>
            <span className="text-emerald-300">code</span>
            <span className="text-white/50">, </span>
            <span className="text-emerald-300">create</span>
            <span className="text-white/50">)</span>
          </p>
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 bg-white/5 px-4 py-3 text-xs text-emerald-200">
          <span className="flex size-5 items-center justify-center rounded-full bg-emerald-400/20">
            <Star className="size-3" />
          </span>
          Lesson complete — badge unlocked!
        </div>
      </div>
    </div>
  );
}

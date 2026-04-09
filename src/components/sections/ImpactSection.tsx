import { Reveal } from "@/components/Reveal";

export function ImpactSection() {
  return (
    <section id="impact" className="mt-16">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <p className="text-xs font-semibold tracking-[0.22em] text-zinc-700/80">
            WHY IT MATTERS
          </p>
          <h2 className="mt-2 font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-5xl">
            Our Commitment to Their Future
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-800/90">
            Thanks to your generous support, the camp has been successfully
            conducted over the past two years. We look forward to your continued
            encouragement in making this year’s camp impactful as well.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
              <p className="text-xs font-semibold text-zinc-600">Budget</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-900">
                ₹2,25,000
              </p>
              <p className="mt-2 text-xs leading-6 text-zinc-600">
                Inclusive of food, learning materials and resource person fees
              </p>
            </Reveal>
            <Reveal className="rounded-3xl bg-[#2F5D46] p-6 text-white shadow-sm ring-1 ring-black/10">
              <p className="text-xs font-semibold text-white/80">
                Support required
              </p>
              <p className="mt-2 text-2xl font-semibold">₹4,500</p>
              <p className="mt-1 text-xs font-semibold text-white/80">
                per child
              </p>
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "100%", v: "Funds directed to camp needs" },
              { k: "50", v: "Children supported" },
              { k: "10", v: "Camp days" },
              { k: "2+", v: "Years successfully conducted" },
            ].map((s) => (
              <Reveal
                key={s.v}
                className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10"
              >
                <p className="text-2xl font-semibold text-zinc-900">{s.k}</p>
                <p className="mt-2 text-xs font-semibold text-zinc-600">
                  {s.v}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


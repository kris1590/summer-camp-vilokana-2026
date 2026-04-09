import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="grid gap-10 lg:grid-cols-12 lg:items-center"
    >
      <Reveal className="lg:col-span-6">
        <p className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 ring-1 ring-zinc-900/10">
          Support Swaroopa Summer Camp (2026)
        </p>

        <h1 className="mt-5 font-(--font-serif) text-5xl leading-[0.92] tracking-[-0.02em] text-zinc-950 text-center sm:text-left   sm:text-7xl">
          Empower a <span className="italic text-[#2F5D46]">Rural</span> Child
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-800/90 sm:text-[17px]">
          A 10-day residential camp for rural children from HD Kote taluk, Mysore
          district (20th April to 30th April 2026). Designed to provide
          meaningful learning experiences for 50 children from deserving
          backgrounds studying in government and rural private schools.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#donate"
            className="inline-flex items-center justify-center rounded-full bg-[#2F5D46] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#284D3B] focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          >
            Support the camp
          </a>
          <a
            href="#focus"
            className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          >
            Explore focus areas
          </a>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-6">
        <div className="relative overflow-hidden rounded-[28px] bg-white p-3 ring-1 ring-zinc-900/10">
          <div className="relative overflow-hidden rounded-[22px] bg-white">
            <picture>
              <source
                type="image/webp"
                srcSet={[
                  "/assets/gallery-clean/4.sm.webp 720w",
                  "/assets/gallery-clean/4.md.webp 1200w",
                  "/assets/gallery-clean/4.lg.webp 1800w",
                ].join(", ")}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/gallery-clean/4.lg.jpg"
                srcSet={[
                  "/assets/gallery-clean/4.sm.jpg 720w",
                  "/assets/gallery-clean/4.md.jpg 1200w",
                  "/assets/gallery-clean/4.lg.jpg 1800w",
                ].join(", ")}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Swaroopa Summer Camp"
                className="h-[260px] w-full object-cover sm:h-[340px]"
              />
            </picture>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { k: "20–30 Apr", v: "Dates" },
            { k: "HD Kote", v: "Location" },
            { k: "₹4,500", v: "Per child" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl bg-white/65 p-4 ring-1 ring-zinc-900/10"
            >
              <p className="text-sm font-semibold text-zinc-900">{s.k}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-600">{s.v}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}


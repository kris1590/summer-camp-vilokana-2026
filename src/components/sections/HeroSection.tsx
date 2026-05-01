import { Reveal } from "@/components/Reveal";

export function HeroSection() {
  const locationMapUrl =
    "https://www.google.com/maps/place/ANVAYA+PUBLIC+HIGH+SCHOOL,+KOHALA+VILLAGE,+MYSORE/@12.1339428,76.4906198,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf610a60d100cb:0x12c19df52e39e5a2!8m2!3d12.1339428!4d76.4931947!16s%2Fg%2F11vdzv8g_9?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section
      id="hero"
      className="grid gap-10 lg:grid-cols-12 lg:items-center"
    >
      <Reveal className="lg:col-span-6">
        <div className="flex justify-center sm:block">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 ring-1 ring-zinc-900/10">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Camp In Progress · Apr 20–30, 2026
          </p>
        </div>

        <h1 className="mt-5 font-(--font-serif) text-5xl leading-[0.92] tracking-[-0.02em] text-zinc-950 text-center sm:text-left   sm:text-7xl">
          Empower a <span className="italic text-[#2F5D46]">Rural</span> Child
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-800/90 sm:text-[17px] text-justify">
          Swaroopa Summer Camp 2026 is currently underway; a 10-day residential
          experience for ~40 rural children from HD Kote taluk, Mysore district.
          Follow the journey as it unfolds through nature walks, science
          experiments, theatre, and more.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full bg-[#2F5D46] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#284D3B] focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          >
            See camp progress
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
          <div className="rounded-2xl bg-white/65 p-4 ring-1 ring-zinc-900/10">
            <p className="text-sm font-semibold text-zinc-900">23 Apr – 3 May</p>
            <p className="mt-1 text-xs font-semibold text-zinc-600">Dates</p>
          </div>

          <a
            href={locationMapUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white/65 p-4 ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
            aria-label="Open location in Google Maps"
          >
            <p className="text-sm font-semibold text-zinc-900">
              HD Kote{" "}
              <span className="align-middle text-xs font-semibold text-zinc-600 group-hover:text-zinc-900">
                ↗
              </span>
            </p>
            <p className="mt-1 text-xs font-semibold text-zinc-600">Location</p>
          </a>

          <div className="rounded-2xl bg-white/65 p-4 ring-1 ring-zinc-900/10">
            <p className="text-sm font-semibold text-zinc-900">₹4,500</p>
            <p className="mt-1 text-xs font-semibold text-zinc-600">
              Per child
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


import { GalleryCarousel } from "@/components/GalleryCarousel";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F2D6] text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-900/10 bg-[#F7F2D6]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#" className="group min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-900">
              Vilokana Foundation
            </p>
          </a>

          <nav className="flex shrink-0 items-center gap-2">
            <MobileNav
              links={[
                { href: "#hero", label: "Home" },
                { href: "#focus", label: "Focus areas" },
                { href: "#impact", label: "Impact" },
                { href: "#donate", label: "Donate" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Get in touch" },
              ]}
            />
            <a
              href="#donate"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
            >
              Donate
            </a>
            <a
              href="#focus"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
            >
              Focus
            </a>
            <a
              href="#impact"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
            >
              Impact
            </a>
            <a
              href="#gallery"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
            >
              Gallery
            </a>
            <a
              href="#donate"
              className="inline-flex items-center justify-center rounded-full bg-[#2F5D46] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#284D3B] focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
            >
              Donate now
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <section id="hero" className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 ring-1 ring-zinc-900/10">
              Support Swaroopa Summer Camp (2026)
            </p>

            <h1 className="mt-5 font-(--font-serif) text-5xl leading-[0.92] tracking-[-0.02em] text-zinc-950 text-center sm:text-left   sm:text-7xl">
              Empower a{" "}
              <span className="italic text-[#2F5D46]">Rural</span> Child

            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-800/90 sm:text-[17px]">
              A 10-day residential camp for rural children from HD Kote taluk,
              Mysore district (20th April to 30th April 2026). Designed to
              provide meaningful learning experiences for 50 children from
              deserving backgrounds studying in government and rural private
              schools.
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
                  <p className="mt-1 text-xs font-semibold text-zinc-600">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* About section removed as requested */}

        <section id="focus" className="mt-16">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.22em] text-zinc-700/80">
              WHAT WE DO
            </p>
            <h2 className="mt-2 text-center font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-5xl">
              Focus Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-zinc-800/90">
              Making learning joyful, concept-strong, and confidence-building
              through participation, exploration, and collaboration.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Maths & Science",
                desc: "Make maths and science more interesting for children through activity based learning.",
                badge: "1",
              },
              {
                title: "Academic Foundation",
                desc: "Facilitate the understanding of certain essential concepts that will strengthen high school academic learning.",
                badge: "2",
              },
              {
                title: "Theatre & Life Skills",
                desc: "Develop life skills through theatre and group activities.",
                badge: "3",
              },
            ].map((c) => (
              <Reveal key={c.title} className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E2C4] text-sm font-semibold text-zinc-800 ring-1 ring-zinc-900/10">
                    {c.badge}
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">
                    {c.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

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
                conducted over the past two years. We look forward to your
                continued encouragement in making this year’s camp impactful as
                well.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Reveal className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
                  <p className="text-xs font-semibold text-zinc-600">Budget</p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-900">
                    ₹2,25,000
                  </p>
                  <p className="mt-2 text-xs leading-6 text-zinc-600">
                    Inclusive of food, learning materials and resource person
                    fees
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
                  <Reveal key={s.v} className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
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

        <section id="donate" className="mt-16">
          <Reveal className="rounded-3xl bg-[#F3EECF] p-6 ring-1 ring-zinc-900/10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-center text-xs font-semibold tracking-[0.22em] text-zinc-700/80 sm:text-left">
                  DONATE
                </p>
                <h2 className="mt-2 text-center font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-left sm:text-5xl">
                  Make a Difference Today
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-800/90">
                  Budget: ₹2,25,000 (inclusive of food, learning materials and
                  resource person fees). Support required: ₹4,500 per child.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold text-zinc-900">Bank Details</p>
                <div className="mt-3 grid gap-2 text-sm text-zinc-700">
                  <p>
                    <span className="font-semibold text-zinc-900">
                      Vilokana Foundation
                    </span>
                  </p>
                  <p>
                    A/C No: <span className="font-semibold">110173165126</span>
                  </p>
                  <p>
                    Canara Bank, Kuvempunagar Branch, Mysore
                  </p>
                  <p>
                    IFSC: <span className="font-semibold">CNRB0011717</span>
                  </p>
                  <p>
                    UPI ID:{" "}
                    <span className="font-semibold break-all">
                      324235855165126@cnrb
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-white p-5 ring-1 ring-zinc-900/10">
                  <p className="text-xs font-semibold tracking-wide text-zinc-600">
                    Scan & Pay
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">
                    UPI scanner
                  </p>
                  <div className="mt-4 rounded-2xl bg-[#F7F2D6] p-4 ring-1 ring-zinc-900/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/qr.png"
                      alt="UPI QR code to donate"
                      className="mx-auto h-auto w-full max-w-[360px] rounded-2xl bg-white p-3 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="gallery" className="mt-16">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.22em] text-zinc-700/80">
              GALLERY
            </p>
            <h2 className="mt-2 text-center font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-5xl">
              Camp moments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-zinc-800/90">
              Glimpses from previous camps.
            </p>
          </Reveal>

          <GalleryCarousel
            className="mt-5"
            items={[
              { id: "4", label: "Camp moments" },
              { id: "1", label: "Camp moments" },
              { id: "2", label: "Camp moments" },
              { id: "5", label: "Camp moments" },
              { id: "6", label: "Camp moments" },
              { id: "3", label: "Camp moments" },
              { id: "7", label: "Camp moments" },
              { id: "8", label: "Camp moments" },
              { id: "9", label: "Camp moments" },
              { id: "10", label: "Camp moments" },
              { id: "11", label: "Camp moments" },
              { id: "12", label: "Camp moments" },
              { id: "13", label: "Camp moments" },
              { id: "14", label: "Camp moments" },
              { id: "15", label: "Camp moments" },
              { id: "16", label: "Camp moments" },
              { id: "17", label: "Camp moments" },
              { id: "18", label: "Camp moments" },
              { id: "19", label: "Camp moments" },
              { id: "20", label: "Camp moments" },
              { id: "21", label: "Camp moments" },
              { id: "22", label: "Camp moments" },
              { id: "23", label: "Camp moments" },
              { id: "24", label: "Camp moments" },
              { id: "25", label: "Camp moments" },
              { id: "26", label: "Camp moments" },
              { id: "27", label: "Camp moments" },
              { id: "28", label: "Camp moments" },
              { id: "29", label: "Camp moments" },
              { id: "30", label: "Camp moments" },
            ]}
          />
        </section>

        <section id="contact" className="mt-16">
          <Reveal className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
            <p className="text-xs font-semibold tracking-[0.22em] text-zinc-700/80">
              CONTACT
            </p>
            <h2 className="mt-2 font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-800/90">
              For any questions or follow-ups, please reach out:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+919448283830"
                className="rounded-3xl bg-white p-6 ring-1 ring-zinc-900/10 transition hover:bg-zinc-50"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  Mahadev Kote
                </p>
                <p className="mt-1 text-sm text-zinc-700">+91 94482 83830</p>
              </a>
              <a
                href="tel:+919449874821"
                className="rounded-3xl bg-white p-6 ring-1 ring-zinc-900/10 transition hover:bg-zinc-50"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  Muralidhar K
                </p>
                <p className="mt-1 text-sm text-zinc-700">+91 94498 74821</p>
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="mt-10 rounded-3xl bg-[#12211B] p-8 text-sm text-zinc-200 ring-1 ring-black/10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-zinc-200">
              Your support can make a lasting difference in a child’s learning
              journey.
            </p>
            <a
              href="#donate"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              Donate
            </a>
          </div>
          <div className="mt-6 h-px bg-white/10" />
          <p className="mt-4 text-xs text-zinc-400">
            © {new Date().getFullYear()} Vilokana Foundation · Swaroopa Summer
            Camp
          </p>
        </footer>
      </main>
    </div>
  );
}

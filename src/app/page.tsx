import { GalleryCarousel } from "@/components/GalleryCarousel";

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
          <div className="lg:col-span-6">
            <p className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 ring-1 ring-zinc-900/10">
              Support Swaroopa Summer Camp (2026)
            </p>

            <h1 className="mt-5 font-(--font-serif) text-5xl leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl">
              Empower a{" "}
              <span className="italic text-[#2F5D46]">Rural</span>
              <br />
              Child
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-700">
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
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] bg-[#D6E6D7] p-3 ring-1 ring-zinc-900/10">
              <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent" />
              <div className="relative overflow-hidden rounded-[22px] bg-[#CFE1D0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/gallery-clean/4.lg.jpg"
                  alt="Swaroopa Summer Camp"
                  className="h-[260px] w-full object-cover opacity-70 sm:h-[340px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2F5D46]/40 via-transparent to-transparent" />
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
          </div>
        </section>

        {/* About section removed as requested */}

        <section id="focus" className="mt-14">
          <h2 className="text-center font-(--font-serif) text-2xl tracking-tight text-zinc-900">
            Focus Areas
          </h2>

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
              <div
                key={c.title}
                className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E2C4] text-sm font-semibold text-zinc-800 ring-1 ring-zinc-900/10">
                    {c.badge}
                  </span>
                  <p className="text-sm font-semibold text-zinc-900">
                    {c.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="mt-14">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="font-(--font-serif) text-2xl tracking-tight text-zinc-900">
                Our Commitment
                <br />
                to Their Future
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-700">
                Thanks to your generous support, the camp has been successfully
                conducted over the past two years. We look forward to your
                continued encouragement in making this year’s camp impactful as
                well.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10">
                  <p className="text-xs font-semibold text-zinc-600">Budget</p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-900">
                    ₹2,25,000
                  </p>
                  <p className="mt-2 text-xs leading-6 text-zinc-600">
                    Inclusive of food, learning materials and resource person
                    fees
                  </p>
                </div>
                <div className="rounded-3xl bg-[#2F5D46] p-6 text-white shadow-sm ring-1 ring-black/10">
                  <p className="text-xs font-semibold text-white/80">
                    Support required
                  </p>
                  <p className="mt-2 text-2xl font-semibold">₹4,500</p>
                  <p className="mt-1 text-xs font-semibold text-white/80">
                    per child
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { k: "100%", v: "Funds directed to camp needs" },
                  { k: "50", v: "Children supported" },
                  { k: "10", v: "Camp days" },
                  { k: "2+", v: "Years successfully conducted" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10"
                  >
                    <p className="text-2xl font-semibold text-zinc-900">{s.k}</p>
                    <p className="mt-2 text-xs font-semibold text-zinc-600">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="mt-10">
          <div className="rounded-3xl bg-[#F3EECF] p-6 ring-1 ring-zinc-900/10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-center font-(--font-serif) text-2xl tracking-tight text-zinc-900 sm:text-left">
                  Make a Difference Today
                </h2>
                <p className="mt-1 text-sm text-zinc-700">
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
          </div>
        </section>

        <section id="contact" className="mt-10">
          <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  Share your contribution details
                </h2>
                <p className="mt-1 text-sm text-zinc-700">
                  Kindly share your contribution details with:
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+919448283830"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-900">
                    Mahadev Kote
                  </p>
                  <p className="truncate text-sm text-zinc-700">
                    +91 94482 83830
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-zinc-900/10 group-hover:bg-zinc-50">
                  Tap to call
                </span>
              </a>

              <a
                href="tel:+919449874821"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-zinc-900">
                    Muralidhar K
                  </p>
                  <p className="truncate text-sm text-zinc-700">
                    +91 94498 74821
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-800 ring-1 ring-zinc-900/10 group-hover:bg-zinc-50">
                  Tap to call
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="mt-10">
          <h2 className="text-center font-(--font-serif) text-2xl tracking-tight text-zinc-900">
            Camp moments
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-700">
            Glimpses from previous camps.
          </p>

          <GalleryCarousel
            className="mt-5"
            items={[
              { id: "4", label: "Learning through activities" },
              { id: "1", label: "Morning circle" },
              { id: "2", label: "Community & joy" },
              { id: "5", label: "Hands-on sessions" },
              { id: "6", label: "Outdoor learning" },
              { id: "3", label: "Teamwork" },
            ]}
          />
        </section>

        <footer id="contact" className="mt-14 border-t border-zinc-900/10 pt-10 text-sm text-zinc-700">
          <h2 className="font-(--font-serif) text-2xl tracking-tight text-zinc-900">
            Get in Touch
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700">
            Kindly share your contribution details with:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+919448283830"
              className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10 transition hover:bg-white"
            >
              <p className="text-sm font-semibold text-zinc-900">Mahadev Kote</p>
              <p className="mt-1 text-sm text-zinc-700">+91 94482 83830</p>
            </a>
            <a
              href="tel:+919449874821"
              className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10 transition hover:bg-white"
            >
              <p className="text-sm font-semibold text-zinc-900">
                Muralidhar K
              </p>
              <p className="mt-1 text-sm text-zinc-700">+91 94498 74821</p>
            </a>
          </div>

          <p className="max-w-3xl">
            Your support can make a lasting difference in a child’s learning
            journey.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            © {new Date().getFullYear()} Vilokana Foundation · Swaroopa Summer
            Camp
          </p>
        </footer>
      </main>
    </div>
  );
}

import { GalleryCarousel } from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-white text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-900/10 bg-white/75 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#" className="group min-w-0">
            <p className="truncate text-xs font-semibold tracking-wide text-emerald-800">
              Vilokana Foundation
            </p>
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-700">
              Swaroopa Summer Camp (2026) · 20–30 April 2026
            </p>
            <p className="truncate text-xs text-zinc-600">
              HD Kote taluk, Mysore district
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
              href="#about"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
            >
              About
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
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-700/15 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/25"
            >
              Donate now
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-9 sm:px-6 sm:pt-12">
        <section id="hero" className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                10-day residential camp
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-800">
                50 rural children
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-800">
                Activity-based learning
              </span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Swaroopa Summer Camp (2026)
            </h1>
            <p className="mt-2 text-pretty text-base font-semibold text-emerald-800 sm:text-lg">
              20th April to 30th April 2026 · HD Kote taluk, Mysore district
            </p>

            <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-zinc-700">
              We seek your support for the Swaroopa Summer Camp (2026), a 10-day
              residential camp for rural children from HD Kote taluk, Mysore
              district. The camp brings meaningful learning experiences to 50
              children from deserving backgrounds studying in government and
              rural private schools.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-900/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-zinc-600">Dates</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  20–30 April 2026
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-900/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-zinc-600">Location</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  HD Kote, Mysore
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-900/10 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-zinc-600">
                  Support needed
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  ₹4,500 per child
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#donate"
                className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/25"
              >
                Contribute now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-900/15 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900/15"
              >
                Share contribution details
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white shadow-sm">
              <div className="absolute inset-0 bg-radial from-emerald-200/40 via-transparent to-transparent" />
              <div className="relative p-5 sm:p-6">
                <p className="text-sm font-semibold text-zinc-900">
                  Contribution snapshot
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Budget ₹2,25,000 · Support required ₹4,500 per child.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-xs font-semibold text-zinc-600">
                      Children supported
                    </p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
                      50
                    </p>
                    <p className="mt-1 text-xs leading-5 text-zinc-600">
                      Government & rural private schools
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-xs font-semibold text-zinc-600">Duration</p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
                      10 days
                    </p>
                    <p className="mt-1 text-xs leading-5 text-zinc-600">
                      Residential learning camp
                    </p>
                  </div>
                </div>
                <a
                  href="#donate"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-700/15 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/25"
                >
                  Donate now
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="mt-10">
          <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              About the camp
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              The camp offers a safe residential environment with food and
              accommodation, while emphasising learning through participation,
              exploration, and collaboration.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Designed for 50 children from deserving backgrounds studying in
              government and rural private schools.
            </p>
          </div>
        </section>

        <section id="focus" className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Focus areas
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "Maths + Science",
                    desc: "Make maths and science more interesting through activity based learning.",
                  },
                  {
                    title: "Concept strength",
                    desc: "Facilitate the understanding of essential concepts that strengthen high school learning.",
                  },
                  {
                    title: "Life skills",
                    desc: "Develop life skills through theatre and group activities.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl bg-zinc-50 p-4"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">
                  Warm greetings.
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900/90">
                  Thanks to generous support, the camp has been successfully
                  conducted over the past two years. We look forward to your
                  continued encouragement in making this year’s camp impactful
                  as well.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              id="impact"
              className="rounded-3xl border border-zinc-900/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Your impact
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                Every contribution directly supports food, stay, learning
                materials, and resource persons.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    k: "₹4,500",
                    v: "helps sponsor one child",
                  },
                  {
                    k: "10 days",
                    v: "of structured learning + life skills",
                  },
                  {
                    k: "50 children",
                    v: "from deserving rural backgrounds",
                  },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="flex items-start justify-between gap-4 rounded-2xl bg-zinc-50 p-4"
                  >
                    <p className="text-lg font-semibold text-zinc-900">{s.k}</p>
                    <p className="text-sm leading-6 text-zinc-700">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-900/10 bg-white p-4">
                <p className="text-sm font-semibold text-zinc-900">
                  A simple request
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-700">
                  Request you to also forward this message to like minded
                  people.
                </p>
                <a
                  href="#donate"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-700/15 transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/25"
                >
                  Donate now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="mt-10">
          <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  Donate
                </h2>
                <p className="mt-1 text-sm text-zinc-700">
                  Budget: ₹2,25,000 (inclusive of food, learning materials and
                  resource person fees). Support required: ₹4,500 per child.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
              <div className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-4">
                <p className="text-sm font-semibold text-zinc-900">
                  Bank transfer details
                </p>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div className="rounded-xl bg-white p-3 ring-1 ring-zinc-900/10">
                    <dt className="text-xs font-semibold text-zinc-600">
                      Account name
                    </dt>
                    <dd className="mt-1 font-semibold text-zinc-900">
                      Vilokana Foundation
                    </dd>
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-zinc-900/10">
                    <dt className="text-xs font-semibold text-zinc-600">
                      A/C No.
                    </dt>
                    <dd className="mt-1 break-all font-semibold text-zinc-900">
                      110173165126
                    </dd>
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-zinc-900/10">
                    <dt className="text-xs font-semibold text-zinc-600">
                      Bank
                    </dt>
                    <dd className="mt-1 font-semibold text-zinc-900">
                      Canara Bank, Kuvempunagar Branch, Mysore
                    </dd>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white p-3 ring-1 ring-zinc-900/10">
                      <dt className="text-xs font-semibold text-zinc-600">
                        IFSC
                      </dt>
                      <dd className="mt-1 font-semibold text-zinc-900">
                        CNRB0011717
                      </dd>
                    </div>
                    <div className="rounded-xl bg-white p-3 ring-1 ring-zinc-900/10">
                      <dt className="text-xs font-semibold text-zinc-600">
                        UPI ID
                      </dt>
                      <dd className="mt-1 break-all font-semibold text-zinc-900">
                        324235855165126@cnrb
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-zinc-900/10 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">
                  UPI scanner
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Scan this QR to pay.
                </p>
                <div className="mt-3 rounded-2xl bg-zinc-50 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/qr.png"
                    alt="UPI QR code to donate"
                    className="mx-auto h-auto w-full max-w-[320px] rounded-xl bg-white p-2 shadow-sm ring-1 ring-zinc-900/10"
                  />
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
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Camp moments
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Glimpses from previous camps.
              </p>
            </div>
          </div>

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

        <footer className="mt-12 border-t border-zinc-900/10 pt-8 text-sm text-zinc-600">
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

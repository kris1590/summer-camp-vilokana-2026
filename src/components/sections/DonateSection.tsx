import { Reveal } from "@/components/Reveal";

export function DonateSection() {
  return (
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
              <p>Canara Bank, Kuvempunagar Branch, Mysore</p>
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
  );
}


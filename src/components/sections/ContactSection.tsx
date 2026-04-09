import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
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
            <p className="text-sm font-semibold text-zinc-900">Mahadev Kote</p>
            <p className="mt-1 text-sm text-zinc-700">+91 94482 83830</p>
          </a>
          <a
            href="tel:+919449874821"
            className="rounded-3xl bg-white p-6 ring-1 ring-zinc-900/10 transition hover:bg-zinc-50"
          >
            <p className="text-sm font-semibold text-zinc-900">Muralidhar K</p>
            <p className="mt-1 text-sm text-zinc-700">+91 94498 74821</p>
          </a>
        </div>
      </Reveal>
    </section>
  );
}


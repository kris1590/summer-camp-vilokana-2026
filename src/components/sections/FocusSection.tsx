import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FocusSection() {
  return (
    <section id="focus" className="mt-16">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title="Focus Areas"
        subtitle="Making learning joyful, concept-strong, and confidence-building through participation, exploration, and collaboration."
      />

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
          <Reveal
            key={c.title}
            className="rounded-3xl bg-white/65 p-6 ring-1 ring-zinc-900/10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E2C4] text-sm font-semibold text-zinc-800 ring-1 ring-zinc-900/10">
                {c.badge}
              </span>
              <p className="text-sm font-semibold text-zinc-900">{c.title}</p>
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-700">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


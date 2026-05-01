import { Reveal } from "@/components/Reveal";

export function CampStoryCard() {
  return (
    <Reveal className="mt-4">
      <div className="rounded-2xl border border-zinc-900/10 bg-white/60 px-5 py-5">
        <p className="text-xs font-semibold tracking-wide text-zinc-500 mb-3">
          FROM THE CAMP
        </p>
        <p className="font-(--font-serif) text-xl leading-snug text-zinc-900 mb-4">
          Kulli&rsquo;s Breakfast Club
        </p>
        <div className="grid gap-5 sm:grid-cols-2 sm:items-start">
          <div className="space-y-3 text-sm leading-6 text-zinc-700">
            <p>
              We have a delightful new addition to the camp —{" "}
              <span className="text-zinc-900 font-medium">Kulli</span>, a cow
              who has been joining us for breakfast since yesterday!
            </p>
            <p>
              Until now, vegetable and kitchen waste from the camp was being
              disposed into a pit. But{" "}
              <span className="text-zinc-900 font-medium">Puttamma</span>, our
              wonderful kitchen helper, saw an opportunity to put it to better
              use.
            </p>
            <p>
              She asked her grandchildren,{" "}
              <span className="text-zinc-900 font-medium">
                Savanth and Swathi
              </span>
              , to walk Kulli over to camp each morning by 8.30&nbsp;am. Kulli
              gets a hearty breakfast of kitchen scraps, and Savanth and Swathi
              sit down to eat alongside the camp children before heading home
              with her.
            </p>
            <p>
              A small act of thoughtfulness that turned waste into nourishment
              — and brought two more smiling faces to our breakfast table.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-900/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/current-camp/kulli.jpeg"
              alt="Kulli the cow at breakfast with Savanth and Swathi"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

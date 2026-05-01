import { Reveal } from "@/components/Reveal";

export function CampUpdateCard() {
  return (
    <Reveal className="mt-10">
      <div className="rounded-2xl border border-[#2F5D46]/20 bg-[#2F5D46]/8 px-5 py-4 flex gap-3 items-start">
        <span className="mt-0.5 flex-shrink-0 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#2F5D46] mb-1">
            LATEST UPDATE
          </p>
          <p className="text-sm leading-6 text-zinc-800">
            After a few additions and deletions in the first two days, the camp
            strength is{" "}
            <span className="font-semibold text-zinc-900">
              37 children (20 boys and 17 girls)
            </span>
            . It is always heartening to see almost equal participation from
            both boys and girls in our camp.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

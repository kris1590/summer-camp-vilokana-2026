export function SiteFooter() {
  return (
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
        © {new Date().getFullYear()} Vilokana Foundation · Swaroopa Summer Camp
      </p>
    </footer>
  );
}


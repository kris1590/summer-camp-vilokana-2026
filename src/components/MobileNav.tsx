"use client";

import { useEffect, useState } from "react";

type LinkItem = { href: string; label: string };

export function MobileNav({ links }: { links: LinkItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-zinc-900 ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        aria-label="Open menu"
      >
        <span aria-hidden className="text-lg leading-none">
          ☰
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-3 right-3 top-3 overflow-hidden rounded-3xl bg-[#F7F2D6] shadow-xl ring-1 ring-zinc-900/10">
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-semibold text-zinc-900">Menu</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-zinc-900 ring-1 ring-zinc-900/10"
                aria-label="Close menu"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="h-px bg-zinc-900/10" />

            <nav className="px-3 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white/70"
                >
                  {l.label}
                  <span aria-hidden className="text-zinc-600">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}


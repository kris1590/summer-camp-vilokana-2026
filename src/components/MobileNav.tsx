"use client";

import { useEffect, useRef, useState } from "react";

type LinkItem = { href: string; label: string };

export function MobileNav({ links }: { links: LinkItem[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function navigateToHash(href: string) {
    const targetId = href.startsWith("#") ? href : "";
    setOpen(false);
    window.setTimeout(() => {
      if (!targetId) return;
      const el = document.querySelector(targetId);
      if (el instanceof HTMLElement) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = targetId;
    }, 0);
  }

  return (
    <div className="sm:hidden relative">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
        }}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white/70 px-4 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span aria-hidden className="text-base leading-none">
          ☰
        </span>
        <span className="leading-none">Menu</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-transparent"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            className="absolute right-3 top-16 w-[calc(100vw-24px)] max-w-sm overflow-hidden rounded-3xl bg-[#F7F2D6] shadow-2xl ring-1 ring-zinc-900/10"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >


            <div className="h-px bg-zinc-900/10" />

            <nav className="px-3 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    // Handle anchors ourselves so scroll happens after close
                    if (l.href.startsWith("#")) {
                      e.preventDefault();
                      navigateToHash(l.href);
                      return;
                    }
                    setOpen(false);
                  }}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white/70 active:bg-white"
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


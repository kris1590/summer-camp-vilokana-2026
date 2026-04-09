"use client";

import { useEffect, useRef, useState } from "react";

type LinkItem = { href: string; label: string };

export function MobileNav({ links }: { links: LinkItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && root.contains(e.target)) return;
      setOpen(false);
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMounted(false), 420);
    return () => window.clearTimeout(t);
  }, [open]);

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
    <div ref={rootRef} className="relative sm:hidden">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
        }}
        className="inline-flex h-10 items-center justify-center gap-2 cursor-pointer rounded-full bg-white/70 px-4 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span aria-hidden className="text-base leading-none">
          ☰
        </span>

      </button>

      {mounted ? (
        <div
          ref={panelRef}
          className={[
            "absolute left-0 top-[calc(100%+10px)] z-50 w-[min(86vw,22rem)] origin-top-left overflow-hidden rounded-3xl bg-[#F7F2D6] shadow-2xl ring-1 ring-zinc-900/10",
            "transition duration-300 ease-out motion-reduce:transition-none",
            open
              ? "delay-75 translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-[0.98] opacity-0",
          ].join(" ")}
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
      ) : null}
    </div>
  );
}


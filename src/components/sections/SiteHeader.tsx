"use client";

import { MobileNav } from "@/components/MobileNav";
import type { MouseEvent } from "react";

export type NavLink = { href: string; label: string };

export function SiteHeader({ links }: { links: NavLink[] }) {
  function scrollToHash(hash: string) {
    if (!hash.startsWith("#")) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }

  function onAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href") ?? "";
    if (!href.startsWith("#")) return;
    e.preventDefault();
    scrollToHash(href);
    history.replaceState(null, "", href);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-900/10 bg-[#F7F2D6]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="flex flex-1 items-center gap-2">
          <MobileNav links={links} />
          <a href="#hero" onClick={onAnchorClick} className="group min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-900">
              Vilokana Foundation
            </p>
          </a>
        </div>

        <nav className="flex shrink-0 items-center gap-2">
          <a
            href="#focus"
            onClick={onAnchorClick}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
          >
            Focus
          </a>
          <a
            href="#impact"
            onClick={onAnchorClick}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
          >
            Impact
          </a>
          <a
            href="#gallery"
            onClick={onAnchorClick}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
          >
            Gallery
          </a>
          <a
            href="#location"
            onClick={onAnchorClick}
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-900/5 sm:inline-flex"
          >
            Location
          </a>
          <a
            href="#donate"
            onClick={onAnchorClick}
            className="inline-flex items-center justify-center rounded-full bg-[#2F5D46] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#284D3B] focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}


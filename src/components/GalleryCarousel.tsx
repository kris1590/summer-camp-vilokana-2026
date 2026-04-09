"use client";

import { useId, useMemo, useState } from "react";

type GalleryItem = {
  id: string;
  label: string;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export function GalleryCarousel({
  items,
  className,
}: {
  items: GalleryItem[];
  className?: string;
}) {
  const listId = useId();
  const [active, setActive] = useState(0);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const len = safeItems.length;
  const current = safeItems[clampIndex(active, len)];

  if (len === 0 || !current) return null;

  const go = (delta: number) => setActive((i) => clampIndex(i + delta, len));

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0" />

        <picture>
          <source
            type="image/webp"
            srcSet={[
              `/assets/gallery-clean/${current.id}.sm.webp 720w`,
              `/assets/gallery-clean/${current.id}.md.webp 1200w`,
              `/assets/gallery-clean/${current.id}.lg.webp 1800w`,
            ].join(", ")}
            sizes="(min-width: 1024px) 900px, 100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/gallery-clean/${current.id}.md.jpg`}
            srcSet={[
              `/assets/gallery-clean/${current.id}.sm.jpg 720w`,
              `/assets/gallery-clean/${current.id}.md.jpg 1200w`,
              `/assets/gallery-clean/${current.id}.lg.jpg 1800w`,
            ].join(", ")}
            sizes="(min-width: 1024px) 900px, 100vw"
            alt={current.label}
            className="aspect-video w-full object-cover"
          />
        </picture>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-sm font-semibold text-white drop-shadow-sm">
            {current.label}
          </p>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center p-2 sm:p-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/25"
            aria-label="Previous photo"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center p-2 sm:p-3">
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/25"
            aria-label="Next photo"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold text-zinc-600">More photos</p>
          <p className="text-xs text-zinc-600">
            {clampIndex(active, len) + 1} / {len}
          </p>
        </div>

        <div
          id={listId}
          className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Photo thumbnails"
        >
          {safeItems.map((item, idx) => {
            const isActive = clampIndex(active, len) === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(idx)}
                className={[
                  "relative shrink-0 snap-start overflow-hidden rounded-2xl ring-1 transition",
                  isActive
                    ? "ring-emerald-600 shadow-sm"
                    : "ring-zinc-900/10 hover:ring-zinc-900/20",
                ].join(" ")}
                aria-label={`View photo: ${item.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`/assets/gallery-clean/${item.id}.sm.webp 720w`}
                    sizes="120px"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/assets/gallery-clean/${item.id}.sm.jpg`}
                    alt=""
                    className="h-20 w-28 object-cover sm:h-24 sm:w-36"
                    loading="lazy"
                  />
                </picture>
                {isActive ? (
                  <span className="pointer-events-none absolute inset-0 ring-2 ring-emerald-600" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


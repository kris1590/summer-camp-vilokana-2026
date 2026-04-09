"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

type GalleryItem = {
  id: string;
  label: string;
};

export function GalleryCarousel({
  items,
  className,
}: {
  items: GalleryItem[];
  className?: string;
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const len = safeItems.length;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const current = safeItems[0];
  if (len === 0 || !current) return null;

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/45 via-black/0 to-black/0" />

        <Swiper
          modules={[Thumbs]}
          className="overflow-visible!"
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {safeItems.map((item) => (
            <SwiperSlide key={item.id}>
              <picture>
                <source
                  type="image/webp"
                  srcSet={[
                    `/assets/gallery-clean/${item.id}.sm.webp 720w`,
                    `/assets/gallery-clean/${item.id}.md.webp 1200w`,
                    `/assets/gallery-clean/${item.id}.lg.webp 1800w`,
                  ].join(", ")}
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/gallery-clean/${item.id}.md.jpg`}
                  srcSet={[
                    `/assets/gallery-clean/${item.id}.sm.jpg 720w`,
                    `/assets/gallery-clean/${item.id}.md.jpg 1200w`,
                    `/assets/gallery-clean/${item.id}.lg.jpg 1800w`,
                  ].join(", ")}
                  sizes="(min-width: 1024px) 900px, 100vw"
                  alt={item.label}
                  className="aspect-video w-full object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold text-zinc-600">More photos</p>
          <p className="text-xs text-zinc-600">{len}</p>
        </div>

        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          freeMode
          slidesPerView="auto"
          spaceBetween={12}
          className="mt-3"
        >
          {safeItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-auto! overflow-hidden rounded-2xl ring-1 ring-zinc-900/10"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/assets/gallery-clean/${item.id}.sm.webp 720w`}
                  sizes="144px"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/gallery-clean/${item.id}.sm.jpg`}
                  alt=""
                  className="h-20 w-28 object-cover sm:h-24 sm:w-36"
                  loading="lazy"
                  draggable={false}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


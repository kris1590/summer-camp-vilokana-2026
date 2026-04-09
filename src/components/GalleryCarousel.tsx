"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const current = safeItems[0];
  if (len === 0 || !current) return null;

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/45 via-black/0 to-black/0" />

        <button
          ref={prevRef}
          type="button"
          className="absolute left-3 top-1/2 z-2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          aria-label="Previous photo"
        >
          <FiChevronLeft aria-hidden className="text-xl" />
        </button>
        <button
          ref={nextRef}
          type="button"
          className="absolute right-3 top-1/2 z-2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-900/10 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          aria-label="Next photo"
        >
          <FiChevronRight aria-hidden className="text-xl" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          className="overflow-visible!"
          slidesPerView={1}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nav = (swiper.params.navigation as any) ?? {};
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.params.navigation = nav;
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
        </div>

        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          freeMode
          loop
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


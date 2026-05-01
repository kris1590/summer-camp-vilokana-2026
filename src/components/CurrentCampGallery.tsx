"use client";

import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "misc", label: "Highlights" },
  { id: "nature-walk", label: "Nature Walk" },
  { id: "science", label: "Science" },
  { id: "theatre", label: "Theatre" },
  { id: "play", label: "Play" },
  { id: "yoga", label: "Yoga" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];
type Photo = { src: string; alt: string; category: CategoryId };

const PHOTOS: Photo[] = [
  { src: "/current-camp/group-pic.jpeg", alt: "Group photo", category: "misc" },
  { src: "/current-camp/sunrise.jpg", alt: "Sunrise at camp", category: "misc" },
  { src: "/current-camp/dinner.jpg", alt: "Dinner time", category: "misc" },
  { src: "/current-camp/rest.jpeg", alt: "Rest time", category: "misc" },
  { src: "/current-camp/shramadan.jpeg", alt: "Shramadan", category: "misc" },
  { src: "/current-camp/shramadan-2.jpg", alt: "Shramadan", category: "misc" },
  { src: "/current-camp/shramadan1.jpg", alt: "Shramadan", category: "misc" },
  { src: "/current-camp/nature-walk/nature-walk-1.jpg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-2.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-3.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-4.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-5.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-6.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-7.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-8.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-9.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-10.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-11.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/nature-walk/nature-walk-12.jpeg", alt: "Nature walk", category: "nature-walk" },
  { src: "/current-camp/play/play-1.jpeg", alt: "Playtime", category: "play" },
  { src: "/current-camp/play/play-2.jpeg", alt: "Playtime", category: "play" },
  { src: "/current-camp/science/science-1.jpg", alt: "Science activity", category: "science" },
  { src: "/current-camp/science/science-2.jpg", alt: "Science activity", category: "science" },
  { src: "/current-camp/science/science-3.jpeg", alt: "Science activity", category: "science" },
  { src: "/current-camp/science/science-4.jpeg", alt: "Science activity", category: "science" },
  { src: "/current-camp/theatre/theatre-1.jpg", alt: "Theatre session", category: "theatre" },
  { src: "/current-camp/theatre/theatre-2.jpeg", alt: "Theatre session", category: "theatre" },
  { src: "/current-camp/theatre/theatre-3.jpeg", alt: "Theatre session", category: "theatre" },
  { src: "/current-camp/theatre/theatre-4.jpeg", alt: "Theatre session", category: "theatre" },
  { src: "/current-camp/theatre/theatre-5.jpeg", alt: "Theatre session", category: "theatre" },
  { src: "/current-camp/yoga/yoga-1.jpg", alt: "Yoga session", category: "yoga" },
];

function CategoryCarousel({ photos }: { photos: Photo[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const canLoop = photos.length >= 3;

  return (
    <div>
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
          loop={canLoop}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nav = (swiper.params.navigation as any) ?? {};
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.params.navigation = nav;
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-video w-full object-cover"
                draggable={false}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {photos.length > 1 && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-zinc-600">More photos</p>
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            freeMode
            loop={canLoop}
            slidesPerView="auto"
            spaceBetween={12}
            className="mt-3"
          >
            {photos.map((photo) => (
              <SwiperSlide
                key={photo.src}
                className="w-auto! overflow-hidden rounded-2xl ring-1 ring-zinc-900/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt=""
                  className="h-20 w-28 object-cover sm:h-24 sm:w-36"
                  loading="lazy"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export function CurrentCampGallery({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filtered =
    activeCategory === "all"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              activeCategory === cat.id
                ? "bg-[#2F5D46] text-white"
                : "bg-white/70 text-zinc-700 ring-1 ring-zinc-900/10 hover:bg-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* key remounts the carousel (resetting to slide 1) when category changes */}
      <CategoryCarousel key={activeCategory} photos={filtered} />
    </div>
  );
}

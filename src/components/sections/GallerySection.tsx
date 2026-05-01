"use client";

import { useState } from "react";
import { CurrentCampGallery } from "@/components/CurrentCampGallery";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PREVIOUS_ITEMS = Array.from({ length: 30 }, (_, i) => ({
  id: String(i === 0 ? 4 : i === 1 ? 1 : i === 2 ? 2 : i === 3 ? 5 : i + 1),
  label: "Camp moments",
})).slice(0, 30);

const LEGACY_IDS = [
  "4","1","2","5","6","3","7","8","9","10","11","12","13","14","15",
  "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30",
];

export function GallerySection() {
  const [tab, setTab] = useState<"current" | "previous">("current");

  return (
    <section id="gallery" className="mt-16">
      <SectionHeading
        eyebrow="GALLERY"
        title="Camp Gallery"
        subtitle="Moments from Swaroopa Summer Camp 2026 and previous editions."
      />

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setTab("current")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "current"
              ? "bg-[#2F5D46] text-white"
              : "bg-white/70 text-zinc-700 ring-1 ring-zinc-900/10 hover:bg-white"
          }`}
        >
          {tab === "current" && (
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          )}
          Current Camp 2026
        </button>
        <button
          onClick={() => setTab("previous")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "previous"
              ? "bg-[#2F5D46] text-white"
              : "bg-white/70 text-zinc-700 ring-1 ring-zinc-900/10 hover:bg-white"
          }`}
        >
          Previous Camps
        </button>
      </div>

      {tab === "current" ? (
        <CurrentCampGallery className="mt-5" />
      ) : (
        <GalleryCarousel
          className="mt-5"
          items={LEGACY_IDS.map((id) => ({ id, label: "Camp moments" }))}
        />
      )}
    </section>
  );
}

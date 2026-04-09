import { GalleryCarousel } from "@/components/GalleryCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section id="gallery" className="mt-16">
      <SectionHeading
        eyebrow="GALLERY"
        title="Camp moments"
        subtitle="Glimpses from previous camps."
      />

      <GalleryCarousel
        className="mt-5"
        items={[
          { id: "4", label: "Camp moments" },
          { id: "1", label: "Camp moments" },
          { id: "2", label: "Camp moments" },
          { id: "5", label: "Camp moments" },
          { id: "6", label: "Camp moments" },
          { id: "3", label: "Camp moments" },
          { id: "7", label: "Camp moments" },
          { id: "8", label: "Camp moments" },
          { id: "9", label: "Camp moments" },
          { id: "10", label: "Camp moments" },
          { id: "11", label: "Camp moments" },
          { id: "12", label: "Camp moments" },
          { id: "13", label: "Camp moments" },
          { id: "14", label: "Camp moments" },
          { id: "15", label: "Camp moments" },
          { id: "16", label: "Camp moments" },
          { id: "17", label: "Camp moments" },
          { id: "18", label: "Camp moments" },
          { id: "19", label: "Camp moments" },
          { id: "20", label: "Camp moments" },
          { id: "21", label: "Camp moments" },
          { id: "22", label: "Camp moments" },
          { id: "23", label: "Camp moments" },
          { id: "24", label: "Camp moments" },
          { id: "25", label: "Camp moments" },
          { id: "26", label: "Camp moments" },
          { id: "27", label: "Camp moments" },
          { id: "28", label: "Camp moments" },
          { id: "29", label: "Camp moments" },
          { id: "30", label: "Camp moments" },
        ]}
      />
    </section>
  );
}


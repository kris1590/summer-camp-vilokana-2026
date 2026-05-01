import { CampUpdateCard } from "@/components/sections/CampUpdateCard";
import { CampStoryCard } from "@/components/sections/CampStoryCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { DonateSection } from "@/components/sections/DonateSection";
import { FocusSection } from "@/components/sections/FocusSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F2D6] text-zinc-900">
      <SiteHeader
        links={[
          { href: "#hero", label: "Home" },
          { href: "#focus", label: "Focus areas" },
          { href: "#impact", label: "Impact" },
          { href: "#gallery", label: "Gallery" },
          { href: "#location", label: "Location" },
          { href: "#contact", label: "Get in touch" },
        ]}
      />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <HeroSection />
        <CampUpdateCard />
        <CampStoryCard />

        {/* About section removed as requested */}
        <FocusSection />
        <ImpactSection />
        <DonateSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}

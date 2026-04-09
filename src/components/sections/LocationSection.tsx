import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  const mapUrl =
    "https://www.google.com/maps/place/ANVAYA+PUBLIC+HIGH+SCHOOL,+KOHALA+VILLAGE,+MYSORE/@12.1339428,76.4906198,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf610a60d100cb:0x12c19df52e39e5a2!8m2!3d12.1339428!4d76.4931947!16s%2Fg%2F11vdzv8g_9?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D";

  // Uses the simpler public embed endpoint (no API key required).
  const mapEmbedUrl =
    "https://www.google.com/maps?q=12.1339428,76.4931947&z=17&output=embed";

  return (
    <section id="location" className="mt-16">
      <SectionHeading
        eyebrow="LOCATION"
        title="Find the Camp Venue"
        subtitle="Anvaya Public High School, Kohala Village, Mysore."
      />

      <Reveal className="mt-5 overflow-hidden rounded-3xl bg-white/65 ring-1 ring-zinc-900/10">
        <div className="aspect-video w-full">
          <iframe
            title="Camp location on Google Maps"
            src={mapEmbedUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-zinc-900">
            Anvaya Public High School, Kohala Village
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-900/10 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#2F5D46]/25"
          >
            Open in Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  );
}


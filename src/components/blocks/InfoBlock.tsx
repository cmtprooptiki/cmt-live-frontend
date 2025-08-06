import Link from "next/link";
// import { StrapiImage } from "../StrapiImage";
import type { InfoBlockProps } from "@/types";
import { StrapiVideo } from "../StrapiVideo";

export function InfoBlock({
  headline,
  cta,
  image,
}: Readonly<InfoBlockProps>) {
  return (
    <section className="py-16 px-6 text-center bg-white">
      {/* Headline */}
        <h2
        className="text-3xl font-semibold leading-snug text-gray-900 max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{
            __html: headline
            .replace("know-how", `<span class="text-blue-500 font-semibold">know-how</span>`)
            .replace("experience", `<span class="text-blue-300 font-semibold">experience</span>`),
        }}
        />
      {/* CTA Button */}
      {cta && (
        <div className="mt-6">
          <Link
            href={cta.href}
            target={cta.isExternal ? "_blank" : "_self"}
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
          >
            {cta.text}
            <span className="ml-2">➔</span>
          </Link>
        </div>
      )}

      {/* Image or Video Placeholder */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-7xl h-64 bg-gray-200 flex items-center justify-center rounded-md shadow-sm">
          {image ? (
            // <StrapiImage
            //   src={image.url}
            //   alt={image.alternativeText || "Placeholder"}
            //   className="w-full h-full object-cover rounded-md"
            //   width={1200}
            //   height={400}
            // />

            <StrapiVideo
  src={image.url}
  className="w-full h-full object-cover rounded-md"
  controls={false}
  autoPlay={true}
  loop={true}
  muted={true}
/>


          ) : (
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-white bg-white/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.5 5.5a1 1 0 011.664-.747l6 4.5a1 1 0 010 1.494l-6 4.5A1 1 0 016.5 14.5v-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

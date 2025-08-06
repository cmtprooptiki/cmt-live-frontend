import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import type { HeroSectionProps } from "@/types";




export function HeroSection({
  // theme,
  heading,
  cta,
  image,
  logo,
  author,
  publishedAt,
  darken = false,
}: Readonly<HeroSectionProps>) {
  return (
    // <section className="relative bg-white">
        <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Hero background"}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {darken && (
          <div className="absolute inset-0 bg-black opacity-50" />
        )}
      </div>

      {/* Content */}
      <div className="relative isolate px-6 pt-24 pb-32 lg:px-8">
        {/* Logo */}
        {logo && (
          <div className="mx-auto mb-8 max-w-fit">
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.alternativeText || "Logo"}
              className="h-16 w-auto mx-auto"
              width={120}
              height={120}
            />
          </div>
        )}

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 text-transparent bg-clip-text">
              {heading}
            </span>
          </h1>

          {author && (
            <p className="mt-3 text-sm text-gray-600">By {author}</p>
          )}

          {publishedAt && (
            <p className="text-sm text-gray-500">{publishedAt}</p>
          )}

          {cta && (
            <div className="mt-10 flex justify-center">
              <Link
                href={cta.href}
                target={cta.isExternal ? "_blank" : "_self"}
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
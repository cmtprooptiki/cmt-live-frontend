"use client";

import type { LogoCarouselBlockProps } from "@/types";
// import Image from "next/image";
import { StrapiImage } from "../StrapiImage";

export function LogoCarouselBlock({ items }: LogoCarouselBlockProps) {
  if (!items?.length) return null;

  return (
    <section className="w-full py-10 overflow-hidden" style={{
    background: "linear-gradient(90deg, #0074CC 13%, #B4D3EF 100%)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
  }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Infinite Logo Carousel */}
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] relative"
        >
          {/* Duplicated list for infinite scroll */}
          {[...Array(2)].map((_, i) => (
            <ul
              key={i}
              aria-hidden={i === 1}
              className="flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {items.map((item, index) => (
                <li key={`${i}-${index}`}>
                  <StrapiImage
                    src={item.image.url}
                    alt={item.image.alternativeText || `Logo ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain w-[120px] h-[60px]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

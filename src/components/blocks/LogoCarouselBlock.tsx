"use client";
 
import { useMemo, useState } from "react";
import type { LogoCarouselBlockProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
 
type Item = {
  type?: string | null;
  image: { url: string; alternativeText?: string | null };
};
 
interface Props extends LogoCarouselBlockProps {
  /** Provide a list of types to show; if omitted, types are auto-discovered from items */
  filterTypes?: string[];
  /** Initial selected type (must exist in filterTypes or discovered types) */
  defaultType?: string;
  /** Case-insensitive matching (on by default) */
  caseInsensitive?: boolean;
}
 
export function LogoCarouselBlock({
  items,
  filterTypes,
  defaultType,
  caseInsensitive = true,
}: Props) {
  if (!items?.length) return null;
 
  // Normalize helper
  const norm = (v?: string | null) =>
    caseInsensitive ? (v ?? "").trim().toLowerCase() : (v ?? "").trim();
 
  // Discover all types if none passed
  const discoveredTypes = useMemo(() => {
    const set = new Set<string>();
    for (const it of items as Item[]) {
      const t = (it.type ?? "").trim();
      if (t) set.add(t);
    }
    return Array.from(set);
  }, [items]);
 
  const types = (filterTypes?.length ? filterTypes : discoveredTypes).filter(Boolean);
 
  // Pick initial tab
  const [activeType, setActiveType] = useState<string>(
    types.includes(defaultType ?? "") ? (defaultType as string) : types[0]
  );
 
  // Filter items by activeType
  const filtered = useMemo(() => {
    if (!activeType) return [];
    return (items as Item[]).filter((it) => norm(it.type) === norm(activeType));
  }, [items, activeType]);
 
  if (!types.length) return null;
 
  return (
    <section
      className="w-full py-10 overflow-hidden"
      style={{
        background: "white",
       
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Logo categories">
          {types.map((t) => {
            const isActive = t === activeType;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveType(t)}
                className={[
                  "px-4 py-2 rounded text-2xl font-medium transition font-agenda-medium",
                  isActive
                    ? "bg-[#1e9bfb] shadow text-white"
                    : "bg-white/30 hover:bg-white/50 backdrop-blur",
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </div>
       
 
        {/* Infinite Logo Carousel */}
        {filtered.length > 0 ? (
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] relative">
            {[...Array(2)].map((_, i) => (
              <ul
                key={i}
                aria-hidden={i === 1}
                className="flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                {filtered.map((item, index) => (
                  <li key={`${i}-${index}`}>
                    <StrapiImage
                      src={item.image.url}
                      alt={item.image.alternativeText || `Logo ${index + 1}`}
                      width={340}
                      height={160}
                      className="object-contain w-[340px] h-[160px]"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ) : (
          <p className="text-white/90">No logos for “{activeType}”.</p>
        )}
      </div>
    </section>
  );
}
 
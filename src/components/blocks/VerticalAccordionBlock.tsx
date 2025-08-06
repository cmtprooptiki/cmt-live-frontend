"use client";

import { useState } from "react";
import type { VerticalAccordionBlockProps } from "@/types";
import Link from "next/link";

export function VerticalAccordionBlock({ items }: VerticalAccordionBlockProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const visibleCount = 5;

  const getVisibleItems = () => {
    const start = Math.max(0, Math.min(activeIndex - 1, items.length - visibleCount));
    return items.slice(start, start + visibleCount);
  };

  const visibleItems = getVisibleItems();

  return (
    // <section className="flex justify-start py-12 overflow-hidden">
    //   <div className="flex h-[400px] w-[min(40%,1200px)] rounded-md gap-3 transition-all duration-500 ease-in-out overflow-hidden">
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8">
<div className="flex h-[500px] w-full max-w-6xl rounded-md gap-3 transition-all duration-500 ease-in-out overflow-hidden">
        {visibleItems.map((item, /*index*/) => {
          const globalIndex = items.findIndex((i) => i === item);
          const isActive = globalIndex === activeIndex;

          return (
            <div
              key={globalIndex}
              onClick={() => {
                if (!isActive) setActiveIndex(globalIndex);
              }}
              /// ${isActive ? "w-[calc(100%-160px)] bg-white" : "w-[40px] bg-[#D9D9D9] hover:bg-zinc-50"}
              ///                ${isActive ? "w-[60%] bg-white" : "w-[70px] bg-[#D9D9D9] hover:bg-zinc-50"}

              className={`transition-all duration-500 ease-in-out flex-shrink-0 cursor-pointer 
                
                ${isActive ? "w-[75%] bg-white" : "w-[5%] bg-[#D9D9D9] hover:bg-zinc-50"}

                h-full border border-gray-300 flex items-center justify-center relative overflow-hidden`}
            >
              {/* Inactive Panel: Rotated Label */}
              {!isActive && (
                <div className="flex flex-col items-center justify-center px-1 text-center overflow-hidden">
                  <span className="text-4xl font-semibold mb-2 truncate customgray">
                    {String(globalIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="h-[400px] flex items-center justify-center">
                    <span className="text-xl font-medium transform -rotate-90 origin-center whitespace-nowrap truncate max-w-[350px]">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Active Panel: Full Content */}
              {isActive && (
                <div className="p-6 w-full h-full text-left flex flex-col justify-start bg-[#D9D9D9] overflow-y-auto">
                  <span className="text-4xl font-bold mb-2 block customgray">
                    {String(globalIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-4xl font-bold mb-2 block break-words">
                    {item.title}
                  </span>
                  <div className="h-px bg-zinc-400 my-4 w-full" />
                  <p className="text-sm text-gray-700 mb-4 break-words">{item.description}</p>

                  {item.cta?.href && (
                    <div className="mt-auto">
                      <Link
                        href={item.cta.href}
                        target={item.cta.isExternal ? "_blank" : "_self"}
                        className="inline-block"
                      >
                        <div className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 inline-block">
                          {item.cta.text} →
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

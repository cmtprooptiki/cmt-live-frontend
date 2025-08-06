"use client";

import { useState } from "react";
import type { ServicesAccordionBlockProps } from "@/types";
import { CiCirclePlus } from "react-icons/ci";
import { FaMinusCircle } from "react-icons/fa";

export function ServicesAccordionBlock({
  heading,
  items,
}: ServicesAccordionBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-25 sm:px-8">
      <h2 className="text-5xl md:text-5xl font-bold mb-12 text-gray-900">
        {heading}
      </h2>

      <div className="divide-y divide-gray-300">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          const displayIndex = (index + 1).toString().padStart(2, "0");

          return (
            <div key={item.id} className="bg-white">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-start justify-between py-6 text-left"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-xl font-medium text-gray-900 w-10">
                    {displayIndex}
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.title}
                  </span>
                </div>

                <div className="flex-shrink-0 pr-2 pt-1">
                  {isOpen ? (
                    <FaMinusCircle className="text-blue-500 text-lg" />
                  ) : (
                    <CiCirclePlus className="text-gray-800 text-2xl" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="pl-[4.5rem] pr-4 pb-6 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

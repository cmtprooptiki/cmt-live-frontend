"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      let currentId: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        if (top - offset <= 0) {
          currentId = id;
        } else {
          break;
        }
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset, activeId]);

  return activeId;
}

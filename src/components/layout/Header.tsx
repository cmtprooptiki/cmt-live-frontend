"use client";
import type { LinkProps, LogoProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import { useState } from "react";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/experience";
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  const { logo, navigation, cta } = data;

  return (
    <header className={`w-full ${headerLight ? "bg-white" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <StrapiImage
            src={logo.image.url}
            alt={logo.image.alternativeText || "Logo"}
            width={120}
            height={120}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition"
            >
              {item.text}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
            <button className="text-blue-500 border border-blue-500 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-blue-50 transition">
              {cta.text} <span className="ml-1">→</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-4 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                className="text-base font-medium text-gray-800 hover:text-blue-500 transition"
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
            <button className="w-full text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-50 transition">
              {cta.text} <span className="ml-1">→</span>
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

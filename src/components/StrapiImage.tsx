import Image from "next/image";
import { getStrapiURL2 } from "@/utils/get-strapi-url";

interface StrapiImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  console.log("[Strapi IMAGE at runtime]", getStrapiURL2());

  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
}

export function getStrapiMedia(url: string | null) {
  console.log("On strapi media",url);
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("https")|| url.startsWith("//")) return url;
  return getStrapiURL2() + url;
}

import Image from "next/image";
import { getStrapiURL } from "@/utils/get-strapi-url";

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
  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  // const baseURL = "https://cmtprooptiki.gr";
  const baseURL = getStrapiURL();
  if (url.includes("localhost:1337")) {
    return url.replace("http://localhost:1337", baseURL);
  }
  if (url.includes("undefined")) {
    return url.replace("undefined", baseURL);
  }
  if (url.startsWith("http") || url.startsWith("https")|| url.startsWith("//")) return url;
  return baseURL + url;
}

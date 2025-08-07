//export function getStrapiURL() {
//  return process.env.STRAPI_API_URL ?? "http://localhost:1337";
//}

export function getStrapiURL(path: string = ""): string {
  console.log("[Strapi PATH at runtime]",path);

  return (process.env.NEXT_PUBLIC_STRAPI_API_URL) + path;

}

// export function getStrapiURL(path: string = ""): string {
//   const baseUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
//   return baseUrl.replace(/\/$/, "") + path;
// }
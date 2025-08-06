//export function getStrapiURL() {
//  return process.env.STRAPI_API_URL ?? "http://localhost:1337";
//}

export function getStrapiURL(path: string = ""): string {
  return (process.env.STRAPI_API_URL ) + path;
}

// export function getStrapiURL(path: string = ""): string {
//   const baseUrl = process.env.STRAPI_API_URL || "http://localhost:1337";
//   return baseUrl.replace(/\/$/, "") + path;
// }
// Compatibilidad para los componentes. La personalización vive en site.config.ts.
export { whatsappLink } from "./site.config";
export type { Product } from "./site.config";
import { siteConfig } from "./site.config";

export const shop = siteConfig.business;
export const cakes = siteConfig.catalogs.cakes.products;
export const bakery = siteConfig.catalogs.bakery.products;

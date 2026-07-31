import type { Product } from "../data";
import { whatsappLink } from "../data";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <a className="product-photo" href={whatsappLink(product.name)} target="_blank" rel="noreferrer" aria-label={`Pedir ${product.name} por WhatsApp`}>
      <img src={product.image} alt={product.name} />{product.badge && <span>{product.badge}</span>}<b>Pedir por WhatsApp</b>
    </a>
    <div className="product-copy"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{product.price}</strong></div>
  </article>;
}

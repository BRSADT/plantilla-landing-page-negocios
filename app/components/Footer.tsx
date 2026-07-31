import { shop, whatsappLink } from "../data";

export function Footer() {
  return <footer><div className="shell footer-inner"><div><strong>{shop.name}</strong><span>{shop.descriptor}</span></div><p>Horneamos bajo pedido en {shop.address}.<br />Síguenos en {shop.instagram}</p><a href={whatsappLink()} target="_blank" rel="noreferrer">Hacer un pedido</a></div></footer>;
}

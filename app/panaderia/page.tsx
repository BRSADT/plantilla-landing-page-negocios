import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import { bakery } from "../data";
import { siteConfig } from "../site.config";

export default function BakeryPage() {
  const catalog = siteConfig.catalogs.bakery;
  return <main><Header /><section className="catalog-hero shell" style={{ backgroundImage: `url('${catalog.heroImage}')`, backgroundPosition: "center 58%" }}><div><p className="kicker">{catalog.kicker}</p><h1>{catalog.title}</h1><p>{catalog.description}</p></div></section><section className="catalog-section shell"><div className="catalog-heading"><h2>{catalog.heading}</h2><p>{bakery.length} opciones · {catalog.availability}</p></div><div className="catalog-grid">{bakery.map(product => <ProductCard key={product.id} product={product} />)}</div></section><Footer /></main>;
}

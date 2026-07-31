import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import { cakes } from "../data";
import { siteConfig } from "../site.config";

export default function CakesPage() {
  const catalog = siteConfig.catalogs.cakes;
  return <main><Header /><section className="catalog-hero shell" style={{ backgroundImage: `url('${catalog.heroImage}')` }}><div><p className="kicker">{catalog.kicker}</p><h1>{catalog.title}</h1><p>{catalog.description}</p></div></section><section className="catalog-section shell"><div className="catalog-heading"><h2>{catalog.heading}</h2><p>{cakes.length} opciones · {catalog.availability}</p></div><div className="catalog-grid">{cakes.map(product => <ProductCard key={product.id} product={product} />)}</div></section><Footer /></main>;
}

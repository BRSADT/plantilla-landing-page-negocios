import Link from "next/link";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import { cakes, bakery, whatsappLink } from "./data";
import { siteConfig } from "./site.config";

export default function Home() {
  const allProducts = [...cakes, ...bakery];
  const favorites = siteConfig.home.favoriteIds.map(id => allProducts.find(product => product.id === id)).filter(Boolean) as typeof allProducts;
  const { home, catalogs } = siteConfig;
  return <main><Header />
    <section className="home-hero shell">
      <div className="hero-copy"><p className="kicker">{home.kicker}</p><h1>{home.titleBeforeAccent} <em>{home.titleAccent}</em>{home.titleAfterAccent}</h1><p>{home.description}</p><a className="whatsapp-button" href={whatsappLink()} target="_blank" rel="noreferrer">Pedir por WhatsApp</a></div>
      <div className="hero-photo"><img className="hero-main-image" src={home.heroImage} alt={home.heroImageAlt} />{home.orbitImages.map(image => <img key={image.src} className={`hero-orbit ${image.className}`} src={image.src} alt={image.alt} />)}</div>
    </section>
    <section className="category-strip shell"><Link href={catalogs.cakes.href}><span>{catalogs.cakes.stripLabel}</span><strong>{catalogs.cakes.stripAction}</strong></Link><Link href={catalogs.bakery.href}><span>{catalogs.bakery.stripLabel}</span><strong>{catalogs.bakery.stripAction}</strong></Link><div><span>{home.specialOrderLabel}</span><strong>{home.specialOrderValue}</strong></div></section>
    <section className="favorites shell"><div className="section-heading"><div><p className="kicker">{home.favoritesKicker}</p><h2>{home.favoritesTitle}</h2></div><p>{home.favoritesDescription}</p></div><div className="home-grid">{favorites.map(product => <ProductCard key={product.id} product={product} />)}</div><div className="catalog-links"><Link href={catalogs.cakes.href}>Ver todos los {catalogs.cakes.navLabel.toLowerCase()}</Link><Link href={catalogs.bakery.href}>Ver toda la {catalogs.bakery.navLabel.toLowerCase()}</Link></div></section>
    <Footer />
  </main>;
}

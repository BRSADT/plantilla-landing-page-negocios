import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { shop, whatsappLink } from "../data";
import { siteConfig } from "../site.config";

export default function ContactPage() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`;

  return <>
    <Header />
    <main className="shell contact-page">
      <section className="contact-intro">
        <p className="kicker">{siteConfig.contact.kicker}</p>
        <h1>{siteConfig.contact.title} <em>{siteConfig.contact.titleAccent}</em></h1>
        <p>{siteConfig.contact.description}</p>
        <a className="whatsapp-button" href={whatsappLink()} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
      </section>
      <section className="contact-details" aria-label="Datos de contacto">
        <div><span>Teléfono</span><a href={`tel:${shop.phoneHref}`}>{shop.phone}</a></div>
        <div><span>Correo</span><a href={`mailto:${shop.email}`}>{shop.email}</a></div>
        <div><span>Visítanos</span><p>{shop.address}</p></div>
        <div><span>Horario</span><p>{shop.hours}</p></div>
      </section>
      <section className="contact-map" aria-label="Mapa de ubicación">
        <iframe src={mapUrl} title="Ubicación de MIGA en Google Maps" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
    <Footer />
  </>;
}

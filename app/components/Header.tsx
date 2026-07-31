"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { shop, whatsappLink } from "../data";
import { siteConfig } from "../site.config";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [pathname]);

  return <header className="site-header shell">
    <Link className="logo" href="/"><strong>{shop.name}</strong><span>{shop.descriptor}</span></Link>
    <nav className="desktop-nav" aria-label="Navegación principal">{siteConfig.navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <a className="whatsapp-button compact" href={whatsappLink()} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
    <div className={`mobile-nav ${menuOpen ? "open" : ""}`}><button type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? "Cerrar" : "Menú"}</button><div id="mobile-menu">{siteConfig.navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<a href={whatsappLink()} target="_blank" rel="noreferrer">Pedir por WhatsApp</a></div></div>
  </header>;
}

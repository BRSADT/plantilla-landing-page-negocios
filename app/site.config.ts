/**
 * ARCHIVO PRINCIPAL DE PERSONALIZACIÓN
 * ------------------------------------
 * Para crear un sitio para otro negocio, cambia solamente los valores de este
 * archivo y reemplaza las imágenes dentro de /public/images.
 */

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const siteConfig = {
  business: {
    name: "MIGA",
    descriptor: "Repostería artesanal",
    whatsapp: "5215555555555", // Código de país + número, sin espacios ni signo +
    phone: "+52 55 5555 5555",
    phoneHref: "+525555555555",
    email: "hola@migapanaderia.mx",
    instagram: "@migapanaderia",
    address: "Av. Álvaro Obregón 123, Roma Norte, Ciudad de México",
    hours: "Lunes a sábado · 9:00 a 19:00",
  },

  seo: {
    title: "MIGA | Repostería artesanal",
    description: "Pasteles y panadería artesanal. Consulta disponibilidad y haz tu pedido por WhatsApp.",
  },

  theme: {
    primary: "#ff4b43",
    accent: "#ffc640",
    cream: "#fff8ec",
    background: "#fffdf8",
    text: "#3b2118",
    muted: "#74645d",
    border: "#e8ddd1",
  },

  navigation: [
    { href: "/", label: "Inicio" },
    { href: "/pasteles", label: "Pasteles" },
    { href: "/panaderia", label: "Panadería" },
    { href: "/contacto", label: "Contacto" },
  ],

  home: {
    kicker: "Horneado cada día con ingredientes reales",
    titleBeforeAccent: "Hecho con",
    titleAccent: "miga",
    titleAfterAccent: ", amor y mucha mantequilla.",
    description: "Pasteles y panes artesanales, hechos en nuestro pequeño horno para endulzar tus mejores momentos.",
    heroImage: "/images/hero-cake.png",
    heroImageAlt: "Pastel artesanal de fresa de MIGA",
    orbitImages: [
      { src: "/images/chocolate-cake.png", alt: "Rebanada de pastel de chocolate", className: "orbit-cake" },
      { src: "/images/cinnamon-rolls.png", alt: "Roles de canela glaseados", className: "orbit-rolls" },
    ],
    favoriteIds: ["pastel-chocolate", "pastel-tres-leches", "roles-canela", "cookies-clasicas"],
    favoritesKicker: "Nuestros favoritos",
    favoritesTitle: "Para darte un gusto.",
    favoritesDescription: "Elige tu favorito y escríbenos. Te confirmamos disponibilidad, fecha de entrega y personalización por WhatsApp.",
    specialOrderLabel: "Pedidos especiales",
    specialOrderValue: "Con 48 h de anticipación",
  },

  catalogs: {
    cakes: {
      href: "/pasteles",
      navLabel: "Pasteles",
      stripLabel: "Pasteles para celebrar",
      stripAction: "Ver pasteles",
      kicker: "Pasteles para celebrar",
      title: "El centro dulce de cada momento.",
      description: "Elige un diseño de nuestra colección o cuéntanos tu idea para hacerlo especial.",
      heading: "Todos los pasteles",
      availability: "Elaborados bajo pedido",
      heroImage: "/images/hero-cake.png",
      products: [
        { id: "pastel-chocolate", name: "Pastel de Chocolate", category: "Pasteles", description: "Bizcocho húmedo y crema de chocolate belga.", price: "$550", image: "/images/chocolate-cake.png", badge: "Más pedido" },
        { id: "pastel-tres-leches", name: "Pastel Tres Leches", category: "Pasteles", description: "Suave, cremoso y terminado con fresas frescas.", price: "$520", image: "https://images.unsplash.com/photo-1567022432449-5cdf87e209a4?auto=format&fit=crop&w=900&q=90" },
        { id: "pastel-fresas", name: "Pastel Fresas con Crema", category: "Pasteles", description: "Vainilla, crema ligera y muchas fresas.", price: "$590", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90" },
        { id: "pastel-zanahoria", name: "Pastel de Zanahoria", category: "Pasteles", description: "Especias, nuez y betún de queso crema.", price: "$540", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=90" },
        { id: "red-velvet", name: "Red Velvet", category: "Pasteles", description: "Terciopelo de cacao y crema de vainilla.", price: "$580", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=900&q=90" },
        { id: "pastel-limon", name: "Pastel de Limón", category: "Pasteles", description: "Limón amarillo, vainilla y merengue suave.", price: "$530", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=90" },
      ] satisfies Product[],
    },
    bakery: {
      href: "/panaderia",
      navLabel: "Panadería",
      stripLabel: "Pan dulce recién hecho",
      stripAction: "Ver panadería",
      kicker: "Panadería artesanal",
      title: "Recién horneado sabe mejor.",
      description: "Piezas suaves, mantequillosas y listas para compartir. Solicita tu caja por WhatsApp.",
      heading: "Toda la panadería",
      availability: "Horneadas cada mañana",
      heroImage: "/images/cinnamon-rolls.png",
      products: [
        { id: "roles-canela", name: "Roles de Canela", category: "Panadería", description: "Esponjosos, tibios y con glaseado de vainilla.", price: "$280 / 6 pzas", image: "/images/cinnamon-rolls.png", badge: "Favoritos" },
        { id: "cookies-clasicas", name: "Cookies Clásicas", category: "Panadería", description: "Crujientes por fuera, suaves por dentro.", price: "$220 / 6 pzas", image: "https://images.unsplash.com/photo-1564988208918-44ed48c1b236?auto=format&fit=crop&w=900&q=90" },
        { id: "croissants", name: "Croissants de Mantequilla", category: "Panadería", description: "Hojaldre dorado con mantequilla real.", price: "$210 / 6 pzas", image: "https://images.unsplash.com/photo-1693483640461-267d788b6148?auto=format&fit=crop&w=900&q=90" },
        { id: "conchas", name: "Conchas de Vainilla", category: "Panadería", description: "Suaves, aromáticas y recién horneadas.", price: "$180 / 6 pzas", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=90" },
        { id: "muffins", name: "Muffins de Berries", category: "Panadería", description: "Miga tierna con frutos rojos de temporada.", price: "$240 / 6 pzas", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=90" },
        { id: "danes", name: "Danés de Frutas", category: "Panadería", description: "Hojaldre, crema pastelera y fruta fresca.", price: "$240 / 6 pzas", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90" },
      ] satisfies Product[],
    },
  },

  contact: {
    kicker: "Estamos cerca de ti",
    title: "Hagamos algo",
    titleAccent: "delicioso.",
    description: "Cuéntanos qué tienes en mente. Te ayudamos con disponibilidad, sabores y pedidos especiales.",
  },
} as const;

export function whatsappLink(product?: string) {
  const message = product
    ? `Hola, me interesa pedir: ${product}. ¿Me comparten disponibilidad?`
    : `Hola, quisiera hacer un pedido en ${siteConfig.business.name}.`;
  return `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(message)}`;
}

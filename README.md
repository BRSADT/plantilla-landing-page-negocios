# Plantilla corta para negocios que venden

Página estática y visual para pequeños negocios con productos, paquetes o servicios. El ejemplo utiliza una repostería, pero la estructura se adapta a comida, ropa, belleza, regalos y servicios.

## Personalización rápida

Toda la información editable del negocio está centralizada en `app/site.config.ts`: marca, contacto, colores, textos, imágenes, categorías y productos.

Consulta `PLANTILLA.md` para ver las instrucciones y un prompt completo listo para adaptar el sitio con IA.

## Desarrollo

```bash
npm install
npm run dev
```

La página no tiene base de datos, pagos, carrito ni administración. Cada botón crea una consulta directa por WhatsApp.

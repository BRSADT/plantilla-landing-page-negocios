# Cómo crear un sitio nuevo con esta plantilla

La plantilla está preparada para cambiar de negocio sin tocar la estructura de las páginas.

## Opción rápida: editar un solo archivo

Abre `app/site.config.ts`. Ahí se encuentra todo lo que normalmente cambia:

- nombre, descripción y datos de contacto;
- número de WhatsApp;
- textos de portada y contacto;
- colores de marca;
- navegación;
- categorías, productos, precios e imágenes;
- títulos e imágenes de los catálogos;
- productos destacados de la portada.

Las imágenes propias se guardan en `public/images`. Después se escriben en la configuración como `/images/nombre-del-archivo.jpg`.

Cada producto necesita un `id` único. Para mostrarlo entre los favoritos, copia ese `id` dentro de `home.favoriteIds`.

## Opción con IA: prompt listo para copiar

```text
Adapta esta plantilla para el siguiente negocio:

Nombre: [NOMBRE]
Tipo de negocio: [TIPO]
Descripción breve: [DESCRIPCIÓN]
WhatsApp con código de país: [NÚMERO]
Teléfono visible: [TELÉFONO]
Correo: [CORREO]
Dirección: [DIRECCIÓN]
Horario: [HORARIO]
Instagram: [USUARIO]
Colores de marca: [COLORES O “PROPÓNLOS”]
Categorías: [CATEGORÍAS]
Productos o servicios: [LISTA CON NOMBRE, DESCRIPCIÓN Y PRECIO]
Estilo visual deseado: [ESTILO]

Modifica principalmente app/site.config.ts y reemplaza las imágenes de
public/images. Conserva las rutas separadas, el diseño responsive y los botones
que envían por WhatsApp el nombre del producto seleccionado. Verifica escritorio
y celular. No agregues carrito, pagos, base de datos ni administración.
```

## Para adaptar la estructura

La plantilla actual contiene dos catálogos: `cakes` y `bakery`. Es posible cambiar sus nombres, textos y productos sin modificar las páginas. Si el nuevo negocio necesita más o menos categorías o rutas, entonces sí se deben añadir o quitar páginas dentro de `app` y actualizar `navigation`.

## Verificación antes de entregar

1. Confirmar que el WhatsApp no tenga espacios ni el signo `+`.
2. Abrir Inicio, los dos catálogos y Contacto.
3. Probar un producto y revisar que su nombre aparezca en el mensaje de WhatsApp.
4. Revisar la página a 390 px de ancho.
5. Ejecutar `npm run build`.

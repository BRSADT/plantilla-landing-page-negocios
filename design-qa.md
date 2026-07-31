# Design QA — MIGA

- Source visual truth: `C:\Users\PC\.codex\generated_images\019fb92f-8633-7950-9fa7-d557d0de61b0\exec-1d5728e5-87eb-4ca5-85a8-51c12bea2bf2.png`
- Implementation desktop: `C:\Users\PC\Documents\Codex\2026-07-31\ten\work\qa\home-desktop-final2.png`
- Implementation mobile: `C:\Users\PC\Documents\Codex\2026-07-31\ten\work\qa\home-mobile-passed.png`
- Full comparison: `C:\Users\PC\Documents\Codex\2026-07-31\ten\work\qa\comparison-final.png`
- Source pixels: 1487 × 1058.
- Desktop capture: 1425 × 1013 from a 1440 × 1024 CSS viewport at density 1.
- Mobile capture: 375 × 812 from a 390 × 844 CSS viewport at density 1.
- State: home page, default state; responsive catalog, contact route and open/closed mobile navigation also tested.
- Normalization: source and desktop capture were aspect-fit into equal 720 × 512 panels for the comparison image.

## Full-view comparison evidence

The implementation preserves the selected direction's cream, coral-red and cocoa palette; prominent food photography; high-weight expressive display type; compact navigation; direct WhatsApp CTA; and a four-product favorites grid immediately after the hero. The implementation uses a split hero and real circular product photography to adapt the reference collage into responsive code. The resulting hierarchy and product emphasis remain consistent with the source.

## Focused evidence

Focused checks covered the hero typography and image treatment, product-card imagery and CTA treatment, the mobile headline bounds, and the mobile catalog/navigation state. Additional focused crops were unnecessary because these elements are readable in the full desktop and mobile captures.

## Required fidelity surfaces

- Fonts and typography: Fraunces 900/800 recreates the source's friendly, heavy bakery display style; Geist provides clean small copy. Mobile wrapping remains within the 335 px content width.
- Spacing and layout rhythm: desktop retains a wide hero, tight category strip and catalog rhythm. Mobile changes to image-first stacking and a two-column product grid without horizontal overflow.
- Colors and tokens: coral red, vanilla cream, butter yellow and cocoa are consistently mapped to reusable CSS variables with accessible dark-on-light contrast.
- Image quality and assets: the hero, chocolate cake and cinnamon-roll images were produced specifically for this direction. Remaining catalog photos are high-resolution food photography with intentional crops; no CSS drawings, placeholder art or handcrafted SVGs are used.
- Copy and content: Spanish bakery copy, realistic prices and product-specific WhatsApp messages are present. Pasteles and Panadería have distinct catalog routes.

## Comparison history

1. Initial pass found a P1 typography mismatch: the implementation used a thin editorial serif while the source used a heavy, playful display face. Fixed by adding Fraunces at heavy optical weights. Post-fix evidence: `home-desktop-final2.png`.
2. Initial mobile pass found a P2 navigation issue: the menu remained open after route navigation. Fixed by resetting controlled menu state on every path change. Post-fix evidence: `panaderia-mobile-final.png`.
3. Second mobile pass found a P1 headline clipping issue caused by the desktop type override winning at the mobile breakpoint. Fixed with a final 43 px responsive display rule and overflow-safe wrapping. Post-fix evidence: `home-mobile-passed.png`.
4. Final visual pass added real circular product images to bring the hero closer to the selected collage while keeping the mobile hero uncluttered. Post-fix evidence: `home-desktop-final2.png`.
5. The wide-screen review found excessive side gutters at 1920 px. The main shell now grows to 1540 px while preserving the compact mobile gutter.
6. Forced browser dark mode inverted the bakery palette. The document now explicitly declares a light-only color scheme and repeats the brand surface colors inside the dark preference query.
7. Contact moved from an in-page anchor to `/contacto`, with a responsive information grid, Google Maps embed, phone, email and WhatsApp action.

## Primary interactions tested

- Desktop Pasteles navigation opens `/pasteles`.
- Mobile menu opens and closes.
- Mobile Panadería navigation opens `/panaderia` and closes the menu after navigation.
- Product CTA contains the selected product name in its WhatsApp message.
- All four pages return HTTP 200 in the local preview, including `/contacto`.
- The contact phone uses a `tel:` link, the email uses `mailto:`, and the main contact CTA opens WhatsApp.
- Console checked: no application errors; one development-only hot-reload connection message appeared while rebuilding and did not reproduce as an application failure.

## Findings

No actionable P0, P1 or P2 design differences remain.

## Follow-up polish

- P3: Secondary stock product photos vary slightly in lighting; replace them with client photography when adapting the template to a real bakery.

final result: passed

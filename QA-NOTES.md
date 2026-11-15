# Validation notes

Completed November 15, 2026.

## Browser checks

- Chromium desktop viewport: 1363 × 936.
- Mobile layout: actual 390px-wide iframe viewport, with 375px content width after the desktop scrollbar. All four main pages checked; no horizontal content overflow observed.
- Home hero, supplied wordmark, floral artwork, original marble background, fonts and sourced photos visually inspected.
- Sticky navigation and scroll-triggered section reveals checked.
- Mobile menu opens, and choosing Contact navigates and closes it.
- Drinks: Sours produced four results; searching `pickle` produced one result; a nonmatching query displayed the no-results message; reset restored twelve results. Mobile IPAs filter produced three results.
- Contact FAQ dog-policy disclosure expanded and displayed its answer.
- Contact map rendered the brewery location. Phone and directions link destinations inspected; no phone call or message was sent.
- About founder cards and mobile layout visually inspected. Founder images are monograms rather than unverifiable portraits.
- Browser log entries observed were extension-generated metadata messages, not errors from site.js.

## Static checks

- Five HTML pages checked (four main pages plus 404).
- 93 local asset/link references and all CSS asset paths resolve.
- Local fragment destinations resolve; IDs are unique.
- Each page has one H1. Images have descriptive alternative text.
- JSON-LD parses, and JavaScript passes Node's syntax check.
- Final-URL helper checked on a temporary copy: valid four-page sitemap, project-path URLs, absolute social image URL, and safe repeat runs.
- Fonts are self-hosted with license files; photographs are local WebP assets.
- Reduced-motion CSS/JS and no-JavaScript navigation fallback included. These were code-reviewed, not separately exercised using browser emulation.

## Scope of verification

This is a static website; no remote content system, email backend, payment flow, or live tap integration is claimed. It has not been published to GitHub. Safari, Firefox, physical devices, and external social-link account access were not tested. Third-party service behavior and brewery information can change. Asset permission notes and factual sources are in SOURCES-AND-ASSETS.md.

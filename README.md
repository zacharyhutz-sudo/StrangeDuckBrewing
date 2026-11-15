# Strange Duck Brewing Co. - GitHub Pages website

A complete static website with Home, Our Story & Team, Drinks, and Contact pages. Built November 15, 2026.

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Upload **the extracted files and the assets folder** to your GitHub repository. `index.html` must be at the repository root, not inside an extra folder. Do not upload the ZIP itself as the website.
3. Commit the files to `main`.
4. Open **Settings → Pages → Build and deployment**.
5. Select **Deploy from a branch**, choose **main** and **/(root)**, then click **Save**.
6. Wait for the Pages deployment to finish and open the URL GitHub displays.

No package installation, build command, paid service, API key, or backend is required. Relative internal links support both a `username.github.io` site and a `username.github.io/repository-name/` project site. Retain `.nojekyll` when uploading with Git. No custom-domain or DNS changes are included.

GitHub's publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Pages and features

- `index.html`: floral introduction, brewery overview, featured beers, real venue photos, activities, hours.
- `about.html`: founding story, Drake Scott and Kristan Robertson, brewery philosophy. Founder monograms deliberately avoid misidentifying people in public photographs as staff.
- `drinks.html`: twelve published beers with styles, ABV, IBU, category filtering, live search, a no-results state, and reset. This is an editorial collection, not a live tap menu or ordering system.
- `contact.html`: phone, address, directions, map, hours, Facebook contact, accessible native FAQ disclosures.
- `404.html`: standalone lost-page screen.
- Scroll-triggered reveals, sticky navigation, phone navigation with Escape dismissal, keyboard focus states, skip links, reduced-motion support, responsive layouts, locally bundled fonts and images.

## Brand and assets

The supplied Strange Duck wordmark remains unchanged. Dosis and Montserrat are the font families explicitly loaded by the existing official website; both are bundled locally with their open font licenses. Headings use heavier Dosis weights to bring out the playful character. The original teal-marble background and official duck favicon are preserved, and a custom floral background complements the supplied sign.

Read `SOURCES-AND-ASSETS.md` for exact content sources, photo credits, and image-rights notes. Several online photos are user-contributed and have no verified reuse license; obtain permission or replace those photos with brewery-owned originals before public use. No stock people have been labeled as the team.

## Owner confirmation

The official site was showing a maintenance page during research. Contact details and hours were cross-checked against public listings. Confirm current hours, the founders' preferred bios, dog policy, and food arrangements with the brewery before launch. Hours are published with a call-ahead note. Beer listings are clearly labeled as a rotating historical collection; no prices, current availability, unverified email address, or invented event calendar are included.

Contact links work immediately through the published phone number and Facebook page. There is no simulated form submission. If you later want an on-site message form, connect a real form service or backend.

## Updating content

Edit the HTML directly. Search for a beer name, a sentence, or an hour to find its content. Shared navigation, footers, and structured business data are included in each page; update all copies when business information changes.

- Design tokens and responsive rules: `assets/styles.css`.
- Navigation, reveal animations, and filters: `assets/site.js`.
- Photos and artwork: `assets/images/`.
- Fonts and licenses: `assets/fonts/`.
- To add a beer: duplicate a `.beer-card` article in `drinks.html`, update its visible details, `data-category`, and lowercase `data-search`. Update the initial result count; JavaScript computes counts after interaction.
- Social/events links lead to the brewery's Facebook page. Map, social services, and outbound links require an internet connection; local content and filtering do not.

## Search and sharing metadata

Unique titles, descriptions, social metadata, and Brewery structured data are included. The ZIP does not assume ownership of the current official domain or invent your GitHub URL. Once you know the permanent public URL, optionally run:

```bash
python tools/configure_site.py https://YOUR-USER.github.io/YOUR-REPOSITORY/
```

Use your real URL. This updates canonical links, absolute social-image URLs, business URLs, `sitemap.xml`, and `robots.txt`. Upload the changed files. Rerun the command if you move to a custom domain. For a project site, robots.txt at the project path does not control the entire github.io host; the sitemap can still be submitted directly to search engines.

## Preview locally

Open `index.html` directly, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`. Direct file preview supports navigation and filters; use HTTP for the most representative map and metadata behavior.

## Validation

See `QA-NOTES.md`. The site was visually reviewed in Chromium on desktop and in a 390px-wide mobile frame. No hosting account was modified and the site has not been published.

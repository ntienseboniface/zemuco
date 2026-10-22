# Zemuco Havilah Real Estate Company Ltd Website

A complete static corporate website for Zemuco Havilah Real Estate Company Ltd. The public site uses no database, application framework or server-side runtime.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3

Bootstrap and the two font families are loaded from public CDNs. All company and service copy remains present in the HTML and does not depend on JavaScript.

## Local testing

From the project directory:

```bash
python -m http.server 8000
```

Open <http://localhost:8000/>. VS Code Live Server can also serve the directory.

Do not open the service pages only through `file://` when testing links and query parameters; use a local server.

## Image assets

Approved Pexels originals are stored in `assets/images/source/`. Optimised WebP and AVIF files are in `assets/images/`. The website uses `<picture>` with AVIF, WebP and JPEG fallbacks.

To download the approved image manifest again:

```bash
python -m pip install Pillow
python scripts/download-images.py
```

Pexels occasionally rejects an automated request. If that happens, open the recorded page in `IMAGE-CREDITS.md`, use its free-download action, save the JPEG to `assets/images/source/` with the manifest filename, and rerun the conversion stage. Do not replace the image with an unrelated photograph.

Run `python scripts/build-brand-assets.py` to regenerate the logo renditions, favicons, app icons and social-preview image from the supplied logo and local architectural image.

## Configuration

Editable company details and outbound action settings are centralised in `assets/js/config.js`:

- primary and secondary telephone numbers
- WhatsApp number and default message
- email address
- website URL
- office address
- text-based Google Maps directions URL
- future verified Facebook and Instagram profile URLs

There are no secrets or API credentials in the configuration.

## Contact actions

The contact page does not contain a form or store enquiry data. Visitors can contact Zemuco directly through WhatsApp, telephone or email. Service-specific buttons prepare a concise WhatsApp message where appropriate.

## Deployment

### cPanel or ordinary hosting

Upload the contents of this directory—not the containing folder—to the domain's web root, commonly `public_html`. Keep the relative directory structure intact. Confirm HTTPS is active and configure the host to use `404.html` as the custom error page if it does not recognise it automatically.

### Netlify or Cloudflare Pages

Create a static site with this directory as the publish directory. No build command is required. Set the production domain to `www.zemuco.ng`, enable HTTPS, and redirect the non-preferred domain version consistently.

### GitHub Pages

Publish the repository root or the selected deployment branch. A custom-domain configuration may be added according to GitHub Pages documentation. Canonical links already use `https://www.zemuco.ng/`.

## SEO

Every public page has a unique title, description, canonical URL, H1 and social metadata. The homepage includes `RealEstateAgent` structured data. All service pages include `Service` and `BreadcrumbList` structured data. `sitemap.xml` and `robots.txt` use the canonical HTTPS domain.

If the production domain changes, update canonical metadata, structured data, the sitemap, robots file and `assets/js/config.js` together.

## Social media

The supplied account handle `@zemucong` is displayed as text for Facebook and Instagram. No unverified profile URL is linked. Once the exact profile URLs are confirmed, add them to `assets/js/config.js` and add only those verified links to the footer/contact UI.

## Source maintenance

Internal pages are generated as static HTML by `scripts/build-pages.py`. Edit the shared data or templates there and rerun:

```bash
python scripts/build-pages.py
```

The homepage is maintained directly in `index.html`.

## Future property module

Do not publish property listings until genuine inventory, prices, locations, sizes, media and availability details are supplied and verified. A later `properties/` module can use static detail pages or a vetted content source; it should include clear update ownership and an availability-review process.

## Remaining owner inputs

- Verified Facebook profile URL
- Verified Instagram profile URL
- Exact official Google Maps or Business Profile location URL
- Final confirmation of the supplied address spelling
- Genuine CEO portrait or team/company photographs, if desired
- Genuine property or project listings, if publication is desired
- Verified testimonials, statistics and professional accreditations, if publication is desired

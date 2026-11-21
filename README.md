# Abu Raf'an Siraj – Free Personal Research Website

## Included
- `index.html`: responsive Bengali/Arabic/English personal research website
- `styles.css`: classical Arabic-book inspired design (deep green, parchment, gold)
- `articles.js`: sample articles and article data
- `script.js`: search, category filtering, language switching, article reader, copy attribution
- `local-admin.html`: local article JSON generator (do not publish this file)
- `assets/pdfs/`: place PDF files here before adding a PDF reader entry

## Important content checks
The current articles are sample content only. Replace them with your own verified research before launch. Confirm the exact institutional spelling and biography wording. Add your own portrait to `assets/images/` and update the portrait placeholder in `index.html`.

## Publish free with GitHub Pages
1. Create a GitHub account.
2. Create a public repository named exactly `YOUR-USERNAME.github.io`.
3. Upload `index.html`, `styles.css`, `script.js`, `articles.js`, and the `assets` folder.
4. Do not upload `local-admin.html` because it is a local helper, not a secure admin panel.
5. In repository Settings → Pages, select Deploy from a branch → `main` → `/ (root)`.
6. Wait for GitHub Pages to publish. Your site address will be `https://YOUR-USERNAME.github.io/`.

GitHub Pages is free for eligible public repositories and uses a GitHub subdomain. A custom `.com` domain normally has a yearly registration fee.

## Add an article
1. Open `local-admin.html` on your own computer.
2. Fill in the fields and generate a JSON file.
3. Open `articles.js` and add the generated object inside the `window.SITE_ARTICLES` array, separated by commas.
4. Upload the updated `articles.js` to your GitHub repository. GitHub Pages will redeploy the site.

You can also edit `articles.js` directly with a text editor.

## PDF publishing
The current site contains a PDF library introduction, not a complete protected PDF hosting backend. For each PDF, upload the file to `assets/pdfs/` and later implement a PDF.js reader route. Hiding a download button cannot prevent screenshots, browser developer tools, or extraction of content delivered to a browser. Do not upload confidential or copyrighted material without permission.

## Copy attribution
The site appends the author and current page URL when a visitor copies selected text using the normal browser copy event. Some browsers, apps, or alternative extraction methods may bypass this behavior. It is attribution assistance, not copy protection.

## Admin and payments
This free static version has no secure online admin login, database, payment processing, membership backend, or AdSense approval. The local editor only generates article data. These features require a separate backend/service and may incur costs or account eligibility requirements.

## Contact
mdsalekin105@gmail.com
Facebook: https://www.facebook.com/share/1Hsyb2ybJz/

## Latest requested edit
- Removed personal biography, educational/institutional details, and the author-introduction section.
- The hero now displays only the Bengali and Arabic author names.
- Arabic font preference is set to `Molvi AM`; to embed it for every visitor, add a licensed `Molvi AM .ttf` or `.otf` file to `assets/fonts/` and configure its filename in `styles.css`. A local font declaration alone cannot deliver the font to visitors who do not have it installed.

## Molvi AM font installed
The uploaded `MolviAM0.ttf` is included at `assets/fonts/MolviAM0.ttf` and loaded through `@font-face` in `styles.css` for the website's Arabic typography.

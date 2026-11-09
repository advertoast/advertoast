# Advertoast website: how to put it online and update it (free)

Everything you'll ever change lives in **one file: `content.js`** (prices, offers, videos, FAQ, email).
`index.html` is the design; you don't need to touch it.

## 1. Put it online with GitHub Pages (one time, ~10 minutes, free forever)

1. Make a free account at **github.com** (use your Advertoast email).
2. Click **+ → New repository**. Name it `advertoast` (or `<your-username>.github.io` if you want the shortest link). Public. Create.
3. On the new repo page click **"uploading an existing file"** → drag **everything inside the `site` folder** (index.html, content.js, favicon.png, og.jpg, the `media` folder) → **Commit changes**.
4. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → **Save**.
5. After about 1 minute your site is live at `https://<your-username>.github.io/advertoast/`.
   Put that link in the Instagram bio, YouTube links, and email signature.

> Free custom domain later: buy `advertoast.com` (~$10/yr) and add it under Settings → Pages → Custom domain. Optional.

## 2. Update offers, prices or videos (2 minutes, works from your phone too)

1. Open your repo on github.com → click **`content.js`** → click the **✏️ pencil** (Edit).
2. Change what you need:
   - **New offer:** in `offers`, set `active: true`, change the `text` and the `ends` date (`"YYYY-MM-DD"`). It disappears by itself after that date.
   - **Prices:** in `packages`, change the numbers in `price: { USD: 149, GBP: 119, EUR: 139 }`.
   - **New video:** upload it to YouTube (Unlisted or a Short) → copy the ID (the part after `youtu.be/` or `/shorts/`) → add a line to `work`:
     `{ type: "youtube", id: "AbC123xyz", title: "Café promo · Brooklyn", tag: "Client", format: "9x16" },`
   - **New review:** add to `reviews`: `{ quote: "…", name: "Jane D.", business: "Café, London" },`
3. Click **Commit changes**. The live site updates in about 1 minute (refresh the page; if it looks old, wait a minute).

**Rules so nothing breaks:** keep the `"quotes"` around text, keep the comma at the end of each item, and don't delete `{ }` or `[ ]` brackets. If the page goes blank after an edit, open the file's **History**, compare with the last version, and fix the missing comma/quote.

## 3. Preview on your computer before publishing

Just double-click `index.html`. It works offline because the content is in `content.js`.

## 4. Videos on the site

- Small MP4s (under ~20 MB) can go in `media/` and use `type: "video"`.
- Anything bigger → YouTube (free, unlimited, and fast for visitors).
- The hero phone plays `media/intro-9x16.mp4` (the Advertoast intro). Change `hero.video` to swap it.

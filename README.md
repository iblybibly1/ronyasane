# RonyaSane Website

Elegant bilingual (FI/EN) equestrian website for Tmi Ronya Sane.

---

## 📁 File Structure

```
ronyasane/
├── index.html          ← Home page
├── about.html          ← About Ronya
├── horses.html         ← Horse profiles
├── services.html       ← Services & pricing
├── contact.html        ← Contact form
├── css/
│   └── style.css       ← All styles (shared)
├── js/
│   └── main.js         ← All JavaScript (shared)
└── images/
    ├── hero-bg.jpg          ← ✅ INCLUDED (black horse on beach)
    ├── logo.png             ← Add your logo here
    ├── ronya-portrait.jpg   ← Your portrait photo
    ├── horse-takku.jpg      ← Photo of Takku
    ├── horse-beso.jpg       ← Photo of Beso
    ├── horse-elvis.jpg      ← Photo of Elvis
    ├── horse-alfa.jpg       ← Photo of Alfa (archive/past)
    ├── horse-admi.jpg       ← Photo of Admi (archive/past)
    ├── horse-diina.jpg      ← Photo of Diina (archive/past)
    ├── horse-vikke.jpg      ← Photo of Vikke (archive/past)
    ├── gallery-1.jpg        ← Home page gallery image 1
    ├── gallery-2.jpg        ← Home page gallery image 2
    └── gallery-3.jpg        ← Home page gallery image 3
```

---

## 🖼️ Image Guide

Place your photos in the `images/` folder using EXACTLY these filenames:

| Filename | Used on | Description |
|---|---|---|
| `hero-bg.jpg` | All pages (hero) | ✅ Already included — replace with your own if preferred |
| `logo.png` | Header nav | Optional — transparent background recommended |
| `ronya-portrait.jpg` | Home + About | Your portrait photo, upright/portrait orientation |
| `horse-takku.jpg` | Horses page | Takku photo, landscape or square |
| `horse-beso.jpg` | Horses page | Beso photo |
| `horse-elvis.jpg` | Horses page | Elvis photo |
| `horse-alfa.jpg` | Horses page | Alfa photo (past horses section) |
| `horse-admi.jpg` | Horses page | Admi photo (past horses section) |
| `horse-diina.jpg` | Horses page | Diina photo (past horses section) |
| `horse-vikke.jpg` | Horses page | Vikke photo (past horses section) |
| `gallery-1.jpg` | Home page | First stable/horse gallery image |
| `gallery-2.jpg` | Home page | Second gallery image |
| `gallery-3.jpg` | Home page | Third gallery image |

**Tip:** Images show automatically when the file exists. If an image is missing, the card just shows an elegant placeholder — nothing breaks.

**Recommended sizes:**
- Hero: 1920×1080px minimum
- Horse portraits: 800×600px or larger
- Portrait: 600×800px (3:4 ratio)
- Gallery: 600×600px square

---

## 🚀 Uploading to GitHub Pages

1. Create a new repo on GitHub (e.g. `ronyasane`)
2. Upload all files **keeping the folder structure**
3. Go to repo **Settings → Pages**
4. Under "Source" select **main branch / root**
5. Your site will be live at: `https://yourusername.github.io/ronyasane/`

---

## 🗺️ Adding a Real Map (Contact page)

Open `contact.html` and find this comment:
```html
<!-- Replace this block with a real Google Maps embed if desired -->
```

Replace the `<div class="map-placeholder">` block with your Google Maps embed:
1. Go to [Google Maps](https://maps.google.com)
2. Search your address
3. Click Share → Embed a map → Copy HTML
4. Paste it in place of the placeholder div

---

## ✉️ Making the Contact Form Send Real Emails

The contact form currently shows a success message locally.
To make it actually send emails, use one of these free services:

- **[Formspree](https://formspree.io)** — free tier, no backend needed
  - Sign up at formspree.io
  - In `contact.html`, replace the `submitForm()` function with a fetch to your Formspree endpoint
- **[Netlify Forms](https://www.netlify.com/products/forms/)** — if you host on Netlify instead

---

## 🌐 Language Toggle

The FI/EN toggle is in the top nav bar. The selected language is remembered between page visits (stored in browser localStorage). All content is available in both languages throughout the site.

---

## 📱 Mobile

Fully responsive. The navigation collapses into a hamburger menu on screens under 768px.

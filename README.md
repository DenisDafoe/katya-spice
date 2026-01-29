# Katya Spice — macOS-style Portfolio

A single-page portfolio that mimics a macOS desktop with a wallpaper, desktop icons, floating windows, and a dock — inspired by the vibe of [bychudy.com](https://www.bychudy.com/).

## Run locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Customize content

### 1) Change desktop icons + labels
Edit the icon buttons in `index.html`:

```html
<button class="icon" data-window="about">
  <span class="icon__image">👩‍💻</span>
  <span class="icon__label">About</span>
</button>
```

- Replace the emoji inside `.icon__image` with another emoji or an inline SVG.
- Update `.icon__label` text to rename the desktop item.

### 2) Change dock items
Edit the dock buttons in `index.html`:

```html
<button class="dock__item" data-window="projects">
  <span>🗂️</span>
  <small>Work</small>
</button>
```

- Swap the emoji for a new icon.
- Update the `<small>` label to rename the dock app.
- `data-window` must match the target window ID (e.g. `projects`).

### 3) Edit window content
Each window is an `<article class="window">` in `index.html`.

Example:
```html
<article class="window" id="window-about" data-window="about">
  <h2 class="window__title">About Me</h2>
  ...
</article>
```

- Edit the title in `.window__title`.
- Replace the `.note` content with your own text, lists, or cards.

### 4) Swap the gallery images
Replace the SVG files in `assets/` or update the image paths in `index.html`:

```html
<img src="assets/polaroid-01.svg" alt="Polaroid moodboard" />
```

Use your own images (PNG/JPG/SVG) and update the `src` attribute.

### 5) Change wallpaper
Update the gradient in `styles.css`:

```css
.wallpaper {
  background: radial-gradient(circle at top, #f3c9ff 0%, #94c7ff 40%, #ffc4b4 100%);
}
```

You can also replace the `::after` texture with a custom image if desired.

## Structure

```
.
├── assets/
├── index.html
├── styles.css
└── script.js
```

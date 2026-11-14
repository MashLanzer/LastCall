# LAST CALL — Official Website

Public one-page artist site for LAST CALL (dark pop), published with GitHub Pages:

https://mashlanzer.github.io/LastCall/

Static, no frameworks: `index.html` + `styles.css` + `script.js` + `img/`.

**v2 (2026-11-14)** — full visual redesign to the finish level of the Mash Lanzer
portfolio, keeping the LAST CALL identity (deep black + red, Anton/Inter):
fixed slim nav with Listen CTA and scroll progress bar, composed two-column hero
(Figura B in a framed card with glow, floating pills and caption; badge, stats
row, scroll indicator), marquee, section headers (kicker + title + lead), latest
release as a panel with the full single credits sheet (title, type, release date,
duration 2:52, genre, label, writer, producer) and per-platform buttons, Spotify
embed, video in a framed shell, about with facts list, follow as a card grid,
contact panel and a complete footer.

Sections: hero, music (Sleep Tight), video, about (Muse 12 art), follow
(Spotify, YouTube, Instagram, TikTok, Facebook, Threads), contact
(zora0105@muse.ai), footer (14148853 Records DK · Produced by Mash Lanzer).

Only published music appears here: “Sleep Tight” (single, Nov 10 2026).
Unreleased material never goes on this page.

Images in `img/` are web-optimized copies generated from the masters in
`~/workspace/musica-ia/` (figura-b.png, Muse 12, portada-3000.png).

Verified visually before shipping: headless-Chrome full-page captures at
1440 / 412 / 390 px live in `capturas-v2/` (local only, not deployed).

Deploy: `tools/gh-api.py` (put/get/pages via the custom.github-api connector,
same surrogate pattern as the house helper; the token is never read or stored).

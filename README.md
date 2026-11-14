# LAST CALL — Official Website

Public one-page artist site for LAST CALL (dark pop), published with GitHub Pages:

https://mashlanzer.github.io/LastCall/

Static, no frameworks: `index.html` + `styles.css` + `img/`.

Sections: hero (Figura B, “Sleep Tight — out now”, Listen / All Platforms / Watch),
latest release (Sleep Tight cover, streaming buttons, Spotify embed), official video
(YouTube embed), about (Muse 12 art), follow (Spotify, YouTube, Instagram, TikTok,
Facebook, Threads), contact (zora0105@muse.ai) and footer (14148853 Records DK ·
Produced by Mash Lanzer).

Pattern follows current official artist sites (full-bleed artist hero with the name
as real text, latest-release block with streaming buttons, embedded players that
load lazily, short bio, booking contact, label footer).

Only published music appears here: “Sleep Tight” (single, Nov 10 2026).
Unreleased material never goes on this page.

Images in `img/` are web-optimized copies generated from the masters in
`~/workspace/musica-ia/` (figura-b.png, Muse 12, portada-3000.png).

Deploy: `tools/gh-api.py` (put/get/pages via the custom.github-api connector,
same surrogate pattern as the house helper; the token is never read or stored).

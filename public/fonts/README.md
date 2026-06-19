# Fonts

GitHub Pages static export can’t fetch Google Fonts at build time, so this site self-hosts fonts.

Add these files to this folder:

- `public/fonts/syne.woff2`
- `public/fonts/dm-sans.woff2`

How to get them (one approach):

1) Download the font families from Google Fonts (Syne + DM Sans).
2) Extract and pick the `.woff2` (variable) files.
3) Rename them to the filenames above.

Once committed and deployed, the site will use these fonts via `src/app/globals.css`.


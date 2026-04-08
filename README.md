# SakayoriWeb

Official website for [SakayoriMusic](https://github.com/Sakayorii/sakayori-music) — a free, open-source, cross-platform YouTube Music client.

## Stack

- **Next.js 15** (App Router) — React framework
- **Tailwind CSS v4** — Utility-first styling
- **TypeScript** — Type safety
- **Lucide Icons** — Icon set
- **GitHub Releases API** — Auto-fetch latest builds

## Pages

- **/** — Landing page with hero, features, and CTA
- **/download** — Auto-fetched download links from GitHub Releases (Android, Windows, Linux, macOS)
- **/docs** — Installation, setup, features guide, and FAQ

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3636](http://localhost:3636) in your browser.

## Build

```bash
npm run build
npm start
```

Production server also runs on port 3636.

## Cloudflare Tunnel (Routing)

This project uses **Cloudflared** to expose `localhost:3636` to the internet via `music.sakayori.dev`.

### Quick tunnel (random URL)

```bash
npm run tunnel
```

### Named tunnel + custom domain

See [cloudflared/README.md](cloudflared/README.md) for full setup.

### Run Dev Server + Tunnel Together

```bash
npm run dev:tunnel
```

### Static Export

To deploy as static files, edit `next.config.js`:

```js
const nextConfig = {
  output: "export",
}
```

Then `npm run build` will output to `out/` folder.

## Customization

- **Theme colors** — Edit `src/app/globals.css` `@theme` block
- **Features list** — Edit `src/app/page.tsx` `features` array
- **Platform matchers** — Edit `src/components/DownloadGrid.tsx` `platforms` array
- **Documentation content** — Edit `src/app/docs/page.tsx`

## License

MIT — Free to use, modify, and distribute.

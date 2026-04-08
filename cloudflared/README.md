# Cloudflared Setup

Two ways to expose `localhost:3636` via Cloudflare Tunnel.

## Option 1: Quick Tunnel (Easiest)

No setup required. Run anytime:

```powershell
npm run tunnel
```

Or directly:

```powershell
cloudflared tunnel --url http://localhost:3636
```

Cloudflared will print a random `*.trycloudflare.com` URL. Use this for testing/sharing.

**Pros:** Zero config, instant.
**Cons:** URL changes every run. Not suitable for production.

## Option 2: Named Tunnel (Production - music.sakayori.dev)

### Prerequisites

1. Install cloudflared:
   ```powershell
   winget install --id Cloudflare.cloudflared
   ```

2. Login to Cloudflare:
   ```powershell
   cloudflared tunnel login
   ```
   This opens a browser to authorize your account and downloads `cert.pem` to `~/.cloudflared/`.

### Create Named Tunnel

```powershell
cloudflared tunnel create sakayori-music
```

This creates `~/.cloudflared/sakayori-music.json` with credentials. Update `cloudflared/config.yml` `credentials-file` path if needed.

### Route DNS

```powershell
cloudflared tunnel route dns sakayori-music music.sakayori.dev
```

This creates a CNAME record on your `sakayori.dev` zone pointing to the tunnel.

### Run the Tunnel

```powershell
cloudflared tunnel --config cloudflared/config.yml run sakayori-music
```

Or run as a Windows service:

```powershell
cloudflared service install
```

### Run Both Dev Server + Tunnel Together

```powershell
npm run dev:tunnel
```

This runs `next dev -p 3636` and `cloudflared` concurrently.

## Files

- `config.yml` — Tunnel ingress rules. Routes `music.sakayori.dev` → `localhost:3636`.

## Troubleshooting

- **`cloudflared: command not found`** — Install via winget or download from https://github.com/cloudflare/cloudflared/releases
- **`Tunnel credentials file not found`** — Run `cloudflared tunnel create sakayori-music` first
- **DNS not resolving** — Wait 1-2 minutes for Cloudflare DNS propagation
- **502 Bad Gateway** — Make sure `npm run dev` is running on port 3636

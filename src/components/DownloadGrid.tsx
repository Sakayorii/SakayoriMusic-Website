"use client"

import { useEffect, useState } from "react"

type ReleaseAsset = {
  name: string
  browser_download_url: string
  size: number
}

type Release = {
  tag_name: string
  name: string
  published_at: string
  html_url: string
  assets: ReleaseAsset[]
}

type Platform = {
  id: string
  name: string
  marker: string
  matchers: Array<{
    label: string
    test: (filename: string) => boolean
  }>
}

const platforms: Platform[] = [
  {
    id: "android",
    name: "Android",
    marker: "[A]",
    matchers: [
      { label: "Universal APK", test: (n) => n.endsWith(".apk") && n.includes("universal") },
      { label: "ARM64 APK", test: (n) => n.endsWith(".apk") && (n.includes("arm64") || n.includes("aarch64")) },
      { label: "ARMv7 APK", test: (n) => n.endsWith(".apk") && (n.includes("armeabi") || n.includes("armv7")) },
      { label: "x86_64 APK", test: (n) => n.endsWith(".apk") && n.includes("x86_64") },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    marker: "[W]",
    matchers: [
      { label: "MSI Installer", test: (n) => n.endsWith(".msi") },
      { label: "EXE Installer", test: (n) => n.endsWith(".exe") },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    marker: "[L]",
    matchers: [
      { label: "Debian / Ubuntu (.deb)", test: (n) => n.endsWith(".deb") },
      { label: "Fedora / RHEL (.rpm)", test: (n) => n.endsWith(".rpm") },
      { label: "AppImage", test: (n) => n.endsWith(".appimage") },
    ],
  },
  {
    id: "macos",
    name: "macOS",
    marker: "[M]",
    matchers: [
      { label: "Apple Silicon (.dmg)", test: (n) => n.endsWith(".dmg") && (n.includes("arm") || n.includes("aarch64")) },
      { label: "Intel (.dmg)", test: (n) => n.endsWith(".dmg") && (n.includes("x64") || n.includes("x86")) },
      { label: "Universal (.dmg)", test: (n) => n.endsWith(".dmg") },
    ],
  },
]

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
}

function findAssets(release: Release | null, platform: Platform): Array<{ label: string; asset: ReleaseAsset }> {
  if (!release) return []
  const used = new Set<string>()
  const result: Array<{ label: string; asset: ReleaseAsset }> = []
  for (const matcher of platform.matchers) {
    const asset = release.assets.find((a) => !used.has(a.name) && matcher.test(a.name.toLowerCase()))
    if (asset) {
      used.add(asset.name)
      result.push({ label: matcher.label, asset })
    }
  }
  return result
}

export function DownloadGrid() {
  const [release, setRelease] = useState<Release | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/Sakayorii/sakayori-music/releases/latest")
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API returned ${r.status}`)
        return r.json()
      })
      .then((data) => {
        setRelease(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch releases")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="surface p-12 flex flex-col items-center justify-center gap-3">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Loading
        </div>
        <div className="font-mono text-sm text-[var(--color-text-soft)]">
          Fetching Latest Release From GitHub
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="surface p-12 text-center">
        <p className="text-[var(--color-text)] mb-2 font-semibold">Unable To Load Releases</p>
        <p className="font-mono text-xs text-[var(--color-text-muted)] mb-6">{error}</p>
        <a
          href="https://github.com/Sakayorii/sakayori-music/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
        >
          View Releases On GitHub <span className="font-mono">↗</span>
        </a>
      </div>
    )
  }

  return (
    <>
      {release && (
        <div className="surface p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--color-accent)]">[ LATEST ]</span>
            <div>
              <p className="text-sm font-semibold">
                <span className="font-mono text-[var(--color-accent)]">{release.tag_name}</span>{" "}
                <span className="text-[var(--color-text-muted)]">— Released</span>{" "}
                <span className="font-mono text-[var(--color-text-soft)]">
                  {new Date(release.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
          </div>
          <a
            href={release.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            Release Notes <span className="font-mono">↗</span>
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--color-border)]">
        {platforms.map((platform) => {
          const assets = findAssets(release, platform)
          return (
            <div key={platform.id} className="border-r border-b border-[var(--color-border)] p-6">
              <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-[var(--color-border)]">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--color-text-faint)]">
                    {platform.marker}
                  </span>
                  <h3 className="text-lg font-semibold">{platform.name}</h3>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                  {assets.length === 0 ? "Coming Soon" : `${assets.length} Build${assets.length > 1 ? "s" : ""}`}
                </p>
              </div>

              {assets.length === 0 ? (
                <div className="text-sm text-[var(--color-text-muted)] py-3">
                  Build from source — instructions on GitHub.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {assets.map(({ label, asset }) => (
                    <a
                      key={asset.name}
                      href={asset.browser_download_url}
                      download
                      className="flex items-center justify-between gap-3 px-3.5 py-3 bg-[var(--color-bg-elevated)] hover:bg-[#161616] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all group"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{label}</p>
                        <p className="font-mono text-[10px] text-[var(--color-text-muted)]">
                          {formatBytes(asset.size)}
                        </p>
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0">
                        Download →
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

"use client"

import { useEffect, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Smartphone, Monitor, Apple, Download, Loader2, ExternalLink, Package } from "lucide-react"

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
  icon: LucideIcon
  color: string
  matchers: Array<{
    label: string
    test: (filename: string) => boolean
  }>
}

const platforms: Platform[] = [
  {
    id: "android",
    name: "Android",
    icon: Smartphone,
    color: "var(--color-android)",
    matchers: [
      {
        label: "Universal APK",
        test: (n) => n.endsWith(".apk") && n.includes("universal"),
      },
      {
        label: "ARM64 APK",
        test: (n) => n.endsWith(".apk") && (n.includes("arm64") || n.includes("aarch64")),
      },
      {
        label: "ARMv7 APK",
        test: (n) => n.endsWith(".apk") && (n.includes("armeabi") || n.includes("armv7")),
      },
      {
        label: "x86_64 APK",
        test: (n) => n.endsWith(".apk") && n.includes("x86_64"),
      },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    color: "var(--color-windows)",
    matchers: [
      {
        label: "MSI Installer",
        test: (n) => n.endsWith(".msi"),
      },
      {
        label: "EXE Installer",
        test: (n) => n.endsWith(".exe"),
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    icon: Monitor,
    color: "var(--color-linux)",
    matchers: [
      {
        label: "Debian / Ubuntu (.deb)",
        test: (n) => n.endsWith(".deb"),
      },
      {
        label: "Fedora / RHEL (.rpm)",
        test: (n) => n.endsWith(".rpm"),
      },
      {
        label: "AppImage",
        test: (n) => n.endsWith(".AppImage") || n.endsWith(".appimage"),
      },
    ],
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    color: "var(--color-macos)",
    matchers: [
      {
        label: "Apple Silicon (.dmg)",
        test: (n) => n.endsWith(".dmg") && (n.includes("arm") || n.includes("aarch64")),
      },
      {
        label: "Intel (.dmg)",
        test: (n) => n.endsWith(".dmg") && (n.includes("x64") || n.includes("x86")),
      },
      {
        label: "Universal (.dmg)",
        test: (n) => n.endsWith(".dmg"),
      },
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
      <div className="glass rounded-2xl p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-accent)]" />
        <p className="text-sm text-[var(--color-text-muted)]">Fetching latest release from GitHub...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass rounded-2xl p-12 text-center">
        <p className="text-[var(--color-text)] mb-4 font-semibold">Unable to load releases</p>
        <p className="text-sm text-[var(--color-text-muted)] mb-6">{error}</p>
        <a
          href="https://github.com/Sakayorii/sakayori-music/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
        >
          View Releases on GitHub
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    )
  }

  return (
    <>
      {release && (
        <div className="glass rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-[var(--color-accent)]" />
            <div>
              <p className="text-sm font-semibold">Latest Release: {release.tag_name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Published {new Date(release.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <a
            href={release.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] flex items-center gap-1"
          >
            View Release Notes
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => {
          const assets = findAssets(release, platform)
          const Icon = platform.icon
          return (
            <div key={platform.id} className="glass rounded-2xl p-6 hover:border-[var(--color-border-strong)] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${platform.color}15`,
                    border: `1px solid ${platform.color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: platform.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {assets.length === 0 ? "No build available" : `${assets.length} build${assets.length > 1 ? "s" : ""} available`}
                  </p>
                </div>
              </div>

              {assets.length === 0 ? (
                <div className="text-sm text-[var(--color-text-muted)] py-4">
                  Coming soon. Check back later or build from source.
                </div>
              ) : (
                <div className="space-y-2">
                  {assets.map(({ label, asset }) => (
                    <a
                      key={asset.name}
                      href={asset.browser_download_url}
                      download
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Download className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{label}</p>
                          <p className="text-xs text-[var(--color-text-muted)]">{formatBytes(asset.size)}</p>
                        </div>
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                        Download
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

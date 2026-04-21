import Link from "next/link"

export const metadata = {
  title: "Changelog — SakayoriMusic",
  description: "Release history and what's new in every version of SakayoriMusic.",
}

type Release = {
  version: string
  date: string
  title: string
  highlights: string[]
  sections: { label: string; items: string[] }[]
}

const RELEASES: Release[] = [
  {
    version: "2.1.4",
    date: "2026-04-21",
    title: "Streaming Fixed On Desktop, Crash Reports Finally Arrive",
    highlights: [
      "Fixed STREAM_EXTRACT_FAILED on Desktop — it was VLC missing demuxer plugins, not YouTube",
      "RAM usage dropped from 540 MB to ~220 MB",
      "192+ features reviewed and configured for stability",
    ],
    sections: [
      {
        label: "Fixed",
        items: [
          "VLC missing demuxer plugins (libmp4, libavformat, libmp3) — the real culprit behind playback failures",
          "Misleading STREAM_EXTRACT_FAILED label — now distinguishes extraction vs playback errors",
          "Close button hanging forever when VLC was stuck on a dead socket",
          "Sentry crash reports silently discarded due to wrong DSN check",
          "Liquid Glass toggle auto-disabling on Desktop",
          "MSI installer blocked by corporate Group Policy (DisableUserInstalls)",
          "GitHub showing duplicate license tabs (renamed LICENSE.rtf to EULA.rtf)",
          "2-second lyrics sync lag (progress updates now 200ms instead of 1s)",
          "VLC streaming hangs on bad HTTP connections (added timeouts + watchdog)",
          "Cache duplication bug (same song could be cached 10× on repeat)",
          "17 compiler warnings cleared across all modules",
        ],
      },
      {
        label: "Added",
        items: [
          "4-tier YouTube client fallback (WEB_REMIX → TVHTML5 → IOS → ANDROID_MUSIC)",
          "Multi-layer timeout system (HTTP 12s, socket 8s, PREPARING 45s, stall 20s, force-exit 3s)",
          "Proactive stream URL refresh 5 minutes before expiry",
          "Stream quality scoring on the Lyrics API (0-115 based on timestamp density + coverage)",
          "Rate limiting on Lyrics API (30 submissions per hour per IP)",
          "Fuzzy lyrics search by title + artist + duration",
          "20 new UI components ready for Now Playing enhancements",
          "Live status page at music.sakayori.dev/status",
          "Real-time lyrics count on docs page (no more hardcoded 150)",
        ],
      },
      {
        label: "Improved",
        items: [
          "Splash screen redesign with rotating arcs and equalizer animation",
          "MSI installs per-machine (one UAC prompt, works with strict corporate policies)",
          "VLC bundle now verified on every clean build (auto-regenerates if incomplete)",
          "Coil image cache 128 MB → 32 MB",
          "Serial GC with capped metaspace + code cache + direct memory",
          "NewPipe extraction falls back to plain URLs when cipher deobfuscation fails",
        ],
      },
      {
        label: "Planned For Next",
        items: [
          "macOS Intel + Apple Silicon builds",
          "iOS build (minimum iOS 15)",
          "Auto-update for Linux AppImage",
          "Improved lyrics translation pipeline",
        ],
      },
    ],
  },
  {
    version: "2.1.3",
    date: "2026-04-18",
    title: "Equalizer, Import/Export, Listening Stats Charts",
    highlights: [
      "Integrated equalizer with presets and band sliders",
      "Playlist import/export as JSON",
      "Bar-chart listening stats on Analytics screen",
    ],
    sections: [
      {
        label: "Added",
        items: [
          "EqualizerScreen with band sliders and presets (Android + Desktop)",
          "Queue drag-and-drop reorder",
          "Playlist JSON import/export",
          "Bar chart + horizontal bar chart on Analytics screen",
          "Preview Crossfade button in settings",
        ],
      },
    ],
  },
  {
    version: "2.1.2",
    date: "2026-04-15",
    title: "UI Polish, Desktop Discord RPC, Performance",
    highlights: [
      "Vinyl spin animation on Now Playing artwork",
      "Discord RPC via local IPC (no token required)",
      "Redesigned Settings with colored section icons",
    ],
    sections: [
      {
        label: "Added",
        items: [
          "Vinyl circle animation on Now Playing",
          "Library sort dropdown (Recently Added, Alphabetical, Most Played)",
          "Settings with 12 icon-categorized sections",
          "MiniPlayer waveform visualizer",
          "Desktop Discord RPC via local IPC pipe (safer than gateway, no token)",
        ],
      },
    ],
  },
  {
    version: "2.1.1",
    date: "2026-04-12",
    title: "Sleep Timer, RAM Cleanup, Discord Fixes",
    highlights: [
      "Sleep timer countdown pill on MiniPlayer",
      "Aggressive RAM cleanup on track change",
      "Discord RPC logo and button URLs fixed",
    ],
    sections: [
      {
        label: "Added",
        items: ["Sleep timer countdown badge on MiniPlayer", "Idle GC every 3 minutes", "Track-change RAM cleanup"],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Changelog
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
            What&apos;s Changed.
          </h1>
          <p className="text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed">
            Release history, bug fixes, and new features. Newest first.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl">
        {RELEASES.map((release, idx) => (
          <article
            key={release.version}
            className={`pb-16 mb-16 ${idx < RELEASES.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
          >
            <div className="flex items-baseline gap-4 mb-3 flex-wrap">
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
                v{release.version}
              </h2>
              <span className="font-mono text-xs text-[var(--color-text-faint)]">{release.date}</span>
              {idx === 0 && (
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-[var(--color-accent)] text-[var(--color-bg)] px-2 py-0.5">
                  Latest
                </span>
              )}
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] mb-6 leading-tight">{release.title}</h3>

            {release.highlights.length > 0 && (
              <div className="mb-8 p-5 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                  Highlights
                </div>
                <ul className="space-y-2">
                  {release.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[var(--color-text-soft)] leading-relaxed flex gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              {release.sections.map((sec) => (
                <div key={sec.label}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-2">
                    {sec.label}
                  </div>
                  <ul className="space-y-1.5">
                    {sec.items.map((item, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-soft)] leading-relaxed flex gap-2">
                        <span className="text-[var(--color-text-faint)]">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}

        <div className="mt-8 p-6 border border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            Looking for an older version or the full commit history?
          </p>
          <Link
            href="https://github.com/Sakayorii/sakayori-music/releases"
            target="_blank"
            className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] hover:underline"
          >
            GitHub Releases ↗
          </Link>
        </div>
      </section>
    </>
  )
}

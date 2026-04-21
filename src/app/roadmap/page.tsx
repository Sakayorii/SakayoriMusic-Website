export const metadata = {
  title: "Roadmap — SakayoriMusic",
  description: "What's planned for SakayoriMusic. Features under development, next up, and long-term vision.",
}

type Status = "shipped" | "in-progress" | "planned" | "exploring"

type RoadmapItem = {
  title: string
  description: string
  status: Status
}

const ITEMS: { quarter: string; label: string; items: RoadmapItem[] }[] = [
  {
    quarter: "Now",
    label: "Shipped Or Finishing",
    items: [
      { title: "Desktop streaming stability", description: "VLC plugin bundle + multi-client YouTube fallback + URL refresh.", status: "shipped" },
      { title: "Lyrics API v1.1", description: "Quality scoring, fuzzy search, trending, duplicate detection, rate limiting.", status: "shipped" },
      { title: "Live status page", description: "Real-time health monitoring for all services at music.sakayori.dev/status.", status: "shipped" },
      { title: "Crash reporting via Sentry", description: "Opt-in, zero PII, respects the off switch.", status: "shipped" },
    ],
  },
  {
    quarter: "Q2 2026",
    label: "Next Up",
    items: [
      { title: "macOS Intel + Apple Silicon builds", description: "Universal DMG with code signing.", status: "in-progress" },
      { title: "iOS app (minimum iOS 15)", description: "Native Swift/SwiftUI with shared Kotlin core.", status: "in-progress" },
      { title: "AppImage auto-update", description: "zsync-based delta updates for Linux.", status: "planned" },
      { title: "Windows code signing", description: "Waiting on SignPath approval. Certum or SSL.com as fallback.", status: "in-progress" },
      { title: "F-Droid publication", description: "Verified build + submission to F-Droid main repo.", status: "planned" },
    ],
  },
  {
    quarter: "Q3 2026",
    label: "On The Horizon",
    items: [
      { title: "Chromecast support", description: "Cast current playback to TV and speakers.", status: "planned" },
      { title: "AirPlay 2 on iOS/macOS", description: "Native AirPlay integration.", status: "planned" },
      { title: "Voice search", description: "On-device speech-to-text search (no cloud).", status: "planned" },
      { title: "Podcast improvements", description: "Chapter markers, per-podcast speed, download schedule.", status: "planned" },
      { title: "Listening social feed", description: "Optional Discord-style friend activity.", status: "exploring" },
    ],
  },
  {
    quarter: "Q4 2026 +",
    label: "Long-Term Vision",
    items: [
      { title: "Local music library", description: "Scan FLAC/MP3/OGG folders, rich metadata, album art fetcher.", status: "exploring" },
      { title: "Full collaborative playlists", description: "Realtime co-edit, shared listening sessions.", status: "exploring" },
      { title: "Last.fm + ListenBrainz scrobbling", description: "Official two-way scrobbling support.", status: "exploring" },
      { title: "Offline-first sync", description: "Per-device library with conflict-free CRDT merge.", status: "exploring" },
      { title: "Self-hostable backend", description: "Complete drop-in replacement for Google — sakayori-sync, docker.", status: "exploring" },
    ],
  },
]

const STATUS_STYLES: Record<Status, { label: string; color: string; bg: string }> = {
  shipped: { label: "Shipped", color: "var(--color-accent)", bg: "rgba(0,188,212,0.1)" },
  "in-progress": { label: "In Progress", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  planned: { label: "Planned", color: "#94a3b8", bg: "rgba(148,163,184,0.08)" },
  exploring: { label: "Exploring", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
}

export default function RoadmapPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Roadmap
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
            Where We&apos;re Going.
          </h1>
          <p className="text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed">
            Current work, next priorities, and the long-term vision. Priorities shift based on user feedback and contributor capacity.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex flex-wrap gap-3 mb-12 p-4 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          {(Object.keys(STATUS_STYLES) as Status[]).map((s) => {
            const sty = STATUS_STYLES[s]
            return (
              <span
                key={s}
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5"
                style={{ background: sty.bg, color: sty.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: sty.color }} />
                {sty.label}
              </span>
            )
          })}
        </div>

        {ITEMS.map((group) => (
          <div key={group.quarter} className="mb-16">
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {group.quarter}
              </h2>
              <span className="text-xs text-[var(--color-text-faint)]">·</span>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{group.label}</h3>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => {
                const sty = STATUS_STYLES[item.status]
                return (
                  <div
                    key={item.title}
                    className="border border-[var(--color-border)] p-5 hover:border-[var(--color-border-strong)] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 flex-shrink-0 mt-0.5"
                        style={{ background: sty.bg, color: sty.color }}
                      >
                        <span className="w-1 h-1 rounded-full" style={{ background: sty.color }} />
                        {sty.label}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-[var(--color-text)]">{item.title}</h4>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 border border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            This roadmap is non-binding. Priorities shift based on community feedback, security issues, and what contributors have time for. If something matters to you,{" "}
            <a
              href="https://github.com/Sakayorii/sakayori-music/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              open a discussion
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

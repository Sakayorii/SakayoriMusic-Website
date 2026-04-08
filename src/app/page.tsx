import Link from "next/link"
import { VersionBadge } from "@/components/VersionBadge"

const features = [
  {
    number: "01",
    title: "Liquid Glass Interface",
    description:
      "A native, frosted-glass desktop UI inspired by macOS — backdrop blur and luminance adaptation that respond to whatever's playing. Auto-disabled on low-end devices.",
    tag: "Desktop",
  },
  {
    number: "02",
    title: "Word-By-Word Lyrics",
    description:
      "Real-time rich-sync lyrics from multiple providers. Words light up as the song plays, and you can switch providers or disable any of them anytime.",
    tag: "Cross-Platform",
  },
  {
    number: "03",
    title: "Offline Library",
    description:
      "Download tracks and entire playlists. Listen anywhere — no internet required, no ads, no upsells.",
    tag: "Cross-Platform",
  },
  {
    number: "04",
    title: "Cross-Platform Native",
    description:
      "Android, Windows, Linux, and macOS — one Kotlin Multiplatform codebase, native binaries on every target.",
    tag: "Architecture",
  },
  {
    number: "05",
    title: "Discord Rich Presence",
    description:
      "Show your friends what you're listening to in real time. Toggleable in settings, never on without your consent.",
    tag: "Integrations",
  },
  {
    number: "06",
    title: "Privacy First, Always",
    description:
      "No ads, no tracking, no telemetry, no analytics. Crash reporting is opt-in. All your listening data stays on your device.",
    tag: "Principles",
  },
]

const platforms = [
  { id: "android", label: "Android", note: "8.0 +" },
  { id: "windows", label: "Windows", note: "10 / 11" },
  { id: "linux", label: "Linux", note: "DEB · RPM" },
  { id: "macos", label: "macOS", note: "11 +" },
]

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-24 pb-28 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <VersionBadge />

              <h1 className="text-[3.25rem] md:text-[5.5rem] font-semibold leading-[0.9] tracking-[-0.04em] mb-8 text-balance">
                A Music App
                <br />
                You{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  Actually
                </span>{" "}
                Own.
              </h1>

              <p className="text-lg md:text-xl text-[var(--color-text-soft)] max-w-xl mb-10 leading-relaxed text-pretty">
                A free, ad-free YouTube Music client. Native on every platform you use. No
                subscriptions, no tracking, no compromises.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] px-6 py-3.5 font-medium transition-colors"
                >
                  Download Now
                  <span className="font-mono">→</span>
                </Link>
                <a
                  href="https://github.com/Sakayorii/sakayori-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 surface surface-hover px-6 py-3.5 font-medium"
                >
                  View Source
                  <span className="font-mono text-[var(--color-text-muted)]">↗</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <dl className="font-mono text-sm">
                <Stat label="Version" value="2.0.8" />
                <Stat label="Platforms" value="04" />
                <Stat label="Audio" value="320kbps" />
                <Stat label="License" value="MIT" />
                <Stat label="Price" value="Free Forever" highlight />
              </dl>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.id}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">
                  Available
                </p>
                <p className="text-base font-semibold">{platform.label}</p>
                <p className="font-mono text-[11px] text-[var(--color-text-faint)]">{platform.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                / Capabilities
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] text-balance">
                Built For People
                <br />
                Who{" "}
                <span className="font-serif italic font-normal">Listen</span>
                <br />
                Seriously.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-base md:text-lg text-[var(--color-text-soft)] leading-relaxed max-w-2xl text-pretty">
                Every feature is here because it makes the listening experience better — not because
                a product manager needed something to add to a roadmap. No bloat, no upsells, no
                telemetry pinging a server every time you skip a track.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
            {features.map((feature) => (
              <FeatureRow key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                / Get Started
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] mb-6 text-balance">
                Pick A Platform.
                <br />
                <span className="font-serif italic font-normal">Press Play.</span>
              </h2>
              <p className="text-base md:text-lg text-[var(--color-text-soft)] leading-relaxed mb-8 max-w-md text-pretty">
                Direct downloads from GitHub Releases. No installer wrappers, no third-party CDNs,
                no strings attached.
              </p>
              <Link
                href="/download"
                className="inline-flex items-center gap-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] px-6 py-3.5 font-medium transition-colors"
              >
                Browse Downloads
                <span className="font-mono">→</span>
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="surface overflow-hidden font-mono text-xs">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                  <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
                  <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
                  <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
                  <span className="ml-2 text-[var(--color-text-muted)]">~/sakayori — install</span>
                </div>
                <div className="p-5 space-y-3">
                  <CodeRow comment="# Linux (Debian / Ubuntu)" command="sudo dpkg -i sakayorimusic_2.0.8_amd64.deb" />
                  <CodeRow comment="# Linux (Fedora / RHEL)" command="sudo rpm -i sakayorimusic-2.0.8.x86_64.rpm" />
                  <CodeRow comment="# Windows" command="msiexec /i SakayoriMusic-2.0.8.msi" />
                  <CodeRow comment="# macOS — drag from .dmg" command="open SakayoriMusic-2.0.8-arm64.dmg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between py-3 border-b border-[var(--color-border)] last:border-b-0">
      <dt className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider">{label}</dt>
      <dd className={highlight ? "text-[var(--color-accent)] font-semibold" : "text-[var(--color-text)]"}>
        {value}
      </dd>
    </div>
  )
}

type FeatureRowProps = {
  number: string
  title: string
  description: string
  tag: string
}

function FeatureRow({ number, title, description, tag }: FeatureRowProps) {
  return (
    <div className="border-r border-b border-[var(--color-border)] p-8 group transition-colors hover:bg-[var(--color-bg-elevated)]">
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{number}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5">
          {tag}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed text-pretty">{description}</p>
    </div>
  )
}

function CodeRow({ comment, command }: { comment: string; command: string }) {
  return (
    <div>
      <div className="text-[var(--color-text-faint)]">{comment}</div>
      <div className="text-[var(--color-text-soft)]">
        <span className="text-[var(--color-accent)]">$</span> {command}
      </div>
    </div>
  )
}

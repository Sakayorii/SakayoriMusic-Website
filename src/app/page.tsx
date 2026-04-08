import Link from "next/link"
import {
  Download,
  Music,
  Sparkles,
  Smartphone,
  Monitor,
  Heart,
  Headphones,
  Gauge,
  Lock,
  Layers,
  Globe,
  Cloud,
  Github,
  ArrowRight,
} from "lucide-react"
import { VersionBadge } from "@/components/VersionBadge"

const features = [
  {
    icon: Music,
    title: "Stream From YouTube Music",
    description: "Full library access with high-quality audio streaming up to 320kbps.",
  },
  {
    icon: Sparkles,
    title: "Liquid Glass UI",
    description: "Native macOS-style design with backdrop blur and smooth animations.",
  },
  {
    icon: Headphones,
    title: "Synced Lyrics System",
    description: "Real-time word-by-word rich-sync lyrics from multiple providers.",
  },
  {
    icon: Cloud,
    title: "Offline Library",
    description: "Download tracks and listen anywhere — no internet required.",
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    description: "Android, Windows, Linux, and macOS — one codebase, native performance.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "No ads, no tracking, no telemetry. Your data stays on your device.",
  },
  {
    icon: Gauge,
    title: "Crossfade & Gapless",
    description: "Seamless transitions between tracks with adjustable crossfade duration.",
  },
  {
    icon: Heart,
    title: "Discord Rich Presence",
    description: "Show your friends what you're listening to in real time.",
  },
  {
    icon: Globe,
    title: "20+ Languages",
    description: "Fully localized for users around the world.",
  },
]

const platforms = [
  { name: "Android", icon: Smartphone, color: "var(--color-android)" },
  { name: "Windows", icon: Monitor, color: "var(--color-windows)" },
  { name: "Linux", icon: Monitor, color: "var(--color-linux)" },
  { name: "macOS", icon: Monitor, color: "var(--color-macos)" },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden grid-bg">
        <div className="container mx-auto px-6 pt-20 pb-32 max-w-6xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <VersionBadge />

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              Music Without
              <br />
              <span className="text-gradient">Compromise</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mb-10 leading-relaxed">
              A free, open-source YouTube Music client built with Kotlin Multiplatform. Stream, download, and
              enjoy music on any device — without ads or tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <Link
                href="/download"
                className="group glass-strong hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all animate-pulse-glow"
              >
                <Download className="w-5 h-5" />
                Download Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/Sakayorii/sakayori-music"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:bg-white/5 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-2">
                  <platform.icon className="w-4 h-4" style={{ color: platform.color }} />
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent-deep)] opacity-15 rounded-full blur-[120px] -z-10" />
      </section>

      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="text-center mb-16">
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything You Need,
            <br />
            <span className="text-gradient">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Built from the ground up for music lovers who value freedom, privacy, and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 hover:border-[var(--color-border-strong)] hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent-deep)]/10" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Ready To <span className="text-gradient">Experience</span> It?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Free forever. No account required. Just download and enjoy your music.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-8 py-4 rounded-2xl font-semibold transition-all glow-accent"
            >
              <Download className="w-5 h-5" />
              Get SakayoriMusic
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

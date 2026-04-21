export const metadata = {
  title: "Privacy Policy — SakayoriMusic",
  description: "What data SakayoriMusic collects, what it doesn't, and why. No ads, no tracking, no telemetry.",
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-14 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Legal
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
            Privacy{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              Without Compromise
            </span>
            .
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed text-pretty">
            SakayoriMusic does not collect, aggregate, or sell personal data. Ever. This page lists every byte that leaves your device — and every byte that never does.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            <Stat label="Ads" value="None" highlight />
            <Stat label="Trackers" value="None" highlight />
            <Stat label="Analytics" value="Opt-In" />
            <Stat label="Telemetry" value="Opt-In" />
          </div>
          <p className="font-mono text-[11px] text-[var(--color-text-faint)] mt-6">
            Last Updated: April 20, 2026 · Version 2.1.4
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 py-20 max-w-4xl space-y-16">

          <Block label="01" title="Data We Never Collect" tone="good">
            <p className="mb-4">
              SakayoriMusic never collects, stores, or transmits any of the following, regardless of user settings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                "Name", "Email address", "Phone number", "Physical address",
                "Date of birth", "Gender or identity", "IP address for analytics",
                "Device fingerprint", "Contact list", "Call history",
                "SMS / messaging data", "Calendar / notes", "Location data (GPS or Wi-Fi)",
                "Cellular tower ID", "Keyboard layout", "Installed apps list",
                "Listening history (to any server)", "Skip / replay patterns",
                "Search queries", "Playlist composition", "Liked / disliked tracks",
                "Followed artists", "Payment information", "Government ID",
              ].map(item => (
                <div key={item} className="flex items-baseline gap-2">
                  <span className="text-[var(--color-accent)] font-mono text-xs">✓</span>
                  <span className="text-[var(--color-text-muted)]">{item}</span>
                </div>
              ))}
            </div>
          </Block>

          <Block label="02" title="Data Stored Locally On Your Device">
            <p className="mb-4">
              Everything that makes SakayoriMusic useful is stored only on your device. Nothing leaves unless you explicitly trigger it.
            </p>
            <table className="w-full text-sm border-t border-l border-[var(--color-border)] font-mono">
              <tbody>
                {[
                  ["Listening history", "Room database (analytics screen, recently played, most played)"],
                  ["Playlists", "Room database"],
                  ["Downloaded tracks", "App files directory / user-chosen folder"],
                  ["Thumbnail cache", "Pruned automatically, user-clearable"],
                  ["Audio cache", "Bounded by user-configurable size"],
                  ["YouTube auth cookies", "Required for personal library access"],
                  ["App preferences", "DataStore (theme, equalizer, shortcuts, etc.)"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-r border-b border-[var(--color-border)]">
                    <td className="px-4 py-3 text-[var(--color-text)] border-r border-[var(--color-border)] w-1/3 align-top">{k}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Block>

          <Block label="03" title="Opt-In Network Transmission">
            <p className="mb-4">
              <span className="text-[var(--color-accent)] font-semibold">Only one data flow leaves your device by our decision</span>, and only when you explicitly enable it:
            </p>
            <div className="surface p-5 border-l-2 border-l-[var(--color-accent)]">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2">
                Crash Reporting Via Sentry
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                Off by default in clean installs and upgrades. When enabled in{" "}
                <span className="text-[var(--color-text)]">Settings → Privacy → Crash Reporting</span>,
                only stack traces, app version, OS name + version, locale, and crash timestamp are sent to{" "}
                <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">ingest.us.sentry.io</a>.
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                No user identifier, no location, no listening data. Disable immediately takes effect on next launch. Data is used only to fix bugs.
              </p>
            </div>
          </Block>

          <Block label="04" title="Third Party Services You Reach Through The App">
            <p className="mb-4">
              These are direct communications from your device to external services. SakayoriMusic acts only as the client library — we don&apos;t see, log, or aggregate these requests.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ServiceCard name="YouTube Music" url="https://policies.google.com/privacy" purpose="Music metadata, stream URLs, lyrics, thumbnails, search" login="Optional" />
              <ServiceCard name="Spotify Canvas" url="https://www.spotify.com/legal/privacy-policy/" purpose="Short looping videos per track (if enabled)" login="None" />
              <ServiceCard name="Discord RPC" url="https://discord.com/privacy" purpose="Now Playing status broadcast" login="Mobile only, desktop uses IPC" />
              <ServiceCard name="GitHub Releases" url="https://docs.github.com/privacy" purpose="Update checker polls latest release tag" login="None" />
              <ServiceCard name="lyrics.sakayori.dev" url="https://github.com/Sakayorii/sakayori-lyrics" purpose="Community lyrics lookup (anonymous, videoId only)" login="None" />
              <ServiceCard name="chart.sakayori.dev" url="https://chart.sakayori.dev" purpose="Curated playlist metadata" login="None" />
            </div>
          </Block>

          <Block label="05" title="Uninstall & Data Removal">
            <p className="mb-4">
              Uninstall instructions per platform. User data may persist outside the app binary depending on the OS:
            </p>
            <div className="space-y-3">
              <UninstallRow os="Android" path="Long-press app → Uninstall. User data is removed unless Backup is enabled." />
              <UninstallRow os="Windows" path="Control Panel → Uninstall Or %LOCALAPPDATA%\\Programs\\SakayoriMusic · Data at %APPDATA%\\SakayoriMusic — manual delete." />
              <UninstallRow os="macOS" path="Drag To Trash · Data at ~/Library/Application Support/SakayoriMusic — manual delete." />
              <UninstallRow os="Linux" path="Use your package manager · Data at ~/.sakayori-music — manual delete." />
            </div>
          </Block>

          <Block label="06" title="Your Rights">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <RightCard title="Access" desc="Open your app data directory — every file the app writes is visible." />
              <RightCard title="Rectify / Erase" desc="Edit or delete files directly. No server holds a copy." />
              <RightCard title="Port" desc="Use Settings → Backup to generate a portable archive of your data." />
              <RightCard title="Object To Processing" desc="Disable any toggle in Settings or uninstall — nothing left to object to." />
            </div>
          </Block>

          <Block label="07" title="Changes To This Policy">
            <p>
              Any change is reflected here, called out in the release notes of the version that introduces the change, and accompanied by a new Settings toggle if the change affects user data flow. Continued use of an upgraded version constitutes acceptance.
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              The four commitments — <span className="text-[var(--color-accent)]">free forever</span>, <span className="text-[var(--color-accent)]">no ads</span>, <span className="text-[var(--color-accent)]">no tracking</span>, <span className="text-[var(--color-accent)]">open source</span> — cannot be reversed without 90 days notice across three release notes and unanimous maintainer agreement.
            </p>
          </Block>

          <Block label="08" title="Contact">
            <p>
              Privacy concerns, data requests, takedown notices, or general questions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
              <ContactLink label="Issue Tracker" href="https://github.com/Sakayorii/sakayori-music/issues" />
              <ContactLink label="Discussions" href="https://github.com/Sakayorii/sakayori-music/discussions" />
            </div>
          </Block>
        </div>
      </section>
    </>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-[var(--color-bg)] p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-2">{label}</div>
      <div className={highlight ? "text-[var(--color-accent)] font-semibold text-lg" : "text-[var(--color-text)] text-lg"}>
        {value}
      </div>
    </div>
  )
}

function Block({ label, title, tone, children }: { label: string; title: string; tone?: "good"; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{label}</span>
        <h2 className={`text-2xl font-semibold tracking-tight mt-1 ${tone === "good" ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"}`}>
          {title}
        </h2>
      </div>
      <div className="lg:col-span-9 text-[var(--color-text-soft)] leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function ServiceCard({ name, url, purpose, login }: { name: string; url: string; purpose: string; login: string }) {
  return (
    <div className="surface p-4">
      <div className="flex items-baseline justify-between mb-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
          {name} ↗
        </a>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-faint)]">{login}</span>
      </div>
      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{purpose}</p>
    </div>
  )
}

function UninstallRow({ os, path }: { os: string; path: string }) {
  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-[var(--color-border)] last:border-b-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] w-20">{os}</span>
      <span className="text-sm text-[var(--color-text-muted)] flex-1 font-mono">{path}</span>
    </div>
  )
}

function RightCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="surface p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-1">{title}</div>
      <p className="text-sm text-[var(--color-text-muted)]">{desc}</p>
    </div>
  )
}

function ContactLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="surface surface-hover p-4 flex items-baseline justify-between transition-colors"
    >
      <span className="text-sm font-semibold">{label}</span>
      <span className="font-mono text-[var(--color-text-muted)]">↗</span>
    </a>
  )
}

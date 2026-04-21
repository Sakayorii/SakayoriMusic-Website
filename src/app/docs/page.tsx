import Link from "next/link"
import { DocsSidebar } from "@/components/DocsSidebar"
import { GithubIcon } from "@/components/Icons"
import { DocsLinuxInstall } from "@/components/DocsLinuxInstall"
import { LyricsStatsCards } from "@/components/LyricsStats"

export const metadata = {
  title: "Documentation — SakayoriMusic",
  description: "Learn how to install, configure, and use SakayoriMusic on Android, Windows, Linux, and macOS.",
}

export default function DocsPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Documentation
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance max-w-3xl">
            Everything You Need,
            <br />
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              Nothing You Don&apos;t.
            </span>
          </h1>
          <p className="text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed text-pretty">
            Install instructions, setup guides, feature walkthroughs, and answers to the questions
            people actually ask.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
            <DocsSidebar />

            <div className="space-y-20 max-w-3xl">
              <DocSection id="installation" number="01" title="Installation">
                <DocCard title="Android">
                  <ol className="text-sm text-[var(--color-text-muted)] space-y-2 list-decimal list-inside leading-relaxed">
                    <li>
                      Download the APK from the{" "}
                      <Link href="/download" className="text-[var(--color-accent)] hover:underline">
                        Download page
                      </Link>
                      .
                    </li>
                    <li>Open the downloaded file. Android may warn about installing from unknown sources.</li>
                    <li>
                      Go to <Inline>Settings</Inline> → <Inline>Apps</Inline> →{" "}
                      <Inline>Special Access</Inline> → <Inline>Install Unknown Apps</Inline> and allow
                      your browser or file manager.
                    </li>
                    <li>Tap Install. The app will appear in your launcher.</li>
                  </ol>
                </DocCard>

                <DocCard title="Windows">
                  <ol className="text-sm text-[var(--color-text-muted)] space-y-2 list-decimal list-inside leading-relaxed">
                    <li>Download the MSI installer (recommended) or EXE.</li>
                    <li>
                      Double-click the installer. If Windows SmartScreen appears, click{" "}
                      <Inline>More Info</Inline> → <Inline>Run Anyway</Inline>.
                    </li>
                    <li>Follow the setup wizard and choose your installation directory.</li>
                    <li>Launch SakayoriMusic from the Start menu or desktop shortcut.</li>
                    <li>
                      <span className="text-[var(--color-accent)] font-semibold">Important:</span>{" "}
                      Windows Defender may delete the app after reboot. Open PowerShell as Admin and run:{" "}
                      <Inline>Add-MpExclusion -Path &quot;C:\Program Files\SakayoriMusic&quot;</Inline>{" "}
                      — this only needs to be done once.
                    </li>
                  </ol>
                </DocCard>

                <DocCard title="Linux">
                  <DocsLinuxInstall />
                </DocCard>

                <DocCard title="macOS">
                  <ol className="text-sm text-[var(--color-text-muted)] space-y-2 list-decimal list-inside leading-relaxed">
                    <li>Download the DMG file for your architecture (Apple Silicon or Intel).</li>
                    <li>Open the DMG and drag SakayoriMusic to your Applications folder.</li>
                    <li>
                      On first launch, macOS Gatekeeper may block the app. Open{" "}
                      <Inline>System Settings</Inline> → <Inline>Privacy &amp; Security</Inline> and
                      click <Inline>Open Anyway</Inline>.
                    </li>
                  </ol>
                </DocCard>
              </DocSection>

              <DocSection id="setup" number="02" title="Setup & Configuration">
                <DocCard title="First Launch">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    SakayoriMusic detects your system language and applies it automatically. Change it
                    anytime in <Inline>Settings → Content → Language</Inline>.
                  </p>
                </DocCard>

                <DocCard title="Sign In To YouTube">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    Signing in unlocks your personal library, playlists, and history. Go to{" "}
                    <Inline>Settings → Content → YouTube Account → Add Account</Inline>.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    On Android, a built-in WebView guides you through login. On Desktop, the app uses
                    KCEF (Chromium Embedded Framework) — first launch may download Chromium binaries
                    (~150MB).
                  </p>
                </DocCard>

                <DocCard title="Audio Quality">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Default streaming is 128kbps to save bandwidth. Enable high quality in{" "}
                    <Inline>Settings → Content → Quality</Inline>. Toggle{" "}
                    <Inline>Prefer 320kbps Stream</Inline> for the highest available bitrate.
                  </p>
                </DocCard>

                <DocCard title="Crossfade &amp; Gapless">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Enable smooth transitions in <Inline>Settings → Playback → Crossfade</Inline>.
                    Adjust duration from 0 to 12 seconds. Gapless is enabled by default for tracks
                    without crossfade.
                  </p>
                </DocCard>
              </DocSection>

              <DocSection id="features" number="03" title="Features Guide">
                <DocCard title="Lyrics System">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    SakayoriMusic supports multiple lyrics providers: SakayoriMusic Lyrics, YouTube
                    Transcript, LRCLIB, and BetterLyrics. Pick yours in{" "}
                    <Inline>Settings → Content → Main Lyrics Provider</Inline>. Word-by-word
                    rich-sync lyrics light up in real time.
                  </p>
                </DocCard>

                <DocCard title="Offline Downloads">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Long-press any song or playlist to access download options. Downloaded tracks live
                    in <Inline>Library → Downloaded</Inline>. Configure quality in{" "}
                    <Inline>Settings → Content → Download Quality</Inline>.
                  </p>
                </DocCard>

                <DocCard title="Discord Rich Presence">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                    Show your friends what you&apos;re listening to in real time.
                  </p>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-1 list-disc list-inside leading-relaxed">
                    <li><strong>Desktop:</strong> Automatic — just toggle in <Inline>Settings → Discord → Enable Rich Presence</Inline>. Connects directly to Discord app via local IPC, no login needed.</li>
                    <li><strong>Mobile:</strong> Requires Discord login in <Inline>Settings → Discord → Log In To Discord</Inline>.</li>
                  </ul>
                </DocCard>

                <DocCard title="Liquid Glass UI">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Backdrop blur with dynamic luminance adaptation. Enable in{" "}
                    <Inline>Settings → Interface → Enable Liquid Glass</Inline>. Automatically
                    disabled on devices with less than 4GB RAM or 4 CPU cores to keep things smooth.
                  </p>
                </DocCard>

                <DocCard title="Backup &amp; Restore">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Back up playlists, settings, and downloads via{" "}
                    <Inline>Settings → Backup → Create Backup</Inline>. Restore using{" "}
                    <Inline>Settings → Backup → Restore From File</Inline>. Schedule auto-backups
                    daily, weekly, or monthly.
                  </p>
                </DocCard>
              </DocSection>

              <DocSection id="shortcuts" number="04" title="Keyboard Shortcuts (Desktop)">
                <DocCard title="Playback">
                  <ShortcutTable shortcuts={[
                    ["Space", "Play / Pause"],
                    ["→ (Right Arrow)", "Skip To Next Track"],
                    ["← (Left Arrow)", "Previous Track"],
                    ["↑ (Up Arrow)", "Volume Up"],
                    ["↓ (Down Arrow)", "Volume Down"],
                    ["M", "Mute / Unmute"],
                    ["S", "Toggle Shuffle"],
                    ["R", "Cycle Repeat Mode"],
                    ["L", "Like / Unlike Current Track"],
                  ]} />
                </DocCard>

                <DocCard title="Media Keys">
                  <ShortcutTable shortcuts={[
                    ["Media Play/Pause", "Play / Pause"],
                    ["Media Next", "Next Track"],
                    ["Media Previous", "Previous Track"],
                  ]} />
                  <p className="text-xs text-[var(--color-text-muted)] mt-3 leading-relaxed">
                    Hardware media keys (on keyboards, headphones, etc.) are automatically mapped
                    to playback controls.
                  </p>
                </DocCard>
              </DocSection>

              <DocSection id="auto-update" number="05" title="Auto Update System">
                <DocCard title="Manual Update">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    When a new version is released, an update dialog appears with a{" "}
                    <Inline>Download</Inline> button. Click it — a progress bar replaces the
                    buttons and downloads the installer matching your platform and CPU
                    architecture automatically.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-2">
                    Once complete, click <Inline>Install</Inline>. The app closes, installer
                    runs silently, then relaunches with the new version.
                  </p>
                </DocCard>

                <DocCard title="Auto Update On Restart">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                    Enable in <Inline>Settings → Update Channel → Auto Update On Restart</Inline>.
                    The app downloads new versions in the background while you use it. The
                    next time you restart, the new version installs automatically.
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Partial downloads from interrupted sessions are cleaned up automatically on
                    the next launch. User data (playlists, settings, downloads) is always
                    preserved across updates.
                  </p>
                </DocCard>

                <DocCard title="Per-Platform Install Behavior">
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-2 list-disc list-inside leading-relaxed">
                    <li><strong>Windows:</strong> MSI installs per-user to{" "}
                      <Inline>%LOCALAPPDATA%\Programs\SakayoriMusic</Inline> — no UAC prompt,
                      no admin required. Upgrades replace old version cleanly.
                    </li>
                    <li><strong>Android:</strong> Auto-detects ABI (arm64-v8a, armeabi-v7a,
                      x86_64) and downloads the matching APK. Requires{" "}
                      <Inline>Install Unknown Apps</Inline> permission.
                    </li>
                    <li><strong>Linux:</strong> Detects distro family — DEB on
                      Debian/Ubuntu, RPM on Fedora/RHEL. Installs via{" "}
                      <Inline>pkexec</Inline> with polkit prompt.
                    </li>
                    <li><strong>macOS:</strong> DMG download. Drag to Applications manually.</li>
                  </ul>
                </DocCard>
              </DocSection>

              <DocSection id="lyrics-api" number="06" title="Lyrics API">
                <DocCard title="SakayoriMusic Lyrics Server">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    A self-hosted community lyrics provider at{" "}
                    <Inline>lyrics.sakayori.dev</Inline>. Contributes back to the app&apos;s
                    word-by-word rich-sync lyrics display.
                  </p>
                  <LyricsStatsCards />
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    Growing daily as users submit. Anonymous lookup by videoId — no user
                    identifier, no tracking. Code open at{" "}
                    <a href="https://github.com/Sakayorii/sakayori-lyrics" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">github.com/Sakayorii/sakayori-lyrics</a>.
                  </p>
                </DocCard>

                <DocCard title="Fallback Providers">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                    If the SakayoriMusic server doesn&apos;t have a match, the app falls back
                    to:
                  </p>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-1 list-disc list-inside leading-relaxed">
                    <li><strong>YouTube Transcript</strong> — captions from the video itself</li>
                    <li><strong>LRCLIB</strong> — community-maintained LRC database</li>
                    <li><strong>BetterLyrics</strong> — scraped from YouTube Music web UI</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed">
                    Change order of preference in{" "}
                    <Inline>Settings → Content → Main Lyrics Provider</Inline>.
                  </p>
                </DocCard>
              </DocSection>

              <DocSection id="troubleshoot" number="07" title="Troubleshooting">
                <DocCard title="Streaming Fails With STREAM_EXTRACT_FAILED">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                    Usually caused by YouTube IP throttling (bot detection). Check:
                  </p>
                  <ul className="text-sm text-[var(--color-text-muted)] space-y-1 list-disc list-inside leading-relaxed">
                    <li>Are you on a datacenter / cloud VPN IP? YouTube blocks these. Switch to residential internet or a VPN with residential exit nodes.</li>
                    <li>Try signing in to YouTube in{" "}
                      <Inline>Settings → Content → YouTube Account</Inline>. Logged-in requests have much lower throttling.</li>
                    <li>The video may be age-restricted, region-locked, or deleted.</li>
                  </ul>
                </DocCard>

                <DocCard title="App Freezes On First Launch">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Cold starts after a fresh install or cache clear can take up to 5 seconds
                    as the database initializes. If it persists longer, force-stop the app
                    from system settings and relaunch.
                  </p>
                </DocCard>

                <DocCard title="Windows Defender Deletes The Executable">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                    Defender sometimes removes unsigned apps after reboot. Whitelist the
                    install folder once:
                  </p>
                  <pre className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-3 text-xs font-mono text-[var(--color-text-soft)] overflow-x-auto">
                    <code><span className="text-[var(--color-accent)]">$</span> Add-MpExclusion -Path &quot;$env:LOCALAPPDATA\Programs\SakayoriMusic&quot;</code>
                  </pre>
                </DocCard>

                <DocCard title="Lyrics Don&apos;t Show">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Not every track has synced lyrics. Try different providers in{" "}
                    <Inline>Settings → Content → Main Lyrics Provider</Inline>. You can also
                    submit lyrics to improve coverage — contribution guide on the lyrics repo.
                  </p>
                </DocCard>
              </DocSection>

              <DocSection id="faq" number="08" title="FAQ">
                <FaqItem question="Is SakayoriMusic Free?">
                  Yes, completely free and open source under the MIT License. No subscription, no
                  premium tier, no in-app purchases.
                </FaqItem>
                <FaqItem question="Do I Need A YouTube Music Subscription?">
                  No. SakayoriMusic works without any account. Signing in unlocks personal library
                  access but is optional.
                </FaqItem>
                <FaqItem question="Why Does Windows Show A Security Warning?">
                  The app is not currently signed with an Extended Validation certificate. This is
                  normal for free open-source apps. Click More Info → Run Anyway to proceed. You
                  can always verify the source code on GitHub.
                </FaqItem>
                <FaqItem question="Does It Collect Any Data?">
                  No tracking, no analytics, no telemetry. Crash reports are opt-in via Sentry
                  (disabled by default). Your data stays on your device.
                </FaqItem>
                <FaqItem question="Can I Use It On iOS?">
                  iOS support is not currently available. Apple&apos;s licensing requirements make
                  distribution difficult for free open-source apps without a paid Developer account.
                </FaqItem>
                <FaqItem question="How Can I Contribute?">
                  Visit the{" "}
                  <a
                    href="https://github.com/Sakayorii/sakayori-music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    GitHub repository
                  </a>{" "}
                  to report issues, submit pull requests, or suggest features. All contributions
                  welcome.
                </FaqItem>
              </DocSection>

              <div className="surface p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2">
                    / Need More Help
                  </p>
                  <h3 className="text-xl font-semibold mb-1">Still Stuck? Open An Issue.</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Bug reports and feature requests live on GitHub.
                  </p>
                </div>
                <a
                  href="https://github.com/Sakayorii/sakayori-music/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] px-5 py-2.5 font-medium text-sm transition-colors shrink-0"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Open Issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function DocSection({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-[var(--color-border)]">
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{number}</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function DocCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface p-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

function StatMini({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="border border-[var(--color-border)] p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-1">{label}</div>
      <div className={highlight ? "text-[var(--color-accent)] font-semibold text-base font-mono" : "text-[var(--color-text)] text-base font-mono"}>
        {value}
      </div>
    </div>
  )
}

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[12px] text-[var(--color-text)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-1.5 py-0.5">
      {children}
    </span>
  )
}

function ShortcutTable({ shortcuts }: { shortcuts: [string, string][] }) {
  return (
    <table className="w-full text-sm">
      <tbody>
        {shortcuts.map(([key, action], i) => (
          <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
            <td className="py-2 pr-4 w-1/3">
              <kbd className="font-mono text-xs bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-2 py-1 rounded">
                {key}
              </kbd>
            </td>
            <td className="py-2 text-[var(--color-text-muted)]">{action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="surface p-5 group">
      <summary className="text-base font-semibold cursor-pointer flex items-center justify-between list-none">
        <span>{question}</span>
        <span className="font-mono text-[var(--color-text-muted)] group-open:rotate-90 transition-transform inline-block">
          →
        </span>
      </summary>
      <div className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">{children}</div>
    </details>
  )
}

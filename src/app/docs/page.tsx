import Link from "next/link"
import { Download, Settings, Music, HelpCircle, Github, ArrowRight } from "lucide-react"
import { DocsSidebar } from "@/components/DocsSidebar"

export const metadata = {
  title: "Documentation — SakayoriMusic",
  description: "Learn how to install, configure, and use SakayoriMusic on Android, Windows, Linux, and macOS.",
}

export default function DocsPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
          Documentation
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Get <span className="text-gradient">Started</span>
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Everything you need to install, configure, and master SakayoriMusic.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <DocsSidebar />

        <div className="space-y-16">
          <section id="installation" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Installation</h2>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Android</h3>
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
                    Go to <span className="text-[var(--color-text)]">Settings</span> →{" "}
                    <span className="text-[var(--color-text)]">Apps</span> →{" "}
                    <span className="text-[var(--color-text)]">Special access</span> →{" "}
                    <span className="text-[var(--color-text)]">Install unknown apps</span> and allow your browser
                    or file manager.
                  </li>
                  <li>Tap Install. The app will appear in your launcher.</li>
                </ol>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Windows</h3>
                <ol className="text-sm text-[var(--color-text-muted)] space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Download the MSI installer (recommended) or EXE.</li>
                  <li>
                    Double-click the installer. If Windows SmartScreen appears, click{" "}
                    <span className="text-[var(--color-text)]">More info</span> →{" "}
                    <span className="text-[var(--color-text)]">Run anyway</span>.
                  </li>
                  <li>Follow the setup wizard and choose your installation directory.</li>
                  <li>Launch SakayoriMusic from the Start menu or desktop shortcut.</li>
                </ol>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Linux</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">For Debian / Ubuntu:</p>
                <pre className="bg-black/40 border border-[var(--color-border)] rounded-lg p-4 text-xs font-mono text-[var(--color-text)] overflow-x-auto mb-4">
                  <code>sudo dpkg -i sakayorimusic_2.0.8_amd64.deb</code>
                </pre>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">For Fedora / RHEL:</p>
                <pre className="bg-black/40 border border-[var(--color-border)] rounded-lg p-4 text-xs font-mono text-[var(--color-text)] overflow-x-auto">
                  <code>sudo rpm -i sakayorimusic-2.0.8.x86_64.rpm</code>
                </pre>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">macOS</h3>
                <ol className="text-sm text-[var(--color-text-muted)] space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Download the DMG file for your architecture (Apple Silicon or Intel).</li>
                  <li>Open the DMG and drag SakayoriMusic to your Applications folder.</li>
                  <li>
                    On first launch, macOS Gatekeeper may block the app. Open{" "}
                    <span className="text-[var(--color-text)]">System Settings</span> →{" "}
                    <span className="text-[var(--color-text)]">Privacy & Security</span> and click{" "}
                    <span className="text-[var(--color-text)]">Open Anyway</span>.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section id="setup" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Setup & Configuration</h2>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">First Launch</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  When you launch SakayoriMusic for the first time, the app will detect your system language and
                  apply it automatically. You can change the language anytime in Settings → Content → Language.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Sign In to YouTube</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                  Signing in lets you access your personal library, playlists, and history. Go to Settings →
                  Content → YouTube Account → Add Account.
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  On Android, a built-in WebView will guide you through the login. On Desktop, the app uses KCEF
                  (Chromium Embedded Framework) — first launch may download Chromium binaries (~150MB).
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Audio Quality</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  By default, SakayoriMusic streams at medium quality (128kbps) to save bandwidth. To enable high
                  quality, go to Settings → Content → Quality and select your preferred bitrate. You can also
                  enable Prefer 320kbps stream for even higher quality (where available).
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Crossfade & Gapless</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Enable smooth transitions between tracks in Settings → Playback → Crossfade. Adjust duration
                  from 0 to 12 seconds. Gapless playback is enabled by default for tracks without crossfade.
                </p>
              </div>
            </div>
          </section>

          <section id="features" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Features Guide</h2>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Lyrics System</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  SakayoriMusic supports multiple lyrics providers: SakayoriMusic Lyrics, YouTube Transcript,
                  LRCLIB, and BetterLyrics. Choose your preferred provider in Settings → Content → Main Lyrics
                  Provider. Word-by-word rich-sync lyrics light up in real time as the song plays.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Offline Downloads</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Long-press any song or playlist to access download options. Downloaded tracks are available
                  offline in Library → Downloaded. Configure download quality in Settings → Content → Download
                  quality.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Discord Rich Presence</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Show your friends what you&apos;re listening to in real time. Go to Settings → Integrations →
                  Discord and sign in to enable. The current track will appear on your Discord profile.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Liquid Glass UI</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  The Liquid Glass effect adds backdrop blur and dynamic luminance adaptation to UI elements.
                  Enable in Settings → Interface → Enable Liquid Glass. Note: this effect is automatically
                  disabled on low-end devices (less than 4GB RAM or 4 CPU cores).
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">Backup & Restore</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Back up your playlists, settings, and downloaded tracks. Go to Settings → Backup → Create
                  Backup. To restore, use Settings → Backup → Restore from File. Auto-backup can be scheduled
                  daily, weekly, or monthly.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold">FAQ</h2>
            </div>

            <div className="space-y-4">
              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  Is SakayoriMusic free?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  Yes, completely free and open source under the MIT License. No subscription, no premium tier,
                  no in-app purchases.
                </p>
              </details>

              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  Do I need a YouTube Music subscription?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  No. SakayoriMusic works without any account. Signing in unlocks personal library access but is
                  optional.
                </p>
              </details>

              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  Why does Windows show a security warning?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  The app is not signed with an Extended Validation certificate (which costs ~$300/year). This is
                  normal for free open-source apps. You can verify the source code on GitHub.
                </p>
              </details>

              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  Does it collect any data?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  No tracking, no analytics, no telemetry. Crash reports are opt-in via Sentry (disabled by
                  default in FOSS builds). All your data stays on your device.
                </p>
              </details>

              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  Can I use it on iOS?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  iOS support is not currently available. Apple&apos;s licensing requirements make distribution
                  difficult for free open-source apps without an Apple Developer account.
                </p>
              </details>

              <details className="glass rounded-2xl p-6 group">
                <summary className="text-lg font-semibold cursor-pointer flex items-center justify-between">
                  How can I contribute?
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                  Visit the{" "}
                  <a
                    href="https://github.com/Sakayorii/sakayori-music"
                    className="text-[var(--color-accent)] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository
                  </a>{" "}
                  to report issues, submit pull requests, or suggest new features. All contributions are welcome.
                </p>
              </details>
            </div>
          </section>

          <section className="glass-strong rounded-3xl p-12 text-center">
            <Github className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
            <h3 className="text-2xl font-bold mb-3">Need More Help?</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-6 max-w-md mx-auto">
              Open an issue on GitHub or check existing discussions for community support.
            </p>
            <a
              href="https://github.com/Sakayorii/sakayori-music/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Github className="w-4 h-4" />
              Open an Issue
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

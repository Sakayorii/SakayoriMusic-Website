import { DownloadGrid } from "@/components/DownloadGrid"

export const metadata = {
  title: "Download — SakayoriMusic",
  description: "Download SakayoriMusic for Android, Windows, Linux, and macOS. Free and open source.",
}

export default function DownloadPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                / Downloads
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
                Get The{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  Right Build
                </span>
                <br />
                For Your Device.
              </h1>
              <p className="text-lg text-[var(--color-text-soft)] max-w-xl leading-relaxed text-pretty">
                Direct downloads from GitHub Releases. Pick your platform — installation takes seconds.
              </p>
            </div>
            <div className="lg:col-span-4">
              <dl className="font-mono text-xs">
                <div className="flex items-baseline justify-between py-2.5 border-b border-[var(--color-border)]">
                  <dt className="text-[var(--color-text-muted)] uppercase tracking-wider">Source</dt>
                  <dd className="text-[var(--color-text)]">GitHub Releases</dd>
                </div>
                <div className="flex items-baseline justify-between py-2.5 border-b border-[var(--color-border)]">
                  <dt className="text-[var(--color-text-muted)] uppercase tracking-wider">Signing</dt>
                  <dd className="text-[var(--color-text)]">SHA-256 Verified</dd>
                </div>
                <div className="flex items-baseline justify-between py-2.5">
                  <dt className="text-[var(--color-text-muted)] uppercase tracking-wider">Mirrors</dt>
                  <dd className="text-[var(--color-text)]">None — Direct Only</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <DownloadGrid />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard title="System Requirements">
              <ul className="space-y-1.5">
                <li className="flex justify-between gap-2">
                  <span>Android</span>
                  <span className="text-[var(--color-text-soft)]">8.0+ (API 26)</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Windows</span>
                  <span className="text-[var(--color-text-soft)]">10 / 11 (64-bit)</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>Linux</span>
                  <span className="text-[var(--color-text-soft)]">Ubuntu 20.04+</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>macOS</span>
                  <span className="text-[var(--color-text-soft)]">11.0 Big Sur+</span>
                </li>
              </ul>
            </InfoCard>

            <InfoCard title="Windows SmartScreen">
              <p>
                On first launch, click{" "}
                <span className="text-[var(--color-text)]">More Info</span> →{" "}
                <span className="text-[var(--color-text)]">Run Anyway</span>. The app is unsigned but
                completely safe — verify on GitHub.
              </p>
            </InfoCard>

            <InfoCard title="macOS Gatekeeper">
              <p>
                Open <span className="text-[var(--color-text)]">System Settings</span> →{" "}
                <span className="text-[var(--color-text)]">Privacy &amp; Security</span> → click{" "}
                <span className="text-[var(--color-text)]">Open Anyway</span>.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface p-5">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
        {title}
      </h3>
      <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{children}</div>
    </div>
  )
}

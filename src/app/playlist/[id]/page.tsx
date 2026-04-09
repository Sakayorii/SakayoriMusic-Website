import { MediaCard } from "@/components/MediaCard"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return {
    title: `Playlist — SakayoriMusic`,
    description: `Open playlist ${id} on SakayoriMusic`,
    openGraph: {
      title: `Playlist ${id}`,
      description: "Open this playlist on SakayoriMusic",
    },
  }
}

export default async function PlaylistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Playlist
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1] mb-6 text-balance">
            Open Playlist On{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              SakayoriMusic
            </span>
          </h1>
          <p className="text-base text-[var(--color-text-soft)] max-w-xl leading-relaxed text-pretty">
            This playlist is available on SakayoriMusic. Tap below to open it in the app.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <MediaCard id={id} type="playlist" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard title="Don't Have The App?">
              <p>
                SakayoriMusic is free, ad-free, and works on Android, Windows, Linux, and macOS.
              </p>
              <a
                href="/download"
                className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:underline mt-2 text-sm"
              >
                Download Now <span className="font-mono">→</span>
              </a>
            </InfoCard>
            <InfoCard title="Supported Platforms">
              <ul className="space-y-1">
                <li>Android 8.0+</li>
                <li>Windows 10 / 11</li>
                <li>Linux (DEB / RPM)</li>
                <li>macOS 11+</li>
              </ul>
            </InfoCard>
            <InfoCard title="Share This Playlist">
              <p className="font-mono text-[11px] text-[var(--color-text-soft)] break-all select-all">
                music.sakayori.dev/playlist/{id}
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

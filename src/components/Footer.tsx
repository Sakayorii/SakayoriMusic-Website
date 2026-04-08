import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="container mx-auto px-6 py-14 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.svg"
                alt="SakayoriMusic"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-[15px] font-semibold">
                Sakayori<span className="text-[var(--color-accent)]">Music</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm leading-relaxed">
              A free, open-source music client. No ads, no tracking, no telemetry. Built with Kotlin
              Multiplatform &amp; Compose.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-text)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-[var(--color-text)] transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-[var(--color-text)] transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-4">
              Community
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  GitHub <span className="font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  Releases
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  Report Bug
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
            © 2026 Sakayori Studio · MIT License
          </p>
          <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
            Crafted In Vietnam · Free Forever
          </p>
        </div>
      </div>
    </footer>
  )
}

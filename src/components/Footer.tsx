import Image from "next/image"
import Link from "next/link"
import { Github, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="SakayoriMusic Logo"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="text-lg font-semibold">
                Sakayori<span className="text-[var(--color-accent)]">Music</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-md leading-relaxed">
              A free, open-source music streaming client. No ads, no tracking, no telemetry. Built with Kotlin
              Multiplatform & Compose.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[var(--color-text)]">Product</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
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
            <h3 className="text-sm font-semibold mb-4 text-[var(--color-text)]">Community</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
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
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © 2026 Sakayori Studio. Licensed under MIT.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-[var(--color-accent)] fill-current" /> by Sakayori Studio
          </p>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Link from "next/link"
import { GithubIcon, KofiIcon, HeartIcon } from "@/components/Icons"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-14">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo.svg"
                alt="SakayoriMusic"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-[16px] font-semibold">
                Sakayori<span className="text-[var(--color-accent)]">Music</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm leading-relaxed mb-6">
              A free, open-source music client. No ads, no tracking, no telemetry. Built with Kotlin
              Multiplatform &amp; Compose.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Sakayorii/sakayori-music"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 surface surface-hover text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://ko-fi.com/sakayori"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ko-fi"
                className="inline-flex items-center justify-center w-9 h-9 surface surface-hover text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <KofiIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
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
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-text)] transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
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
                  Report Bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-text-muted)]">
              <li>
                <a
                  href="https://ko-fi.com/sakayori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--color-text)] transition-colors"
                >
                  <HeartIcon className="w-3 h-3 text-[var(--color-accent)]" />
                  Buy Me A Coffee
                </a>
              </li>
              <li>
                <Link
                  href="/code-signing"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  Code Signing Fund
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/sponsors/Sakayorii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  GitHub Sponsors
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sakayorii/sakayori-music/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
              © 2026 Sakayori Studio · MIT License
            </p>
            <p className="font-mono text-[11px] text-[var(--color-text-faint)] hidden md:block">
              ·
            </p>
            <p className="font-mono text-[11px] text-[var(--color-text-faint)]">
              Not Affiliated With Google Or YouTube
            </p>
          </div>
          <p className="font-mono text-[11px] text-[var(--color-text-faint)] flex items-center gap-1.5">
            Crafted In Vietnam With{" "}
            <HeartIcon className="w-3 h-3 text-[var(--color-accent)] inline" />
            · Free Forever
          </p>
        </div>
      </div>
    </footer>
  )
}

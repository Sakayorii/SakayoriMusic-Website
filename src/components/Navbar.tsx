"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/docs", label: "Docs" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full nav-bar">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.svg"
            alt="SakayoriMusic"
            width={28}
            height={28}
            className="rounded-md group-hover:scale-105 transition-transform"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight">
            Sakayori<span className="text-[var(--color-accent)]">Music</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Sakayorii/sakayori-music"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            GitHub
            <span className="ml-1 font-mono">↗</span>
          </a>
          <Link
            href="/download"
            className="inline-flex items-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-bg)] px-3.5 py-1.5 text-[13px] font-semibold transition-colors"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 hover:bg-white/5 font-mono text-sm"
          aria-label="Toggle Menu"
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium ${
                      active
                        ? "text-[var(--color-text)] bg-white/5"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a
                href="https://github.com/Sakayorii/sakayori-music"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

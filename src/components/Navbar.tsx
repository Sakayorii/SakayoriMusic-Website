"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Github } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/docs", label: "Docs" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong border-b border-[var(--color-border)]">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="SakayoriMusic Logo"
              width={36}
              height={36}
              className="rounded-xl shadow-lg group-hover:scale-110 transition-transform"
              priority
            />
            <span className="text-lg font-semibold tracking-tight">
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                      className={`block px-4 py-3 rounded-lg text-sm font-medium ${
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
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

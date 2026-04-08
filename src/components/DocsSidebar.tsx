"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "installation", label: "Installation" },
  { id: "setup", label: "Setup & Config" },
  { id: "features", label: "Features Guide" },
  { id: "faq", label: "FAQ" },
]

export function DocsSidebar() {
  const [active, setActive] = useState<string>("installation")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <div className="glass rounded-2xl p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3 px-2">
            On This Page
          </h3>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    active === section.id
                      ? "text-[var(--color-text)] bg-[var(--color-accent)]/10 border-l-2 border-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

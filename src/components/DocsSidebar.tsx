"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "installation", number: "01", label: "Installation" },
  { id: "setup", number: "02", label: "Setup & Config" },
  { id: "features", number: "03", label: "Features Guide" },
  { id: "faq", number: "04", label: "FAQ" },
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
        <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-4 pl-4">
          On This Page
        </h3>
        <ul className="space-y-0.5">
          {sections.map((section) => {
            const isActive = active === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`flex items-baseline gap-3 px-4 py-2 text-sm transition-colors border-l ${
                    isActive
                      ? "text-[var(--color-text)] border-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] border-transparent hover:border-[var(--color-border-strong)]"
                  }`}
                >
                  <span className="font-mono text-[10px] text-[var(--color-text-faint)]">{section.number}</span>
                  <span>{section.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

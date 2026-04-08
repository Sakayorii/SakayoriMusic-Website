"use client"

import { useEffect, useState } from "react"

export function VersionBadge() {
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/Sakayorii/sakayori-music/releases/latest")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.tag_name) {
          setVersion(data.tag_name.replace(/^v/, ""))
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
      <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
      <span>
        v{version ?? "2.0.8"} <span className="text-[var(--color-text-faint)]">/</span>{" "}
        <span className="text-[var(--color-text-soft)]">Now Available</span>
      </span>
    </div>
  )
}

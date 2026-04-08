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
    <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-[var(--color-text-muted)] mb-8">
      <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
      {version ? `Version ${version} Available Now` : "Latest Version Available Now"}
    </div>
  )
}

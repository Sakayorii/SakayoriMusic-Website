"use client"

import { useLatestVersion } from "@/components/LiveVersion"

export function VersionBadge() {
  const version = useLatestVersion()
  return (
    <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
      <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
      <span>
        v{version} <span className="text-[var(--color-text-faint)]">/</span>{" "}
        <span className="text-[var(--color-text-soft)]">Now Available</span>
      </span>
    </div>
  )
}

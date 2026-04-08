"use client"

import { useLatestVersion } from "@/components/LiveVersion"

export function StatsList() {
  const version = useLatestVersion()
  return (
    <dl className="font-mono text-sm">
      <StatRow label="Version" value={version} />
      <StatRow label="Platforms" value="04" />
      <StatRow label="Audio" value="320kbps" />
      <StatRow label="License" value="MIT" />
      <StatRow label="Price" value="Free Forever" highlight />
    </dl>
  )
}

function StatRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between py-3 border-b border-[var(--color-border)] last:border-b-0">
      <dt className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider">{label}</dt>
      <dd className={highlight ? "text-[var(--color-accent)] font-semibold" : "text-[var(--color-text)]"}>
        {value}
      </dd>
    </div>
  )
}

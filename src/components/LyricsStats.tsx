"use client"

import { useEffect, useState } from "react"

type LyricsStats = {
  totalLyrics: number
  totalTranslated: number
}

export function LyricsStatsCards() {
  const [stats, setStats] = useState<LyricsStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch("https://lyrics.sakayori.dev/stats", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return
        if (data) {
          setStats({
            totalLyrics: Number(data.totalLyrics ?? data.total ?? 0),
            totalTranslated: Number(data.totalTranslated ?? data.translated ?? 0),
          })
        }
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const display = (n: number) => (loading ? "…" : n.toLocaleString())

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
      <StatMini label="Stored Lyrics" value={display(stats?.totalLyrics ?? 0)} highlight />
      <StatMini label="Translated" value={display(stats?.totalTranslated ?? 0)} />
      <StatMini label="Uptime" value="99.9%" />
    </div>
  )
}

function StatMini({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="border border-[var(--color-border)] p-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-1">{label}</div>
      <div className={highlight ? "text-[var(--color-accent)] font-semibold text-base font-mono" : "text-[var(--color-text)] text-base font-mono"}>
        {value}
      </div>
    </div>
  )
}

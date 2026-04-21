"use client"

import { useEffect, useState } from "react"

type ServiceStatus = {
  name: string
  url: string
  healthUrl: string
  status: "operational" | "degraded" | "down" | "checking"
  latencyMs: number | null
  lastChecked: string | null
  description: string
}

const SERVICES: Omit<ServiceStatus, "status" | "latencyMs" | "lastChecked">[] = [
  {
    name: "Main Website",
    url: "https://music.sakayori.dev",
    healthUrl: "https://music.sakayori.dev",
    description: "Public marketing site, docs, privacy policy, code-signing info.",
  },
  {
    name: "Lyrics API",
    url: "https://lyrics.sakayori.dev",
    healthUrl: "https://lyrics.sakayori.dev/health",
    description: "Community-powered lyrics with word-level sync. Quality-scored submissions.",
  },
  {
    name: "Chart API",
    url: "https://chart.sakayori.dev",
    healthUrl: "https://chart.sakayori.dev/health",
    description: "Curated YouTube Music playlists, trending charts, mood buckets.",
  },
]

async function checkService(url: string): Promise<{ ok: boolean; latency: number }> {
  const start = performance.now()
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    })
    clearTimeout(timeout)
    const latency = Math.round(performance.now() - start)
    return { ok: true, latency }
  } catch {
    return { ok: false, latency: Math.round(performance.now() - start) }
  }
}

export function StatusPage() {
  const [services, setServices] = useState<ServiceStatus[]>(
    SERVICES.map((s) => ({ ...s, status: "checking" as const, latencyMs: null, lastChecked: null })),
  )
  const [globalStatus, setGlobalStatus] = useState<"operational" | "degraded" | "down" | "checking">("checking")
  const [checkedAt, setCheckedAt] = useState<string>("")

  const runChecks = async () => {
    const results = await Promise.all(
      SERVICES.map(async (svc) => {
        const { ok, latency } = await checkService(svc.healthUrl)
        const status: ServiceStatus["status"] = ok ? (latency > 3000 ? "degraded" : "operational") : "down"
        return {
          ...svc,
          status,
          latencyMs: latency,
          lastChecked: new Date().toISOString(),
        }
      }),
    )
    setServices(results)
    const anyDown = results.some((r) => r.status === "down")
    const anyDegraded = results.some((r) => r.status === "degraded")
    setGlobalStatus(anyDown ? "down" : anyDegraded ? "degraded" : "operational")
    setCheckedAt(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    runChecks()
    const interval = setInterval(runChecks, 30_000)
    return () => clearInterval(interval)
  }, [])

  const statusConfig = {
    operational: { label: "All Systems Operational", color: "var(--color-accent)", dot: "#22d3ee" },
    degraded: { label: "Degraded Performance", color: "#f59e0b", dot: "#f59e0b" },
    down: { label: "Partial Outage", color: "#ef4444", dot: "#ef4444" },
    checking: { label: "Checking…", color: "var(--color-text-muted)", dot: "var(--color-text-muted)" },
  }

  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-16 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Status
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
            Live Service Health.
          </h1>
          <p className="text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed">
            Real-time availability of every SakayoriMusic service. Auto-refreshes every 30 seconds.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div
          className="border p-6 mb-8 flex items-center gap-4"
          style={{ borderColor: statusConfig[globalStatus].color }}
        >
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{
              backgroundColor: statusConfig[globalStatus].dot,
              boxShadow: `0 0 0 4px ${statusConfig[globalStatus].color}33`,
              animation: globalStatus !== "checking" ? "pulse 2s ease-in-out infinite" : undefined,
            }}
          />
          <div className="flex-1">
            <div
              className="font-semibold text-lg"
              style={{ color: statusConfig[globalStatus].color }}
            >
              {statusConfig[globalStatus].label}
            </div>
            {checkedAt && (
              <div className="font-mono text-xs text-[var(--color-text-faint)] mt-1">
                Last Checked: {checkedAt}
              </div>
            )}
          </div>
          <button
            onClick={runChecks}
            className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            Refresh
          </button>
        </div>

        <div className="space-y-3">
          {services.map((svc) => (
            <ServiceRow key={svc.name} service={svc} />
          ))}
        </div>

        <div className="mt-12 p-6 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)] mb-3">
            How This Works
          </div>
          <ul className="space-y-2 text-sm text-[var(--color-text-soft)] leading-relaxed">
            <li>Each service exposes a <code className="font-mono text-[var(--color-accent)]">/health</code> endpoint that returns a lightweight JSON status.</li>
            <li>Browser fetches each endpoint in <code className="font-mono text-[var(--color-accent)]">no-cors</code> mode every 30 seconds. A successful fetch counts as Operational.</li>
            <li>Round-trip latency under 3 seconds = Operational. Between 3 and 8 seconds = Degraded. Timeout or network error = Down.</li>
            <li>No data is sent to a third party. All checks happen directly from your browser.</li>
          </ul>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      `}</style>
    </>
  )
}

function ServiceRow({ service }: { service: ServiceStatus }) {
  const statusStyles = {
    operational: { label: "Operational", color: "var(--color-accent)", dot: "#22d3ee" },
    degraded: { label: "Degraded", color: "#f59e0b", dot: "#f59e0b" },
    down: { label: "Down", color: "#ef4444", dot: "#ef4444" },
    checking: { label: "Checking", color: "var(--color-text-muted)", dot: "var(--color-text-muted)" },
  }
  const s = statusStyles[service.status]

  return (
    <div className="border border-[var(--color-border)] p-5 flex items-center gap-4 hover:border-[var(--color-border-strong)] transition-colors">
      <span
        className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: s.dot,
          boxShadow: `0 0 0 3px ${s.color}22`,
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <div className="font-semibold text-[var(--color-text)]">{service.name}</div>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.16em]"
            style={{ color: s.color }}
          >
            {s.label}
          </span>
        </div>
        <div className="text-sm text-[var(--color-text-muted)]">{service.description}</div>
      </div>
      <div className="text-right flex-shrink-0">
        {service.latencyMs !== null && (
          <div className="font-mono text-sm text-[var(--color-text-soft)]">{service.latencyMs}ms</div>
        )}
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-[var(--color-accent)] hover:underline"
        >
          Visit ↗
        </a>
      </div>
    </div>
  )
}

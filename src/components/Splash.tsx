"use client"

import { useEffect, useState } from "react"

export function Splash() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const startFade = () => {
      setFading(true)
      setTimeout(() => setVisible(false), 500)
    }

    if (document.readyState === "complete") {
      const t = setTimeout(startFade, 400)
      return () => clearTimeout(t)
    }

    const onLoad = () => {
      const t = setTimeout(startFade, 400)
      return () => clearTimeout(t)
    }

    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg)] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-end gap-1 mb-8 h-14">
        <span className="splash-bar" style={{ animationDelay: "0s" }} />
        <span className="splash-bar" style={{ animationDelay: "0.12s" }} />
        <span className="splash-bar" style={{ animationDelay: "0.24s" }} />
        <span className="splash-bar" style={{ animationDelay: "0.36s" }} />
        <span className="splash-bar" style={{ animationDelay: "0.48s" }} />
        <span className="splash-bar" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="text-sm font-semibold tracking-tight">
        Sakayori<span className="text-[var(--color-accent)]">Music</span>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-faint)] mt-2">
        Loading
      </div>
    </div>
  )
}

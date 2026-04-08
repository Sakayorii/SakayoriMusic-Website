"use client"

import { useState } from "react"
import { useLatestVersion } from "@/components/LiveVersion"

export function InstallSnippet() {
  const version = useLatestVersion()
  return (
    <div className="surface overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
        <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
        <span className="w-2.5 h-2.5 bg-[var(--color-text-faint)]" />
        <span className="ml-2 text-[var(--color-text-muted)]">~/sakayori — install</span>
      </div>
      <div className="p-5 space-y-3">
        <CopyRow comment="# Linux (Debian / Ubuntu)" command={`sudo dpkg -i sakayorimusic_${version}_amd64.deb`} />
        <CopyRow comment="# Linux (Fedora / RHEL)" command={`sudo rpm -i sakayorimusic-${version}.x86_64.rpm`} />
        <CopyRow comment="# Windows" command={`msiexec /i SakayoriMusic-${version}.msi`} />
        <CopyRow comment="# macOS — drag from .dmg" command={`open SakayoriMusic-${version}-arm64.dmg`} />
      </div>
    </div>
  )
}

function CopyRow({ comment, command }: { comment: string; command: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
    } catch {
      const area = document.createElement("textarea")
      area.value = command
      area.style.position = "fixed"
      area.style.left = "-9999px"
      document.body.appendChild(area)
      area.select()
      try {
        document.execCommand("copy")
      } catch {}
      document.body.removeChild(area)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="group">
      <div className="text-[var(--color-text-faint)]">{comment}</div>
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0 text-[var(--color-text-soft)] break-all">
          <span className="text-[var(--color-accent)]">$</span> {command}
        </div>
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? "Copied" : "Copy command"}
          className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-sm border transition-colors text-[10px] uppercase tracking-wider font-mono ${
            copied
              ? "border-[var(--color-accent)] text-[var(--color-accent)]"
              : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
          }`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  )
}

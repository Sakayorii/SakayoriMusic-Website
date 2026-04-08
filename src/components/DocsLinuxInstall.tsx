"use client"

import { useState } from "react"
import { useLatestVersion } from "@/components/LiveVersion"

export function DocsLinuxInstall() {
  const version = useLatestVersion()
  return (
    <>
      <p className="text-sm text-[var(--color-text-muted)] mb-3">For Debian / Ubuntu:</p>
      <CopyBlock command={`sudo dpkg -i sakayorimusic_${version}_amd64.deb`} />
      <p className="text-sm text-[var(--color-text-muted)] mt-4 mb-3">For Fedora / RHEL:</p>
      <CopyBlock command={`sudo rpm -i sakayorimusic-${version}.x86_64.rpm`} />
    </>
  )
}

function CopyBlock({ command }: { command: string }) {
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
    <div className="relative group">
      <pre className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4 pr-20 text-xs font-mono text-[var(--color-text-soft)] overflow-x-auto">
        <code>
          <span className="text-[var(--color-accent)]">$</span> {command}
        </code>
      </pre>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? "Copied" : "Copy command"}
        className={`absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 border transition-colors text-[10px] uppercase tracking-wider font-mono ${
          copied
            ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-bg)]"
            : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)] bg-[var(--color-bg)]"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  )
}

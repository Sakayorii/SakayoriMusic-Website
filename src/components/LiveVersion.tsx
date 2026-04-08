"use client"

import { useEffect, useState } from "react"
import { FALLBACK_VERSION, getLatestVersion } from "@/lib/version"

export function useLatestVersion(): string {
  const [version, setVersion] = useState(FALLBACK_VERSION)

  useEffect(() => {
    let mounted = true
    getLatestVersion().then((v) => {
      if (mounted) setVersion(v)
    })
    return () => {
      mounted = false
    }
  }, [])

  return version
}

export function LiveVersion({
  prefix = "",
  className = "",
}: {
  prefix?: string
  className?: string
}) {
  const version = useLatestVersion()
  return <span className={className}>{prefix}{version}</span>
}

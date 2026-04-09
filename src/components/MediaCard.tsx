"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

type MediaInfo = {
  title: string
  author: string
  thumbnail: string
}

type MediaCardProps = {
  id: string
  type: "play" | "playlist"
}

export function MediaCard({ id, type }: MediaCardProps) {
  const [info, setInfo] = useState<MediaInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [deepLinkFailed, setDeepLinkFailed] = useState(false)

  useEffect(() => {
    if (type === "play") {
      fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data) {
            setInfo({
              title: data.title ?? id,
              author: data.author_name ?? "Unknown",
              thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
            })
          } else {
            setInfo({
              title: id,
              author: "YouTube Music",
              thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
            })
          }
          setLoading(false)
        })
        .catch(() => {
          setInfo({
            title: id,
            author: "YouTube Music",
            thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          })
          setLoading(false)
        })
    } else {
      setInfo({
        title: `Playlist ${id}`,
        author: "YouTube Music",
        thumbnail: "/logo.svg",
      })
      setLoading(false)
    }
  }, [id, type])

  const handleOpen = useCallback(() => {
    const scheme = `sakayorimusic://${type === "play" ? "watch" : "playlist"}?v=${id}`
    const start = Date.now()

    window.location.href = scheme

    setTimeout(() => {
      if (Date.now() - start < 2000) {
        setDeepLinkFailed(true)
      }
    }, 1500)
  }, [id, type])

  if (loading) {
    return (
      <div className="surface p-8 flex items-center justify-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Loading
        </div>
      </div>
    )
  }

  if (!info) return null

  return (
    <div className="surface overflow-hidden">
      <div className="flex items-stretch gap-0">
        <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] shrink-0 bg-[var(--color-bg-elevated)]">
          <Image
            src={info.thumbnail}
            alt={info.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center min-w-0">
          <p className="text-lg md:text-xl font-semibold truncate leading-tight mb-1">
            {info.title}
          </p>
          <p className="text-sm text-[var(--color-text-muted)] truncate mb-5">
            {info.author}
          </p>

          <button
            type="button"
            onClick={handleOpen}
            className="group inline-flex items-center gap-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-[0.97] text-[var(--color-bg)] px-5 py-2.5 font-medium text-sm transition-all w-fit"
          >
            <Image
              src="/logo.svg"
              alt="SakayoriMusic"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>
              Open On{" "}
              <span className="font-semibold">SakayoriMusic</span>
            </span>
            <span className="font-mono opacity-60 group-hover:opacity-100 transition-opacity">→</span>
          </button>

          {deepLinkFailed && (
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              App not detected.{" "}
              <a href="/download" className="text-[var(--color-accent)] hover:underline">
                Download SakayoriMusic
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

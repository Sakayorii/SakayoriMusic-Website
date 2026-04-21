import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">
          / 404
        </p>
        <h1 className="text-6xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.9] mb-6">
          Not Found.
        </h1>
        <p className="text-lg text-[var(--color-text-soft)] leading-relaxed mb-10">
          This page doesn&apos;t exist, was moved, or was removed. Maybe a broken link, maybe a typo in the URL — either way, we couldn&apos;t find it.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Back To Home
          </Link>
          <Link
            href="/docs"
            className="inline-block border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] px-6 py-3 transition-colors"
          >
            Read Docs
          </Link>
          <Link
            href="/status"
            className="inline-block border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] px-6 py-3 transition-colors"
          >
            Service Status
          </Link>
        </div>
        <div className="mt-16 pt-10 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
          <p>
            Is a page that should work broken?{" "}
            <a
              href="https://github.com/Sakayorii/sakayori-music/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Report it on GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

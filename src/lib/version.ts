const FALLBACK_VERSION = "2.0.9"
const GITHUB_API = "https://api.github.com/repos/Sakayorii/sakayori-music/releases/latest"

let cache: Promise<string> | null = null

export function getLatestVersion(): Promise<string> {
  if (cache) return cache
  cache = fetch(GITHUB_API)
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      const tag = data?.tag_name as string | undefined
      if (!tag) return FALLBACK_VERSION
      return tag.replace(/^v/, "")
    })
    .catch(() => FALLBACK_VERSION)
  return cache
}

export { FALLBACK_VERSION }

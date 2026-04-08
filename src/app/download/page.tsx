import { DownloadGrid } from "@/components/DownloadGrid"

export const metadata = {
  title: "Download — SakayoriMusic",
  description: "Download SakayoriMusic for Android, Windows, Linux, and macOS. Free and open source.",
}

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <div className="text-center mb-16">
        <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
          Download
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Get <span className="text-gradient">SakayoriMusic</span>
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Choose your platform below. All builds are free, open source, and signed by Sakayori Studio.
        </p>
      </div>

      <DownloadGrid />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-2">System Requirements</h3>
          <ul className="text-sm text-[var(--color-text-muted)] space-y-1">
            <li>• Android 8.0 (API 26) or higher</li>
            <li>• Windows 10 / 11 (64-bit)</li>
            <li>• Linux (Ubuntu 20.04+, Fedora 34+)</li>
            <li>• macOS 11.0 (Big Sur) or higher</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-2">Windows SmartScreen</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            On first launch, click <span className="text-[var(--color-text)]">More info</span> →{" "}
            <span className="text-[var(--color-text)]">Run anyway</span>. The app is unsigned but safe.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-2">macOS Gatekeeper</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Open <span className="text-[var(--color-text)]">System Settings</span> →{" "}
            <span className="text-[var(--color-text)]">Privacy & Security</span> → click{" "}
            <span className="text-[var(--color-text)]">Open Anyway</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

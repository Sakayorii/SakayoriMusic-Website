export const metadata = {
  title: "Code Signing Policy — SakayoriMusic",
  description: "SakayoriMusic code signing policy, team roles, and reproducible build process.",
}

export default function CodeSigningPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 pt-20 pb-14 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
            / Trust
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6 text-balance">
            Code Signing{" "}
            <span className="font-serif italic font-normal text-[var(--color-accent)]">
              Done Right
            </span>
            .
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text-soft)] max-w-2xl leading-relaxed text-pretty">
            Every Windows binary is built reproducibly from tagged commits in the public
            repo, then signed by the SignPath Foundation certificate. Nothing else touches
            the artifact between build and release.
          </p>
          <p className="font-mono text-[11px] text-[var(--color-text-faint)] mt-6">
            Last Updated: April 20, 2026 · Certificate Provider: SignPath Foundation
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 py-20 max-w-4xl space-y-14">

          <Block label="01" title="Signing Provider">
            <p>
              Free code signing donated by{" "}
              <a href="https://signpath.io" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                SignPath.io
              </a>
              , using an Extended Validation certificate issued by the{" "}
              <a href="https://signpath.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                SignPath Foundation
              </a>
              . The Foundation vets open-source projects before issuing certificates to
              ensure only legitimate projects receive signing rights.
            </p>
          </Block>

          <Block label="02" title="Why It Matters">
            <p className="mb-4">
              Signed binaries give Windows users three guarantees:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <GuaranteeCard title="Authenticity" desc="Built by the maintainer team, not an impostor." />
              <GuaranteeCard title="Integrity" desc="Unmodified since leaving the build server." />
              <GuaranteeCard title="Transparency" desc="Linked to a publicly auditable commit." />
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              SmartScreen warnings should disappear once the certificate accumulates reputation
              (typically a few hundred downloads). UAC dialogs display{" "}
              <span className="text-[var(--color-text)]">&quot;SignPath Foundation&quot;</span> as the
              publisher.
            </p>
          </Block>

          <Block label="03" title="Team">
            <div className="space-y-5">
              <RoleRow
                role="Lead Maintainer"
                members={[{ handle: "Sakayorii", title: "Author / Reviewer / Release Manager" }]}
              />
              <RoleRow
                role="Co-Maintainers"
                members={[{ handle: "Lammk", title: "Author / Reviewer" }]}
              />
              <RoleRow
                role="Signing Approver"
                members={[{ handle: "Sakayorii", title: "Sole authorized approver for release signing" }]}
              />
            </div>
          </Block>

          <Block label="04" title="Reproducible Build">
            <p className="mb-4">
              Every signed artifact is built on GitHub Actions runners from a tagged commit
              in the public repository. No local builds are ever signed.
            </p>
            <ol className="space-y-3">
              <Step n={1} title="Tag Push">
                Maintainer pushes a version tag like{" "}
                <Code>v2.1.4</Code> to the main branch.
              </Step>
              <Step n={2} title="CI Build">
                <Code>build-windows.yml</Code> runs on{" "}
                <Code>windows-latest</Code> — checks out the tagged commit, builds the MSI
                + EXE using jpackage, and uploads as artifacts.
              </Step>
              <Step n={3} title="Submit To SignPath">
                <Code>signpath-foundation/github-action-submit-signing-request@v1</Code>{" "}
                sends the build to SignPath.io with the GitHub run ID for verification.
              </Step>
              <Step n={4} title="Human Review + Approve">
                The authorized approver reviews the submission — confirms the commit SHA,
                checks the build log, approves. SignPath signs the binary.
              </Step>
              <Step n={5} title="Publish">
                Signed binaries are downloaded and uploaded to the matching GitHub Release.
                The release body links to the exact workflow run that produced them.
              </Step>
            </ol>
          </Block>

          <Block label="05" title="Verify A Signed Binary">
            <p className="mb-4">
              On Windows, right-click the <Code>.exe</Code> or <Code>.msi</Code> →{" "}
              <span className="text-[var(--color-text)]">Properties</span> →{" "}
              <span className="text-[var(--color-text)]">Digital Signatures</span> tab. You
              should see:
            </p>
            <pre className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4 text-xs font-mono text-[var(--color-text-soft)] overflow-x-auto">
              <code>{`Name of signer:    SignPath Foundation
Digest algorithm:  sha256
Timestamp:         <valid UTC timestamp>
Certificate:       SignPath EV Certificate`}</code>
            </pre>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Or via PowerShell:
            </p>
            <pre className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-4 text-xs font-mono text-[var(--color-text-soft)] overflow-x-auto mt-2">
              <code><span className="text-[var(--color-accent)]">$</span> Get-AuthenticodeSignature .\SakayoriMusic-2.1.4.msi</code>
            </pre>
          </Block>

          <Block label="06" title="Current Status" tone="accent">
            <div className="surface p-5 border-l-2 border-l-[var(--color-accent)]">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Application
                </span>
                <span className="font-mono text-[10px] text-[var(--color-text-faint)]">
                  ID: 1493865560013017160
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Applied to SignPath Foundation on <span className="text-[var(--color-text)]">April 15, 2026</span>.
                Currently pending review. Signed releases will begin with the first approved build.
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-3 leading-relaxed">
                Until approval lands, current Windows binaries are distributed unsigned.
                SmartScreen and Defender may warn — see{" "}
                <a href="/docs#troubleshoot" className="text-[var(--color-accent)] hover:underline">docs</a>{" "}
                for the whitelist command.
              </p>
            </div>
          </Block>

          <Block label="07" title="Scope & Privacy">
            <p className="mb-3">
              Code signing does not alter what data the app handles. The signed binary
              behaves identically to the unsigned one — the signature only verifies
              authorship and integrity.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Privacy behavior is described in full on the{" "}
              <a href="/privacy" className="text-[var(--color-accent)] hover:underline">Privacy Policy</a>.
            </p>
          </Block>

          <Block label="08" title="Report Abuse">
            <p className="mb-4">
              If you encounter a binary claiming to be signed by SignPath Foundation but
              behaving suspiciously:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href="https://github.com/Sakayorii/sakayori-music/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover p-4 flex items-baseline justify-between transition-colors"
              >
                <div>
                  <div className="text-sm font-semibold">Open GitHub Issue</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">Security report template</div>
                </div>
                <span className="font-mono text-[var(--color-text-muted)]">↗</span>
              </a>
              <a
                href="https://signpath.org/report-abuse"
                target="_blank"
                rel="noopener noreferrer"
                className="surface surface-hover p-4 flex items-baseline justify-between transition-colors"
              >
                <div>
                  <div className="text-sm font-semibold">Contact SignPath Foundation</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">Direct certificate abuse report</div>
                </div>
                <span className="font-mono text-[var(--color-text-muted)]">↗</span>
              </a>
            </div>
          </Block>
        </div>
      </section>
    </>
  )
}

function Block({ label, title, tone, children }: { label: string; title: string; tone?: "accent"; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-3">
        <span className="font-mono text-xs text-[var(--color-text-faint)]">{label}</span>
        <h2 className={`text-2xl font-semibold tracking-tight mt-1 ${tone === "accent" ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"}`}>
          {title}
        </h2>
      </div>
      <div className="lg:col-span-9 text-[var(--color-text-soft)] leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function GuaranteeCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="surface p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-1">{title}</div>
      <p className="text-sm text-[var(--color-text-muted)]">{desc}</p>
    </div>
  )
}

function RoleRow({ role, members }: { role: string; members: { handle: string; title: string }[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-2">{role}</div>
      <div className="space-y-2">
        {members.map(m => (
          <div key={m.handle} className="flex items-baseline gap-3 py-2 border-b border-[var(--color-border)] last:border-b-0">
            <a
              href={`https://github.com/${m.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline font-medium"
            >
              @{m.handle}
            </a>
            <span className="text-sm text-[var(--color-text-muted)]">— {m.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="shrink-0 w-7 h-7 border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-sm flex items-center justify-center">
        {n}
      </span>
      <div className="flex-1 pt-0.5">
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-sm text-[var(--color-text-muted)]">{children}</div>
      </div>
    </li>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[12px] text-[var(--color-text)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-1.5 py-0.5">
      {children}
    </code>
  )
}

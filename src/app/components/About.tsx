"use client";
import { useContact } from "../components/contact-context";
import ContactSheet from "../components/ContactSheet";

export default function About() {
  const { setOpen } = useContact();

  return (
    <>
      <section id="about" className="max-w-4xl mx-auto px-6 pb-28">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">About Anthony</h2>
        <p className="mt-4 leading-relaxed text-[var(--beige)]/90">
          I’m a Senior Tools Engineer who loves turning messy, repetitive workflows into tidy, simple systems.
          I work primarily with PowerShell, TypeScript/Next.js, and Google Sheets + Apps Script, and I ship fast with clear docs.
        </p>

        <div className="mt-8 text-center">
          <a href="/portfolio" className="underline underline-offset-4 hover:text-[var(--gold)]">View my resume</a>
        </div>

        {/* Stats */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            ["90%", "fewer manual steps"],
            ["$750k+", "annual labour savings"],
            ["1,000+", "internal users supported"],
          ].map(([big, small]) => (
            <div key={small} className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-5 text-center">
              <div className="text-3xl font-semibold">{big}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{small}</div>
            </div>
          ))}
        </div>

        {/* What I deliver */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
            <h3 className="text-xl font-semibold">What I deliver</h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              <li>• Workflow automation: scraping, CSV cleanup, file flows, scheduling</li>
              <li>• Internal tools & dashboards: focused, bloat-free UIs</li>
              <li>• Reliable backups & migrations with integrity checks</li>
              <li>• Secure integrations: auth, APIs, databases, cloud</li>
              <li>• Team training with playbooks, templates, recordings</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
            <h3 className="text-xl font-semibold">Selected work</h3>
            <ul className="mt-3 space-y-3 text-[var(--muted)]">
              <li>
                <div className="font-medium">Service Desk Optimizer</div>
                <div>Replaced legacy tool → <span className="font-medium">90%</span> workload reduction; <span className="font-medium">$750k+</span> annual savings.</div>
              </li>
              <li>
                <div className="font-medium">SWIFT (Profile Migration)</div>
                <div>Fault-tolerant backups & restores with hashing, chunking, metadata.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-10 rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
          <h3 className="text-xl font-semibold">Stack</h3>
          <p className="mt-3 text-[var(--muted)]">
            PowerShell · TypeScript/Next.js · Google Sheets/Apps Script · Java · Python · SQL · Azure · REST APIs · Git · CI/CD
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl px-5 py-3 bg-[var(--gold)] text-[var(--accent-ink)] font-medium"
          >
            Request a quote
          </button>
          <a
            href="/Anthony_Milad_Resume.pdf"
            download="Anthony_Milad_Resume.pdf"
            className="rounded-2xl px-5 py-3 border border-[var(--line)]"
          >
            Download resume
          </a>
        </div>
      </section>

      {/* Mount the modal so the context works on this page */}
      <ContactSheet />
    </>
  );
}

"use client";
import { useContact } from "../components/contact-context";
import ContactSheet from "../components/ContactSheet";

export default function PortfolioPage() {
  const { setOpen } = useContact();

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-24 text-[var(--ink)]">
        <h1 className="text-4xl md:text-5xl font-semibold">Portfolio</h1>
        <p className="mt-3 text-[var(--muted)]">
          Senior Tools Engineer building durable automation for everyday operations.
        </p>

        <section className="mt-10 grid sm:grid-cols-3 gap-4">
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
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
            <h2 className="text-xl font-semibold">Capabilities</h2>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              <li>• Automation: scraping, data cleanup, schedulers, file flows</li>
              <li>• Internal tools: focused dashboards and simple web apps</li>
              <li>• Data flows: backup/migration, hashing, chunking, metadata</li>
              <li>• Integration: auth, APIs, databases, cloud</li>
              <li>• Team training: workshops, playbooks, recordings</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <ul className="mt-3 space-y-3 text-[var(--muted)]">
              <li>
                <div className="font-medium">Service Desk Optimizer</div>
                <div>Legacy replacement → <span className="font-medium">90%</span> workload reduction; <span className="font-medium">$750k+</span> annual savings.</div>
              </li>
              <li>
                <div className="font-medium">SWIFT Profile Migration</div>
                <div>Reliable backup/restore with automated replication, integrity checks, and metadata.</div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-[var(--card)] border border-[var(--line)] p-6">
          <h2 className="text-xl font-semibold">Stack & Credentials</h2>
          <p className="mt-3 text-[var(--muted)]">
            PowerShell · TypeScript/Next.js · Google Sheets/Apps Script · Java · Python · SQL · Azure · REST APIs · Git · CI/CD
          </p>
          <p className="mt-3 text-[var(--muted)]">
            B.CompSci (Laurentian). 2025 coursework: Distributed Systems & Cloud; Large-Scale Architecture; Cloud Patterns; Spring Boot.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl px-5 py-3 bg-[var(--gold)] text-[var(--accent-ink)] font-medium"
          >
            Start a Project
          </button>
          <a href="/#home" className="rounded-2xl px-5 py-3 border border-[var(--line)]">Back to main page</a>
        </div>
      </main>

      {/* Mount the modal so the context has something to show on this route */}
      <ContactSheet />
    </>
  );
}

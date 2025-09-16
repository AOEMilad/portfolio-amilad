export default function Services() {
  const items = [
    { title: "Workflow Automation", copy: "Web scraping, CSV cleanup, scheduled jobs and file flows. Built to be readable and maintainable." },
    { title: "Internal Tools",      copy: "Small web apps and dashboards that surface exactly what your team needs — no bloat." },
    { title: "Team Training",       copy: "Practical training sessions that level up your team on the tools you run — clear SOPs included." },
  ] as const;

  return (
    <>
      <section className="border-y border-[var(--brown)]/30 bg-[var(--green)]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs md:text-sm text-[var(--vanilla)]/70">
          <p className="uppercase tracking-widest">Custom Scripts</p>
          <p className="uppercase tracking-widest">Dashboards</p>
          <p className="uppercase tracking-widest">Integrations</p>
          <p className="uppercase tracking-widest">Process Design</p>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.title} className="group rounded-3xl border border-[var(--brown)]/40 bg-[var(--dark)]/60 p-6 hover:-translate-y-1 transition shadow-sm">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-3 text-[var(--beige)]/85">{c.copy}</p>
              <div className="mt-6 flex items-center gap-2 text-[var(--gold)]">Learn more<span>→</span></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

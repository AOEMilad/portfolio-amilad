export default function Work() {
  const projects = [
    ["A&W Sales Scraper", "Weekly scrape → CSV → dashboard for location."],
    ["Vending Stock Planner", "Google Sheets + script to auto-build purchase lists."],
    ["CRA Tools Suite", "PowerShell automations for backup + profile migration."],
  ] as const;

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(([title, desc]) => (
          <article key={title} className="rounded-3xl overflow-hidden border border-[var(--brown)]/40 bg-[var(--dark)]/60">
            <div className="aspect-video bg-gradient-to-tr from-[var(--green)]/40 to-[var(--gold)]/30" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[var(--beige)]/85">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

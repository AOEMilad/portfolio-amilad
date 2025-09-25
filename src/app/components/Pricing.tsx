import GlassPanel from "./GlassPanel";
import GlossyButton from "./GlossyButton";

export default function Pricing() {
  const fixed = [
    ["Small scripts",     "1–2 weeks", "$100 - $300"],
    ["Medium solutions",  "3-4 weeks", "$500 - $1,500"],
    ["Large systems",     "4-10 weeks", "$2,000+"],
  ] as const;
  const tiers = [
    ["Bronze",   "up to 3 automations, fixes included.", "$500 / month"],
    ["Silver",   "up to 7 automations, fixes, quarterly workflow review.", "$1,000 / month"],
    ["Gold",     "unlimited requests, dedicated support", "$2,000 / month"],
  ] as const;

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 pb-24">
      <GlassPanel className="m-12 p-6 mx-auto">

        {/* <div className="rounded-3xl overflow-hidden border border-[var(--brown)]/40"> */}
          <div className="bg-[var(--brown)]/40 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
            <p className="mt-3 max-w-3xl text-[var(--beige)]/90">
              Start with a free consult and discovery. Fixed-scope packages or hourly if you prefer.
              Most small automations land in the $500–$2,500 range; ongoing support available.
            </p>
          </div>

          
          <GlossyButton >
            iMessage-ish
          </GlossyButton>
          

          <div className="bg-[var(--brown)]/40 p-8 md:p-12">
            <p className="text-center">
              One-Off Fixed Price
            </p>
            <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8 bg-[var(--green)]">
              {fixed.map(([name, desc, price]) => (
                <div key={name} className="rounded-2xl border border-[var(--brown)]/40 p-6">
                  <h3 className="text-xl font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm text-[var(--beige)]/85">{desc}</p>
                  <p className="mt-4 text-2xl text-[var(--gold)]">{price}</p>
                </div>
              ))}
            </div>

            <p className="text-center">
              Tiered Contract
            </p>
            <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8 bg-[var(--green)]">
              {tiers.map(([name, desc, price]) => (
                <div key={name} className="rounded-2xl border border-[var(--brown)]/40 p-6">
                  <h3 className="text-xl font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm text-[var(--beige)]/85">{desc}</p>
                  <p className="mt-4 text-2xl text-[var(--gold)]">{price}</p>
                </div>
              ))}
            </div>
          </div>
          
        {/*</div>*/}

      </GlassPanel>

    </section>
  );
}

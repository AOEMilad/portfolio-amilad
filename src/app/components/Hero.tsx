export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline aria-label="golden abstract background">
        <source src="/hero-gold-abstract.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[var(--dark)]/80" />

      <div className="relative z-10 text-center px-6">
        <p className="text-lg md:text-2xl tracking-[0.3em] text-[var(--gold)]">
          EFFICIENCY. RELIABILITY.
          </p>
        <h1 className="mt-4 text-4xl md:text-7xl font-semibold tracking-tight text-white drop-shadow">
          Build Once, Run Forever
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-[var(--beige)]/90">
          Eliminate repetitive work — permanently.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
          <a href="#services" className="rounded-2xl px-5 py-3 bg-[var(--gold)] text-[var(--dark)] font-medium shadow">
            Explore Services
          </a>
          <a href="#work" className="rounded-2xl px-5 py-3 border border-[var(--beige)]/50 hover:bg-white/5">
            View My Work
          </a>
          {/*
          <a href="#pricing" className="rounded-2xl px-5 py-3 border border-[var(--beige)]/50 hover:bg-white/5">
            View Pricing
            View My Work
          </a>
          */}
        </div>
      </div>
    </section>
  );
}

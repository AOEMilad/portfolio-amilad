"use client";
import { useState } from "react";
import { useContact } from "./contact-context";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setOpen } = useContact();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-[var(--dark)]/40 border-b border-[var(--brown)]/40">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="tracking-wide text-xl md:text-2xl text-[var(--vanilla)]">
          Anthony Milad
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-[var(--gold)] transition">Services</a>
          <a href="#pricing"  className="hover:text-[var(--gold)] transition">Pricing</a>
          <a href="#work"     className="hover:text-[var(--gold)] transition">Work</a>
          <a href="#about"    className="hover:text-[var(--gold)] transition">About</a>
          <a href="/portfolio"    className="hover:text-[var(--gold)] transition">Portfolio</a>
          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl px-4 py-2 bg-[var(--gold)] text-[var(--dark)] font-medium shadow"
          >
            Contact
          </button>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-[var(--brown)]/50"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[var(--beige)] mb-1" />
          <div className="w-5 h-0.5 bg-[var(--beige)] mb-1" />
          <div className="w-5 h-0.5 bg-[var(--beige)]" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--brown)]/40 bg-[var(--dark)]/95">
          <div className="px-6 py-4 flex flex-col text-lg">
            {[
              ["Services", "#services"],
              ["Pricing",  "#pricing"],
              ["Work",     "#work"],
              ["About",    "#about"],
              ["Portfolio","/portfolio"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="py-3 border-b border-[var(--brown)]/30"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setOpen(true); }}
              className="mt-4 rounded-xl px-4 py-3 bg-[var(--gold)] text-[var(--dark)] font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

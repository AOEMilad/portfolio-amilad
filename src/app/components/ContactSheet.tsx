"use client";
import { useState, FormEvent } from "react";
import { useContact } from "./contact-context";

export default function ContactSheet() {
  const { open, setOpen } = useContact();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setLoading(false);
    if (data.ok) setSent(true);
    else setError(data.error || "Failed to send");
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg rounded-3xl bg-[var(--green)] border border-[var(--brown)]/50 p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[var(--vanilla)]">Let’s talk</h3>
          <button onClick={() => setOpen(false)} className="text-[var(--beige)]/80" aria-label="Close">✕</button>
        </div>

        {sent ? (
          <p className="mt-4 text-[var(--beige)]">Thanks! I’ll get back to you shortly.</p>
        ) : (
          <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
            <input className="rounded-xl bg-black/20 border border-[var(--brown)]/50 px-4 py-3" name="name" placeholder="Name" required />
            <input className="rounded-xl bg-black/20 border border-[var(--brown)]/50 px-4 py-3" name="email" placeholder="Email" type="email" required />
            <textarea className="rounded-xl bg-black/20 border border-[var(--brown)]/50 px-4 py-3" name="message" rows={4} placeholder="What would you like to automate?" required />
            <button disabled={loading} className="rounded-2xl px-5 py-3 bg-[var(--gold)] text-[var(--dark)] font-medium">
              {loading ? "Sending..." : "Send"}
            </button>
            {error && <p className="text-sm text-red-400">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

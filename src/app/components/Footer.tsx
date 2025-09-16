export default function Footer() {
  return (
    <footer className="border-t border-[var(--brown)]/40">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-[var(--beige)]/80">
          © {new Date().getFullYear()} Anthony Milad — amilad.ca
        </p>
        <div className="flex items-center gap-6">
          <a className="hover:text-[var(--gold)]" href="#">Privacy</a>
          <a className="hover:text-[var(--gold)]" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

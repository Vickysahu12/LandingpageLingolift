export default function Footer() {
  return (
    <footer className="bg-[#060b18] border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span
            className="text-xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lingo<span className="text-[#f5c842]">Lift</span>
          </span>
          <p className="text-slate-600 text-xs mt-1">Master VARC. Own the CAT.</p>
        </div>

        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <a href="#features" className="hover:text-[#f5c842] transition-colors">Features</a>
          <a href="#waitlist" className="hover:text-[#f5c842] transition-colors">Early Access</a>
          <a
            href="https://www.instagram.com/lingoliftt/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f5c842] transition-colors"
          >
            Instagram
          </a>
        </div>

        <p className="text-slate-700 text-xs text-center md:text-right">
          © 2026 LingoLift. Built for CAT aspirants, by a CAT aspirant.
        </p>
      </div>
    </footer>
  );
}
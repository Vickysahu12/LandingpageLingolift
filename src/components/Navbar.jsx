export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-[#f5c842]/10">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Lingo<span className="text-[#f5c842]">Lift</span>
        </span>
      </div>
      <a
        href="#waitlist"
        className="px-5 py-2 text-sm font-semibold text-[#0a0f1e] bg-[#f5c842] rounded-full hover:bg-[#ffd700] transition-all duration-200 hover:scale-105"
      >
        Get Early Access
      </a>
    </nav>
  );
}
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0a0f1e]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f5c842]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#1a2a6c]/40 blur-[100px] pointer-events-none" />

      <div className="mb-6 px-4 py-1.5 rounded-full border border-[#f5c842]/30 bg-[#f5c842]/10 text-[#f5c842] text-xs font-semibold tracking-widest uppercase animate-fade-in">
        CAT 2026 · VARC Preparation
      </div>

      <h1
        className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Lingo<span className="text-[#f5c842]">Lift</span>
      </h1>

      <p
        className="text-xl md:text-2xl text-[#f5c842] font-medium mb-4 italic"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Master VARC. Own the CAT.
      </p>

      <p className="text-slate-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
        The only CAT VARC app built around how you actually learn — vocabulary in context, 
        RC strategies that work, and mocks that prepare you for the real thing.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#waitlist"
          className="px-8 py-4 bg-[#f5c842] text-[#0a0f1e] font-bold rounded-full text-base hover:bg-[#ffd700] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#f5c842]/20"
        >
          Join the Waitlist →
        </a>
        <a
          href="#features"
          className="px-8 py-4 border border-white/20 text-white font-medium rounded-full text-base hover:border-[#f5c842]/50 hover:text-[#f5c842] transition-all duration-200"
        >
          See Features
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
        {[
          { num: "2L+", label: "CAT Aspirants Yearly" },
          { num: "#1", label: "Pain Point: VARC" },
          { num: "Free", label: "To Get Started" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold text-[#f5c842]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
            <div className="text-slate-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
const pains = [
  { emoji: "😤", text: "You study vocabulary but nothing sticks by exam day" },
  { emoji: "😵", text: "You read the passage — and still get the RC wrong" },
  { emoji: "💸", text: "Expensive coaching that isn't built for how you learn" },
  { emoji: "😰", text: "Mock scores that leave you more confused than before" },
];

const solutions = [
  { emoji: "✅", text: "Contextual vocabulary learning with long-term retention" },
  { emoji: "✅", text: "RC strategies built specifically around CAT's question patterns" },
  { emoji: "✅", text: "Affordable — because your preparation shouldn't break the bank" },
  { emoji: "✅", text: "Mocks with deep analytics so every attempt makes you better" },
];

export default function WhyLingoLift() {
  return (
    <section className="py-24 px-6 bg-[#060b18] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-[#f5c842] text-sm font-semibold tracking-widest uppercase mb-3">
            Why LingoLift
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We know what{" "}
            <span className="text-[#f5c842]">VARC preparation feels like.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            LingoLift was built by a CAT aspirant — out of frustration with tools that didn't actually help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl border border-red-500/20 bg-red-500/5">
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span>😩</span> VARC prep today
            </h3>
            <ul className="space-y-4">
              {pains.map((p) => (
                <li key={p.text} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-base mt-0.5">{p.emoji}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-2xl border border-[#f5c842]/20 bg-[#f5c842]/5">
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span>🚀</span> With LingoLift
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s.text} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-base mt-0.5">{s.emoji}</span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
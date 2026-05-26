const features = [
  {
    icon: "📖",
    title: "Learn",
    subtitle: "Vocab · RC Articles · VA Section",
    description:
      "Build vocabulary in context, not in isolation. Study RC articles with expert breakdowns and master VA strategies designed specifically around CAT's exam pattern.",
    tag: "Foundation",
  },
  {
    icon: "✍️",
    title: "Practice",
    subtitle: "Section-wise Questions",
    description:
      "Targeted, high-quality questions with detailed explanations. Identify your weak areas and improve with precision — every question teaches you something.",
    tag: "Skill Building",
  },
  {
    icon: "🎯",
    title: "Mocks",
    subtitle: "Full VARC Mock Tests",
    description:
      "CAT-level difficulty. CAT-level time pressure. Full-length VARC mocks with detailed analytics so you know exactly where you stand — and what to fix.",
    tag: "Exam Ready",
  },
  {
    icon: "📊",
    title: "Profile",
    subtitle: "Track Your Progress",
    description:
      "Monitor accuracy trends, time management, and section-wise performance — all in one place. Because consistent progress is what separates toppers from the rest.",
    tag: "Analytics",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#0a0f1e] relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5c842]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#f5c842] text-sm font-semibold tracking-widest uppercase mb-3">
            What's Inside
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything you need.{" "}
            <span className="text-[#f5c842]">Nothing you don't.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
            Every aspect of VARC — covered, structured, and ready for CAT 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-[#f5c842]/40 hover:bg-[#f5c842]/5 transition-all duration-300"
            >
              <span className="absolute top-5 right-5 text-xs font-semibold text-[#f5c842]/70 bg-[#f5c842]/10 px-2 py-1 rounded-full">
                {f.tag}
              </span>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-[#f5c842] text-sm font-medium mb-3">{f.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
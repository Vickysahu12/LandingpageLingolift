import { useState } from "react";

export default function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mwvzryyp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f5c842]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1a2a6c]/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-lg mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5c842]/30 bg-[#f5c842]/10 text-[#f5c842] text-xs font-semibold tracking-widest uppercase mb-6">
            🔔 Limited Early Access
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Be among the{" "}
            <span className="text-[#f5c842]">first to get in.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            LingoLift is launching soon. Early access members get free premium access, 
            exclusive content, and direct access to the founding team.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center p-10 rounded-2xl border border-[#f5c842]/30 bg-[#f5c842]/10">
            <div className="text-5xl mb-4">🎉</div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              You're on the list!
            </h3>
            <p className="text-slate-400 text-sm">
              We'll reach out the moment LingoLift goes live. Keep preparing — your IIM seat is closer than you think.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Rahul Sharma"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#f5c842]/50 focus:bg-[#f5c842]/5 transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="rahul@gmail.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#f5c842]/50 focus:bg-[#f5c842]/5 transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#f5c842]/50 focus:bg-[#f5c842]/5 transition-all duration-200 text-sm"
              />
              <p className="text-slate-600 text-xs mt-1.5">
                We'll send launch updates on WhatsApp as well.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#f5c842] text-[#0a0f1e] font-bold rounded-xl text-base hover:bg-[#ffd700] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#f5c842]/20 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {status === "loading" ? "Submitting..." : "Request Early Access →"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or DM us on Instagram.
              </p>
            )}

            <p className="text-slate-600 text-xs text-center">
              No spam. Launch updates only. We respect your inbox.
            </p>
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-white/10 flex justify-center gap-10 text-center">
          {[
            { num: "Free", label: "Early Access" },
            { num: "CAT '2026", label: "Ready" },
            { num: "0", label: "Spam Emails" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-bold text-[#f5c842]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
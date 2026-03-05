/*
 * Design: Dark Premium Agency — About / Positioning Section
 * Light background section for visual rhythm contrast
 * Left: positioning copy, Right: expertise pillars
 */

const pillars = [
  {
    icon: "🎯",
    title: "Conversion-First Design",
    desc: "Every layout decision is driven by one goal: turning visitors into paying clients.",
  },
  {
    icon: "🏗️",
    title: "Industry Research",
    desc: "I study your niche before touching a pixel — understanding your customers, competitors, and conversion triggers.",
  },
  {
    icon: "📱",
    title: "Mobile-Optimized",
    desc: "Over 70% of your clients browse on mobile. Every site I build is flawless on every screen size.",
  },
  {
    icon: "⚡",
    title: "Built for Speed",
    desc: "Fast-loading sites rank higher and convert better. I optimize every site for Core Web Vitals.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[oklch(0.96_0.003_80)] text-[oklch(0.15_0.008_260)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="fade-up">
            <div className="section-label mb-4" style={{ color: "oklch(0.55 0.17 162)" }}>
              About & Positioning
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-[oklch(0.12_0.008_260)]">
              I Don't Build Generic Websites.{" "}
              <span style={{ color: "oklch(0.50 0.17 162)" }}>I Build Lead Machines.</span>
            </h2>
            <p className="text-lg text-[oklch(0.35_0.008_260)] leading-relaxed mb-6">
              Most web designers hand you a pretty template and call it a day. I take a different approach: I specialize in specific industries, study what makes their customers convert, and build websites that are engineered to generate real business results.
            </p>
            <p className="text-base text-[oklch(0.45_0.008_260)] leading-relaxed mb-8">
              Whether you're a law firm that needs to establish authority and capture case inquiries, a church growing its congregation, or a roofing company competing for storm-season leads — I understand your business goals, your audience's trust signals, and exactly what it takes to win online in your niche.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Church Websites", "Law Firms", "Accounting Firms", "Roofing Companies", "Home Services"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{
                    background: "oklch(0.70 0.17 162 / 0.08)",
                    borderColor: "oklch(0.70 0.17 162 / 0.25)",
                    color: "oklch(0.40 0.17 162)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="fade-up p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderColor: "oklch(0.88 0.005 260)",
                }}
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="font-bold text-base text-[oklch(0.15_0.008_260)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[oklch(0.45_0.008_260)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

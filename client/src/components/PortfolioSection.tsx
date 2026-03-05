/*
 * Design: Dark Premium Agency — Portfolio Showcase Section
 * Dark background, 3-column responsive grid
 * Each card: mockup image, niche tag, strategy description, conversion goal
 * Hover: card lifts, emerald border glow
 */

const projects = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-church-H8ZxS9FYDXDkY3bm4BCEfE.webp",
    niche: "Church",
    title: "Grace Community Church",
    palette: ["#1E3A5F", "#C9A84C", "#FAF7F2"],
    strategy:
      "Warm, welcoming design that leads first-time visitors to service times and the live stream CTA. Trust is built through member count, years of service, and a current sermon series card.",
    goal: "Grow weekly attendance and online giving by converting curious visitors into regular attendees.",
    tag: "Community & Faith",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-lawfirm-9oMbkJ5SJ2AtFASCPkkPef.webp",
    niche: "Law Firm",
    title: "Harrington & Associates Law",
    palette: ["#0A1628", "#C9A84C", "#FFFFFF"],
    strategy:
      "Authority-first design with dark navy and gold signaling premium legal expertise. Case results stats ($50M+ recovered, 98% success rate) and bar association badges eliminate doubt before the free consultation CTA.",
    goal: "Capture high-intent case inquiries and pre-qualify leads through a free case review form.",
    tag: "Legal Services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-accounting-V5SnqHxDoseDBycvheze9b.webp",
    niche: "Accounting",
    title: "Pinnacle CPA Group",
    palette: ["#0E6B6B", "#F0F4F8", "#1C1C1E"],
    strategy:
      "Clean, credibility-driven layout with professional certifications (CPA, IRS Enrolled Agent, QuickBooks ProAdvisor) prominently displayed. A 3-step 'How It Works' section reduces friction for consultation bookings.",
    goal: "Book free consultations with small business owners and individuals seeking tax strategy.",
    tag: "Financial Services",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-roofing-TRrHFRQkT3yFCxzwnZQEb2.webp",
    niche: "Roofing",
    title: "Summit Roofing Co.",
    palette: ["#1A1A1A", "#E84B2A", "#FFFFFF"],
    strategy:
      "Urgency-driven design targeting storm damage leads. Bold red-orange CTA above the fold, before/after gallery for social proof, and trust badges (Licensed, Insured, GAF Certified) eliminate objections fast.",
    goal: "Generate free estimate requests from homeowners with storm damage or aging roofs.",
    tag: "Home Improvement",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-homeservices-PXFxNXddj8KdhsKrriDSfk.webp",
    niche: "Home Services",
    title: "ProCare Home Services",
    palette: ["#1D6FE8", "#F5F5F5", "#1C1C1E"],
    strategy:
      "Friendly, trustworthy design featuring a uniformed technician to humanize the brand. Same-day service availability is the hero message. Google reviews (4.8/5 from 486+) and background-check badges build instant trust.",
    goal: "Drive service call bookings from homeowners needing HVAC, plumbing, or electrical work.",
    tag: "Blue-Collar Services",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[oklch(0.09_0.005_260)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-4">Portfolio Showcase</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Real Designs for Real Niches
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Each website is built with deep industry knowledge — the right colors, headlines, trust signals, and CTAs for that specific audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="portfolio-card glass-card rounded-2xl overflow-hidden fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Mockup image */}
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <img
                  src={project.image}
                  alt={`${project.title} website mockup`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Niche tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "oklch(0.70 0.17 162 / 0.9)",
                      color: "oklch(0.09 0.005 260)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {project.niche}
                  </span>
                </div>
                {/* Color palette dots */}
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  {project.palette.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-white/20 shadow"
                      style={{ background: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="text-xs text-white/40 font-[Space_Grotesk] uppercase tracking-widest mb-2">
                  {project.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-[oklch(0.70_0.17_162)] uppercase tracking-wide mb-1.5 font-[Space_Grotesk]">
                    Design Strategy
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{project.strategy}</p>
                </div>

                <div className="pt-4 border-t border-white/8">
                  <div className="text-xs font-semibold text-[oklch(0.70_0.17_162)] uppercase tracking-wide mb-1.5 font-[Space_Grotesk]">
                    Conversion Goal
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{project.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

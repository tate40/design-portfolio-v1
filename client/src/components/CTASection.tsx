/*
 * Design: Dark Premium Agency — CTA Section
 * Dark background with emerald gradient mesh
 * Bold closing statement + primary CTA button
 */

export default function CTASection() {
  return (
    <section id="contact" className="py-28 bg-[oklch(0.09_0.005_260)] relative overflow-hidden">
      {/* Gradient mesh blobs */}
      <div
        className="mesh-blob"
        style={{
          width: "700px",
          height: "700px",
          background: "oklch(0.70 0.17 162)",
          top: "-200px",
          right: "-200px",
          opacity: 0.12,
        }}
      />
      <div
        className="mesh-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "oklch(0.55 0.15 200)",
          bottom: "-100px",
          left: "-100px",
          opacity: 0.10,
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <div className="section-label mb-6">Ready to Grow?</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Your Next Client Is One{" "}
            <span className="text-[oklch(0.70_0.17_162)]">Great Website</span>{" "}
            Away.
          </h2>
          <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
            Stop losing leads to competitors with better websites. Let's build you a conversion machine that works 24/7 — starting with a free, no-pressure consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:hello@jdstudio.com"
              className="btn-emerald px-10 py-4 rounded-full text-base font-bold"
            >
              Start Your Project
            </a>
            <a
              href="mailto:hello@jdstudio.com?subject=Free Consultation Request"
              className="btn-ghost-white px-10 py-4 rounded-full text-base font-semibold"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm font-[Space_Grotesk]">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.70 0.17 162)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.70 0.17 162)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.70 0.17 162)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Results guaranteed
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.70 0.17 162)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Fast 2–3 week delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * Design: Dark Premium Agency — Footer
 * Minimal dark footer with logo, nav links, social icons, copyright
 */

export default function Footer() {
  const links = [
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Why Me", href: "#why" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[oklch(0.07_0.004_260)] border-t border-white/8 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.70_0.17_162)] flex items-center justify-center">
              <span className="text-[oklch(0.09_0.005_260)] font-extrabold text-sm leading-none">JD</span>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">JD Studio</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-[Space_Grotesk]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social / contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@jdstudio.com"
              className="text-sm text-white/50 hover:text-[oklch(0.70_0.17_162)] transition-colors duration-200 font-[Space_Grotesk]"
            >
              hello@jdstudio.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/6 text-center">
          <p className="text-xs text-white/30 font-[Space_Grotesk]">
            © {new Date().getFullYear()} JD Studio. All rights reserved. · Conversion-focused web design for niche businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

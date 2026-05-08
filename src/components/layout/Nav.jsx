import { useState } from 'react';
import { useScrolled } from '../../hooks/useScrolled';

const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" }
];

export function Nav() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "1rem 5rem" : "1.6rem 5rem",
        background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease"
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--gold)",
          textDecoration: "none",
          letterSpacing: "0.04em"
        }}
      >
        LG.
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "3rem",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}
        className="nav-desktop"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                transition: "color 0.3s"
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--white)",
          padding: 4
        }}
        className="hamburger"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="19" y2="7" />
              <line x1="3" y1="12" x2="19" y2="12" />
              <line x1="3" y1="17" x2="19" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "2rem"
          }}
          className="mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "var(--white)",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontFamily: "var(--serif)",
                padding: "0.9rem 0",
                borderBottom: "1px solid var(--border)"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
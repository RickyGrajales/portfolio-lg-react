import { Reveal } from '../ui/Reveal';
import { SLabel } from '../ui/SLabel';

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/RickyGrajales",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    )
  },
  {
    label: "Instagram",
    href: "",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    )
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573160976523?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20quiero%20hablar%20contigo",
    icon: (
      <>
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .04 5.36.04 12c0 2.12.56 4.2 1.62 6.03L0 24l6.17-1.61A11.94 11.94 0 0012.04 24C18.68 24 24 18.64 24 12c0-3.2-1.25-6.2-3.48-8.52z" />
        <path d="M17.5 14.2c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.47s1.08 2.87 1.23 3.07c.15.2 2.13 3.25 5.17 4.55.72.3 1.28.47 1.72.6.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </>
    )
}
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "9rem 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative circles */}
      {[600, 400, 220].map((size) => (
        <div
          key={size}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: size,
            height: size,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            opacity: 0.35,
            pointerEvents: "none"
          }}
        />
      ))}
      
      <Reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          margin: "0 auto"
        }}
      >
        <SLabel text="Contacto" center />
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.4rem,5vw,4.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "1rem"
          }}
        >
          ¿Tienes un proyecto<br />en <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>mente?</em>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "var(--muted)",
            marginBottom: "3rem"
          }}
        >
          Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. Hablemos y construyamos algo increíble juntos.
        </p>
        <a
          href="mailto:novacoresoft@gmail.com"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.8rem,4vw,3rem)",
            fontWeight: 600,
            color: "var(--white)",
            textDecoration: "none",
            display: "block",
            marginBottom: "3rem",
            transition: "color 0.3s"
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--white)")}
        >
          novacoresoft@gmail.com
        </a>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.7rem 1.5rem",
                border: "1px solid var(--border)",
                transition: "color 0.3s, border-color 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {social.icon}
              </svg>
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
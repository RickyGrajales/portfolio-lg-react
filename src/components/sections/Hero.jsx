export function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "0 5rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: 0, left: "33%", width: 1, height: "100%", background: "var(--white)" }} />
        <div style={{ position: "absolute", top: 0, right: "33%", width: 1, height: "100%", background: "var(--white)" }} />
      </div>

      <div style={{ maxWidth: 900, width: "100%", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.9s 0.3s forwards"
          }}
        >
          <div style={{ width: 50, height: 1, background: "var(--gold)" }} />
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)"
            }}
          >
            Desarrollador Web · Cali, Colombia
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3rem,9vw,9rem)",
            fontWeight: 600,
            lineHeight: 0.9,
            marginBottom: "2.5rem",
            opacity: 0,
            animation: "fadeUp 0.9s 0.5s forwards"
          }}
        >
          <span style={{ display: "block" }}>Luis</span>
          <span style={{ display: "block", fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
            Grajales
          </span>
        </h1>

        <p
          style={{
            maxWidth: 440,
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "var(--muted)",
            marginBottom: "3.5rem",
            opacity: 0,
            animation: "fadeUp 0.9s 0.7s forwards"
          }}
        >
          Construyo experiencias digitales que combinan diseño refinado con código limpio y escalable. Cada proyecto es una oportunidad de crear algo memorable.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.9s 0.9s forwards"
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              background: "var(--gold)",
              color: "#080808",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold2)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--white)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            Hablemos
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          opacity: 0,
          animation: "fadeUp 0.9s 1.3s forwards"
        }}
      >
        <div
          style={{
            width: 1,
            height: 50,
            background: "linear-gradient(to bottom, transparent, var(--gold))",
            animation: "pulseBar 2s 2s ease infinite"
          }}
        />
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--muted)",
            writingMode: "vertical-rl"
          }}
        >
          
        </span>
      </div>
    </section>
  );
}
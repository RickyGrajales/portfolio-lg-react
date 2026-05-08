import { Reveal } from '../ui/Reveal';
import { SLabel } from '../ui/SLabel';
import { SKILLS } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" style={{ padding: "9rem 5rem", background: "var(--bg2)" }}>
      <Reveal style={{ marginBottom: "4rem" }}>
        <SLabel text="Tecnologías" />
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.4rem,5vw,4.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 0
          }}
        >
          Stack que <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>domino</em>
        </h2>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: "var(--border)"
          }}
        >
          {SKILLS.map((category) => (
            <div
              key={category.cat}
              style={{
                background: "var(--bg2)",
                padding: "2.5rem",
                transition: "background 0.3s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg2)")}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem"
                }}
              >
                {category.cat}
                <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>
              {category.items.map(([name, level]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.4rem"
                  }}
                >
                  <span style={{ fontSize: "0.9rem", color: "var(--white)" }}>{name}</span>
                  <div style={{ display: "flex", gap: 5 }}>
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: dot <= level ? "var(--gold)" : "var(--border)"
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
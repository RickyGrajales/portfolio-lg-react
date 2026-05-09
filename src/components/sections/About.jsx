import { Reveal } from '../ui/Reveal';
import { SLabel } from '../ui/SLabel';
import { StatsCard } from '../ui/StatsCard';
import { STATS } from '../../data/stats';

export function About() {
    return (
        <section id="about" style={{ padding: "9rem 5rem", background: "var(--bg2)" }}>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "6rem", alignItems: "center" }}>
                <Reveal>
                    <SLabel text="Sobre mí" />
                    <h2
                        style={{
                            fontFamily: "var(--serif)",
                            fontSize: "clamp(1.4rem,3.5vw,4.8rem)",
                            fontWeight: 600,
                            lineHeight: 1.05,
                            marginBottom: "2rem"
                        }}
                    >
                        Ingeniería,<br />Automatización y <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>Productos Digitales con Impacto</em>
                    </h2>
                    <p style={{ fontSize: "1rem", lineHeight: 2, color: "var(--muted)", marginBottom: "1.4rem" }}>
                        Soy Luis Grajales, desarrollador de software enfocado en construir soluciones web, sistemas empresariales y automatizaciones que optimizan procesos y mejoran la operación de negocios.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 2, color: "var(--muted)", marginBottom: "1.4rem" }}>
                        Trabajo desde la arquitectura hasta la implementación, combinando frontend, backend, bases de datos e integraciones para transformar necesidades reales en productos digitales funcionales y escalables.
                    </p>
                    <blockquote
                        style={{
                            borderLeft: "2px solid var(--gold)",
                            paddingLeft: "2rem",
                            margin: "2.5rem 0",
                            fontFamily: "var(--serif)",
                            fontSize: "1.4rem",
                            fontStyle: "italic",
                            lineHeight: 1.5,
                            color: "var(--white)",
                            opacity: 0.9
                        }}
                    >
                       "Construir software no es solo programar; <br />es resolver problemas de forma inteligente."
                    </blockquote>
                    <a
                        href="#contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
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
                        Trabajemos juntos
                    </a>
                </Reveal>

                <Reveal delay={0.2}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)" }}>
                        {STATS.map((stat) => (
                            <StatsCard key={stat.l} stat={stat} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
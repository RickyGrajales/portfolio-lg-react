import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { SLabel } from '../ui/SLabel';
import { ProjectItem } from '../project/ProjectItem';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" style={{ padding: "9rem 5rem", position: "relative" }}>
      <Reveal style={{ marginBottom: "4rem" }}>
        <SLabel text="Proyectos" />
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.4rem,5vw,4.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 0
          }}
        >
          Trabajo <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>seleccionado</em>
        </h2>
      </Reveal>

      <Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)" }}>
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
export function ProjectItem({ project, isHovered, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: isHovered ? "var(--bg2)" : "var(--bg)",
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        alignItems: "center",
        gap: "3rem",
        padding: isHovered ? "2.8rem 3.8rem" : "2.8rem 3rem",
        transition: "background 0.3s, padding 0.4s",
        cursor: "default",
        position: "relative",
        overflow: "hidden"
      }}
      className="project-item"
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: isHovered ? 3 : 0,
          background: "var(--gold)",
          transition: "width 0.4s ease"
        }}
      />
      <span
        style={{
          fontFamily: "var(--serif)",
          fontSize: "0.8rem",
          color: "var(--gold)",
          letterSpacing: "0.2em",
          opacity: 0.7
        }}
      >
        {project.num}
      </span>
      <div>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "1.6rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: isHovered ? "var(--gold)" : "var(--white)",
            transition: "color 0.3s"
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: "0.88rem",
            color: "var(--muted)",
            lineHeight: 1.6,
            maxWidth: 500
          }}
        >
          {project.desc}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          justifyContent: "flex-end"
        }}
        className="project-tags"
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.3rem 0.9rem",
              border: `1px solid ${isHovered ? "rgba(201,168,76,0.3)" : "var(--border)"}`,
              color: isHovered ? "var(--gold)" : "var(--muted)",
              transition: "all 0.3s"
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
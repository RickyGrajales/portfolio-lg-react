import { useState } from 'react';

export function StatsCard({ stat }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "var(--bg2)",
        padding: "2.5rem 2rem",
        transition: "background 0.3s",
        ...(isHovered && { background: "var(--bg3)" })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "var(--gold)",
          lineHeight: 1
        }}
      >
        {stat.n}
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginTop: "0.4rem"
        }}
      >
        {stat.l}
      </div>
    </div>
  );
}
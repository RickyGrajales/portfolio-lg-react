export function SLabel({ text, center = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.8rem",
        justifyContent: center ? "center" : "flex-start"
      }}
    >
      <div
        style={{
          width: 40,
          height: 1,
          background: "var(--gold)",
          flexShrink: 0
        }}
      />
      <span
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--gold)",
          whiteSpace: "nowrap"
        }}
      >
        {text}
      </span>
      {center && (
        <div
          style={{
            width: 40,
            height: 1,
            background: "var(--gold)",
            flexShrink: 0
          }}
        />
      )}
    </div>
  );
}
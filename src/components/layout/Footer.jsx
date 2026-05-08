export function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 5rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.78rem",
        color: "var(--muted)",
        flexWrap: "wrap",
        gap: "0.8rem"
      }}
    >
      <span>© 2025 Luis Grajales. Todos los derechos reservados.</span>
      <span>Diseñado & Desarrollado con ♥ en Cali, Colombia</span>
    </footer>
  );
}
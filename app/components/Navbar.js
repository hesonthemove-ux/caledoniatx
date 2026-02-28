export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1f2937"
      }}
    >
      <div style={{ fontWeight: "600", letterSpacing: "1px" }}>
        CALEDONIA TX
      </div>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="/">Home</a>
        <a href="/carriage">Carriage</a>
        <a href="/infrastructure">Infrastructure</a>
        <a href="/compliance">Compliance</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

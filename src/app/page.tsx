export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 48px", borderBottom: "1px solid #eeeeee", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "#111111" }}>
          Roof Repair Chicago <span style={{ color: "#e63946" }}>NOW</span>
        </div>
        <nav style={{ display: "flex", gap: "32px" }}>
          <span style={{ color: "#666666", fontSize: "15px", fontWeight: 500 }}>Home</span>
          <span style={{ color: "#666666", fontSize: "15px", fontWeight: 500 }}>About</span>
          <span style={{ color: "#666666", fontSize: "15px", fontWeight: 500 }}>How we rank</span>
          <span style={{ color: "#666666", fontSize: "15px", fontWeight: 500 }}>Top 10</span>
          <span style={{ color: "#666666", fontSize: "15px", fontWeight: 500 }}>Contact</span>
        </nav>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ background: "#e63946", color: "#ffffff", padding: "60px 80px", borderRadius: "16px", textAlign: "center", maxWidth: "640px", width: "100%", boxShadow: "0 20px 60px rgba(230, 57, 70, 0.25)" }}>
          <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2, margin: "0 0 16px 0" }}>
            Site under construction
          </h1>
          <p style={{ fontSize: "20px", fontWeight: 400, opacity: 0.95, margin: 0 }}>
            Coming soon.
          </p>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "24px", color: "#999999", fontSize: "14px", borderTop: "1px solid #eeeeee" }}>
        © Roof Repair Chicago NOW
      </footer>
    </div>
  );
}

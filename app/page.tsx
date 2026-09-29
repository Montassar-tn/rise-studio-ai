import React from "react";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif", padding: "40px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Header */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "24px", marginBottom: "60px" }}>
          <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px" }}>RISE®</div>
          <nav style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
            <span style={{ color: "#888", cursor: "pointer" }}>Work</span>
            <span style={{ color: "#888", cursor: "pointer" }}>Services</span>
            <span style={{ color: "#888", cursor: "pointer" }}>About</span>
            <span style={{ color: "#fff", cursor: "pointer" }}>Start a project ↗</span>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{ marginBottom: "100px" }}>
          <p style={{ color: "#888", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
            Independent creative studio · Tunisia / Worldwide
          </p>
          <h1 style={{ fontSize: "56px", fontWeight: "300", lineHeight: "1.1", margin: "0 0 24px 0" }}>
            Ideas <br />
            <span style={{ fontStyle: "italic", fontFamily: "serif" }}>with direction.</span>
          </h1>
          <p style={{ color: "#aaa", fontSize: "18px", maxWidth: "600px", lineHeight: "1.6" }}>
            Strategy, identity and digital experiences for brands ready to move forward.
          </p>
        </section>

        {/* Studio Section */}
        <section style={{ borderTop: "1px solid #222", paddingTop: "40px", marginBottom: "80px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "40px" }}>
          <div style={{ color: "#888", fontSize: "14px" }}>/ 00 — Studio</div>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "normal", marginBottom: "16px", lineHeight: "1.4" }}>
              We turn ambitious ideas into clear, distinctive brand experiences.
            </h2>
            <p style={{ color: "#888", lineHeight: "1.6" }}>
              Rise Studio combines strategic thinking with precise visual design — creating identities, campaigns and digital experiences with purpose.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section style={{ borderTop: "1px solid #222", paddingTop: "40px", marginBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
            <span style={{ color: "#888", fontSize: "14px" }}>/ 01 — Selected work</span>
            <span style={{ color: "#666", fontSize: "14px" }}>A growing archive</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid #1a1a1a" }}>
              <div>
                <span style={{ color: "#666", fontSize: "12px", marginRight: "16px" }}>01</span>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>Identity / Digital</span>
              </div>
              <span style={{ color: "#888", fontSize: "14px" }}>Selected project ↗</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid #1a1a1a" }}>
              <div>
                <span style={{ color: "#666", fontSize: "12px", marginRight: "16px" }}>02</span>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>Campaign / Direction</span>
              </div>
              <span style={{ color: "#888", fontSize: "14px" }}>Selected project ↗</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: "1px solid #1a1a1a" }}>
              <div>
                <span style={{ color: "#666", fontSize: "12px", marginRight: "16px" }}>03</span>
                <span style={{ fontSize: "18px", fontWeight: "500" }}>Brand System / Print</span>
              </div>
              <span style={{ color: "#888", fontSize: "14px" }}>Selected project ↗</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ borderTop: "1px solid #222", paddingTop: "40px", marginBottom: "80px" }}>
          <div style={{ color: "#888", fontSize: "14px", marginBottom: "40px" }}>/ 02 — Services</div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "30px" }}>
            <div style={{ borderLeft: "1px solid #222", paddingLeft: "16px" }}>
              <span style={{ color: "#666", fontSize: "12px" }}>01</span>
              <h3 style={{ fontSize: "16px", margin: "8px 0" }}>Brand Strategy</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.5" }}>Positioning, direction and systems built around the idea.</p>
            </div>

            <div style={{ borderLeft: "1px solid #222", paddingLeft: "16px" }}>
              <span style={{ color: "#666", fontSize: "12px" }}>02</span>
              <h3 style={{ fontSize: "16px", margin: "8px 0" }}>Branding</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.5" }}>Visual identities with clarity, character and longevity.</p>
            </div>

            <div style={{ borderLeft: "1px solid #222", paddingLeft: "16px" }}>
              <span style={{ color: "#666", fontSize: "12px" }}>03</span>
              <h3 style={{ fontSize: "16px", margin: "8px 0" }}>Digital Design</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.5" }}>Digital experiences designed to feel considered at every level.</p>
            </div>

            <div style={{ borderLeft: "1px solid #222", paddingLeft: "16px" }}>
              <span style={{ color: "#666", fontSize: "12px" }}>04</span>
              <h3 style={{ fontSize: "16px", margin: "8px 0" }}>Campaigns</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.5" }}>Creative concepts that turn a message into a memorable presence.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #222", paddingTop: "40px", color: "#666", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
          <div>© {new Date().getFullYear()} RISE STUDIO. All rights reserved.</div>
          <div>Tunis / Worldwide</div>
        </footer>

      </div>
    </main>
  );
}

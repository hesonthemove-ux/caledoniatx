export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Caledonia TX
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px" }}>
          Independent digital multiplex ownership and transmission
          infrastructure supporting broadcast carriage across the United Kingdom.
        </p>
      </section>

      {/* Carriage */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Multiplex Capacity & Carriage</h2>
        <p style={{ maxWidth: "700px" }}>
          Provision of digital multiplex capacity for licensed broadcasters,
          platform operators, and content providers requiring reliable
          terrestrial transmission infrastructure.
        </p>
      </section>

      {/* Infrastructure */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Transmission Infrastructure</h2>
        <p style={{ maxWidth: "700px" }}>
          Ownership and operation of transmission assets including site
          management, signal distribution, and engineering oversight.
          Infrastructure designed for long-term resilience and technical compliance.
        </p>
      </section>

      {/* Compliance */}
      <section style={{ marginBottom: "50px" }}>
        <h2>Regulatory & Technical Compliance</h2>
        <p style={{ maxWidth: "700px" }}>
          Operations aligned with UK broadcast regulatory frameworks,
          maintaining technical standards required for licensed multiplex services.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Commercial Enquiries</h2>
        <p>
          For carriage discussions or infrastructure partnerships:
        </p>
        <p style={{ fontWeight: "bold" }}>
          info@caledoniatx.co.uk
        </p>
      </section>

    </main>
  )
}
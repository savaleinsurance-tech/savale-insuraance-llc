// pages/index.js
export default function Home() {
  const brand = "SaVale Insurance";
  const phone = "+13053108197";
  const whatsapp = "https://wa.me/13053108197";
  const email = "mailto:contacto@savale.com";

  // Estilos rápidos y limpios (sin dependencias)
  const wrap = { fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#0f172a" };
  const container = { maxWidth: 1120, margin: "0 auto", padding: "0 20px" };
  const h2 = { fontSize: 34, margin: "0 0 8px", color: "#0b3b7e" };
  const p = { fontSize: 17, lineHeight: 1.6, color: "#334155", margin: "0" };
  const btn = (bg) => ({
    background: bg, color: "#fff", borderRadius: 14, padding: "12px 18px",
    textDecoration: "none", display: "inline-block", fontWeight: 600
  });
  const card = { border: "1px solid #e5e7eb", borderRadius: 16, padding: 20, background: "#fff" };

  return (
    <main style={wrap}>
      {/* Barra superior */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "#ffffffea", backdropFilter: "saturate(150%) blur(6px)", borderBottom: "1px solid #eef2f7" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", gap: 16, height: 64 }}>
          <div style={{ fontWeight: 800, color: "#0b3b7e", letterSpacing: 0.3, fontSize: 20 }}>{brand}</div>
          <nav style={{ marginLeft: "auto", display: "flex", gap: 18, fontSize: 15 }}>
            <a href="#nosotros" style={{ color: "#0f172a", textDecoration: "none" }}>Nosotros</a>
            <a href="#servicios" style={{ color: "#0f172a", textDecoration: "none" }}>Servicios</a>
            <a href="#beneficios" style={{ color: "#0f172a", textDecoration: "none" }}>Beneficios</a>
            <a href="#testimonios" style={{ color: "#0f172a", textDecoration: "none" }}>Testimonios</a>
            <a href="#faq" style={{ color: "#0f172a", textDecoration: "none" }}>FAQ</a>
            <a href="#contacto" style={{ color: "#0f172a", textDecoration: "none" }}>Contacto</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" style={btn("#16a34a")}>WhatsApp</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0b3b7e 0%,#0ea5e9 100%)", color: "#fff" }}>
        <div style={{ ...container, padding: "64px 20px 56px" }}>
          <h1 style={{ fontSize: 44, margin: "0 0 10px", lineHeight: 1.15 }}>
            Protección inteligente para lo que <span style={{ color: "#a7f3d0" }}>más valoras</span>.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 760, opacity: 0.95 }}>
            En {brand} te acompañamos con coberturas claras y asesoría honesta: Auto, Hogar, Vida, Salud y Empresarial.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <a href="#contacto" style={btn("#22c55e")}>Solicitar cotización</a>
            <a href={email} style={btn("#f43f5e")}>Cotizar por Email</a>
          </div>
          <div style={{ marginTop: 16, fontSize: 14, opacity: 0.9 }}>
            Tel: <a href={`tel:${phone}`} style={{ color: "#fff" }}>{phone}</a>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" style={{ background: "#fff" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={h2}>Nosotros</h2>
          <p style={{ ...p, maxWidth: 900 }}>
            Somos un equipo independiente con enfoque humano. Escuchamos tus necesidades,
            comparamos opciones con aseguradoras confiables y te proponemos planes a tu medida,
            sin letra pequeña. Nuestro objetivo es que entiendas tu póliza y te sientas tranquila(o)
            en cada decisión.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ background: "#f8fafc" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={h2}>Servicios</h2>
          <p style={{ ...p, marginBottom: 18 }}>Coberturas claras, flexibles y competitivas.</p>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", color: "#0b3b7e" }}>Auto</h3>
              <p style={p}>Daños, robo y responsabilidad civil. Asistencia vial 24/7.</p>
            </div>
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", color: "#0b3b7e" }}>Hogar</h3>
              <p style={p}>Tu vivienda y pertenencias protegidas contra imprevistos.</p>
            </div>
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", color: "#0b3b7e" }}>Vida</h3>
              <p style={p}>Respaldo económico para tu familia y tranquilidad a futuro.</p>
            </div>
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", color: "#0b3b7e" }}>Salud</h3>
              <p style={p}>Acceso a consultas, urgencias y bienestar preventivo.</p>
            </div>
            <div style={card}>
              <h3 style={{ margin: "0 0 6px", color: "#0b3b7e" }}>Empresarial</h3>
              <p style={p}>Soluciones para PYMES: activos, RC, empleados y más.</p>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <a href="#contacto" style={btn("#0ea5e9")}>Quiero una propuesta</a>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" style={{ background: "#fff" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={h2}>Beneficios de elegir {brand}</h2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            <div style={card}>
              <strong>Asesoría honesta</strong>
              <p style={{ ...p, marginTop: 6 }}>Explicamos todo en simple, para que elijas con confianza.</p>
            </div>
            <div style={card}>
              <strong>Planes a medida</strong>
              <p style={{ ...p, marginTop: 6 }}>Ajustamos coberturas y deducibles a tu presupuesto.</p>
            </div>
            <div style={card}>
              <strong>Acompañamiento real</strong>
              <p style={{ ...p, marginTop: 6 }}>Estamos contigo antes, durante y después de contratar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" style={{ background: "#f8fafc" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={h2}>Testimonios</h2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            <div style={card}>
              <p style={{ ...p, fontStyle: "italic" }}>
                “Me explicaron todo paso a paso y lograron bajarme el costo del auto sin perder coberturas.”
              </p>
              <div style={{ marginTop: 8, fontWeight: 600 }}>Carolina M.</div>
            </div>
            <div style={card}>
              <p style={{ ...p, fontStyle: "italic" }}>
                “Excelente atención. Cuando tuve un incidente en casa, me guiaron para usar la póliza sin estrés.”
              </p>
              <div style={{ marginTop: 8, fontWeight: 600 }}>Luis A.</div>
            </div>
            <div style={card}>
              <p style={{ ...p, fontStyle: "italic" }}>
                “Para mi empresa, me armaron un paquete completo con RC y salud para el equipo. Muy recomendados.”
              </p>
              <div style={{ marginTop: 8, fontWeight: 600 }}>Andrea R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#fff" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={h2}>Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={card}>
              <strong>¿Trabajan con varias aseguradoras?</strong>
              <p style={{ ...p, marginTop: 6 }}>Sí. Comparamos opciones para conseguir la mejor relación cobertura–precio.</p>
            </div>
            <div style={card}>
              <strong>¿Cuánto tarda una cotización?</strong>
              <p style={{ ...p, marginTop: 6 }}>Generalmente entre 24 y 48 horas hábiles según el tipo de póliza.</p>
            </div>
            <div style={card}>
              <strong>¿Pueden asesorarme por WhatsApp?</strong>
              <p style={{ ...p, marginTop: 6 }}>Claro. Escríbenos cuando quieras y avanzamos paso a paso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ background: "#0b3b7e", color: "#fff" }}>
        <div style={{ ...container, padding: "56px 20px" }}>
          <h2 style={{ ...h2, color: "#fff" }}>Contacto</h2>
          <p style={{ fontSize: 17, opacity: 0.95, margin: "0 0 16px" }}>
            Cuéntanos qué necesitas y en breve te preparamos una propuesta.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={whatsapp} target="_blank" rel="noreferrer" style={btn("#22c55e")}>Hablar por WhatsApp</a>
            <a href={email} style={btn("#f97316")}>Escribir por Email</a>
            <a href={`tel:${phone}`} style={btn("#0ea5e9")}>Llamar {phone}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a2540", color: "#cbd5e1" }}>
        <div style={{ ...container, padding: "18px 20px", fontSize: 14, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <div>© {new Date().getFullYear()} {brand}. Todos los derechos reservados.</div>
          <div style={{ marginLeft: "auto" }}>
            <a href="#nosotros" style={{ color: "#cbd5e1", textDecoration: "none", marginRight: 12 }}>Nosotros</a>
            <a href="#servicios" style={{ color: "#cbd5e1", textDecoration: "none", marginRight: 12 }}>Servicios</a>
            <a href="#contacto" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

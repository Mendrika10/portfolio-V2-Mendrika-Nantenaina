export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      <div className="container">
        <p className="text-uppercase text-info letter-spacing mb-2" style={{ letterSpacing: "4px", fontSize: "0.9rem" }}>
          Bonjour, je suis
        </p>
        <h1 className="display-2 fw-bold mb-3">
          Nante
        </h1>
        <h2 className="fs-3 fw-light mb-4 text-secondary">
          Développeur Web Full Stack
        </h2>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          Je conçois et développe des applications web modernes, performantes et accessibles.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-info btn-lg px-4">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg px-4">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

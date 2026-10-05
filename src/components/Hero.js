import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2400&q=85"
          alt=""
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-frame">
        <div className="hero-main">
          <div className="hero-brand-row reveal">
            <img
              className="hero-logo"
              src={`${process.env.PUBLIC_URL}/logoroyal.png`}
              alt=""
            />
            <p className="hero-brand">Royal Express LLC</p>
          </div>

          <h1 className="reveal reveal-delay-1">
            Land transport &amp; dispatch that keep freight moving.
          </h1>

          <div className="hero-bottom reveal reveal-delay-2">
            <p className="hero-sub">
              Carrier-backed coverage with responsive dispatch — built for
              shippers who need clean communication and reliable miles.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get a Free Quote
              </Link>
              <Link className="btn btn-ghost" to="/services">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

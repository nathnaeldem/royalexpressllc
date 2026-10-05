import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";

function Home() {
  return (
    <>
      <Hero />
      <InfoBar />

      <section className="section about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80"
              alt="Semi truck on an open highway at dusk"
            />
            <div className="about-stats">
              <div>
                <strong>24/7</strong>
                <span>Dispatch readiness</span>
              </div>
              <div>
                <strong>MD</strong>
                <span>Based carrier ops</span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-label">About Us</p>
            <h2 className="section-title">A carrier built around clear miles</h2>
            <p className="section-lead">
              Royal Express LLC moves freight with land transport capacity and
              hands-on dispatch. We keep shippers and partners updated from
              pickup through delivery — without the runaround.
            </p>
            <ul className="about-points">
              <li>Asset-minded carrier operations out of Silver Spring, MD</li>
              <li>Dispatch that stays close to every assigned load</li>
              <li>Straightforward communication for brokers and shippers</li>
            </ul>
            <Link className="btn btn-dark" to="/about">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="services-head">
            <p className="section-label">Our Services</p>
            <h2 className="section-title">What we haul and how we run it</h2>
            <p className="section-lead">
              Two focused offerings: dependable over-the-road transport and
              dispatch coordination that keeps trucks productive.
            </p>
          </div>

          <div className="services-list">
            <article className="service-row">
              <div className="service-media">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                  alt="Freight warehouse and truck loading"
                />
              </div>
              <div className="service-copy">
                <h3>Land Transport</h3>
                <p>
                  Over-the-road hauling for freight that needs to move with care
                  — regional or longer lanes, with clear ETAs and accountable
                  handoffs.
                </p>
                <Link className="text-link" to="/services">
                  Explore transport
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="service-row">
              <div className="service-media">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80"
                  alt="Logistics planning and dispatch coordination"
                />
              </div>
              <div className="service-copy">
                <h3>Dispatching</h3>
                <p>
                  Dedicated dispatch that covers loads, updates drivers, and
                  keeps delivery windows on track when plans change on the road.
                </p>
                <Link className="text-link" to="/services">
                  Explore dispatch
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section why-us">
        <div className="why-us-shell">
          <div className="why-us-media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=80"
              alt=""
            />
          </div>
          <div className="why-us-panel">
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">Modern, safe &amp; trusted carrier service</h2>
            <p className="section-lead">
              From first call to final delivery, we keep communication clear and
              operations tight — capacity you can verify and people who pick up
              the phone.
            </p>
            <ul className="why-list">
              <li>Responsive dispatch when freight can&apos;t wait</li>
              <li>Competitive rates with straightforward pricing talks</li>
              <li>Coverage tailored to your lanes and timelines</li>
            </ul>
            <Link className="btn btn-primary" to="/why-us">
              See Why Partners Choose Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-label">Ready to move</p>
            <h2 className="section-title">Need capacity or a dispatch desk?</h2>
            <p className="section-lead">
              Share the lane, equipment, and timing — we&apos;ll come back with
              clear next steps.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

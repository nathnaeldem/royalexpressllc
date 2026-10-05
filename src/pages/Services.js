import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const landPoints = [
  "Regional and over-the-road land hauls",
  "Clear pickup and delivery window coordination",
  "Careful freight handling from dock to destination",
  "Status updates that shippers and brokers can act on",
];

const dispatchPoints = [
  "Load assignment and driver communication",
  "Coverage planning when freight or weather shifts",
  "Check-calls and transit visibility for partners",
  "Quick escalation when a load needs attention",
];

function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Land transport and dispatch — done with focus."
        text="We keep the service menu tight on purpose. Capacity and coordination are where Royal Express delivers the most value."
      />

      <section className="section services">
        <div className="container services-list">
          <article className="service-row" id="land-transport">
            <div className="service-media">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Land transport freight operations"
              />
            </div>
            <div className="service-copy">
              <p className="section-label">Core service</p>
              <h2 className="section-title">Land Transport</h2>
              <p className="section-lead">
                Royal Express provides over-the-road trucking for freight that
                needs dependable transit. Whether the lane is regional or longer
                haul, we focus on on-time pickups, protected cargo, and clean
                delivery handoffs.
              </p>
              <ul className="about-points">
                {landPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn btn-dark" to="/contact">
                Request Transport Coverage
              </Link>
            </div>
          </article>

          <article className="service-row" id="dispatching">
            <div className="service-media">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1400&q=80"
                alt="Dispatch coordination desk"
              />
            </div>
            <div className="service-copy">
              <p className="section-label">Core service</p>
              <h2 className="section-title">Dispatching</h2>
              <p className="section-lead">
                Strong carriers win on dispatch. Our desk keeps drivers informed,
                loads covered, and partners updated — the same approach top
                Midwest and national carriers use to protect on-time performance.
              </p>
              <ul className="about-points">
                {dispatchPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn btn-dark" to="/contact">
                Talk to Dispatch
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="values-head">
            <p className="section-label">How quoting works</p>
            <h2 className="section-title">Simple process. Clear answers.</h2>
          </div>
          <div className="values-grid">
            <article className="value-item">
              <span className="value-index">01</span>
              <h3>Share the load</h3>
              <p>
                Origin, destination, equipment needs, commodity notes, and
                preferred pickup window.
              </p>
            </article>
            <article className="value-item">
              <span className="value-index">02</span>
              <h3>We confirm coverage</h3>
              <p>
                Dispatch reviews capacity and timing, then comes back with a
                practical rate and transit plan.
              </p>
            </article>
            <article className="value-item">
              <span className="value-index">03</span>
              <h3>We stay on it</h3>
              <p>
                Once booked, you get updates through transit — and a direct line
                if anything changes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-label">Need a lane covered</p>
            <h2 className="section-title">Get a quote for your next shipment</h2>
            <p className="section-lead">
              Competitive rates, volume-friendly conversations, and custom
              options when your freight needs a tailored plan.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;

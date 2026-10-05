import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const reasons = [
  {
    title: "Dispatch that actually owns the load",
    text: "We don’t disappear after the tender. Our desk tracks appointments, driver status, and exceptions so partners hear news before they have to chase it.",
  },
  {
    title: "Carrier mindset, not middleman noise",
    text: "As a carrier company, we think in capacity, miles, and delivery windows. That keeps conversations practical and commitments realistic.",
  },
  {
    title: "Transparent rate conversations",
    text: "Flexible pricing, clear breakdowns, and volume options when lanes grow. No surprise fees buried in the fine print.",
  },
  {
    title: "Safety and freight care",
    text: "Secure handling across every stage — assignment, pickup, transit, and delivery. Cargo integrity is part of on-time performance.",
  },
  {
    title: "Ready when freight can’t wait",
    text: "Round-the-clock support for time-sensitive issues. Call the team that knows the load, not a generic after-hours inbox.",
  },
  {
    title: "Partnership over one-off hauls",
    text: "We aim for repeat lanes and trusted broker relationships — the same model used by carriers that scale on consistency, not luck.",
  },
];

function WhyUs() {
  return (
    <>
      <PageHero
        label="Why Royal Express"
        title="Capacity you can trust. Communication you can use."
        text="Shippers and brokers choose carriers that answer the phone, protect freight, and show up when the appointment matters."
      />

      <section className="section">
        <div className="container content-split">
          <div>
            <p className="section-label">The difference</p>
            <h2 className="section-title">What partners notice first</h2>
            <p className="section-lead">
              Across successful trucking brands — from regional OTR carriers to
              national fleets — the pattern is the same: clear ops, safe miles,
              and people who stay accountable. That is how Royal Express runs.
            </p>
          </div>
          <div className="about-copy">
            <ul className="about-points">
              <li>Direct dispatch line: (682) 407-3621</li>
              <li>Silver Spring, MD based operations</li>
              <li>Land transport + dispatch under one team</li>
              <li>Quote turnaround built for active freight desks</li>
            </ul>
            <Link className="btn btn-dark" to="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="values-head">
            <p className="section-label">Reasons teams stay</p>
            <h2 className="section-title">Built for brokers, shippers, and busy lanes</h2>
          </div>
          <div className="reasons-grid">
            {reasons.map((item, index) => (
              <article key={item.title} className="reason-item">
                <span className="value-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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
            <p className="section-label">Ready when you are</p>
            <h2 className="section-title">Put us on your next lane</h2>
            <p className="section-lead">
              Share origin, destination, equipment, and timing. We&apos;ll
              confirm coverage options and keep the process clean from tender to
              delivery.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Request Coverage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;

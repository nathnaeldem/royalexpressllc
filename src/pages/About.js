import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const values = [
  {
    title: "Accountability on every load",
    text: "We treat each shipment like it has a name attached — because for our customers, it does. Updates are proactive, not buried.",
  },
  {
    title: "Safety before shortcuts",
    text: "Hours, equipment readiness, and careful handling come first. Getting there on time only counts if the freight arrives intact.",
  },
  {
    title: "People who answer",
    text: "Shippers and partners work with a real dispatch desk — not a ticket queue that goes quiet after the tender.",
  },
];

function About() {
  return (
    <>
      <PageHero
        label="About Royal Express"
        title="A carrier focused on land transport and real dispatch."
        text="Based in Silver Spring, Maryland, Royal Express LLC partners with shippers and brokers who want dependable capacity and clear communication."
      />

      <section className="section about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80"
              alt="Highway trucking operations"
            />
          </div>
          <div className="about-copy">
            <p className="section-label">Who we are</p>
            <h2 className="section-title">Built for reliable over-the-road freight</h2>
            <p className="section-lead">
              Royal Express LLC is a carrier company. We move freight by land and
              run dispatch that stays close to the load — so pickup windows,
              transit updates, and delivery expectations stay aligned.
            </p>
            <p className="section-lead">
              Like the strongest regional carriers in the market, we keep the
              model simple: cover the freight we commit to, communicate early
              when plans change, and treat brokers and shippers as long-term
              partners — not one-off tenders.
            </p>
            <ul className="about-points">
              <li>Headquarters in Silver Spring, MD</li>
              <li>Core services: land transport &amp; dispatching</li>
              <li>Operations support available around the clock</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="values-head">
            <p className="section-label">How we operate</p>
            <h2 className="section-title">Standards that hold up under pressure</h2>
          </div>
          <div className="values-grid">
            {values.map((item, index) => (
              <article key={item.title} className="value-item">
                <span className="value-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-split">
          <div>
            <p className="section-label">Working hours</p>
            <h2 className="section-title">When you can reach us</h2>
            <p className="section-lead">
              Our team supports freight movement throughout the week. For urgent
              load issues, call dispatch directly.
            </p>
          </div>
          <ul className="hours-list">
            <li>
              <span>Monday – Friday</span>
              <strong>08:00 – 18:00</strong>
            </li>
            <li>
              <span>Saturday</span>
              <strong>09:00 – 18:00</strong>
            </li>
            <li>
              <span>Sunday</span>
              <strong>08:00 – 18:00</strong>
            </li>
            <li>
              <span>Dispatch line</span>
              <strong>
                <a href="tel:6824073621">(682) 407-3621</a>
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-label">Let&apos;s talk freight</p>
            <h2 className="section-title">Want to set up with Royal Express?</h2>
            <p className="section-lead">
              Tell us about your lanes and equipment needs — we&apos;ll respond
              with clear capacity options.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;

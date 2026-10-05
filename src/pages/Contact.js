import { useState } from "react";
import PageHero from "../components/PageHero";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "Land Transport",
  origin: "",
  destination: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm(initial);
  };

  return (
    <>
      <PageHero
        label="Contact / Get a Quote"
        title="Tell us about the freight. We’ll take it from there."
        text="Reach dispatch for urgent coverage, or send a quote request with lane details and timing."
      />

      <section className="section contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Dispatch &amp; quoting desk</h2>
            <p className="section-lead">
              Royal Express LLC is here to assist with land transport capacity
              and dispatch support. Include pickup/drop cities, equipment needs,
              and appointment notes for the fastest response.
            </p>

            <div className="contact-details">
              <a href="tel:6824073621">
                <span>Phone / Dispatch</span>
                <strong>(682) 407-3621</strong>
              </a>
              <a href="mailto:team@royalexpressllc.com">
                <span>Email</span>
                <strong>team@royalexpressllc.com</strong>
              </a>
              <div>
                <span>Address</span>
                <strong>11603 Le Baron Ter, Silver Spring, MD 20902</strong>
              </div>
              <div>
                <span>Hours</span>
                <strong>Mon–Sun · 8:00 AM – 6:00 PM</strong>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} id="quote">
            <h3>Request a quote</h3>
            {sent ? (
              <p className="form-success" role="status">
                Thanks — we received your request and will follow up shortly.
              </p>
            ) : null}

            <div className="form-row">
              <label>
                Full name
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Company
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  placeholder="Broker / shipper"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="(000) 000-0000"
                />
              </label>
            </div>

            <label>
              Type of service
              <select name="service" value={form.service} onChange={onChange}>
                <option>Land Transport</option>
                <option>Dispatching</option>
                <option>Both</option>
              </select>
            </label>

            <div className="form-row">
              <label>
                Origin
                <input
                  name="origin"
                  value={form.origin}
                  onChange={onChange}
                  placeholder="City, ST"
                />
              </label>
              <label>
                Destination
                <input
                  name="destination"
                  value={form.destination}
                  onChange={onChange}
                  placeholder="City, ST"
                />
              </label>
            </div>

            <label>
              Load details
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows="4"
                placeholder="Equipment, commodity, weight, pickup date, special notes..."
                required
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

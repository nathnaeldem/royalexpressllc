import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="nav-logo"
            src={`${process.env.PUBLIC_URL}/logoroyal.png`}
            alt=""
          />
          <div>
            <strong>Royal Express LLC</strong>
            <p>
              Reliable land transport and dispatching for shippers who need a
              carrier they can count on.
            </p>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/why-us">Why Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Quick Contact</h4>
          <ul className="footer-contact">
            <li>11603 Le Baron Ter, Silver Spring, MD 20902</li>
            <li>
              <a href="tel:6824073621">(682) 407-3621</a>
            </li>
            <li>
              <a href="mailto:team@royalexpressllc.com">
                team@royalexpressllc.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Royal Express LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

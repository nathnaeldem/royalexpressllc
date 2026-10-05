import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell container">
        <Link to="/" className="nav-brand" onClick={close}>
          <img
            className="nav-logo"
            src={`${process.env.PUBLIC_URL}/logoroyal.png`}
            alt=""
          />
          <span className="nav-brand-text">
            <strong>Royal Express</strong>
            <small>LLC · Carriers</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={close}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn-primary nav-cta-mobile" to="/contact" onClick={close}>
            Get a Quote
          </Link>
        </nav>

        <Link className="btn btn-primary nav-cta" to="/contact">
          Get a Quote
        </Link>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

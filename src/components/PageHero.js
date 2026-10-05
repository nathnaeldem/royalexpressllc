function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="page-hero-scrim" />
      </div>
      <div className="container page-hero-content">
        {label ? <p className="section-label">{label}</p> : null}
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}
      </div>
    </section>
  );
}

export default PageHero;

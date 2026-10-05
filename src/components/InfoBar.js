function InfoBar() {
  return (
    <section className="info-bar" aria-label="Company quick facts">
      <div className="container info-bar-grid">
        <article>
          <span>Location</span>
          <strong>11603 Le Baron Ter, Silver Spring, MD 20902</strong>
        </article>
        <article>
          <span>Opening Hours</span>
          <strong>Mon–Sun · 8:00 AM – 6:00 PM</strong>
        </article>
        <article>
          <span>Dispatch Line</span>
          <strong>
            <a href="tel:6824073621">(682) 407-3621</a>
          </strong>
        </article>
      </div>
    </section>
  );
}

export default InfoBar;

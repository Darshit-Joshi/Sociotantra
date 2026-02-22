import "./About.css";
function About() {
  return (
    <div className="about-page">
      {/* HERO / INTRO */}
      <section className="about-hero">
        <h1>About Sociotantra Global Foundation</h1>
        <p>
          Sociotantra Global Foundation is a non-profit organization committed
          to building an inclusive, aware, and empowered society. Based in
          India, we work closely with communities at the grassroots level to
          address gaps in healthcare, education, skills, and mental well-being.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Sociotantra Global Foundation was founded with a clear vision — to
          create meaningful social impact by addressing real problems faced by
          marginalized and underprivileged communities. What began as a small
          initiative has grown into a collective effort driven by compassion,
          responsibility, and a deep belief in human dignity.
        </p>
        <p>
          We work directly with individuals and families who lack access to
          essential resources, offering support in healthcare assistance,
          education, skill development, and emotional well-being. Our approach
          focuses on long-term empowerment rather than short-term relief.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower underprivileged communities through accessible
            healthcare, education, skill development, awareness programs, and
            mental health support — enabling individuals to lead healthier,
            dignified, and self-reliant lives.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            A society where every individual, regardless of background or
            economic status, has equal opportunities, dignity, and access to
            essential resources for personal and professional growth.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li>
            <strong>Compassion</strong> – We approach every individual with
            care, empathy, and respect.
          </li>
          <li>
            <strong>Equality</strong> – We believe in equal opportunities and
            non-discrimination in all our efforts.
          </li>
          <li>
            <strong>Transparency</strong> – We ensure honesty and accountability
            in our work and use of resources.
          </li>
          <li>
            <strong>Community Development</strong> – We focus on sustainable
            growth by strengthening communities from within.
          </li>
          <li>
            <strong>Empowerment</strong> – We aim to enable individuals to
            become independent, confident, and self-sufficient.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;

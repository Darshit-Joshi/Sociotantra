import { useState } from "react";
import "./About.css";

function About() {
  const images = [
    "/src/assets/image4.jpeg",
    "/src/assets/image5.jpeg",
    "/src/assets/image6.jpeg",
    "/src/assets/image7.jpeg",
    "/src/assets/image8.jpeg",
    "/src/assets/image9.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About Sociotantra Global Foundation</h1>
        <p>
          Sociotantra Global Foundation is a non-profit organization committed
          to building an inclusive, aware, and empowered society across India.
        </p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded with a clear vision to address real challenges faced by
          marginalized communities, Sociotantra Global Foundation focuses on
          long-term empowerment rather than short-term relief.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower underprivileged communities through healthcare,
            education, skill development, awareness, and mental well-being.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            A society where everyone has equal access to opportunities, dignity,
            and essential resources.
          </p>
        </div>
      </section>

      {/* GALLERY SLIDER */}
      <section className="about-section gallery-section">
        <h2>Moments From Our Work</h2>

        <div className="gallery-slider">
          <button className="nav-btn" onClick={prevSlide}>
            ‹
          </button>

          <img
            src={images[current]}
            alt="NGO activity"
            className="gallery-image"
          />

          <button className="nav-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li>
            <strong>Compassion</strong> – Care and empathy in action.
          </li>
          <li>
            <strong>Equality</strong> – Equal opportunity for all.
          </li>
          <li>
            <strong>Transparency</strong> – Accountability in everything.
          </li>
          <li>
            <strong>Community</strong> – Growth from within.
          </li>
          <li>
            <strong>Empowerment</strong> – Independence and dignity.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;

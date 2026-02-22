import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  // What we do section data
  const whatWeDo = [
    {
      title: "Skill Development & Women Empowerment",
      desc: "We provide free vocational training, skill-building programs, and personalized counseling to empower youth and women with confidence, employability, and self-reliance.",
      url: "src/assets/image7.jpeg",
    },
    {
      title: "Healthcare & Medical Support",
      desc: "We support underprivileged individuals with medical treatment assistance, emergency healthcare, and access to essential medicines and diagnostics.",
      url: "src/assets/image8.jpeg",
    },
    {
      title: "Community Awareness & Health Camps",
      desc: "We conduct awareness programs and free health camps focused on education, preventive healthcare, safety, and critical social issues.",
      url: "src/assets/image9.jpeg",
    },
  ];

  // Impact stats
  const impactData = [
    {
      value: "1000+",
      title: "Beneficiaries Trained",
      desc: "Individuals empowered through free skill training, workshops, and guidance programs.",
      rotate: "-4deg",
    },
    {
      value: "200+",
      title: "Counselling Sessions",
      desc: "One-on-one and group counselling sessions providing emotional, mental, and career support.",
      rotate: "3deg",
    },
    {
      value: "50+",
      title: "Awareness Camps Conducted",
      desc: "Community outreach programs focused on education, health awareness, and social issues.",
      rotate: "-2deg",
    },
    {
      value: "50+",
      title: "Active Volunteers",
      desc: "Dedicated volunteers contributing time, skills, and expertise to drive social impact.",
      rotate: "4deg",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rekha Patil",
      role: "Patient's Family Member",
      message:
        "When we had lost all hope, Sociotantra stepped in and helped us with medical expenses.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
    {
      name: "Dr. Amit Kulkarni",
      role: "Volunteer Doctor",
      message:
        "Being associated with Sociotantra allows me to serve people who truly need medical care.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    },
    {
      name: "Suresh Jadhav",
      role: "Community Volunteer",
      message:
        "Small contributions make a huge difference when managed transparently.",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Empowering Communities <br />
            Through Free Training & Counseling
          </h1>

          <p>
            Supporting underprivileged individuals with skill development,
            emotional counseling, and awareness programs to build a stronger
            society.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Donate Now</button>
            <button className="btn secondary">Volunteer With Us</button>
            <button className="btn outline">Get Help</button>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          Sociotantra Global Foundation is a non-profit organization dedicated
          to uplifting underprivileged communities through free training
          programs, counseling support, and awareness camps. We believe every
          individual deserves equal opportunities to grow, learn, and succeed
        </p>
        <NavLink to="/about">Learn More About Us</NavLink>
      </section>

      {/* What we do */}
      <section className="what">
        {whatWeDo.map((item) => (
          <div className="work-card" key={item.title}>
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why support matters */}
      <section className="why">
        <h3>Why Your Support Matters</h3>
        {/* TODO: Replace placeholder image */}
        {/* <img src="/images/why-support.jpg" alt="Why support matters" /> */}
        <p>
          Rising healthcare costs often force people to abandon life-saving
          care. Your support helps bridge this gap.
        </p>
      </section>

      {/* Impact section */}
      <section className="impact">
        <h3>Our Impact So Far</h3>
        <span>
          Every contribution helps us move closer to accessible healthcare.
        </span>

        <div className="impact-container">
          {impactData.map((item) => (
            <div
              className="impact-card"
              key={item.title}
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <h2>{item.value}</h2>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial">
        <h3>What People Say About Us</h3>
        <span>Real stories from lives touched</span>

        <div className="testimonial-container">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <p>“{item.message}”</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <small>{item.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donate CTA */}
      <section className="donate">
        <div className="donate-content">
          <h3>Help Save Lives</h3>
          <p>
            Your donation provides medical treatment and financial assistance.
          </p>
          <span>100% transparency • Healthcare only</span>
        </div>

        <div className="donate-box">
          <h4>Choose an Amount</h4>

          <div className="donate-amounts">
            <button>₹500</button>
            <button>₹1,000</button>
            <button>₹2,500</button>
            <button>₹5,000</button>
          </div>

          <button className="donate-main-btn">Donate Now</button>
          <small>Secure payments • UPI • Cards</small>
        </div>
      </section>
    </div>
  );
}

export default Home;

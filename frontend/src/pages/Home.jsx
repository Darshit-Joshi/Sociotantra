import { NavLink } from "react-router-dom";
import "./Home.css";
import Slider from "../components/Home/slider";
function Home() {
  const whatWeDo = [
    {
      head: "Medical Treatment Support",
      desc: "We provide financial assistance for surgeries, hospital admissions, and long-term medical treatments for individuals who cannot afford essential healthcare.",
      url: "/images/medical-treatment.jpg",
    },
    {
      head: "Emergency Healthcare",
      desc: "We offer immediate support during critical medical emergencies where timely treatment can save lives.",
      url: "/images/emergency-care.jpg",
    },
    {
      head: "Medicines & Diagnostics",
      desc: "We help patients access essential medicines, diagnostic tests, and follow-up care without financial burden.",
      url: "/images/medicines-diagnostics.jpg",
    },
    {
      head: "Health Camps & Awareness",
      desc: "We organize free medical camps and healthcare awareness programs to promote preventive care in communities.",
      url: "/images/health-camp.jpg",
    },
  ];
  const impactData = [
    {
      value: "150+",
      title: "Patients Supported",
      desc: "Individuals who received medical or financial assistance.",
      rotate: "-4deg",
    },
    {
      value: "₹5,00,000+",
      title: "Medical Aid Provided",
      desc: "Funds used for treatments, medicines, and diagnostics.",
      rotate: "3deg",
    },
    {
      value: "12+",
      title: "Health Camps Conducted",
      desc: "Free medical checkups and awareness programs.",
      rotate: "-2deg",
    },
    {
      value: "40+",
      title: "Volunteers Engaged",
      desc: "People contributing time and skills.",
      rotate: "4deg",
    },
  ];
  const testimonials = [
    {
      name: "Rekha Patil",
      role: "Patient's Family Member",
      message:
        "When we had lost all hope, Sociotantra stepped in and helped us with medical expenses. Their support came at the most critical time of our lives.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
    {
      name: "Dr. Amit Kulkarni",
      role: "Volunteer Doctor",
      message:
        "Being associated with Sociotantra allows me to serve people who truly need medical care but cannot afford it. The transparency and dedication here are commendable.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    },
    {
      name: "Suresh Jadhav",
      role: "Community Volunteer",
      message:
        "I've seen firsthand how even small contributions make a huge difference. Sociotantra ensures help reaches the right hands at the right time.",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
  ];

  return (
    <div>
      <Slider />
      <div className="about">
        <h2>Who We Are</h2>
        <p>
          We are a healthcare-focused non-profit organization based in Thane,
          Maharashtra, working to provide medical and financial assistance to
          individuals who cannot afford essential treatment.
        </p>
        <NavLink to={"/"}>Learn More About Us</NavLink>
      </div>
      <div className="what">
        {whatWeDo.map((item, index) => (
          <div className="work-card" key={index}>
            <img src={item.url} alt={item.head} />
            <h3>{item.head}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="why">
        <h3>Why Your Support Matters</h3>
        <img src="#" />
        <p>
          For many families, medical expenses mean choosing between treatment
          and survival. Rising healthcare costs often force people to delay or
          abandon life-saving care. Your support helps bridge this gap by
          ensuring timely medical assistance for those who need it most.
        </p>
      </div>
      <div className="impact">
        <h3>Our Impact So Far</h3>
        <span>
          Every contribution helps us move closer to accessible healthcare for
          all.
        </span>
        <div className="impact-container">
          {impactData.map((item, index) => (
            <div
              className="impact-card"
              key={index}
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <h2 className="impact-value">{item.value}</h2>
              <h4 className="impact-title">{item.title}</h4>
              <p className="impact-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial">
        <h3>What People Say About Us</h3>
        <span>Real stories from lives touched by Sociotantra</span>

        <div className="testimonial-container">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-message">“{item.message}”</p>

              <div className="testimonial-user">
                <img
                  src={item.image}
                  alt={item.name}
                  height={"200px"}
                  width={"200px"}
                />
                <div>
                  <h4>{item.name}</h4>
                  <small>{item.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="donate">
        <div className="donate-content">
          <h3>Help Save Lives, One Contribution at a Time</h3>
          <p>
            Your donation helps provide medical treatment, medicines, and
            financial assistance to individuals who cannot afford healthcare.
            Every contribution, big or small, makes a real difference.
          </p>
          <span>
            100% transparency • Funds used strictly for healthcare support
          </span>
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

          <small>Secure payments • UPI • Cards • Net Banking</small>
        </div>
      </div>
    </div>
  );
}
export default Home;

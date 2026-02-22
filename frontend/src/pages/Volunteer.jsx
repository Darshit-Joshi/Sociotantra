import "./Volunteer.css";

function Volunteer() {
  return (
    <div className="volunteer-page">
      {/* HERO */}
      <section className="volunteer-hero">
        <h1>Volunteer With Sociotantra</h1>
        <p>
          Become a part of meaningful change. Your time, skills, and compassion
          can help bring healthcare, education, and hope to communities that
          need it the most.
        </p>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="volunteer-why">
        <h2>Why Volunteer With Us?</h2>
        <ul>
          <li>Work directly at the grassroots level and see real impact</li>
          <li>
            Support healthcare, education, and social awareness initiatives
          </li>
          <li>Gain hands-on experience in social and community work</li>
          <li>Join a purpose-driven and compassionate team</li>
        </ul>
      </section>

      {/* VOLUNTEER ROLES */}
      <section className="volunteer-roles">
        <h2>Volunteer Opportunities</h2>
        <p>
          We welcome volunteers from diverse backgrounds. You can contribute
          based on your interests, skills, and availability.
        </p>

        <div className="roles-list">
          <span>Healthcare Support & Community Outreach</span>
          <span>Fundraising & Donation Drives</span>
          <span>Awareness & Social Programs</span>
          <span>Content, Media & Social Outreach</span>
          <span>Event Planning & Coordination</span>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="volunteer-form-section">
        <h2>Join as a Volunteer</h2>
        <p>
          Fill in the details below and our team will get in touch with you.
        </p>

        <form className="volunteer-form">
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" required />

          <input type="text" placeholder="City" required />

          <select required>
            <option value="">Area of Interest</option>
            <option>Healthcare Support</option>
            <option>Fundraising</option>
            <option>Awareness Campaigns</option>
            <option>Content & Media</option>
            <option>Event Management</option>
          </select>

          <select required>
            <option value="">Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Flexible</option>
          </select>

          <textarea
            rows="4"
            placeholder="Why do you want to volunteer? (optional)"
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>

        <p className="privacy-note">
          We respect your privacy. Your information will only be used to contact
          you regarding volunteering opportunities.
        </p>
      </section>
    </div>
  );
}

export default Volunteer;

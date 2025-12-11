
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-text">
          <h1>About <span>Study Zone</span></h1>
          <p>Your one-stop platform for centralized board exam preparation. We bring all NCERT and previous year board exam questions with step-by-step solutions to help students study smarter and score higher.</p>
        </div>
      </section>
      <section className="mission">
        <h2>🎯 Our Mission</h2>
        <p>To make exam preparation easier by providing a centralized hub for all study materials, board questions, and their solutions — accessible to every student, anytime, anywhere.</p>
      </section>
      <section className="vision">
        <h2>🌟 Our Vision</h2>
        <p>To empower students with knowledge and confidence through an innovative, technology-driven platform that simplifies board exam learning.</p>
      </section>
      <section className="team">
        <h2>👩‍💻 Meet Our Team</h2>
        <div className="team-container">
          <div className="team-card">
            <Image src="/logo/nitish.logo.png" alt="Team member" width={100} height={100} />
            <h3>Nitish Yadav</h3>
            <p>Project Lead</p>
          </div>
          <div className="team-card">
            <Image src="/logo/3135789.png" alt="Team member" width={100} height={100} />
            <h3>Paridhi</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <Image src="/logo/3135789.png" alt="Team member" width={100} height={100} />
            <h3>Niharika</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>📬 Contact Us</h2>
        <p>Have suggestions or need help? Reach out to our team anytime.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

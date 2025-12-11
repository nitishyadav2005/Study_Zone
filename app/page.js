
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Centralized Study Material for Board Exams</h1>
          <p>Access chapter-wise NCERT and previous board exam questions with step-by-step solutions.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search your topic or question..." />
            <button>Search</button>
          </div>
        </div>
      </section>
      <section className="subjects">
        <h2>Explore Subjects</h2>
        <div className="subject-container">
          <div className="subject-card">
            <h3>Mathematics</h3>
            <p>Formulas, concepts & solved board questions.</p>
          </div>
          <div className="subject-card">
            <h3>Science</h3>
            <p>Physics, Chemistry & Biology topic solutions.</p>
          </div>
          <div className="subject-card">
            <h3>English</h3>
            <p>Grammar, comprehension & literature answers.</p>
          </div>
          <div className="subject-card">
            <h3>Social Studies</h3>
            <p>History, Geography, Civics & Economics.</p>
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Why Study Zone?</h2>
        <div className="feature-container">
          <div className="feature-card">
            <h4>📚 Comprehensive</h4>
            <p>All board subjects covered in one platform.</p>
          </div>
          <div className="feature-card">
            <h4>⚡ Smart Search</h4>
            <p>Find questions & answers instantly.</p>
          </div>
          <div className="feature-card">
            <h4>💬 Interactive</h4>
            <p>Comment & request more solutions easily.</p>
          </div>
        </div>
      </section>
    </>
  );
}

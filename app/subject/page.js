
export default function SubjectPage() {
  return (
    <>
      <section className="subjects-hero">
        <h1>Explore Subjects</h1>
        <p>Select your subject to access NCERT and previous board exam questions with detailed solutions.</p>
        <div className="filter-bar">
          <select>
            <option>All Classes</option>
            <option>Class 10</option>
            <option>Class 12</option>
          </select>
          <select>
            <option>All Streams</option>
            <option>Science</option>
            <option>Commerce</option>
            <option>Arts</option>
          </select>
          <button>Apply Filters</button>
        </div>
      </section>
      <section className="subjects-grid">
        <div className="subject-box math">
          <h3>Mathematics</h3>
          <p>Formulas, concepts & solved board problems.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box physics">
          <h3>Physics</h3>
          <p>Important derivations, diagrams, and numericals.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box chemistry">
          <h3>Chemistry</h3>
          <p>Equations, theory, and previous year board questions.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box biology">
          <h3>Biology</h3>
          <p>Diagrams, definitions & detailed NCERT explanations.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box english">
          <h3>English</h3>
          <p>Grammar, comprehension, literature & writing skills.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box economics">
          <h3>Economics</h3>
          <p>Important terms, graphs, and exam-style questions.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box history">
          <h3>History</h3>
          <p>Chapter summaries, important events, and dates.</p>
          <a href="#">View Questions →</a>
        </div>
        <div className="subject-box geography">
          <h3>Geography</h3>
          <p>Maps, concepts & short answers from NCERT.</p>
          <a href="#">View Questions →</a>
        </div>
      </section>
    </>
  );
}

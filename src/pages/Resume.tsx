const Resume = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section__header">
          <h1>Resume</h1>
          <p>Download my resume versions tailored for data and Python roles.</p>
        </div>
        <div className="stack">
          <a className="button button--primary" href="/resumes/Manasa_DataAnalyticsEngineer_Python.pdf">
            Data Analytics Engineer (Python)
          </a>
          <a className="button button--ghost" href="/resumes/Manasa_Software_Python_AWS.pdf">
            Software / Python / AWS
          </a>
        </div>
        <p className="muted">
          Place your PDF files in <code>public/resumes</code> using the exact
          filenames above.
        </p>
      </section>
    </div>
  );
};

export default Resume;

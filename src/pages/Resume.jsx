import { Button, ListGroup } from "react-bootstrap";
import resume from "../assets/resume.pdf";
<asset></asset>

function Resume() {
  return (
    <div>
      <section className="resume-section">
        <div className="container">
          <h2>My Resume</h2>
          <p>Welcome to my resume page. Here you will find details about my work experience, education, and skills.</p>

          <a href="/resume.pdf" download>
            <button className="download-button">Download My Resume</button>
          </a>

        </div>
      </section>
    </div>
  );
};

export default Resume;

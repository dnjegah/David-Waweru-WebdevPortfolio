import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="resume-section">
          <div className="container">
            <h2>My Resume</h2>
            <p>Welcome to my resume page. Here you will find details about my work experience, education, and skills.</p>
  
            <a href="/resume.pdf" download>
              <button className="download-button">Download My Resume</button>
            </a>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', description: 'Description for project 1' },
  { title: 'Project 2', description: 'Description for project 2' },
  
];

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>My Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profilePic from "../assets/Dave.jpg";

function About() {
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome to My Portfolio</h2>
                <img src={profilePic} alt="Profile" style={{ width: '100px', borderRadius: '30%' }} />
                Add more content here
            </main>
            <Footer />
        </div>
    );
};

export default About;


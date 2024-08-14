import profilePic from "../assets/Dave.jpg";

function About() {
    return (
        <div>
        
                <h2>Welcome to My Portfolio</h2>
                <img src={profilePic} alt="Profile" style={{ position: 'relative', width: '200px', borderRadius: '30%' }} />

                <h3>About Me</h3>
                <p>Hi, I’m David Waweru, a web developer with a unique background in supply chain management and logistics. My journey began in the world of operations and logistics, where I honed my problem-solving skills and attention to detail. Transitioning into web development has allowed me to merge these skills with my passion for technology and design.

                    With experience in creating responsive, user-friendly websites, I bring a blend of analytical thinking and creative problem-solving to every project. Whether it’s optimizing a supply chain process or developing a seamless web interface, I thrive on tackling complex challenges and delivering effective solutions.

                    Let’s connect and see how I can help bring your digital vision to life!</p>

            
        </div>
    );
};

export default About;




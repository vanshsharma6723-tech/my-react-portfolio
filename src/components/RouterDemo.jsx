import { useState } from "react";
import "./RouterDemo.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./RouterDemo.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";


function Home() {
    return (
        <div className="hero">

            {/* HERO SECTION */}
            <section className="home-hero">
                <p className="tagline">B.SC IT GRADUATE · WEB DEVELOPER</p>

                <h1>
                    Hi, I'm <span>Vansh Sharma.</span>
                </h1>

                <h2>Turning ideas into digital experiences.</h2>

                <p>
                    I enjoy creating websites, exploring new technologies,
                    and building digital experiences that are simple and useful.
                </p>

                <Link to="/about">
                    <button>Discover My Story ↗</button>
                </Link>

                <Link to="/contact">
                    <button>Let's Connect ↗</button>
                </Link>
            </section>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button>View Resume ↗</button>
            </a>

            {/* PROJECTS SECTION */}
            <section className="home-section">
                <p className="tagline">WHAT I'VE BEEN WORKING ON</p>

                <h2>My Projects<span>.</span></h2>

                <div className="project-card">
                    <h3>01. Personal Portfolio</h3>
                    <p>A personal website built using React and CSS.</p>
                </div>

                <div className="project-card">
                    <h3>02. CRUD Application</h3>
                    <p>A React app that fetches and manages user data through an API.</p>
                </div>

                <div className="project-card">
                    <h3>03. Netflix Clone</h3>
                    <p>A frontend project inspired by Netflix's website design.</p>
                </div>
            </section>


            {/* ABOUT PREVIEW */}
            <section className="home-section">
                <p className="tagline">A LITTLE ABOUT ME</p>

                <h2>Who Am I<span>.</span></h2>

                <p>
                    I'm Vansh Sharma, a B.Sc IT graduate from
                    Shri Guru Ram Rai University, Dehradun.
                    I'm passionate about web development and
                    creating useful digital experiences.
                </p>

                <Link to="/about">
                    <button>Read More About Me ↗</button>
                </Link>
            </section>


            {/* SKILLS PREVIEW */}
            <section className="home-section">
                <p className="tagline">WHAT I WORK WITH</p>

                <h2>My Skills<span>.</span></h2>

                <div className="skill-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Java</span>
                    <span>Python</span>
                    <span>SQL</span>
                </div>

                <Link to="/about">
                    <button>Explore My Skills ↗</button>
                </Link>
            </section>


            {/* CONTACT PREVIEW */}
            <section className="home-section home-contact">
                <p className="tagline">HAVE A PROJECT IN MIND?</p>

                <h2>Let's Work Together<span>.</span></h2>

                <p>
                    Have an idea or looking for a developer?
                    Feel free to get in touch. I'd love to hear from you.
                </p>

                <Link to="/contact">
                    <button>Contact Me ↗</button>
                </Link>
            </section>

        </div>
    );
}


function About() {
    return (
        <div className="about-section">
            <p className="tagline">A LITTLE ABOUT ME</p>

            <h1>Who Am I<span>.</span></h1>

            <p>
                Hey! I'm Vansh Sharma, a B.Sc IT graduate from
                Shri Guru Ram Rai University, Dehradun.
            </p>

            <p>
                I enjoy learning web development, exploring new
                technologies, and building projects that solve
                real problems. I'm working towards becoming a
                skilled and confident developer.
            </p>

            <h2>Education</h2>

            <div className="project-card">
                <h3>Bachelor of Science in Information Technology</h3>
                <p>Shri Guru Ram Rai University, Dehradun</p>
            </div>

            <h2>Tech Stack</h2>

            <div className="skill-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Java</span>
                <span>Python</span>
                <span>SQL</span>
            </div>

            <h2>My Goal</h2>

            <p>
                To create meaningful digital experiences and grow
                as a web developer by learning, building, and improving.
            </p>

            <Link to="/contact">
                <button>Let's Connect ↗</button>
            </Link>
        </div>
    );
}


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Thanks for reaching out!");

        console.log(formData);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="contact-section">
            <p className="tagline">HAVE A PROJECT IN MIND?</p>

            <h1>Let's Talk<span>.</span></h1>

            <p>
                Looking for a developer or want to discuss an idea?
                I'd love to hear from you.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>

                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Your Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send Message ↗</button>
            </form>

            <p className="contact-note">
                Let's build something meaningful together.
            </p>
        </div>
    );
}


function RouterDemo() {
    return (
        <div>
            <header className="navbar">
                <Link to="/" className="logo">
                    Vansh<span>.</span>
                </Link>

                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-nav-btn"
                    >
                        View Resume ↗
                    </a>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <footer className="footer">
                <p>© 2026 Vansh Sharma. Built with React.</p>
            </footer>
        </div>
    );
}

export default RouterDemo;
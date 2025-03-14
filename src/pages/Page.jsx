import { Github, Mail, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Port() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className={`sticky top-0 z-50 w-full bg-black py-4 md:py-6 px-4 flex justify-between items-center ${scrolled ? 'border-gray-800' : 'border-transparent'} transition-all duration-300`}>
                <h1 className="text-xl md:text-2xl font-bold">Sahil Sasane</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="" className="hover:text-gray-300 transition-colors" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-gray-300 transition-colors">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-300 transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-300 transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black z-40 pt-20 px-4 flex flex-col md:hidden">
                    <ul className="flex flex-col space-y-6 items-center text-lg">
                        <li>
                            <a href="#intro" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <main className="container mx-auto px-4">
                {/* Intro Section */}
                <section id="intro" className="py-16 md:py-20 flex flex-col items-center justify-center min-h-[80vh]">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">Sahil Sasane</h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6 md:mb-8">Full Stack AI/ML Developer</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex justify-center items-center space-x-3 md:space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/sahil-sasane/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black"
                                >
                                    <LinkedIn fontSize={window.innerWidth < 768 ? "medium" : "large"} />
                                </a>
                                <a
                                    href="https://github.com/sahilsasane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black"
                                >
                                    <GitHub fontSize={window.innerWidth < 768 ? "medium" : "large"} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black"
                                >
                                    <Twitter fontSize={window.innerWidth < 768 ? "medium" : "large"} />
                                </a>
                            </div>
                            <div className="bg-white p-3 md:p-4 rounded-2xl">
                                <a
                                    href="https://drive.google.com/file/d/1tEOc8mOWUl0zCAPI4QYK5QcBmmCoLTEu/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex hover:scale-110 duration-350 transform transition-transform cursor-pointer z-10"
                                >
                                    <img src="/cv.png" alt="CV" className="h-8 md:h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-16 md:py-24 lg:py-48 scroll-mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 border-b border-gray-800 pb-4">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <ExperienceCard
                            title="AI/ML Developer Intern"
                            company="Vsure Consultancy Services"
                            period="Dec 2024 – Present"
                            description="Built multi-agent systems with LangChain & LangGraph, managing 5+ agents on a FastAPI backend. *Built a WebSocket-based chat system with 1000+ messages and dynamic context updates. *Optimized backend architectures, focusing on schema design, agent structures, and context management. *Worked on AI-driven applications, specializing in backend development and agent orchestration."
                        />
                        <ExperienceCard
                            title="Full Stack Developer"
                            company="DataDriven Solutions"
                            period="2020 - 2022"
                            description="Developed web scrapers with Selenium and threading, increasing data retrieval speed by 80%. *Integrated RESTful APIs for real-time data ingestion, improving data freshness by 90%. *Optimized MySQL schema, reducing query response times by 35% and improving database performance."
                        />
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-16 md:py-24 scroll-mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 border-b border-gray-800 pb-4">About Me</h2>
                    <div className="bg-gray-900 p-4 md:p-8 rounded-lg">
                        <p className="text-base md:text-lg leading-relaxed">
                            I'm a passionate Full Stack AI/ML Developer with over 5 years of experience building intelligent
                            applications that solve real-world problems. My journey in technology began with a deep curiosity about
                            how machines can learn and make decisions, which led me to pursue a degree in Computer Science with a
                            specialization in Artificial Intelligence.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed mt-4">
                            Throughout my career, I've worked across the entire stack, from designing intuitive user interfaces with
                            React and Next.js to implementing complex backend systems with Python, Node.js, and various ML frameworks
                            like TensorFlow and PyTorch. I'm particularly interested in the intersection of web technologies and
                            machine learning, creating applications that not only look good but also leverage the power of AI to
                            provide unique value.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed mt-4">
                            My expertise includes natural language processing, computer vision, predictive analytics, and
                            recommendation systems. I'm also experienced in data engineering, having built robust data pipelines that
                            feed ML models with clean, processed data. I believe in writing clean, maintainable code and following
                            best practices in software development.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed mt-4">
                            When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                            mentoring aspiring developers. I'm constantly learning and exploring new technologies to stay at the
                            forefront of this rapidly evolving field.
                        </p>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 md:py-24 scroll-mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 border-b border-gray-800 pb-4">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        <ProjectCard
                            title="Vayu"
                            description="A web application that uses GPT models to generate high-quality content for various purposes. Built with Next.js, Node.js, and OpenAI API."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/vayu.png"
                        />
                        <ProjectCard
                            title="Cautious Memory"
                            description="A recommendation system for an e-commerce platform. Implemented with collaborative filtering algorithms and deployed on Azure."
                            tags={["Python", "Scikit-learn", "Azure"]}
                            image=""
                        />
                        <ProjectCard
                            title="Pneumonia Detection Using GANs"
                            description="A system that analyzes in-store customer behavior using computer vision. Implemented with PyTorch, OpenCV, and deployed on AWS."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/major.png"
                        />
                        <ProjectCard
                            title="Link"
                            description="Job and Internship Portal for students."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/hackcelestial.png"
                        />
                        <ProjectCard
                            title="VyavaSahayak"
                            description="A dashboard for visualizing and analyzing real-time data streams. Built with D3.js, Socket.io, and Express."
                            tags={["/tech/express.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image=""
                        />
                        <ProjectCard
                            title="ml from scratch"
                            description="Retrieval-Augmented Generation for enhanced AI responses."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image=""
                        />
                        <ProjectCard
                            title="RAG"
                            description="Retrieval-Augmented Generation for enhanced AI responses."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/rag.png"
                        />
                        <ProjectCard
                            title="Lost & Found"
                            description="Retrieval-Augmented Generation for enhanced AI responses."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image=""
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 md:py-24 scroll-mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 border-b border-gray-800 pb-4">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-4">Get In Touch</h3>
                            <p className="text-gray-400 mb-6">
                                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3" />
                                    <span className="break-all">shsasane22@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Github className="h-5 w-5 mr-3" />
                                    <span className="break-all">github.com/sahilsasane</span>
                                </div>
                                <div className="flex items-center">
                                    <Linkedin className="h-5 w-5 mr-3" />
                                    <span className="break-all">linkedin.com/in/sahil-dev</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-6 md:py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} Sahil. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

function ExperienceCard({
    title,
    company,
    period,
    description,
}) {
    const descriptionPoints = description.split('*').filter(point => point.trim());
    return (
        <Card className="bg-gray-900 border-gray-800 text-white">
            <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg lg:text-xl">{title}</CardTitle>
                <CardDescription className="text-sm md:text-base">
                    {company} | {period}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                    {descriptionPoints.map((point, index) => (
                        <li key={index}>{point.replace(/^◦\s*/, '')}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

function ProjectCard({
    title,
    description,
    tags,
    image,
}) {
    return (
        <Card className="bg-gray-900 border-gray-800 overflow-hidden text-white h-full flex flex-col">
            <div className="h-32 sm:h-40 md:h-48 relative">
                <img
                    src={image || ""}
                    alt={title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                        e.target.src = "";
                    }}
                />
            </div>
            <CardHeader className="p-3 md:p-4">
                <CardTitle className="text-base md:text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between p-3 md:p-4 pt-0">
                <div>
                    <p className="mb-4 text-sm md:text-base">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-1 py-0.5 md:px-2 md:py-1 bg-white rounded-md text-xs md:text-sm">
                            <img src={tag} alt="" className="h-4 md:h-5" />
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


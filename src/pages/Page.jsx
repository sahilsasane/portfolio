import { Github, Mail, Linkedin, Menu, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useState, useEffect } from "react";


export default function Port() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const closeMenu = () => setMobileMenuOpen(false);

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState('', document.title, window.location.pathname);
        closeMenu();
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className={`sticky top-0 z-50 w-full bg-black py-4 md:py-6 px-4 flex justify-between items-center ${scrolled ? 'border-gray-800' : 'border-transparent'} transition-all duration-300`}>
                <h1 className="text-xl md:text-2xl font-bold">Sahil Sasane</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="hover:text-gray-300 transition-colors" onClick={(e) => {
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
                    className="md:hidden text-white focus:outline-none transition-transform duration-300 ease-in-out"
                    onClick={toggleMenu}
                >
                    {mobileMenuOpen ? <X size={24} className="rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed inset-0 bg-black z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden`}
            >
                <div className="pt-20 px-4 flex flex-col">
                    <ul className="flex flex-col space-y-6 items-center text-lg">
                        <li className={`transform transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                            }`} style={{ transitionDelay: '0ms' }}>
                            <a
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                                onClick={handleHomeClick}
                            >
                                Home
                            </a>
                        </li>
                        {['Experience', 'About', 'Projects', 'Contact'].map((item, index) => (
                            <li
                                key={item}
                                className={`transform transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-gray-300 transition-colors"
                                    onClick={closeMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <main className="container mx-auto px-4">
                {/* Intro Section */}
                <section id="intro" className="py-16 md:py-20 flex flex-col items-center justify-center h-screen">
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
                                    {isMounted && <LinkedIn fontSize={windowWidth < 768 ? "medium" : "large"} />}
                                </a>
                                <a
                                    href="https://github.com/sahilsasane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black"
                                >
                                    {isMounted && <GitHub fontSize={windowWidth < 768 ? "medium" : "large"} />}
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black"
                                >
                                    {isMounted && <Twitter fontSize={windowWidth < 768 ? "medium" : "large"} />}
                                </a>
                            </div>
                            <div className="bg-white p-3 md:p-4 rounded-2xl">
                                <a
                                    href="https://drive.google.com/file/d/1P2ZNiCE8M3cCQLZdK7bMFkfDCBBBnw9H/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex hover:scale-110 duration-350 transform transition-transform cursor-pointer z-10"
                                >
                                    <img src="/cv.png" alt="CV" className="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        {/* <ExperienceCard
                            title="ML Research Assistant"
                            company="AI Research Lab"
                            period="2018 - 2020"
                            description="Conducted research on deep learning algorithms for computer vision. Published papers on image recognition and contributed to open-source ML libraries."
                        />
                        <ExperienceCard
                            title="Software Engineer Intern"
                            company="Tech Startup"
                            period="2017 - 2018"
                            description="Developed backend services using Python and Django. Worked on data processing pipelines and implemented RESTful APIs."
                        /> */}
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">About Me</h2>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <p className="text-sm leading-relaxed  md:text-lg">
                            I’m Sahil, a final-year Computer Science engineering student specializing in AI/ML, with over a year of hands-on experience in AI, backend, and automation. My work spans multi-agent architectures, advanced AI applications, and scalable backend systems.
                        </p>
                        <p className="text-sm leading-relaxed mt-4 md:text-lg">
                            I’ve won the Google GenAI Hackathon 2024 and secured the runner-up position in the Bhashini Sprint 2024, competing with top startups. I’ve also placed in the top ranks of multiple hackathons, including HackCelestial and HackOverflow.
                        </p>
                        <p className="text-sm leading-relaxed mt-4 md:text-lg">
                            My technical expertise includes Python, C++, Golang, and JavaScript, along with frameworks like PyTorch, React.js, FastAPI, and LangChain. I’ve built AI-driven applications, including a multi-agent system using LangGraph and a Retrieval-Augmented Generation (RAG) pipeline with Llama and Qdrant.
                        </p>
                        <p className="text-sm leading-relaxed mt-4 md:text-lg">
                            Currently, I’m an AI/ML Developer Intern at Vsure Consultancy Services, working on backend architectures and agent orchestration. Previously, I was a Data Engineer Intern at Blank Analytica, optimizing data pipelines and automation workflows.
                        </p>
                    </div>
                </section>


                {/* Projects Section */}
                <section id="projects" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProjectCard
                            title="Vayu - Google GenAI Hackathon"
                            description="A mental health app for GenZ, built with Flutter and Express."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/vayu.png"
                            projectLink="https://vayu-one.vercel.app/"
                        />
                        <ProjectCard
                            title="Cautious Memory"
                            description="Go-based API project designed with a focus on clean architecture, security, and scalability."
                            tags={["/tech/go_black.svg", "/tech/postgresql.svg"]}
                            image="/golang-large.png"
                            projectLink="https://github.com/sahilsasane/cautious-memory"
                        />
                        <ProjectCard
                            title="Pneumonia Detection Using GANs"
                            description="GAN model designed to generate realistic images and binary classification."
                            tags={["/tech/python.svg", "/tech/pytorch.svg"]}
                            image="/major.png"
                            projectLink="https://github.com/sahilsasane/GAN-major"
                        />
                        <ProjectCard
                            title="Link"
                            description="Job and Internship Portal for students."
                            tags={["/tech/express.svg", "/tech/react.svg", "/tech/mongo.svg"]}
                            image="/hackcelestial.png"
                            projectLink="https://hackcelestial.vercel.app/"
                        />
                        <ProjectCard
                            title="VyavaSahayak - Bhashini Sprint"
                            description="Comprehensive platform for ecommerce presence management."
                            tags={["/tech/express.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/bhashini.jpg"
                            projectLink="https://github.com/nishaaannnt/q-star-bhashini"
                        />
                        <ProjectCard
                            title="Micrograd"
                            description="Backpropagation implementation from scratch"
                            tags={["/tech/python.svg"]}
                            image="/micrograd.png"
                            projectLink="https://github.com/sahilsasane/micrograd"
                        />
                        <ProjectCard
                            title="LLM-Based AI Agent"
                            description="Enables users to analyze statistics from CSV or Excel sheets through natural language queries."
                            tags={["/tech/python.svg", "/tech/langchain.svg", "/tech/fastapi.svg"]}
                            image="/rag.png"
                            projectLink="https://github.com/sahilsasane/llm-yolo/tree/main/Part%201"
                        />
                        <ProjectCard
                            title="Lost & Found"
                            description="Help guardians find their lost children using facial recognition."
                            tags={["/tech/python.svg", "/tech/flask.svg", "/tech/mysql.svg"]}
                            image="/lost_and_found.png"
                            projectLink="https://github.com/sahilsasane/Lost-Found"
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                            <p className="text-gray-400 mb-6">
                                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3" />
                                    <a href="">
                                        <span>shsasane22@gmail.com</span>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Github className="h-5 w-5 mr-3" />
                                    <a href="https://github.com/sahilsasane" target="_blank">
                                        <span>github.com/sahilsasane</span>
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Linkedin className="h-5 w-5 mr-3" />
                                    <a href="https://www.linkedin.com/in/sahil-sasane/" target="_blank">
                                        <span>linkedin.com/in/sahil-sasane</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm md:text-lg">© {new Date().getFullYear()} Sahil. All rights reserved.</p>
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
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {company} | {period}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                    {descriptionPoints.map((point, index) => (
                        <li className="text-sm md:text-lg" key={index}>{point.replace(/^◦\s*/, '')}</li>
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
    projectLink
}) {
    return (
        <Card className="bg-gray-900 border-gray-800 overflow-hidden text-white h-full flex flex-col">
            <div className="h-48 relative">
                <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                    <p className="mb-4 text-sm md:text-lg">{description}</p>
                </div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-lg hover:text-gray-300">
                    <div className="flex flex-wrap items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-white rounded-md text-sm">
                                    <img width={20} height={20} src={tag} alt="" />
                                </span>
                            ))}
                        </div>
                        <div className="ml-4">
                            <span className="text-white text-xl hover:text-gray-300">→</span>
                        </div>
                    </div>
                </a>
            </CardContent>
        </Card>
    )
}


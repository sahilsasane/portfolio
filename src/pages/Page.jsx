import { Github, Mail, Linkedin, Menu, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
            <header className={`sticky top-0 z-50 w-full bg-black pt-6 pb-4 md:py-6 px-4 flex justify-between items-center ${scrolled ? 'border-gray-800' : 'border-transparent'} transition-all duration-300`}>
                <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl">Sahil Sasane</h1>
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
                </div>
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

            <main className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Intro Section */}
                <section id="intro" className="py-16 md:py-20 flex flex-col items-center justify-center h-screen">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">Sahil Sasane</h1>
                        <h2 className="text-xl sm:text-2xl md:text-2xl text-gray-100 mb-6 md:mb-8">Full Stack AI/ML Developer</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex justify-center items-center space-x-3 md:space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/sahilsasane/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:text-gray-400 duration-500 transform transition-transform cursor-pointer z-10 text-white"
                                >
                                    {isMounted && "linkedin"}
                                </a>
                                <a
                                    href="https://github.com/sahilsasane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:text-gray-400 duration-500 transform transition-transform cursor-pointer z-10 text-white"
                                >
                                    {isMounted && "github"}
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:text-gray-400 duration-500 transform transition-transform cursor-pointer z-10 text-white"
                                >
                                    {isMounted && "twitter"}
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1P2ZNiCE8M3cCQLZdK7bMFkfDCBBBnw9H/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black p-3 md:p-4 rounded-2xl flex h-12 md:h-16 hover:text-gray-400 duration-500 transform transition-transform cursor-pointer z-10 text-white"
                                >
                                    resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-xl font-bold mb-5 border-b border-gray-900 pb-4">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <ExperienceCard
                            title="GenAI App Developer Intern"
                            company="The Modern Data Company"
                            period="May 2025 - Sept 2025"
                            description=""
                        />
                        <ExperienceCard
                            title="AI/ML Developer Intern"
                            company="Vsure Consultancy Services"
                            period="Dec 2024 - May 2025"
                            description=""
                        />
                        <ExperienceCard
                            title="Data Engineer Intern"
                            company="Blank Analytica"
                            period="Oct 2024 - Dec 2024"
                            description=""
                        />

                        {/* <ExperienceCard
                            title="Software Engineer Intern"
                            company="Tech Startup"
                            period="2017 - 2018"
                            description="Developed backend services using Python and Django. Worked on data processing pipelines and implemented RESTful APIs."
                        /> */}
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-xl font-bold mb-5 border-b border-gray-900 md:pb-4">About Me</h2>
                    <div className="bg-black p-8 pt-0 pb-0 rounded-lg">
                        <p className="text-sm leading-relaxed md:text-base">
                            I’m Sahil, a Computer Science graduate focused on AI/ML, backend systems, and automation. I build production-grade solutions using multi-agent architectures and scalable data workflows for both research and enterprise use cases.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-md font-semibold mb-2">Achievements</h3>
                            <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
                                <li>Winner, Google GenAI Hackathon 2024</li>
                                <li>Runner-up, Bhashini Sprint 2024 (competed against top startups)</li>
                                <li>Top 5 finalist in 4+ national-level hackathons, including HackCelestial and HackOverflow</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-md font-semibold mb-2">Technical Skills</h3>
                            <p className="text-sm md:text-base"><span className="font-medium">Languages:</span> Python, Golang, C++, JavaScript, SQL</p>
                            <p className="text-sm md:text-base"><span className="font-medium">Frameworks/Libraries:</span> FastAPI, LangGraph, PyTorch, React.js, Express.js, NumPy</p>
                            <p className="text-sm md:text-base"><span className="font-medium">Databases:</span> MongoDB, MySQL, Firebase</p>
                            <p className="text-sm md:text-base"><span className="font-medium">Cloud/DevOps:</span> AWS EC2, S3, Route 53</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-md font-semibold mb-2">Certifications</h3>
                            <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
                                <li>IBM Data Science Specialization</li>
                                <li>Deep Learning Specialization – DeepLearning.AI</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Projects Section */}
                <section id="projects" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-xl font-bold mb-5 border-b border-gray-900 pb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        <ProjectCard
                            title="Vayu - Google GenAI Hackathon"
                            description="A mental health app for GenZ, built with Flutter and Express."
                            tags={["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"]}
                            image="/vayu.png"
                            projectLink="https://vayu-one.vercel.app/"
                        />
                        <ProjectCard
                            title="Cautious Memory"
                            description="Go-based API with clean architecture, security, and scalability."
                            tags={["/tech/go_black.svg", "/tech/postgresql.svg"]}
                            image="/golang-large.png"
                            projectLink="https://github.com/sahilsasane/cautious-memory"
                        />
                        <ProjectCard
                            title="Pneumonia GAN"
                            description="GAN for realistic image generation and binary classification."
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
                            description="Platform for ecommerce presence management."
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
                            description="Analyzes CSV/Excel statistics via natural language queries."
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
                <section id="contact" className="py-5 scroll-mt-16 md:scroll-mt-20">
                    <h2 className="text-xl font-bold mb-5 border-b border-gray-900 pb-4">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-md md:text-md font-semibold mb-1">Get In Touch</h3>
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
                                    <a href="https://www.linkedin.com/in/sahilsasane/" target="_blank">
                                        <span>linkedin.com/in/sahilsasane</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black py-8">
                <div className="max-w-5xl mx-auto px-4 text-center">
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
        <Card className="bg-black border-black text-white">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {company}
                    <div className="">{period}</div>
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
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block no-underline w-full">
            <Card className="bg-black border-gray-950 overflow-hidden text-white flex flex-row h-40 hover:border-gray-900 transition-colors rounded-md" >
                {/* Image on the left */}
                <div className="w-32 md:w-48 relative">
                    <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
                </div>

                {/* Content in the middle */}
                <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm md:text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm flex-1">{description}</p>
                </div>

                {/* Tags in vertical arrangement on the right */}
                <div className="flex flex-col justify-center items-center p-4 gap-2 border-l border-gray-950">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white rounded-md">
                            <img width={20} height={20} src={tag} alt="" />
                        </span>
                    ))}
                </div>
            </Card>
        </a>
    )
}

import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function Port() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-black py-6 px-4 flex justify-between items-center border-gray-800">
                <h1 className="text-2xl font-bold">Sahil Sasane</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#intro" className="hover:text-gray-300 transition-colors">
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
            </header>

            <main className="container mx-auto px-4">
                {/* Intro Section */}
                <section id="intro" className="py-20 flex flex-col items-center justify-center min-h-[80vh]">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Sahil Sasane</h1>
                        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">Full Stack AI/ML Developer</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex justify-center items-center space-x-4">
                                <div className="bg-white p-4 rounded-2xl flex h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black">
                                    <LinkedIn
                                        href="https://www.linkedin.com/in/sahil-sasane/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=""
                                        fontSize="large"
                                    />
                                    {/* <img src="/linkedin.svg" alt="LinkedIn" /> */}
                                    {/* </Linkedin> */}
                                </div>
                                <div className="bg-white p-4 rounded-2xl flex h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black">
                                    <GitHub
                                        href="https://github.com/sahilsasane"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="justify-center items-center"
                                        fontSize="large"

                                    />
                                </div>
                                <div className="bg-white p-4 rounded-2xl flex h-16 hover:scale-110 duration-500 transform transition-transform cursor-pointer z-10 text-black">
                                    <Twitter
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=""
                                        fontSize="large"

                                    />
                                    {/* <img src="/twitter.svg" alt="Twitter" />
                                    </Twitter> */}
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl">
                                <a
                                    href="https://drive.google.com/file/d/1tEOc8mOWUl0zCAPI4QYK5QcBmmCoLTEu/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex hover:scale-110 duration-350 transform transition-transform cursor-pointer z-10"
                                >
                                    <img src="/cv.png" alt="CV" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-48">
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
                <section id="about" className="">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">About Me</h2>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <p className="text-lg leading-relaxed">
                            I'm a passionate Full Stack AI/ML Developer with over 5 years of experience building intelligent
                            applications that solve real-world problems. My journey in technology began with a deep curiosity about
                            how machines can learn and make decisions, which led me to pursue a degree in Computer Science with a
                            specialization in Artificial Intelligence.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Throughout my career, I've worked across the entire stack, from designing intuitive user interfaces with
                            React and Next.js to implementing complex backend systems with Python, Node.js, and various ML frameworks
                            like TensorFlow and PyTorch. I'm particularly interested in the intersection of web technologies and
                            machine learning, creating applications that not only look good but also leverage the power of AI to
                            provide unique value.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            My expertise includes natural language processing, computer vision, predictive analytics, and
                            recommendation systems. I'm also experienced in data engineering, having built robust data pipelines that
                            feed ML models with clean, processed data. I believe in writing clean, maintainable code and following
                            best practices in software development.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                            mentoring aspiring developers. I'm constantly learning and exploring new technologies to stay at the
                            forefront of this rapidly evolving field.
                        </p>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20">
                    <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            image="/placeholder.svg?height=200&width=400"
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
                            image="/placeholder.svg?height=200&width=400"
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
                <section id="contact" className="py-20">
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
                                    <span>shsasane22@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Github className="h-5 w-5 mr-3" />
                                    <span>github.com/sahilsasane</span>
                                </div>
                                <div className="flex items-center">
                                    <Linkedin className="h-5 w-5 mr-3" />
                                    <span>linkedin.com/in/sahil-dev</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
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
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {company} | {period}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-1">
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
            <div className="h-48 relative">
                <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                    <p className="mb-4">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white rounded-md text-sm">
                            <img src={tag} alt="" />
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


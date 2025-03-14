import React from "react"
import { Layers, Zap, BarChart, Smartphone, Cloud, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const Home = () => {
    const cards = [
        {
            title: "Vayu",
            description: "Create layouts that adapt to any screen size.",
            icon: Smartphone,
            link: "",
            image: "/vayu.png",
            svgs: ["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"],
        },
        {
            title: "Pneumonia Detection Using GANs",
            description: "Seamlessly connect with cloud services.",
            icon: Cloud,
            link: "",
            image: "/major.png",
            svgs: ["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"],
        },
        {
            title: "Link",
            description: "Job and Internship Portal for students.",
            icon: BarChart,
            link: "",
            image: "/hackcelestial.png",
            svgs: ["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"],
        },
        {
            title: "RAG based",
            description: "Retrieval-Augmented Generation for enhanced AI responses.",
            icon: Layers,
            link: "",
            image: "/rag.png",
            svgs: ["/tech/express.svg", "/tech/flutter.svg", "/tech/gemini.svg", "/tech/mongo.svg"],
        },
    ]

    return (
        <div className="min-h-screen text-white overflow-auto">
            <div className="max-w-3xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-12"
                >
                    <div className="">
                        <h1 className="text-4xl font-bold tracking-wider mb-2">Sahil Sasane</h1>
                        <p className="text-xl text-gray-300">AI/ML Enthusiast & Full-Stack Developer</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-12 flex gap-4"
                >
                    <p className="text-md text-gray-300 leading-relaxed">
                        Final-year Computer Science engineering student specializing in deep learning, AI, and full-stack
                        development. With over a year of experience in cutting-edge projects, I bring versatility across backend,
                        frontend, AI, and automation, making me a well-rounded candidate for tech-driven roles.
                    </p>
                    <div className="rounded-full w-full mr-4" >
                        <img src="/penguin.svg" className="h-full w-full"></img>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://devfolio.co/projects/vayu-2f96" className="hover:text-blue-400 transition-colors text-md font-light">
                                Google GenAI Hackathon 2024 Winner
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://bhashini.gov.in/sahyogi/startup/sprint-result"
                                className="hover:text-blue-400 transition-colors text-md font-light"
                            >
                                Bhashini Sprint '24 Runner Up (Winners)
                            </a>
                        </li>
                        <li><span className="text-md font-light">Top 5 HackCelestial 2024</span>
                        </li>
                        <li><span className="text-md font-light">Top 10 HackOverflow 2024</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Languages</h3>
                            <p className="text-gray-300 text-sm">Python, C++, JavaScript, Java, C, Dart, SQL</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Frameworks & Libraries</h3>
                            <p className="text-gray-300 text-sm">PyTorch, React.js, Express.js, NumPy, Tensorflow, scikit-learn</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Databases</h3>
                            <p className="text-gray-300 text-sm">MongoDB, MySQL, Firebase</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                            <p className="text-gray-300 text-sm">Selenium, Git, Jupyter Notebook</p>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-lg font-medium">Data Engineer Intern</h3>
                            <p className="text-gray-300">Blank Analytica</p>
                        </li>
                        <li>
                            <h3 className="text-lg font-medium">AI/ML Developer Intern</h3>
                            <p className="text-gray-300">VCS</p>
                        </li>
                    </ul>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl  font-semibold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <ProjectCard key={index} {...card} />
                        ))}
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                    <ul className="list-disc pl-6 text-gray-300">
                        <li>IBM Data Science Specialization</li>
                        <li>Deep Learning Specialization (DeepLearning.AI)</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Home


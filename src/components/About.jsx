import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-4">
                {/* Elongated introduction card */}
                <Card className="col-span-1">
                    <CardContent className="pt-6">
                        <p>Final-year Computer Science engineering student with a deep focus on AIML, backed by over a year of experience working on cutting-edge projects. Brings versatility across backend, frontend, AI, and automation, making me a well-rounded candidate for tech-driven roles.</p>
                    </CardContent>
                </Card>

                {/* Grid for the rest of the content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Key Achievements */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Key Achievements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-6">
                                <li><a className="underline underline-offset-4 hover:text-gray-400 duration-400" href="https://devfolio.co/projects/vayu-2f96">Google GenAI Hackathon 2024 Winner</a></li>
                                <li><a className="underline underline-offset-4 hover:text-gray-400 duration-400" href="https://bhashini.gov.in/sahyogi/startup/sprint-result">Bhashini Sprint '24 Runner Up (Winners)</a></li>
                                <li>Top 5 HackCelestial 2024</li>
                                <li>Top 10 HackOverflow 2024</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Technical Skills */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Technical Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p><span className="font-normal">Languages:</span> Python, C++, JavaScript, Java, C, Dart, SQL</p>
                            <p><span className="font-normal">Frameworks & Libraries:</span> PyTorch, React.js, Express.js, NumPy, Matplotlib, Tensorflow, scikit-learn</p>
                            <p><span className="font-normal">Databases:</span> MongoDB, MySQL, Firebase</p>
                            <p><span className="font-normal">Tools & Technologies:</span> Selenium, Git, Jupyter Notebook</p>
                        </CardContent>
                    </Card>

                    {/* Professional Experience */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Professional Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Data Engineer Intern - Blank Analytica</p>
                            <p>AI/ML DeveloperIntern - VCS</p>
                        </CardContent>
                    </Card>

                    {/* Certifications */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Certifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-6">
                                <li>IBM Data Science Specialization</li>
                                <li>Deep Learning Specialization (DeepLearning.AI)</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Academics */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Academics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Maintaining a strong academic track record with a CGPA of 8.54.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, BarChart, Smartphone, Cloud, Lock } from 'lucide-react'

const cards = [
    {
        title: "Vayu",
        description: "Create layouts that adapt to any screen size.",
        icon: Smartphone,
        link: "",
        image: "/public/vayu.png",
        svgs: ['/public/tech/express.svg', '/public/tech/flutter.svg', '/public/tech/gemini.svg', '/public/tech/mongo.svg']
    },
    {
        title: "Pneumonia Detection Using GANs",
        description: "Seamlessly connect with cloud services.",
        icon: Cloud,
        link: "",
        image: "/public/major.png",
        svgs: ['/public/tech/express.svg', '/public/tech/flutter.svg', '/public/tech/gemini.svg', '/public/tech/mongo.svg']

    },
    {
        title: "Link",
        description: "Job and Internship Portal.",
        icon: BarChart,
        link: "",
        image: "/public/hackcelestial.png",
        svgs: ['/public/tech/express.svg', '/public/tech/flutter.svg', '/public/tech/gemini.svg', '/public/tech/mongo.svg']

    },
    {
        title: "Modular Architecture",
        description: "Build scalable applications with reusable components.",
        icon: Layers,
        link: "",
        image: "/public/rag.png",
        svgs: ['/public/tech/express.svg', '/public/tech/flutter.svg', '/public/tech/gemini.svg', '/public/tech/mongo.svg']

    },
    {
        title: "VyavaSahayak",
        description: "Multilingual e-commerce onboarding solution for small-scale sellers.",
        icon: Lock,
        link: "",
        image: "/public/bhashini.jpg",
        svgs: ['/public/tech/express.svg', '/public/tech/flutter.svg', '/public/tech/gemini.svg', '/public/tech/mongo.svg']

    },
]

const CardGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {cards.slice(0, 3).map((card, index) => (
                    <Card key={index} className="flex flex-col">
                        <img
                            src={card.image || "/placeholder.svg"}
                            alt={card.title}
                            className="w-full h-40 object-cover"
                        />
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between gap-2">
                                <span>{card.title}</span>
                                <div className="flex gap-1">
                                    {card.svgs?.map((svg, i) => (
                                        <img
                                            key={i}
                                            src={svg}
                                            alt={`${card.title}-svg-${i}`}
                                            className="w-5 h-5"
                                            style={{ filter: "invert(100%) sepia(4%) saturate(83%) hue-rotate(184deg) brightness(115%) contrast(100%)" }}
                                        />
                                    ))}
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.slice(3).map((card, index) => (
                    <Card key={index} className="flex flex-col">
                        <img
                            src={card.image || "/placeholder.svg"}
                            alt={card.title}
                            className="w-full h-40 object-cover"
                        />
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between gap-2">
                                <span>{card.title}</span>
                                <div className="flex gap-1">
                                    {card.svgs?.map((svg, i) => (
                                        <img
                                            key={i}
                                            src={svg}
                                            alt={`${card.title}-svg-${i}`}
                                            className="w-5 h-5"
                                            style={{ filter: "invert(100%) sepia(4%) saturate(83%) hue-rotate(184deg) brightness(115%) contrast(100%)" }}
                                        />
                                    ))}
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardGrid;


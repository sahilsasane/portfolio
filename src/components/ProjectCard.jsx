import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TechIcon } from "./TechIcon"


export function ProjectCard({ title, description, icon: Icon, link, image, svgs }) {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="relative p-0 m-0">
                <img src={image || "/placeholder.svg"} className="h-48" alt={title} layout="fill" objectFit="cover" />
            </CardHeader>
            <CardContent className="pt-4 bg-black">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center pb-0">
                <div className="flex space-x-2">
                    {svgs.map((svg, index) => (
                        <TechIcon key={index} src={svg} alt={`Tech ${index + 1}`} />
                    ))}
                </div>
                <Button variant="outline">Learn More</Button>
            </CardFooter>
        </Card>
    )
}


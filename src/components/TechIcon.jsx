
export function TechIcon({ src, alt }) {
    return (
        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-white shadow-md">
            <img src={src || "/placeholder.svg"} alt={alt} layout="fill" objectFit="contain" className="p-1" />
        </div>
    )
}


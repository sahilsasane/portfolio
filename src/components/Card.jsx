import React from 'react'

const Card = ({ onClick, projectDetails }) => {
    return (
        <div
            className="bg-[url('/background.png')] text-white flex items-center justify-center p-4 w-32 h-32 rounded-md shadow-lg cursor-pointer hover:scale-x-110 hover:scale-y-95 transition-transform duration-[550ms]"
            onClick={() => onClick(projectDetails)}
        >
            <h3 className="text-lg font-semibold">{projectDetails && projectDetails.title}</h3>
            {/* Add other card content here */}
        </div>
    );
}

export default Card;    
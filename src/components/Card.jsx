import React from 'react'

const Card = ({ onClick, projectDetails }) => {
    return (
        <div
            className="bg-[url('/background.png')] text-white flex items-center justify-center p-4 w-40 h-32 shadow-lg cursor-pointer hover:scale-x-110 hover:scale-y-95 transition-transform duration-[350ms]"
            onClick={() => onClick(projectDetails)}
        >
            <h3 className="text-lg font-extralight">{projectDetails && projectDetails.title}</h3>
        </div>
    );
}

export default Card;    
import React, { useState } from 'react'
import Card from './Card';
import Modal from './Modal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectDetails = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            image: '/project1.jpg'
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            image: '/project2.jpg'
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            image: '/project3.jpg'
        },
        {
            title: 'Project 4',
            description: 'Description of Project 4',
            image: '/project4.jpg'
        }
    ];
    const handleCardClick = (projectDetails) => {
        setSelectedProject(projectDetails);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    return (
        <div className="flex bg-[url('/white.jpg')] w-[700px] h-[170px] justify-end absolute bottom-0 left-20">
            <div className='flex justify-evenly w-full items-center'>
                {projectDetails.map((project, index) => (
                    <Card
                        key={index}
                        projectDetails={project}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                projectDetails={selectedProject}
            />
        </div>
    )
}

export default Footer;
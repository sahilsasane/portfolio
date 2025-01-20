import React, { useState } from 'react'
import Card from './Card';
import Modal from './Modal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const modalPages = [
        {
            title: 'About',
            description: 'Description',
            image: '/jpg'
        },
        {
            title: 'Projects',
            description: 'Description',
            image: '/jpg'
        },
        {
            title: 'Contact',
            description: 'Description',
            image: '/jpg'
        },
    ];
    const handleCardClick = (modalPages) => {
        setSelectedProject(modalPages);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    return (
        <div className="flex bg-[url('/white.jpg')] w-[700px] h-[170px] justify-end absolute bottom-0 left-20">
            <div className='flex justify-evenly w-full items-center'>
                {modalPages.map((project, index) => (
                    <Card
                        key={index}
                        modalPages={project}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                modalPages={selectedProject}
            />
        </div>
    )
}

export default Footer;
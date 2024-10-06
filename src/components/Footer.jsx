import React, { useState } from 'react'
import Card from './Card';
import Modal from './Modal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectDetails = [
        {
            title: 'Lung Disease Classification using GAN',
            description: ['Designed an advanced GAN for lung disease classification with 5,000+ chest X-ray images.', 'Employed diverse GAN architectures like DCGAN, ACGAN and WGAN GP to improve binary imageclassification in medical datasets.', 'Applied a stacking classifier with GAN features, achieving 98.7% classification accuracy.'],
            image: '/jpg'
        },
        {
            title: 'Recommendation System ',
            description: 'Description',
            image: '/jpg'
        },
        {
            title: 'VyavaSahayak',
            description: 'Description',
            image: '/jpg'
        },
        {
            title: 'Chat Application',
            description: 'Description',
            image: '/.jpg'
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
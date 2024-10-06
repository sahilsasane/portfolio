import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ isOpen, onClose, projectDetails }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 200);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        } else {
            document.removeEventListener('keydown', handleEsc);
        }

        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen && !visible) return null;

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'modalBackgroundOpen' : 'modalBackgroundClose'}`}
                onClick={onClose}
            >
                <div
                    className={`flex justify-center items-center w-full h-full`}
                >
                    <div
                        className={`bg-gray-200 bg-opacity-95 w-[800px] rounded-sm p-6 relative ${isOpen ? 'modalContentOpen' : 'modalContentClose'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-black hover:text-gray-500 font-bold hover:scale-125 duration-[500ms]"
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </button>
                        {projectDetails &&
                            <div>
                                <h2 className="text-2xl font-light mb-4">{projectDetails.title}</h2>
                                <img src={projectDetails.image} alt={projectDetails.title} className="w-full mb-4 rounded-lg" />
                                {projectDetails.description && Array.isArray(projectDetails.description) ? (
                                    <ul className="list-disc pl-5 mb-4">
                                        {projectDetails.description.map((item, index) => (
                                            <li className='py-2' key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{projectDetails.description}</p>
                                )}

                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

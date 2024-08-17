import React, { useEffect } from 'react';

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
                        className={`bg-gray-400 w-[500px] rounded-lg p-6 relative ${isOpen ? 'modalContentOpen' : 'modalContentClose'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-700 font-bold hover:scale-125 duration-[500ms]"
                            onClick={onClose}
                        >
                            X
                        </button>
                        {projectDetails &&
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">{projectDetails.title}</h2>
                                <img src={projectDetails.image} alt={projectDetails.title} className="w-full mb-4 rounded-lg" />
                                <p>{projectDetails.description}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

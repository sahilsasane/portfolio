import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import About from './About';
import Project from './Project';

const Modal = ({ isOpen, onClose, modalPages }) => {
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
                    className={`flex justify-center items-center w-full h-[100vh]`}
                >
                    <div
                        className={`bg-[url('white.jpg')] bg-opacity-95 w-[1300px] h-full p-6 relative overflow-y-auto ${isOpen ? 'modalContentOpen' : 'modalContentClose'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-black hover:text-gray-500 font-bold hover:scale-125 duration-500"
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </button>
                        {modalPages && modalPages.title === "About" && <About />}
                        {modalPages && modalPages.title === "Projects" && <Project />}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

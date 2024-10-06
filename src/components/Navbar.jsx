import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex p-10 bg-[url('/white.jpg')] w-[450px] h-[195px] justify-end absolute right-52 ">
            <div className='flex items-center h-full w-full justify-between'>
                <a href="https://www.linkedin.com/in/sahil-sasane/" target="_blank" rel="noopener noreferrer" className='flex h-12 hover:scale-110 duration-[250ms] cursor-pointer z-10'>
                    <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://github.com/sahilsasane" target="_blank" rel="noopener noreferrer" className='flex h-12 hover:scale-110 duration-[250ms] cursor-pointer z-10'>
                    <img src="/github.svg" alt="GitHub" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='flex h-12 hover:scale-110 duration-[250ms] cursor-pointer z-10'>
                    <img src="/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://drive.google.com/file/d/1tEOc8mOWUl0zCAPI4QYK5QcBmmCoLTEu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='flex h-[70px] hover:scale-x-110 hover:scale-y-95 duration-[250ms] cursor-pointer z-10'>
                    <img src="/cv.png" alt="CV" />
                </a>
            </div>
        </nav>

    )
}

export default Navbar;

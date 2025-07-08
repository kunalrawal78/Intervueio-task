import React, { useState } from 'react'
import logo from '../img/intervuelogo.png'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mx-auto w-full shadow-sm font-sora px-10">
            <div className="flex justify-between items-center py-4">
 
                <div>
                    <img src={logo} alt="intervueLogo" className="h-8" />
                </div>


                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <FaUser className="text-base" />
                        <span>Become an Interviewer</span>
                        <span>↗</span>
                    </div>
                    <span className="cursor-pointer">Features</span>
                    <span className="cursor-pointer">Pricing</span>
                    <span className="cursor-pointer">Start a trial</span>
                

    
                <div className="hidden md:flex gap-2">
                    <button className="px-4 py-1 border border-black rounded-sm text-sm">
                        Login
                    </button>
                    <button className="px-4 py-1 bg-black text-white rounded-sm text-sm"
                        style={{ background: 'black', color: 'white' }}
                    >
                        Signup
                    </button>
                </div>
                </div>

           
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <FaTimes className="text-xl" />
                        ) : (
                            <FaBars className="text-xl" />
                        )}
                    </button>
                </div>
            </div>

           
            {isOpen && (
              <div className="md:hidden px-2 pb-4">
  <div className="flex flex-col gap-3 text-sm font-medium text-black">

    <div className="flex items-center gap-1 cursor-pointer">
      <FaUser className="text-base" />
      <span>Become an Interviewer</span>
      <span>↗</span>
    </div>

    <span className="cursor-pointer">Features</span>
    <span className="cursor-pointer">Pricing</span>
    <span className="cursor-pointer">Start a trial</span>

    
    <div className="flex flex-col gap-2 pt-4">
      <button className="px-4 py-1 border border-black rounded-sm text-sm">
        Login
      </button>
      <button
        className="px-4 py-1 rounded-sm text-sm"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Signup
      </button>
    </div>
  </div>
</div>

            )}
        </nav>

    );
};

export default NavBar;

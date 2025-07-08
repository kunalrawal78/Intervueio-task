import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logo from '../img/darklogo.png';

const Footer = () => {
    return (
        <footer className="bg-[#2A2C2F] text-white py-16 px-6 font-sora">
            <div className="max-w-7xl mx-auto " style={{ color: 'white' }}>
       
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                 
                    <div className="lg:col-span-4 flex flex-col justify-between">
                    
                        <div className="mb-10 flex justify-center md:justify-start">
                            <img src={logo} alt="Intervue" className="h-7" />
                        </div>

                   
                        <div className="hidden md:flex gap-6 text-sm mb-10">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">Linkedin</a>
                            <a href="#" className="hover:text-white">Pinterest</a>
                        </div>

                  
                        <div>
                            <h3
                                className="text-yellow-400 font-semibold text-lg mb-3"
                                style={{ color: '#FACC15' }}
                            >
                                Hire better & faster
                            </h3>

                            <div className="relative w-full max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border-b border-gray-600 py-2 pr-10 text-sm placeholder-gray-400 focus:outline-none"
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}
                                />
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                    <ArrowUpRight className="text-yellow-400 w-5 h-5" style={{ color: '#FACC15' }} />
                                </button>
                            </div>
                        </div>

                    </div>

      
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                        {[
                            {
                                title: 'Company',
                                items: ['So gehts', 'Erfahrung', 'Aligner', 'Preise', 'Standorte'],
                            },
                            {
                                title: 'Resources',
                                items: ['Blog', 'FAQ', 'Lift Media', 'Offene Stellen', 'Presse kit'],
                            },
                            {
                                title: 'Product',
                                items: ['Gratis Termin', 'Freunde einladen', 'Patienteninforma'],
                            },
                            {
                                title: 'Product',
                                items: ['Blog', 'FAQ', 'Lift Media', 'Offene Stellen', 'Presse kit'],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ color: 'gray' }}>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

        
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2023 Intervue. Crafted by great minds.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Datenschutz</a>
                        <a href="#" className="hover:text-white">Impressum</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                        <a href="#" className="hover:text-white">AGBs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import BgImg from '../../assets/img/headerbg.png';
import Logo from '../../assets/img/logohead.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative bg-cover bg-center h-screen rounded-b-2xl overflow-hidden" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative container mx-auto px-4 py-6 h-full flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="hidden md:flex space-x-4 flex justify-between items-center">
          <img src={Logo} alt="Fresh Logo" className="h-5" />
          <nav className="flex space-x-4">
          <a href="#about-us" className="text-black hover:text-lime-500 transition font-Raleway">À Propos</a>
            <a href="/products" className="text-black hover:text-lime-500 transition font-Raleway">Eleveurs</a>
            <a href="/nos-producteurs" className="text-black hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
            <a href="#contact" className="text-black hover:text-lime-500 transition font-Raleway">Contact</a>
            <a href="/blog" className="text-black hover:text-lime-500 transition font-Raleway">Blog</a>
            <a href="/login" className="text-black hover:text-lime-500 transition font-Raleway">Compte</a>
          </nav>
          <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
        </div>
        {isOpen && (
        <div className="md:hidden h-full bg-[#020F14]">
          <nav className="grid grid-rows-4">
          <a href="#about-us" className="px-4 text-white hover:text-lime-500 transition">À Propos</a>
          <a href="/products" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Eleveurs</a>
          <a href="/nos-producteurs" className="px-4 text-white hover:text-lime-500 transition font-Raleway">Nos producteurs</a>
          <a href="#contact" className="px-4 text-white hover:text-lime-500 transition">Contact</a>
          <a href="/blog" className="px-4 text-white hover:text-lime-500 transition">Blog</a>
            <a href="/login" className="px-4 text-white hover:text-lime-500 transition">Compte</a>
            <a href="/partanariat" className="bg-[#D0E608] text-black px-4 py-2 rounded-full w-64 shadow hover:bg-lime-500 transition">Faire un Partenariat</a>
          </nav>
        </div>
      )}
        {/* Main Content */}
        <div className="flex flex-col mb-20 items-start inline-block text-white mt-20 md:mt-0 mx-auto md:ml-0 md:mt-32">
          <h1 className="text-4xl font-Florensa Regular-bold md:text-6xl flex mb-4 ">BIENVENUE SUR FRESH</h1>
          <p className="text-lg font-Raleway md:text-xl mb-6 ">
            La solution pour accéder à des produits locaux en entreprise. Savourez la qualité. Vivez la fraîcheur.
          </p>
          <a href="/compte" className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-black-500 transition">Inscrivez-vous</a>
        </div>
        <a href="#scroll-down" className="absolute bottom-10 right-10">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
      </div>
    </header>
  );
};

export default Header;

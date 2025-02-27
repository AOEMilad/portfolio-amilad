'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-2 w-full z-50 bg-black md:bg-transparent">
      <div className="container mx-auto">
        <div className="bg-black border-2 border-white rounded-xl flex items-center px-8">
          {/* Clickable Logo/Image */}
          <Link href="/">
            <Image src="/img/Gojo.png" width={64} height={64} alt="Logo" className="h-16 w-auto cursor-pointer" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-1 justify-center space-x-8 text-lg">
            <li>
              <Link href="/" className="text-white hover:border-2 hover:border-white p-3 rounded-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/MiladDB" className="text-white hover:border-2 hover:border-white p-3 rounded-sm">
                MiladDB
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:border-2 hover:border-white p-3 rounded-sm">
                Coming Soon
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:border-2 hover:border-white p-3 rounded-sm">
              Coming Soon
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none ml-auto"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      

      {/* Mobile Menu */}
      <ul className={`md:hidden p-6 flex flex-col items-center space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/MainPage/Task-Manager" className="text-white hover:text-gray-300">
            Task Manager
          </Link>
        </li>
        <li>
          <Link href="/MainPage/Groceries" className="text-white hover:text-gray-300">
            Groceries
          </Link>
        </li>
        <li>
          <Link href="/MainPage/Link4" className="text-white hover:text-gray-300">
            App4
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

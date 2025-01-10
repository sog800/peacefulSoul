import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-blue-600 flex flex-row text-white shadow-md sticky z-50 top-0">
      {/* Logo and Name */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
            P
          </div>
          <h1 className="animate-shake ml-3 text-xl font-bold hidden sm:block">
            PeacefulSoul
          </h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="sm:hidden flex absolute right-4 top-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Regular Navigation Links (Desktop View) */}
      <div className="hidden sm:flex items-center space-x-6 px-4 py-3 absolute right-0 top-0 ">
        <a href="#" className="text-white text-lg hover:text-blue-300">
          Home
        </a>
        <a href="#" className="text-white text-lg hover:text-blue-300">
          Articles
        </a>
        <a href="#" className="text-white text-lg hover:text-blue-300">
          About
        </a>
      </div>

      {/* Sliding Menu with Translucent Dark Background (Mobile View) */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-black bg-opacity-70 backdrop-blur-sm text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 sm:hidden flex flex-col items-start px-4 py-6`}
      >
        <div className="flex items-center mb-6">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
            P
          </div>
          <h1 className="ml-3 text-xl font-bold">PeacefulSoul</h1>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="space-y-4 w-full ">
          <li>
            <a
              href="#"
              className="block text-lg py-2 hover:bg-blue-700 px-2 rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-lg py-2 hover:bg-blue-700 px-2 rounded-md"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-lg py-2 hover:bg-blue-700 px-2 rounded-md"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

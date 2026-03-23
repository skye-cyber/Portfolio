import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm w-screen z-50 py-4 px-6 shadow-lg transition-all duration-300 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="text-green-500">&lt;</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Wambua</span>
          <span className="text-green-400">&gt;</span>
        </h1>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-white hover:text-indigo-300 transition duration-300">About</a>
          <a href="#skills" className="text-white hover:text-indigo-300 transition duration-300">Skills</a>
          <a href="#projects" className="text-white hover:text-indigo-300 transition duration-300">Projects</a>
          <a href="#journey" className="text-white hover:text-indigo-300 transition duration-300">Journey</a>
          <a href="#contact" className="text-white hover:text-indigo-300 transition duration-300">Contact</a>
          <Link to="/aichat" className="text-white px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
            AI Chat
          </Link>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-700 hover:bg-gray-600"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-300'}`}></i>
          </button>
        </nav>

        <button id="mobile-menu-button" className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full py-4 px-6 transition-all duration-300 bg-gray-800 bg-opacity-95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-indigo-300 transition duration-300">About</a>
            <a href="#skills" className="text-white hover:text-indigo-300 transition duration-300">Skills</a>
            <a href="#projects" className="text-white hover:text-indigo-300 transition duration-300">Projects</a>
            <a href="#journey" className="text-white hover:text-indigo-300 transition duration-300">Journey</a>
            <a href="#contact" className="text-white hover:text-indigo-300 transition duration-300">Contact</a>
            <Link to="/aichat" className="text-white px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition text-center">
              AI Chat
            </Link>
            <div className="flex justify-center">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-700 hover:bg-gray-600"
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-300'}`}></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// File: src/components/Header.js
'use client';
import { useState, useEffect } from 'react'
import { FaGithub, FaWhatsapp, FaBars, FaTimes, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300  ${isMobileMenuOpen ? 'bg-gray-900 shadow-lg' : isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}}`} >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold" data-aos="fade-right"><Image src="/img/yazin.jpg" alt='Mohammed Yazin'  width="50" height="50" className="rounded-full bg-cover"  /></Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4" data-aos="fade-down">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-blue-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex space-x-4" data-aos="fade-left">
            <a href="https://github.com/yazin123" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://wa.me/917994857990/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/mohammedyazin/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

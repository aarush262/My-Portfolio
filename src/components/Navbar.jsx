import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['about', 'technologies', 'projects', 'certifications', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-50 shadow-sm">
      {/* Logo */}
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Bobby.dev</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`px-4 py-2 text-sm rounded-full transition duration-200 ${
                activeSection === id
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* 🍔 Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-4 relative">
          <span
            className={`block absolute h-0.5 w-full bg-purple-700 transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-1.5' : 'top-0'
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-full bg-purple-700 transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'top-1.5'
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-full bg-purple-700 transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 bottom-1.5' : 'bottom-0'
            }`}
          ></span>
        </div>
      </div>

      {/* 🍔 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-6 bg-white border border-purple-100 shadow-lg rounded-lg p-4 space-y-2 md:hidden z-40"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm rounded-full transition ${
                  activeSection === id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
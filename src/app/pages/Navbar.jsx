"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/components", label: "Components" },
  { href: "/playground", label: "🎮 Playground" },
  { href: "/game", label: "🎮 Game" },
  { href: "/analytics", label: "Analytics" },
  { href: "/feedback", label: "Feedback" },
  {href: "/racing", label: "🏁 Racing Game" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent select-none hover:from-blue-700 hover:to-violet-700 dark:hover:from-blue-300 dark:hover:to-violet-300 transition-all duration-200">
              MyLibrary
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium
                ${isActive(link.href)
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  }`}
                tabIndex={0}
              >
                <span>{link.label}</span>
                {isActive(link.href) && (
                  <span className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400"></span>
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
            
            {/* Theme Toggle Button */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button, Language Switcher & Theme Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Open main menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 backdrop-blur-xl shadow-xl transition-all animate-fade-in-down">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 font-medium
                ${isActive(link.href)
                    ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md font-semibold"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  }`}
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
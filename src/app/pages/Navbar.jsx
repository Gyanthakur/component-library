"use client";
import { useState } from "react";
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  Mail, 
  Layers, 
  Gamepad2, 
  BarChart3, 
  MessageSquare
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/components", label: "Components", icon: Layers },
  { href: "/playground", label: "Playground", icon: Gamepad2 },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/feedback", label: "Feedback", icon: MessageSquare },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 ">
        <div className="flex items-center h-16 ">
          {/* Logo - Left (Fixed Position) */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent select-none hover:from-blue-700 hover:to-violet-700 dark:hover:from-blue-300 dark:hover:to-violet-300 transition-all duration-200 group">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200"
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2"
              >
                <path d="M11.235 2.374c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.356a2 2 0 0 0 0 1.531c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14c.66-.659.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.697-1.14-1.356c-.659-.66-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0ZM4.87 8.738c-.367.152-.697.481-1.355 1.14c-.66.66-.989.989-1.141 1.356a2 2 0 0 0 0 1.531c.152.368.482.697 1.14 1.356c.66.659.989.988 1.356 1.14a2 2 0 0 0 1.531 0c.368-.152.697-.481 1.356-1.14c.66-.659.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.698-1.14-1.357c-.659-.659-.988-.988-1.356-1.14a2 2 0 0 0-1.53 0Zm11.373 1.14c-.659.66-.988.989-1.14 1.356a2 2 0 0 0 0 1.531c.152.368.481.697 1.14 1.356c.659.659.989.988 1.356 1.14a2 2 0 0 0 1.53 0c.368-.152.698-.481 1.357-1.14c.659-.659.987-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.153-.368-.481-.698-1.14-1.357c-.66-.659-.989-.988-1.356-1.14a2 2 0 0 0-1.531 0c-.367.152-.697.481-1.356 1.14Zm-5.008 5.224c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.357a2 2 0 0 0 0 1.53c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14c.66-.659.988-.988 1.14-1.356c.203-.49.203-1.04 0-1.53c-.152-.368-.48-.698-1.14-1.356c-.659-.66-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0Z"/>
              </svg>
              <span>MyLibrary</span>
            </Link>
          </div>

          {/* Desktop Menu - Center (Absolute Centered) */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium flex items-center gap-2 group
                    ${isActive(link.href)
                        ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                      }`}
                    tabIndex={0}
                  >
                    <IconComponent 
                      size={18} 
                      className={`transition-all duration-300 ${
                        isActive(link.href) 
                          ? "text-blue-600 dark:text-blue-400" 
                          : "text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400"
                      }`} 
                    />
                    <span>{link.label}</span>
                    {isActive(link.href) && (
                      <span className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side Controls - Language Switcher & Theme Toggle (Fixed Position) */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 backdrop-blur-xl shadow-xl transition-all animate-fade-in-down">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium
                  ${isActive(link.href)
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md font-semibold"
                      : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    }`}
                  onClick={() => setIsOpen(false)}
                  tabIndex={0}
                >
                  <IconComponent 
                    size={20} 
                    className={`transition-all duration-300 ${
                      isActive(link.href) 
                        ? "text-white" 
                        : "text-gray-600 dark:text-gray-400"
                    }`} 
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
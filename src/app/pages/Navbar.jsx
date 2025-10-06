// "use client"
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import ThemeToggle from './ThemeToggle';

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
//   { href: "/components", label: "Components" },
//   { href: "/feedback", label: "Feedback" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent select-none">
//               MyLibrary
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative px-4 py-2 rounded-xl transition-all duration-300
//                 ${isActive(link.href) 
//                   ? "font-semibold text-blue-700 dark:text-blue-300"
//                   : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
//                 }`}
//                 tabIndex={0}
//               >
//                 <span>{link.label}</span>
//                 {isActive(link.href) && (
//                   <span className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400 animate-[wiggle_1s_ease-in-out]"></span>
//                 )}
//               </Link>
//             ))}
//             <div className="ml-3">
//               <ThemeToggle />
//             </div>
//           </div>

//           {/* Mobile Menu Button & Theme Toggle */}
//           <div className="flex items-center space-x-2 md:hidden">
//             <ThemeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg text-blue-700 dark:text-violet-300 hover:bg-blue-100 dark:hover:bg-violet-800 transition-colors focus:outline-none"
//               aria-label="Open main menu"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden absolute top-16 left-0 right-0 border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-lg transition-all animate-fade-in-down">
//           <div className="px-2 pt-2 pb-3 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`block px-6 py-3 rounded-lg transition-all duration-200
//                 ${isActive(link.href) 
//                   ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md font-semibold"
//                   : "text-gray-800 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-violet-800"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//                 tabIndex={0}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/components", label: "Components" },
  { href: "/analytics", label: "Analytics" },
  { href: "/feedback", label: "Feedback" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const pathname = usePathname();
  const { darkMode, setDarkMode } = useTheme();

  const handleThemeToggle = () => {
    if (isToggling) return; // Prevent multiple clicks
    
    setIsToggling(true);
    setDarkMode(!darkMode);
    
    // Reset after a short delay
    setTimeout(() => setIsToggling(false), 300);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent select-none">
              MyLibrary
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-xl transition-all duration-300 text-sm
                ${isActive(link.href) 
                  ? "font-semibold text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
                tabIndex={0}
              >
                <span>{link.label}</span>
                {isActive(link.href) && (
                  <span className="absolute left-2 right-2 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400 animate-[wiggle_1s_ease-in-out]"></span>
                )}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              disabled={isToggling}
              aria-label="Toggle theme"
              className={`ml-3 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-violet-500 hover:to-blue-500 transition text-sm ${isToggling ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={handleThemeToggle}
              disabled={isToggling}
              aria-label="Toggle theme"
              className={`px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-violet-500 hover:to-blue-500 transition text-sm ${isToggling ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-700 dark:text-violet-300 hover:bg-blue-100 dark:hover:bg-violet-800 transition-colors focus:outline-none"
              aria-label="Open main menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-lg transition-all animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3 rounded-lg transition-all duration-200
                ${isActive(link.href) 
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md font-semibold"
                  : "text-gray-800 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-violet-800"
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

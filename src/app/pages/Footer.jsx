"use client";
import { FaGithub, FaTwitter, FaLinkedin ,FaDiscord , FaYoutube } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const FooterLink = ({ href, Icon, title }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title} 
              className="hover:text-blue-400 transition-colors">
    <Icon />
  </a>
);

const div = () => {
  const { theme } = useTheme();
  const socialLinks = [
    {
      href: "https://github.com/Gyanthakur/component-library",
      Icon: FaGithub,
      title: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/gyan-pratap-singh-275785236",
      Icon: FaLinkedin,
      title: "LinkedIn",
    },
    { href: "https://x.com/gps_96169", Icon: FaTwitter, title: "Twitter" },
    { href: "https://discord.com", Icon: FaDiscord, title: "Discord" },
    { href: "https://youtube.com", Icon: FaYoutube, title: "YouTube" },
  ];

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
      } mb-0 py-8 mt-12`}
    >
      <div className="max-w-7xl mx-auto px-28 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        {/* Left Section */}
        <div className="text-center px-3 py-2 md:text-left">
          <h2 className="text-3xl font-semibold text-shadow-amber-50">
            My Library{" "}
            <span
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              } text-lg`}
            >
              Component Library
            </span>
          </h2>
          <p className="text-sm mt-2 max-w-md">
            This Project is an open-source Next.js + Tailwind CSS Component
            Library. It contains ready-to-use UI components . Perfect for
            beginners to learn, practice, and contribute during Hacktoberfest
          </p>
        </div>

        {/* Right Section (Social Links) */}
        <div className="w-full h-full md:w-1/2 flex space-x-6 px-4 pt-16 pb-2 text-xl lg:justify-start ml-2 justify-center items-center">
          {socialLinks.map((link, index) => (
            <FooterLink
              key={index}
              href={link.href}
              Icon={link.Icon}
              title={link.title} 
            />
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Open Source Component Library. All
            rights reserved.
          </p>
          <p
            className={`text-xs ${
              theme === "light" ? "text-gray-900" : "text-gray-300"
            } mt-2`}
          >
            Made for Hacktoberfest 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default div;

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ name, role, image, twitter, github, linkedin }) {
  return (
    <div className="p-5 rounded-xl bg-theme-surface shadow-theme-sm border border-theme-light flex flex-col items-center gap-4 hover:shadow-theme-md transition-all duration-300 transform hover:scale-105">
      {/* Profile Image */}
      <div className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50">
        {image ?  (
  <img src={image} alt={name} className="h-full w-full object-cover" />
) : (
  <span className="text-xl font-semibold text-theme-primary">{(name || "U")[0]}</span>
)}
      </div>

      {/* Name & Role */}
      <div className="text-center">
        <div className="font-semibold text-theme-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{name}</div>
        <div className="text-sm text-theme-secondary">{role}</div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-500 hover:text-blue-400" /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-800 dark:text-gray-200 hover:text-gray-600" /></a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-700 hover:text-blue-500" /></a>}
      </div>
    </div>
  )
}

export default function ProfileCardCustom ({
  avatarUrl,
  name,
  bio,
  socialLinks = [],
  className = "",
  theme = "light",
  showContactButton = true,
  contactButtonText = "Contact",
  onContactClick,
}) {
  return (
    <div
      className={`
      relative rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-lg
      overflow-hidden group w-full max-w-lg
      flex items-start gap-6
      ${theme === "light" ? "bg-white border border-gray-100 shadow-md" : "bg-gray-800 border border-gray-700 shadow-lg"}
      ${className}
    `}
    >
      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div
            className={`w-20 h-20 rounded-xl ${theme === "light" ? "ring-2 ring-gray-100" : "ring-2 ring-gray-700"} p-1 transition-all duration-300 group-hover:scale-105`}
          >
            <img
              src={avatarUrl}
              alt={`${name}'s avatar`}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        {/* Name and Bio */}
        <div className="mb-4">
          <h3
            className={`
            font-bold text-xl mb-2
            ${theme === "light" ? "text-gray-800" : "text-white"}
          `}
          >
            {name}
          </h3>
          <p
            className={`
            leading-relaxed text-sm line-clamp-3
            ${theme === "light" ? "text-gray-600" : "text-gray-300"}
          `}
          >
            {bio}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4 w-full">
          {/* Action Area */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Contact Button */}
            {showContactButton && (
              <button
                onClick={onContactClick}
                className={`
          px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
          hover:scale-105 cursor-pointer
          ${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }
        `}
              >
                {contactButtonText}
              </button>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
              w-8 h-8 rounded-lg flex items-center justify-center text-sm
              transition-all duration-200 hover:scale-110
              ${
                theme === "light"
                  ? "bg-gray-100 hover:bg-blue-500 text-gray-600 hover:text-white"
                  : "bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white"
              }
            `}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

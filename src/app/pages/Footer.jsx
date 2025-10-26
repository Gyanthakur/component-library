"use client";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const FooterLink = ({ href, Icon, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const Footer = () => {
  const t = useTranslations('common');
  const socialLinks = [
    {
      href: "https://github.com/Gyanthakur/component-library",
      Icon: FaGithub,
      title: t('footer.social.github'),
    },
    {
      href: "https://www.linkedin.com/in/gyan-pratap-singh-275785236",
      Icon: FaLinkedin,
      title: t('footer.social.linkedin'),
    },
    { href: "https://x.com/gps_96169", Icon: FaTwitter, title: t('footer.social.twitter') },
    { href: "https://discord.com", Icon: FaDiscord, title: t('footer.social.discord') },
    { href: "https://youtube.com", Icon: FaYoutube, title: t('footer.social.youtube') },
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-600 transition-all duration-300 mt-auto shadow-[0_-4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_12px_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                {t('footer.brand')}
              </span>{" "}
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
                {t('footer.subtitle')}
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Right Section (Social Links) */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t('footer.followUs')}</h3>
            <div className="flex justify-center space-x-4">
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-600 transition-all duration-300  mt-4 pt-2.5 text-center">
          <div className="text-center space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {t('footer.madeWith')} <span className="text-red-500">💜</span> {t('footer.hacktoberfest')}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

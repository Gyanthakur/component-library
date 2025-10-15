import Navbar from "./pages/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AnalyticsProvider } from "./context/AnalyticsContext";
import { I18nProvider } from "./context/I18nContext";
import Footer from "./pages/Footer";

export const metadata = {
  title: "Open Source Component Library",
  description: "Demo of reusable components (Buttons & Cards)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <I18nProvider>
          <ThemeProvider>
            <AnalyticsProvider>
              <div className="relative z-10">
                <Navbar />
                {/* animated backgound */}
                <div className="fixed top-32 left-1/2">
                  <div className="fixed pointer-events-none inset-0 top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
                   <div className="fixed top-14 left-1/5 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500  opacity-70 animation-pulseBg"></div>
                </div>
                <div className="fixed pointer-events-none inset-0 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="absolute top-84 left-2/5 w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500  opacity-10 animation-pulseBg"></div>
                </div>
                <div className="fixed pointer-events-none inset-0 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="absolute top-28 left-10/12 w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500  opacity-70 animation-pulseBg"></div>
                </div>
                </div>
                <main className="max-w-7xl mx-auto">{children}</main>
                <Footer />
              </div>
            </AnalyticsProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

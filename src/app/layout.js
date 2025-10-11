import Navbar from "./pages/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AnalyticsProvider } from "./context/AnalyticsContext";
import Footer from "./pages/Footer";
import BackToTopButton from "./components/navigation/BackToTopButton";

export const metadata = {
  title: "Open Source Component Library",
  description: "Demo of reusable components (Buttons & Cards)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <AnalyticsProvider>
            <div className="relative">
              <Navbar />
              {/* animated background - moved behind content with proper z-index */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
           <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
             <div className="absolute top-14 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animation-pulseBg"></div>
           </div>
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="absolute top-20 left-2/5 w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animation-pulseBg"></div>
           </div>
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="absolute top-12 left-5/6 w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animation-pulseBg"></div>
           </div>
          </div>
              <main className="relative z-10 max-w-[1600px] mx-auto px-6">{children}</main>
              <Footer />
              <BackToTopButton />
            </div>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

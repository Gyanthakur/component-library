import Navbar from './pages/Navbar'
import '../styles/globals.css'
import { ThemeProvider } from './context/ThemeContext'
import { AnalyticsProvider } from './context/AnalyticsContext'
import Footer from './pages/Footer';

export const metadata = {
  title: 'Open Source Component Library',
  description: 'Demo of reusable components (Buttons & Cards)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <AnalyticsProvider>
            <div className="">
              <Navbar />
              <main className='max-w-7xl mx-auto'>
                {children}
              </main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
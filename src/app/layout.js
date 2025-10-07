import Navbar from './pages/Navbar'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import { AnalyticsProvider } from './context/AnalyticsContext'
import Footer from './pages/Footer';
import BackArrow from './components/navigation/BackArrow';

export const metadata = {
  title: 'Open Source Component Library',
  description: 'Demo of reusable components (Buttons & Cards)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-theme-background text-theme-primary">
        <ThemeProvider>
          <AnalyticsProvider>
            <div className="">
              <BackArrow />
              <Navbar />
              <main className='max-w-7xl mx-auto'>
                {children}
              </main> 
              <Footer/>
            </div>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
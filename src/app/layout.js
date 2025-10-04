// import Navbar from './pages/Navbar'
// import './globals.css'
// import { ThemeProvider } from './context/ThemeContext'
// import Footer from './pages/Footer';

// export const metadata = {
//   title: 'Open Source Component Library',
//   description: 'Demo of reusable components (Buttons & Cards)'
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-theme-background text-theme-primary">
//         <ThemeProvider>
//           <div className="">
//             <Navbar />
//             <main className='max-w-7xl mx-auto'>
//               {children}
//             </main> 
//             <Footer/>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import Navbar from './pages/Navbar'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './pages/Footer';

export const metadata = {
  title: 'Open Source Component Library',
  description: 'Demo of reusable components (Buttons & Cards)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-theme-background text-theme-primary">
        <ThemeProvider>
          <div className="">
            <Navbar />
            <main className='max-w-8xl mx-auto'>
              {children}
            </main> 
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

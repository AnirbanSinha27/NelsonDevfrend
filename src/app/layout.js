import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YOGASMITH | Portsmouth Yoga Studio',
  description: 'Professional yoga studio in Portsmouth, NH offering classes for all levels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
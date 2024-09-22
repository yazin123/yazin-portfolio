import { Inter } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css'; // Import AOS styles

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohammed Yazin - Full Stack Developer',
  description: 'Portfolio of Mohammed Yazin, a passionate Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
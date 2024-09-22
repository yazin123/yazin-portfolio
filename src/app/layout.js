import { Montserrat } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css';
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohammed Yazin - Full Stack Developer',
  description: 'Portfolio of Mohammed Yazin, a passionate Full Stack Developer specializing in Website, ERP & CRM.',
  keywords: 'web developer, full stack developer, Django developer, Next.js developer, digital marketing',
  openGraph: {
    title: 'Mohammed Yazin - Full Stack Developer',
    description: 'Explore the portfolio of Mohammed Yazin, a skilled developer in Next.js and Django.',
    url: 'https://your-website-url.com',
    images: [
      {
        url: '/img/yazin.jpg',
        alt: 'Mohammed Yazin',
      },
    ],
    site_name: 'Mohammed Yazin',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/img/yazin.jpg" />
        <meta property="og:image" content="/img/yazin.jpg" />
        <meta property="og:image:alt" content="Mohammed Yazin" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
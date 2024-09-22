import { Montserrat } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Mohammed Yazin - Full Stack Developer',
  description: 'Portfolio of Mohammed Yazin, a passionate Full Stack Developer specializing in Website, ERP & CRM.',
  keywords: 'web developer, full stack developer, Django developer, Next.js developer, digital marketing',
  openGraph: {
    title: 'Mohammed Yazin - Full Stack Developer',
    description: 'Explore the portfolio of Mohammed Yazin, a skilled developer in Next.js and Django.',
    url: 'https://mohammedyazin.com',
    images: [
      {
        url: '/img/yazin.jpg', // Use absolute path
        alt: 'Mohammed Yazin',
      },
    ],
    site_name: 'Mohammed Yazin',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/img/yazin.jpg" /> {/* Use absolute path */}
        <meta property="og:image" content="/img/yazin.jpg" /> {/* Use absolute path */}
        <meta property="og:image:alt" content="Mohammed Yazin" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

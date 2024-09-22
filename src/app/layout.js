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
        url: 'https://mohammedyazin.com/img/yazin.jpg', // Use absolute URL
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
        <link rel="icon" type="image/x-icon" href="/img/yazin.jpg" /> {/* Absolute path for favicon */}
        <meta property="og:image" content="https://mohammedyazin.com/img/yazin.jpg" /> {/* Absolute URL for Open Graph */}
        <meta property="og:image:alt" content="Mohammed Yazin" />
        <meta property="og:url" content="https://mohammedyazin.com" />
        <meta property="og:title" content="Mohammed Yazin - Full Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Mohammed Yazin, a skilled developer in Next.js and Django." />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

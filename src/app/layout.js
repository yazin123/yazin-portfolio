import { Montserrat } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';

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
        url: 'https://mohammedyazin.com/img/yazin.jpg',
        alt: 'Mohammed Yazin',
      },
    ],
    siteName: 'Mohammed Yazin',
  },
  icons: {
    icon: '/img/favicon_io/favicon.ico',
    shortcut: '/img/favicon_io/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
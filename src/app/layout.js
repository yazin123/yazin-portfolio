import { Montserrat } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Mohammed Yazin - Full Stack Developer',
  description: "Explore Mohammed Yazin's portfolio, a passionate Full Stack Developer specializing in web development, ERP solutions, and CRM systems.",
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
    icon: '/img/favyazinround.png',
    shortcut: '/img/favyazinround.png',
    apple: '/img/yazin.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/img/favyazinround.png',
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
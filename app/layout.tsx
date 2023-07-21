import Navbar from '@/components/ui/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--inter',
});

export const metadata = {
  title: 'Next | SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${inter.variable}`}>
        <Image
          className='fixed inset-0 m-auto -z-50'
          src={`/assets/images/bg-logo.png`}
          alt=''
          width={300}
          height={500}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import { Inter } from 'next/font/google';

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
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}

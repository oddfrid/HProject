/* eslint-disable @next/next/no-head-element */
// import { Inter } from '@next/font/google'
import { Header } from '../components/layout/header/Header';
import './styles.css';

// const inter = Inter({
//   variable: '--font-main',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  
    // className={inter.className}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

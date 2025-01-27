import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/app/(components)/Menu";
import { Baloo_Da_2 } from 'next/font/google'
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home | Sadat Alam Protik",
  description: "Oh, oh woe-oh-woah is me 🖤😉",
  keywords: "Sadat Alam Protik, portfolio, developer, React, Next.js",
  openGraph: {
    title: "Sadat Alam Protik",
    description: "Portfolio of Sadat Alam Protik",
    url: "https://yourwebsite.com",
    siteName: "Sadat's Portfolio",
    images: [
      {
        url: "/protikWOutBg.webp",
        width: 800,
        height: 800,
        alt: "Protik's Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const balooDaTwo = Baloo_Da_2({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-baloo-da-2'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="./icon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="google-site-verification" content="eIF-DBTlpUgbA88_sV07lhJiT8iX_luc8VqUGSfG8lc" />
      </Head>
      <body
        className={` ${balooDaTwo.variable} antialiased`} >
        <Menu />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/app/(components)/Menu";
import { ThemeProvider } from "@/app/(components)/ThemeProvider";
import ThemeToggle from "@/app/(components)/ThemeToggle";
import { LanguageProvider } from "@/app/(components)/LanguageProvider";
import LanguageSwitcher from "@/app/(components)/LanguageSwitcher";
import Preloader from "@/app/(components)/Preloader";
import { Baloo_Da_2, Hind_Siliguri } from 'next/font/google'
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home | Sadat Alam Protik",
  verification: { google: "eIF-DBTlpUgbA88_sV07lhJiT8iX_luc8VqUGSfG8lc" },
  description: "Oh, oh woe-oh-woah is me 🖤😉",
  keywords: "Sadat Alam Protik, portfolio, developer, React, Next.js",
  openGraph: {
    title: "Sadat Alam Protik",
    description: "Portfolio of Sadat Alam Protik",
    url: "https://protik0939.vercel.app/",
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

const hindShiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-hind-shiliguri'
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
      </Head>
      <body
        className={` ${balooDaTwo.variable} ${hindShiliguri.variable} antialiased`} >
        <ThemeProvider>
          <LanguageProvider>
            <Preloader />
            <div className="flex fixed top-4 pr-4 space-x-4 justify-end w-full z-50">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Menu />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

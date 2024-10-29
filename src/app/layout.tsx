import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/app/(components)/Menu";
import { Baloo_Da_2 } from 'next/font/google'
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home | Sadat Alam Protik",
  description: "Oh, oh woe-oh-woah is me 🖤😉",
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
      </Head>
      <body
        className={` ${balooDaTwo.variable} antialiased`} >
        <Menu />
        {children}
      </body>
    </html>
  );
}

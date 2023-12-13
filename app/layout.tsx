import "./globals.css";
import clsx from "clsx";
import Link from "next/link";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], })

export const metadata: Metadata = {
  title: "Freakin' Geek",
  description: "Random tech blog on the internet!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(quicksand.className, 'container')}>
        <header className="header">
          <Link href="/">
            <h1 className="logo">{"Freakin' Geek"}</h1>
          </Link>

          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link href="/" className="navigation__link">home</Link>
              </li>
              
              <li className="navigation__item">
                <Link href="/blog" className="navigation__link">blog</Link>
              </li>

              <li className="navigation__item">
                <Link href="/about" className="navigation__link">about</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

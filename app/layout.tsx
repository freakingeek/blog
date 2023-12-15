import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/app/components/layout/Header";

const openSans = Open_Sans({ subsets: ['latin'] });

const title = process.env.WEBSITE_TITLE || "Freakin' Geek";
const url = process.env.WEBSITE_DOMAIN || "https://talked.dev";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  metadataBase: new URL(url),
  description: "Random tech blog on the internet!",
  openGraph: {
    title: title,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(openSans.className, "container", "layout")}>
        <Header className="layout__header" />

        <main className="layout__content">{children}</main>
      </body>
    </html>
  );
}

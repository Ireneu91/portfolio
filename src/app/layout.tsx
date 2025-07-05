import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const generateImageLink = (img: string) => {
  const basePath = process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? "" : '/portfolio'
    return `${basePath}${img}`;
}

export const metadata: Metadata = {
  title: "Irene",
  description: "Irene portfolio",

  icons: [
    {
      sizes: "180x180",
      rel: "apple-touch-icon",
      url:  generateImageLink("/images/favicon/apple-icon-180x180.png")
    },
    {
      sizes: "32x32",
      rel: "icon",
      type: "image/png",
      url:  generateImageLink("/images/favicon/favicon-32x32.png")
    },
    {
      sizes: "16x16",
      rel: "icon",
      type: "image/png",
      url:  generateImageLink("/images/favicon/favicon-16x16.png")
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from '@/components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Control - Your System Manager",
  description: "Manage your customers and services easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from '@/providers/auth'

// components
import Header from '@/components/header'

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
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

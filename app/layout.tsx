import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { Footer } from "./components";

export const metadata: Metadata = {
  title: "Premier Drive Rentals",
  description: "Alquiler de vehículos de todos los modelos, fácil y rápido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}

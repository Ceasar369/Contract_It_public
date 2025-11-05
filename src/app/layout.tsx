// Layout principal de l'application Next.js
// Contient les métadonnées et la structure HTML de base

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CONTRACT-IT | AI-Powered Project Manager for Construction",
  description: "Build smarter — from idea to completion. AI-powered project management for construction and renovation projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

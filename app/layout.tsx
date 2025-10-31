"use client";

import "./globals.css"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0E0C15] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth overflow-hidden ">
      <body>{children}</body>
    </html>
  );
}

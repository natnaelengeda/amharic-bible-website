import "./globals.css";

// Types
import type { Metadata } from "next";

// Meta Data
import { meta } from "@/data/metadata";

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

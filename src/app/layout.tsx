import "./globals.css";

// Types
import type { Metadata } from "next";

// Meta Data
import { meta } from "@/data/metadata";
import AppProvider from "./provider";

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
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

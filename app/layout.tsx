import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
  title: "HiTex",
  description: "HiTex - Your rich editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

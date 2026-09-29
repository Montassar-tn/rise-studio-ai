import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rise Studio — Ideas with direction.",
  description: "Rise Studio AI — premium creative strategy, branding and digital design.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

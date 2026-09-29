import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rise Studio AI",
  description: "Creative Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

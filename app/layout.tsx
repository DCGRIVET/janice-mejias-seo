import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO",
  description: "A clean, modern starting point for local SEO experiments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

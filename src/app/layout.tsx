import type { Metadata } from "next";
import "./globals.css";
import Fonts from "@/components/Fonts";

export const metadata: Metadata = {
  title: "Ensemble EscapeRoom Timer",
  description: "Timer for escape room for ensemble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body className="barlow-regular">{children}</body>
    </html>
  );
}

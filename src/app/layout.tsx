import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

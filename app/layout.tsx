import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Bill McCulloch",
  description:
    "Connect & Collaborate in Kapiti. Corporate offsite retreat just 40 minutes from Wellington",
};

const body = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-body",
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${body.variable} font-sans`}>{children}</body>
    </html>
  );
}

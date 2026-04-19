import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Connekt SaaS",
  description: "Modern Financing Infrastructure — Scale Every Opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased font-[var(--font-poppins)]`}
    >
      <head>
        <link rel="icon" href="/Connekt Icon.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/Connekt Icon light.svg" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

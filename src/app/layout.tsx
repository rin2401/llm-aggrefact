import { NavBar } from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LLM-AggreFact Leaderboard",
  description: "LLM-AggreFact Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/site-logo.svg" sizes="any" />
      </head>
      <body className="{inter.className}">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

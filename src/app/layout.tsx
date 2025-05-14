import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "インターンシップマッチングアプリ",
  description: "モダンなSNSアプリケーション",
  icons: {
    icon: [
      { url: "/icon.svg" },
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

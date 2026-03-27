import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Script from "next/script";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Cait + Lacy",
  description: "We're coming for your jellyfish...",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://caitandlacy.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Script defer src="https://analytics.lacy.sh/script.js" data-website-id="5d644533-574f-47ea-a374-6d10b05b0b07" />
      </body>
    </html>
  );
}

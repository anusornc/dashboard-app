import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"], // subsets is the array of character we want to support, latin is the default
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // weight is used to define the font-weight we want to support
  variable: "--font-inter", // variable is the name of the css variable we want to use to inject the font-face
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Ask a Question",
  description: "Ask a question and get answers from the community.",
  icons: {
    icon: "assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider 
     appearance={{
      elements : {
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500',
      }
     }} 
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

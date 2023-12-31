import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import React from 'react' 

export const metadata = {"title":"Ask a Question","id":"ask-question","layout":"base","tags":["ask","question"],"description":"Ask a question and get answers from the community.","category":"question","rank":1,"slug":"ask-question"}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
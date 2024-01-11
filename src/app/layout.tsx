import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Henson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <head>
        {new Date().getMonth() === 11 && <script src="https://app.embed.im/snow.js" defer></script>}
      </head>
      <body className={inter.className + " dark"}><div className="mx-auto max-w-3xl px-5">{children}</div></body>
    </>
  )
}

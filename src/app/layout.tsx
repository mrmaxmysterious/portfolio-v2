import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Henson',
}

let isChristmas = false
const month = new Date().getMonth()
if (month == 12) isChristmas = true

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        {isChristmas ? <script src="https://app.embed.im/snow.js" defer></script> : <p></p>}
      </head>
      <body className={inter.className + " dark"}><div className="mx-auto max-w-3xl px-5">{children}</div></body>
    </>
  )
}

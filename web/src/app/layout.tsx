import { ReactNode } from 'react'
import './globals.css'
import { Overpass, Dekko } from 'next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-overpass',
})
const dekko = Dekko({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dekko',
})

export const metadata = {
  title: 'Mangazine - A sua loja de mangás',
  description: 'E-commerce de mangás',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dekko.variable} ${overpass.variable} bg-yellow-200 font-sans`}
      >
        {children}
      </body>
    </html>
  )
}

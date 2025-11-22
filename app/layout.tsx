import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Panithan Kunkaew | Backend Engineer & DevOps Specialist",
  description:
    "Professional portfolio of Panithan Kunkaew - Backend Engineer specializing in Go, DevOps, and AI solutions",
  generator: "v0.app",
  icons: {
    icon: "/image-removebg-preview.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

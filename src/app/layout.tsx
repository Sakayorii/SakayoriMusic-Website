import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "SakayoriMusic — Modern YouTube Music Client",
  description:
    "A free, open-source, cross-platform YouTube Music client built with Kotlin Multiplatform & Compose. Stream music on Android, Windows, Linux, and macOS without ads.",
  keywords: [
    "SakayoriMusic",
    "YouTube Music",
    "music player",
    "open source",
    "Kotlin Multiplatform",
    "Compose",
    "Android",
    "Windows",
    "Linux",
    "macOS",
  ],
  authors: [{ name: "Sakayori Studio" }],
  openGraph: {
    title: "SakayoriMusic",
    description: "A modern, cross-platform YouTube Music client.",
    url: "https://music.sakayori.dev",
    siteName: "SakayoriMusic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SakayoriMusic",
    description: "A modern, cross-platform YouTube Music client.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Splash } from "@/components/Splash"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SakayoriMusic — A Music App You Actually Own",
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
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Splash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

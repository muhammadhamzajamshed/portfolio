import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadhamzajamshed.com"),
  title: {
    template: "%s | Muhammad Hamza Jamshed - Senior Full Stack Developer",
    default: "Muhammad Hamza Jamshed | Senior Full Stack Developer",
  },
  description:
    "Senior Full Stack Developer specializing in B2B SaaS, cloud architecture, and performance optimization. 5+ years of experience building scalable web applications with React, Node.js, and AWS.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "SaaS development",
    "cloud architecture",
    "AWS",
    "performance optimization",
    "web development",
    "freelancer",
  ],
  authors: [{ name: "Muhammad Hamza Jamshed", url: "https://muhammadhamzajamshed.com" }],
  creator: "Muhammad Hamza Jamshed",
  publisher: "Muhammad Hamza Jamshed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadhamzajamshed.com",
    siteName: "Muhammad Hamza Jamshed",
    title: "Muhammad Hamza Jamshed | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in B2B SaaS, cloud architecture, and performance optimization.",
    images: [
      {
        url: "https://muhammadhamzajamshed.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza Jamshed - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza Jamshed | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in B2B SaaS, cloud architecture, and performance optimization.",
    creator: "@hamzajamshed50",
    images: ["https://muhammadhamzajamshed.com/twitter-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://muhammadhamzajamshed.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <link rel="canonical" href="https://muhammadhamzajamshed.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

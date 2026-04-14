import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Baadalo Pe Rasoi | Ghar Jaisa Khana, Delivered to Your Door",
    template: "%s | Baadalo Pe Rasoi",
  },
  description:
    "Pure vegetarian cloud kitchen serving home-style Punjabi meals, rice combos, snacks, and more across Katraj–Kondhwa, Pune. Order on Zomato and Swiggy.",
  metadataBase: new URL("https://baadalorasoi.com"),
  keywords: [
    "vegetarian cloud kitchen Pune",
    "Katraj food delivery",
    "Kondhwa vegetarian food",
    "Baadalo Pe Rasoi",
    "Punjabi food delivery Pune",
    "Zomato Swiggy Pune",
    "ghar jaisa khana Pune",
  ],
  authors: [{ name: "Baadalo Pe Rasoi" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://baadalorasoi.com",
    siteName: "Baadalo Pe Rasoi",
    title: "Baadalo Pe Rasoi | Ghar Jaisa Khana, Delivered to Your Door",
    description:
      "Pure vegetarian cloud kitchen serving home-style Punjabi meals, rice combos, snacks, and more. Order via Zomato and Swiggy in Pune.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baadalo Pe Rasoi — Pure Veg Cloud Kitchen, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baadalo Pe Rasoi | Ghar Jaisa Khana, Delivered to Your Door",
    description:
      "Pure vegetarian cloud kitchen serving home-style Punjabi meals, rice combos, snacks, and more. Order via Zomato and Swiggy in Pune.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://baadalorasoi.com",
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
}

export const viewport: Viewport = {
  themeColor: "#2a2016",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}

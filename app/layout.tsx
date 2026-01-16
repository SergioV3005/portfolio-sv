import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import { site } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.headline}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} - ${site.headline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.headline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} min-h-screen bg-bg text-fg antialiased`}
      >
        <ThemeScript />
        <div className="relative">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

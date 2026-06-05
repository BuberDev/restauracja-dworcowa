import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000"),
);

const title = "Restauracja Dworcowa | Domowe obiady w Gorlicach";
const description =
  "Restauracja Dworcowa w Gorlicach przy ul. Bardiowskiej 3: domowe obiady, dania dnia, zupy, kawa, szarlotka i zamówienia na wynos.";
const socialImage = {
  url: "/images/dworcowa/banner-contact.png",
  width: 1140,
  height: 441,
  alt: "Restauracja Dworcowa w Gorlicach",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Restauracja Dworcowa",
    locale: "pl_PL",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/images/dworcowa/icon.png?v=dworcowa-logo", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=dworcowa-logo", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=dworcowa-logo",
    apple: "/images/dworcowa/icon.png?v=dworcowa-logo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

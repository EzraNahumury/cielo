import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./_components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CALEO ALMA — Built for Your Team, Not for Everyone",
  description:
    "CALEO ALMA crafts protected team identity through custom jerseys. Your design. Your team. Never reused.",
  keywords: [
    "custom jersey",
    "team identity",
    "CALEO ALMA",
    "protected design",
    "sports apparel",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0A1520",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--caleo-ink)] text-[color:var(--foreground)] overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

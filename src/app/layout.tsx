import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const montserrat = Montserrat({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Camellia Spa | Luxury Spa & Wellness Experience",
  description: "Discover Camellia Spa — a warm, private space for premium massages, luxury treatments, body polishing, and spa packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-espresso">
        <div className="noise-overlay"></div>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

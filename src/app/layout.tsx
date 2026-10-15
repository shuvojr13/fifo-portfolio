import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIFO SOLUTIONS — Design & Craft",
  description:
    "Independent design & craft studio. Thoughtful digital products, graphic identities, and bespoke illustrations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-surface text-body-md text-on-surface flex min-h-full flex-col">
        <SiteHeader />
        <main className="bg-surface min-h-[calc(100vh-160px)] w-full flex-1 pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

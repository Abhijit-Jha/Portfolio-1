import type { Metadata } from "next";
import { Geist, Geist_Mono, Martel_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./component/utils/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const martelS = Martel_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-martel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijit Jha | Full Stack & Mobile App Developer",
  description:
    "Welcome to the official portfolio of Abhijit Jha — a fourth-year engineering student, full-stack developer, and stock market investor. Explore my work in web, mobile, and more at abhijit.website.",
  keywords: [
    "Abhijit Jha",
    "abhijit.website",
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Expo",
    "Next.js",
    "Node.js",
    "Software Engineer Portfolio",
    "Engineering Student",
    "Blockchain Developer",
    "Stock Market Investor",
  ],
  authors: [{ name: "Abhijit Jha", url: "https://abhijit.website" }],
  creator: "Abhijit Jha",
  metadataBase: new URL("https://abhijit.website"),
  openGraph: {
    title: "Abhijit Jha | Full Stack & Mobile App Developer",
    description:
      "Explore Abhijit Jha's portfolio showcasing expertise in full-stack web & mobile development, blockchain, and AI-driven systems. Visit abhijit.website.",
    url: "https://abhijit.website",
    siteName: "Abhijit Jha Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijit Jha | Full Stack & Mobile App Developer",
    description:
      "Check out the portfolio of Abhijit Jha, a passionate software engineer skilled in web, mobile, blockchain, and investing.",
    creator: "", //TODO 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${martelS.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main >{children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

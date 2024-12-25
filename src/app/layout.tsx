import type { Metadata } from "next";
import { Geist, Geist_Mono, Martel_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/utils/ThemeProvider";
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
  variable : "--font-martel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijit Jha",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main >{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

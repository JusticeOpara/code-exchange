import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {GeistMono} from "geist/font/mono"
import {GeistSans} from "geist/font/sans"
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css"
import "../styles/prism.css"

export const metadata: Metadata = {
  title: "Code Exchange",
  description: "Dev Help Desk is a platform for developers to share and discover new resources, tools, and projects to help them grow in their careers and build better software products for the world to use and enjoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
              className={`${GeistMono.variable} ${GeistSans.variable} dark:dark-scrollbar light-scrollbar bg-primary min-h-screen scroll-smooth dark:bg-gradient-to-br dark:from-zinc-950 dark:from-20% dark:to-zinc-900`}>
        <ThemeProvider>
        {children}
        <Analytics/>
        </ThemeProvider>
    
        </body>
    </html>
  );
}

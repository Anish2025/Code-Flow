import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Flow",
  description: "Welcome to CodeFlow — the ultimate code editor for developers, students, and enthusiasts! Our web-based code editor offers a seamless and intuitive environment to write, edit, and execute your code with ease. Whether you're working on a quick snippet, exploring new programming languages, or collaborating with a team, our platform provides everything you need.",
  icons: {
    icon: '/favicon.png', // /public path
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-ray-100 flex flex-col`}
        >
          <ConvexClientProvider>
          {children}
          </ConvexClientProvider>
          

          <Footer/>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
// https://emkc.org/api/v2/piston/runtimes

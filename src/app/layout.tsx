import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bilash Kumar Biswas | Full-Stack Software Engineer & DevOps Enthusiast",
  description:
    "Professional portfolio of Bilash Kumar Biswas. Specializing in secure backend API architectures (Spring Boot, .NET Core, Django), cross-platform mobile apps (Flutter, Native Kotlin), and cloud DevOps operations.",
  keywords: [
    "Bilash Kumar Biswas",
    "Full-Stack Engineer",
    "Software Engineer Portfolio",
    "Spring Boot Developer",
    "Flutter Mobile Developer",
    "DevOps Engineer",
    "Next.js Portfolio",
    "Dhaka Developer"
  ],
  authors: [{ name: "Bilash Kumar Biswas" }],
  creator: "Bilash Kumar Biswas",
  openGraph: {
    title: "Bilash Kumar Biswas | Full-Stack Software Engineer",
    description:
      "Explore the portfolio of Bilash Kumar Biswas, a software engineer with expertise in distributed systems, offline-first mobile apps, and scalable web apps.",
    url: "https://github.com/bilash-biswas",
    siteName: "Bilash Kumar Biswas Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${outfit.variable} ${firaCode.variable} font-sans min-h-screen antialiased relative overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

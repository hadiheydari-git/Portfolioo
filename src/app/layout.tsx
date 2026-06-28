import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

// Vazirmatn — mandatory font for Persian (RTL) text
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

// Inter — clean Apple-inspired sans-serif for English (LTR) text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Default SSR title = Persian (the default language). Updates
  // dynamically to English when the user switches language (see
  // LanguageProvider's document.title sync on locale change).
  title: "هادی حیدری طراح محصول",
  description:
    "Portfolio of Hadi Heydari, a Product Designer crafting innovative digital products. طراحی محصول، سیستم طراحی و تجربه کاربری.",
  keywords: [
    "Product Designer",
    "طراح محصول",
    "UX/UI",
    "Design System",
    "Portfolio",
    "Hadi Heydari",
    "هادی حیدری",
  ],
  authors: [{ name: "Hadi Heydari" }],
  // Browser-tab favicon + Apple/Android home-screen icons.
  // Uses the same header-avatar.png that appears in the site header
  // so the brand identity is consistent everywhere.
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Hadi Heydari Product Designer",
    description:
      "Portfolio of Hadi Heydari, a Product Designer crafting innovative digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

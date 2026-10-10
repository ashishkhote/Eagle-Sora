import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeBar } from "@/components/ui/ThemeBar";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesora.in"),

  title: {
    default:
      "EAGLE SORA TRANSCENDENT PRIVATE LIMITED | Innovating for a Smarter, Digital Nation",
    template: "%s | EAGLE SORA TRANSCENDENT",
  },

  description:
    "EAGLE SORA TRANSCENDENT PRIVATE LIMITED is an IT & software engineering company specializing in custom software, cloud infrastructure, AI integration, enterprise platforms (SoraAI™, SoraCommerce™), and compliance security.",

  keywords: [
    "Eagle Sora",
    "Eagle Sora Transcendent",
    "Eagle Sora Technologies",
    "Eagle Sora company India",
    "Custom Software Development India",
    "IT Services Maharashtra",
    "Enterprise Software",
    "Digital Transformation Services",
    "SoraAI",
    "SoraCommerce",
    "Cloud Solutions",
    "Cybersecurity Compliance",
  ],

  authors: [{ name: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED" }],
  creator: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
  publisher: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title:
      "EAGLE SORA TRANSCENDENT | Empowering the Future of Digital Innovation",
    description:
      "Innovating for a Smarter, Digital Nation. We build custom software, web & mobile applications, and enterprise SaaS platforms.",
    url: "https://eaglesora.in",
    siteName: "EAGLE SORA TRANSCENDENT",
    images: [
      {
        url: "/assets/Eagle Sora_ Smarter Digital Future.webp",
        width: 1200,
        height: 630,
        alt: "EAGLE SORA TRANSCENDENT Digital Future",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "EAGLE SORA TRANSCENDENT | Empowering Digital Innovation",
    description:
      "Innovating for a Smarter, Digital Nation. Custom software, AI integration & enterprise cloud solutions.",
    images: ["/assets/Eagle Sora_ Smarter Digital Future.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>

      <body
        suppressHydrationWarning
        className="font-sans bg-[var(--color-bg-base)] text-[var(--color-text-main)] antialiased min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white"
      >
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <ThemeBar />
      </body>
    </html>
  );
}
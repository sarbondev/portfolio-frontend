import "./globals.css";
import type { Metadata, Viewport } from "next";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

// ========== ВАРИАНТЫ ШРИФТОВ - ВЫБЕРИТЕ ОДИН ==========

// 1. POPPINS - Современный, чистый, отлично для портфолио (РЕКОМЕНДУЕТСЯ)
// import { Poppins } from "next/font/google";
// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-poppins",
//   display: "swap",
//   preload: true,
// });

// 2. SPACE GROTESK - Технологичный, геометричный, идеален для разработчиков
// import { Space_Grotesk } from "next/font/google";
// const font = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-space-grotesk",
//   display: "swap",
//   preload: true,
// });

// 3. SORA - Современный, минималистичный, элегантный
// import { Sora } from "next/font/google";
// const font = Sora({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-sora",
//   display: "swap",
//   preload: true,
// });

// 4. OUTFIT - Округлый, дружелюбный, современный
// import { Outfit } from "next/font/google";
// const font = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-outfit",
//   display: "swap",
//   preload: true,
// });

// 5. PLUS JAKARTA SANS - Профессиональный, сбалансированный
// import { Plus_Jakarta_Sans } from "next/font/google";
// const font = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-jakarta",
//   display: "swap",
//   preload: true,
// });

// 6. MANROPE - Гармоничный, геометричный, универсальный
// import { Manrope } from "next/font/google";
// const font = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-manrope",
//   display: "swap",
//   preload: true,
// });

// 7. RUBIK - Уникальный, округлый, современный
import { Rubik } from "next/font/google";
const font = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

// 8. DM SANS - Чистый, нейтральный, профессиональный
// import { DM_Sans } from "next/font/google";
// const font = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-dm-sans",
//   display: "swap",
//   preload: true,
// });

// 9. INTER - Универсальный, читаемый, популярный (был по умолчанию)
// import { Inter } from "next/font/google";
// const font = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
//   preload: true,
// });

// =======================================================

// ========== SEO METADATA ==========
const siteUrl = "https://yourdomain.com"; // ЗАМЕНИТЬ НА ВАШ ДОМЕН
const siteName = "Сухроб Рахматуллаев";
const siteDescription =
  "MERN Stack разработчик из Узбекистана. Специализируюсь на создании масштабируемых full-stack веб-приложений с использованием MongoDB, Express.js, React, Next.js и Node.js. Более 5 лет опыта в разработке.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Основные мета-теги
  title: {
    default: `${siteName} | MERN Stack разработчик`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "MERN Stack разработчик",
    "Full Stack разработчик",
    "React разработчик",
    "Next.js разработчик",
    "Node.js разработчик",
    "MongoDB разработчик",
    "JavaScript разработчик",
    "TypeScript разработчик",
    "веб-разработчик Узбекистан",
    "фриланс разработчик",
    "Сухроб Рахматуллаев",
    "Suhrob Rahmatullayev",
    "portfolio разработчика",
    "создание веб-приложений",
    "разработка сайтов",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  // Canonical URL
  alternates: {
    canonical: siteUrl,
    languages: {
      ru: siteUrl,
      en: `${siteUrl}/en`,
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | MERN Stack разработчик`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // СОЗДАТЬ OG изображение 1200x630px
        width: 1200,
        height: 630,
        alt: `${siteName} - MERN Stack Developer`,
        type: "image/jpeg",
      },
    ],
  },

  // Robots
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

  // Verification теги для Search Console
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Получить в Google Search Console
    yandex: "YOUR_YANDEX_VERIFICATION_CODE", // Получить в Яндекс.Вебмастер
    // bing: "YOUR_BING_VERIFICATION_CODE",
  },

  // Другие мета-теги
  category: "Technology",
  classification: "Web Development",

  // App-specific
  applicationName: siteName,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteName,
  },

  // Format detection
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",
};

// ========== JSON-LD STRUCTURED DATA ==========
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
  sameAs: [
    "https://github.com/Rakhsrb",
    "https://www.linkedin.com/in/%D1%81%D1%83%D1%85%D1%80%D0%BE%D0%B1-%D1%80%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%83%D0%BB%D0%BB%D0%B0%D0%B5%D0%B2-6a0469258/",
  ],
  jobTitle: "MERN Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "UITC Academy",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Наманган",
    addressCountry: "UZ",
  },
  email: "suhrobrahmatullayev973132@gmail.com",
  telephone: "+998900021462",
  description: siteDescription,
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Full Stack Development",
    "Web Development",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "suhrobrahmatullayev973132@gmail.com",
    contactType: "Professional Services",
    availableLanguage: ["Russian", "English", "Uzbek"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "ru-RU",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={font.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        {/* Preconnect для оптимизации */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Theme Toggle */}
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>

          {/* Main Content */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

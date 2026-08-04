import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "셸비",
  url: "https://www.letsgoshellby.com/",
  logo: "https://www.letsgoshellby.com/shellby.png",
  description: "느린학습자와 가족을 위한 따뜻한 비대면 상담 서비스, 셸비.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Korean",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "셸비 | 느린학습자 아이 보호자를 위한 1:1 맞춤형 상담",
  description: "느린학습자와 가족을 위한 따뜻한 비대면 상담 서비스, 셸비.",
  icons: {
    icon: "/shellby_symbol.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.letsgoshellby.com/",
    title: "셸비 | 느린학습자 아이 보호자를 위한 1:1 맞춤형 상담",
    description: "내가 원하는 전문가로부터 필요한 솔루션을 온라인으로 받아보세요.",
    images: [
      {
        url: "https://www.letsgoshellby.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "셸비 - 느린학습자 아이 보호자를 위한 1:1 맞춤형 상담",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "셸비 | 느린학습자 아이 보호자를 위한 1:1 맞춤형 상담",
    description: "느린학습자와 가족을 위한 따뜻한 비대면 상담 서비스",
    images: ["https://www.letsgoshellby.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
        <KakaoFloatingButton />
      </body>
    </html>
  );
}

'use client';
import { usePathname } from "next/navigation";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import Header from "@portfolio/components/header";
import Footer from "@portfolio/components/footers/footer";
import PartialFooter from "@portfolio/components/footers/partialFooter";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isVisible = false;
  let isFooterVisible = false;
  const pathname = usePathname();

  if (pathname === "/about" || pathname === "/projects") {
    isVisible = true;
  }

  if (pathname === "/contact") {
    isFooterVisible = true;
  }


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="KgQth_q_JqNmZFssl4kCYoj6alUn5pHzh5RQzXw9YNM" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.kangueloic.me",
          "name": "Kangue Loïc Portfolio",
          "description": "Showcasing the journey, skills, and projects of Kangue Loïc, a creative developer passionate about crafting unique digital experiences.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.kangueloic.me/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.kangueloic.me"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://www.kangueloic.me/about"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Projects",
              "item": "https://www.kangueloic.me/projects"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": "https://www.kangueloic.me/contact"
            }
          ]
        }
        ` }} />
      </head>
      <body>
      <Analytics/>
        <div className="w-screen h-[100vh] sm:w-[100%] md:h-[100vh] overflow-x-hidden bg-black text-white">
          <Header />
          {children}
          {isFooterVisible && <PartialFooter />}
          {isVisible && <Footer />}
        </div>
      </body>
    </html>
  );
}

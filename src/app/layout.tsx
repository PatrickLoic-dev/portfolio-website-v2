'use client';
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@portfolio/components/header";
import Footer from "@portfolio/components/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isVisible = false;
  const pathname = usePathname();

  if ( pathname === "/about" || pathname === "/projects" ) {
    isVisible = true;
  }


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="w-screen h-[100vh] sm:w-[100%] md:h-[100vh] overflow-x-hidden bg-black">
        <Header />
        {children}
        {isVisible && <Footer />}
      </body>
    </html>
  );
}

// src/app/layout.jsx

import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import NewFooter from "@/components/NewFooter";
import Script from "next/script";
import Header from "@/components/design/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PolishedPro Cleaners | Commercial & Residential Cleaning in Fort Lauderdale & Broward County",
  description: "Professional commercial and residential cleaning services in Fort Lauderdale, Davie, and Broward County, FL. Office cleaning, post-construction cleanup, janitorial services, and more. 77+ five-star reviews. Call (888) 262-6068.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="app-container bg-[--color-surface] text-[--color-text-primary]">
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NF67MJDV');`}
        </Script>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1224767959673506');
        fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF67MJDV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1224767959673506&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        <main className="main-content">{children}</main>
        <NewFooter />
      </body>
    </html>
  );
}

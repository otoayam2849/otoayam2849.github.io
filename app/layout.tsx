import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./reset.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAIKI TOHYAMA PORTFOLIO",
  description: "遠山大希 ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <Script
          id="typekit"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(d) {
                var config = {kitId: 'amb1yax', scriptTimeout: 3000, async: true},
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),
                tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;
                h.className+=" wf-loading";
                tk.src='https://use.typekit.net/'+config.kitId+'.js';
                tk.async=true;
                tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};
                s.parentNode.insertBefore(tk,s)
              })(document);`,
          }}
        />
        <Script
          src="https://kit.fontawesome.com/67ed3d1db7.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="site_body">
        <div className="bg_blobs">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div>
        <Loader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

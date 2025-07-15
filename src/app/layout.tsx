import type { Metadata } from "next";

import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/fontawesome-all.min.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/aos.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/extra.css";
import "../../public/assets/css/responsive.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
const appName = process.env.NEXT_PUBLIC_APP_NAME;
export const metadata: Metadata = {
  title: appName,
  description: appName+" app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PXT6K42C');`}}></Script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="main-con-body">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXT6K42C"
          height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/fontawesome-all.min.css";
import "../../../public/assets/css/animate.css";
import "../../../public/assets/css/aos.css";
import "../../../public/assets/css/slick.css";
import "../../../public/assets/css/custom.css";
import "../../../public/assets/css/responsive.css";
import "../../../public/assets/css/extra.css";
import "../../../public/assets/css/sb-admin-2.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME+" Admin",
  description: process.env.NEXT_PUBLIC_APP_NAME+" admin app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

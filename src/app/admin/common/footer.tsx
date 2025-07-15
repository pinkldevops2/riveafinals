"use client";
import Image from "next/image";
import Script from "next/script";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
   <>
    <footer className="sticky-footer bg-white">
        <div className="container my-auto">
            <div className="copyright text-center my-auto">
                <span>Copyright &copy; {process.env.NEXT_PUBLIC_APP_NAME} {currentYear}</span>
            </div>
        </div>
    </footer>
      <Script src="/assets/js/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/fontawesome-all.min.js" ></Script>
      
      {/* <Script src="/assets/js/slick.min.js" ></Script>
      <Script src="/assets/js/aos.js"></Script> */}
      <Script src="/assets/js/sb-admin-2.min.js"></Script>
      <Script src="/assets/js/vendor/jquery-easing/jquery.easing.min.js"></Script>
    </>
  );
}

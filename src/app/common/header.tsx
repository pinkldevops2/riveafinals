"use client";
import { getMenuList, getSettingsByType } from "@/utils/frontApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import BookAppointmentForm from "./BookAppointmentForm";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function Header() {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState<any>([]);
  const [sidebarMenu, setSidebarMenu] = useState<any>([]);
  const [settingsData, setSettingsData] = useState<any>([]);
  useEffect(() => {
    getMenuList('top').then(data => {
        if (data.success == true) {
          setTopMenu(data.data);  
        }
    });
    getMenuList('sidebar').then(data => {
      if (data.success == true) {
        setSidebarMenu(data.data);  
      }
    });
    getSettingsByType('general').then(data => {
      if(data.data && data.data[0]){
        setSettingsData(data.data[0]);
      }
    });
  }, []);
  return (
    <>
    <Script src="/assets/js/arrow-js/gsap.min.js" ></Script>       
    <Script src="/assets/js/arrow-js/ScrollTrigger.min.js" ></Script>
    <Script src="/assets/js/arrow-js/MotionPathPlugin.min.js" ></Script>
      <header className="header_sec">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-3 col-6">
                <Link className="logo_main" href={pathname == '/' ? '#': '/'} onClick={(e) => pathname == '/' && e.preventDefault()}>
                  {settingsData?.settingData?.headerLogo && settingsData?.settingData?.headerLogo != '' ? <img src={uploadsUrl+settingsData?.settingData?.headerLogo} alt="" /> :  <img src="/images/RIVEA_Logo.svg" alt="" />}
                </Link>
              </div>
              <div className="col-lg-9 col-6">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
    
                  <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                  <ul className="main_menu">
                    {topMenu.map((item: any) => (
                      <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li>
                    ))}
                    <li className="desk-btn"><Link className="btn_cmn book-btn" href="#">book An appointment</Link></li>
                    <li className="toggle_menu"><a href="#menu" id="toggle"><Image src="/images/menu-toggle.svg" alt="" width={72}
                            height={17} /></a></li>
    
                    <div id="sidebarMenu">
                      <div className="toogle_btn">X</div>
                      <ul>
                        {sidebarMenu.map((item: any) => (
                          <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li>
                        ))}
                        <li className="mobile-btn"><Link className="btn_cmn book-btn" href="#">book An appointment</Link></li>
                      </ul>
                    </div>
                  </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
      </header>
      <div className="popup_form">
      <div className="popup_form_main">
        <div className="popup_form_inner">
          <div className="close_icon">X</div>
            <BookAppointmentForm />
        </div>
      </div>
    </div>
      <div className="header_space"></div>
      <div className="window_full_overlay"></div>
    </>
  );
}

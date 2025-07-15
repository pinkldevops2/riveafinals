"use client";
import { getMenuList, getSettingsByType } from "@/utils/frontApi";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function Footer() {
  const currentYear = new Date().getFullYear();
   const [footerMenu, setFooterMenu] = useState<any>([]);
   const [settingsData, setSettingsData] = useState<any>([]);
    useEffect(() => {
      getMenuList('footer').then(data => {
          if (data.success == true) {
            setFooterMenu(data.data);  
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
    <footer className="footer_sec">
        <div className="container">
          <div className="footer_middle">
            <div className="row justify-content-between"> 
              <div className="col-xl-3">
                <div className="foot_info">
                  <div className="ftr_logo">
                   {settingsData?.settingData?.footerLogo && settingsData?.settingData?.footerLogo != '' ? <img src={uploadsUrl+settingsData?.settingData?.footerLogo} alt="" /> :  <img src="/images/RIVEA_Logo.svg" alt="" />} 
                  </div>
                  <p>{settingsData?.settingData?.needTtitle}</p>
                  {settingsData?.settingData?.needButton && <a href={settingsData.settingData.needButton.btnUrl} target={settingsData.settingData.needButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn">{settingsData.settingData.needButton.btnTitle}</a>}
                  <div className="mb-4 mb-md-0">
                  
                </div>
                </div>
              </div>
              <div className="col-1 col-md-1 col-xl-1">

            </div>
              <div className="col-6 col-md-4 col-xl-2 footer-menu-1">
                <div className="foot_info">
                  <ul className="footer_menu">
                    {footerMenu.map((item: any, index: any) =>
                        item.targetColumn === "column1" ? <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li> : null
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3 footer-menu-2">
                <div className="foot_info">
                
                  <ul className="footer_menu">
                  {footerMenu.map((item: any, index: any) =>
                        item.targetColumn === "column2" ? <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li> : null
                    )}
                  </ul>
                  
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-2 footer-menu-3">
                <div className="foot_info">
                
                  <ul className="footer_menu">
                  {footerMenu.map((item: any, index: any) =>
                        item.targetColumn === "column3" ? <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li> : null
                    )}
                  </ul>
                  
                </div>
              </div>
              <div className="col-2 col-md-2 col-xl-2">

              </div>
            </div>
          </div>
          <div className="ftr_copyright">
            <div className="row">
              <div className="col-md-6">
                <ul className="social_fixed">
                  {footerMenu.map((item: any, index: any) =>
                        item.targetColumn === "bottom_line" ? <li key={item._id}><Link target={item.targetWindow === true ? '_blank' : '_self'} href={item.url}>{item.title}</Link></li> : null
                    )}
                </ul>
                <ul className="social_fixed social-icons">
                  <li><a href={settingsData?.settingData?.facebook}><img src="/images/facebook.svg" /></a></li>
                  <li><a href={settingsData?.settingData?.instagram}><img src="/images/Instagram.svg" /></a></li>
                  <li><a href={settingsData?.settingData?.youtube}><img src="/images/Youtube.svg" /></a></li>
                </ul>
              </div>
              <div className="col-md-6 text-end">
                <p className="copyright_text">{settingsData?.settingData?.copyright}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top_btn">
         <button id="scrollTopBtn"><span>&#8593;</span></button>
     </div>
      </footer>
      <Script src="/assets/js/jquery-3.7.0.min.js" ></Script>
      <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/fontawesome-all.min.js" ></Script>
      
      <Script src="/assets/js/slick.min.js" ></Script>
      <Script src="/assets/js/aos.js"></Script>
      {/* <script src="assets/js/script_custom.js"></script> */}
    
    </>
  );
}

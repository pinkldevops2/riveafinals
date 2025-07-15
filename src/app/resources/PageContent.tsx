"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import ResourcesList from "./ResourcesList";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('resources').then(data => {
      if(data.data && data.data[0]){
        setData(data.data[0]);
      }
    });
  }, [currentDateTime]);
      useEffect(() => {
          setTimeout(function () {
            $(".loader_sec").fadeOut();
            $("body").css("overflow", "visible");
            // if ($("#videoSec1").length) {
            //   $('#videoSec1').get(0).play();
            // }
          }, 1500);
      }, [currentDateTime, slug]);
      
      useEffect(() => {
          document.querySelectorAll("script[data-custom-script]").forEach((script) => script.remove());
          const script = document.createElement("script");
          script.src = "/assets/js/script_custom.js";
          script.referrerPolicy = "origin";
          script.setAttribute("data-custom-script", "true");
          document.body.appendChild(script);
          return () => {
            
          };
        }, [currentDateTime, slug]);
        useEffect(() => {
          if(data){
            document.querySelectorAll("script[data-custom-page-script]").forEach((script) => script.remove());
            const scriptAnimation = document.createElement("script");
            scriptAnimation.src = "/assets/js/page-animation/resources.js";
            scriptAnimation.referrerPolicy = "origin";
            scriptAnimation.setAttribute("data-custom-page-script", "true");
            document.body.appendChild(scriptAnimation);
          }
        }, [data]);
  return (
    <>
      <Header />
      <section className="loader_sec">
          <div className="container-fluid position-relative">
            <div className="resize_svg svg_right svg_right1">
              <svg width="291" height="107" viewBox="0 0 291 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="loader2" d="M3 107V103C3 47.7715 47.7715 3 103 3H646.5" stroke="url(#paint0_linear_386_1106)" strokeWidth="6"/>
                <defs>
                <linearGradient id="paint0_linear_386_1106" x1="69.5" y1="2.99989" x2="-8.97031" y2="71.223" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55097B"/>
                <stop offset="0.527472" stopColor="#F00045"/>
                <stop offset="1" stopColor="white"/>
                </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="loader">
              <div className="loader_logo" data-aos="fade-up" data-aos-delay="50">
              </div>
            </div>
            
          </div>
        </section> 
        
        <main className="main-content footer_resources">
          {data?.settingData?.heroTitle && data?.settingData?.heroTitle != '' &&
          <section className="banner_section">
            <div className="container position-relative">
              <div className="shape_svg dash-journey news_svg resources-svg">
                <svg width="1190" height="627" viewBox="0 0 1190 627" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="banner_path" d="M1043.44 321.074V417.986V418.955C1043.44 427.255 1036.7 433.978 1028.4 433.954L18.0425 431.09C9.74164 431.067 3 437.789 3 446.09V627M1097.46 206.043H1172C1180.28 206.043 1187 199.328 1187 191.043V0" stroke="url(#paint0_linear_0_1)" strokeWidth="5.5"/>
                <path id="banner_path1" d="M1108.57 207.467L1105.71 204.231C1105.45 203.937 1105.13 203.702 1104.77 203.541C1104.41 203.381 1104.02 203.299 1103.63 203.3H1051.07C1048.13 203.3 1045.32 204.471 1043.24 206.554C1041.17 208.638 1040 211.464 1040 214.411V317.189C1040 320.136 1041.17 322.962 1043.24 325.046C1045.32 327.129 1048.13 328.3 1051.07 328.3H1128.53C1131.47 328.3 1134.28 327.129 1136.36 325.046C1138.43 322.962 1139.6 320.136 1139.6 317.189V243.578C1139.6 242.898 1139.36 242.241 1138.91 241.731L1109.17 208.147V207.467H1108.57ZM1134.07 317.189C1134.07 318.662 1133.48 320.075 1132.45 321.117C1131.41 322.159 1130 322.744 1128.53 322.744H1051.07C1049.6 322.744 1048.19 322.159 1047.15 321.117C1046.12 320.075 1045.53 318.662 1045.53 317.189V214.411C1045.53 212.938 1046.12 211.525 1047.15 210.483C1048.19 209.441 1049.6 208.856 1051.07 208.856H1102.39L1103.63 210.244V236.633C1103.63 238.475 1104.36 240.241 1105.66 241.544C1106.96 242.846 1108.72 243.578 1110.55 243.578H1133.13L1134.07 244.633V317.189ZM1128.21 238.022H1110.55C1110.18 238.022 1109.83 237.876 1109.57 237.615C1109.31 237.355 1109.17 237.002 1109.17 236.633V216.508L1128.21 238.022Z" fill="white"/>
                <path id="banner_path2" d="M1113.32 263.022H1060.75C1060.02 263.022 1059.31 263.315 1058.79 263.836C1058.28 264.357 1057.98 265.063 1057.98 265.8C1057.98 266.537 1058.28 267.243 1058.79 267.764C1059.31 268.285 1060.02 268.578 1060.75 268.578H1113.32C1114.05 268.578 1114.75 268.285 1115.27 267.764C1115.79 267.243 1116.08 266.537 1116.08 265.8C1116.08 265.063 1115.79 264.357 1115.27 263.836C1114.75 263.315 1114.05 263.022 1113.32 263.022Z" fill="white"/>
                <path id="banner_path3" d="M1113.32 281.772H1060.75C1060.02 281.772 1059.31 282.065 1058.79 282.586C1058.28 283.107 1057.98 283.813 1057.98 284.55C1057.98 285.287 1058.28 285.993 1058.79 286.514C1059.31 287.035 1060.02 287.328 1060.75 287.328H1113.32C1114.05 287.328 1114.75 287.035 1115.27 286.514C1115.79 285.993 1116.08 285.287 1116.08 284.55C1116.08 283.813 1115.79 283.107 1115.27 282.586C1114.75 282.065 1114.05 281.772 1113.32 281.772Z" fill="white"/>
                <path id="banner_path4" d="M1113.32 300.522H1060.75C1060.02 300.522 1059.31 300.815 1058.79 301.336C1058.28 301.857 1057.98 302.563 1057.98 303.3C1057.98 304.037 1058.28 304.743 1058.79 305.264C1059.31 305.785 1060.02 306.078 1060.75 306.078H1113.32C1114.05 306.078 1114.75 305.785 1115.27 305.264C1115.79 304.743 1116.08 304.037 1116.08 303.3C1116.08 302.563 1115.79 301.857 1115.27 301.336C1114.75 300.815 1114.05 300.522 1113.32 300.522Z" fill="white"/>
                <path id="banner_path5" d="M1060.75 244.967H1085.65C1086.38 244.967 1087.09 244.674 1087.61 244.153C1088.13 243.632 1088.42 242.926 1088.42 242.189C1088.42 241.452 1088.13 240.746 1087.61 240.225C1087.09 239.704 1086.38 239.411 1085.65 239.411H1060.75C1060.02 239.411 1059.31 239.704 1058.79 240.225C1058.28 240.746 1057.98 241.452 1057.98 242.189C1057.98 242.926 1058.28 243.632 1058.79 244.153C1059.31 244.674 1060.02 244.967 1060.75 244.967Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="1069.95" y1="298.321" x2="141.243" y2="661.446" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="0.399238" stopColor="#55097B"/>
                <stop offset="1" stopColor="#F00045"/>
                </linearGradient>
                </defs>
                </svg>




              </div>
            </div>
            <div className="container-fluid">
              <div className="banner_full">
                <div className="banner_img">
                  {data.settingData && data.settingData.heroImage && <img src={uploadsUrl+data.settingData.heroImage} title="Doctor List" alt="Doctor List" />}
                </div>
                <div className="container">
                  <div className="banner_content col-md-8">
                    {data.settingData && data.settingData.heroTitle && <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.settingData.heroTitle}}></h2>}
                  </div>
                </div>
              </div>
            </div>
          </section>
          }

          {data.settingData?.description && data.settingData.description != '' && 
            <section className="sec_padd find_best_health resources-wlcm-text">
              <div className="container">
                      <div className="row" dangerouslySetInnerHTML={{__html: data.settingData.description}}></div>
              </div>
            </section>
          }
          <ResourcesList />
      </main>
      <Footer />
    </>
  );
}

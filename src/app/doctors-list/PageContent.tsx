"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getBySlug, getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import DoctorList from "./DoctorList";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('doctors-list').then(data => {
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
            scriptAnimation.src = "/assets/js/page-animation/doctors-list.js";
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
        
        <main className="main-content ">
          {data?.settingData?.heroTitle && data?.settingData?.heroTitle != '' &&
  <section className="banner_section">
    <div className="container position-relative">
      <div className="shape_svg dash-journey doctor_svg">
        <svg width="1190" height="638" viewBox="0 0 1190 638" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="banner_path" d="M1043 381V496V499.949C1043 508.253 1036.25 514.977 1027.95 514.949L18.0505 511.551C9.74651 511.523 3 518.247 3 526.551V637.5M1097 244.5H1171.5C1179.78 244.5 1186.5 237.784 1186.5 229.5V0" stroke="url(#paint0_linear_0_1)" strokeWidth="5.5"/>
          <path id="banner_path1" d="M1153.53 382H1045.48C1042.94 382 1040.87 379.971 1040.87 377.476V351.887C1040.87 343.544 1046.23 335.99 1054.21 333.09C1054.24 333.08 1054.26 333.074 1054.28 333.065L1084.18 323.59V313.768C1084.18 312.792 1084.99 312 1085.98 312C1086.98 312 1087.79 312.792 1087.79 313.768V324.836C1087.79 324.965 1087.78 325.091 1087.76 325.214C1087.71 325.471 1087.6 325.711 1087.44 325.917C1087.29 326.122 1087.09 326.3 1086.85 326.426C1086.74 326.487 1086.62 326.533 1086.5 326.57L1055.43 336.42C1048.88 338.817 1044.48 345.03 1044.48 351.89V377.479C1044.48 378.025 1044.93 378.467 1045.48 378.467H1153.54C1154.09 378.467 1154.54 378.022 1154.54 377.479V351.89C1154.54 345.03 1150.14 338.817 1143.59 336.42L1112.52 326.576C1112.39 326.54 1112.28 326.491 1112.16 326.432C1111.93 326.303 1111.73 326.128 1111.57 325.923C1111.42 325.717 1111.31 325.481 1111.26 325.22C1111.24 325.097 1111.23 324.971 1111.23 324.842V313.805C1111.23 312.829 1112.04 312.037 1113.04 312.037C1114.04 312.037 1114.84 312.829 1114.84 313.805V323.596L1144.74 333.068C1144.76 333.077 1144.78 333.084 1144.81 333.093C1152.79 335.993 1158.15 343.547 1158.15 351.89V377.479C1158.15 379.971 1156.08 382 1153.53 382Z" fill="white" stroke="white" strokeWidth="2"/>
          <path id="banner_path2" d="M1099.51 341.088C1098.99 341.088 1098.49 340.859 1098.15 340.464L1084.62 324.853C1083.97 324.101 1084.05 322.961 1084.8 322.305C1085.55 321.654 1086.69 321.735 1087.35 322.487L1099.51 336.521L1111.67 322.49C1112.32 321.738 1113.46 321.657 1114.22 322.309C1114.97 322.961 1115.05 324.101 1114.4 324.857L1100.87 340.464C1100.53 340.862 1100.03 341.088 1099.51 341.088Z" fill="white"/>
          <path id="banner_path3" d="M1136.36 363.849H1132.91C1131.91 363.849 1131.1 363.037 1131.1 362.037C1131.1 361.038 1131.91 360.226 1132.91 360.226H1134.54V355.146C1134.54 351.394 1131.49 348.342 1127.74 348.342C1123.99 348.342 1120.93 351.394 1120.93 355.146V360.226H1122.57C1123.57 360.226 1124.38 361.038 1124.38 362.037C1124.38 363.037 1123.57 363.849 1122.57 363.849H1119.12C1118.12 363.849 1117.31 363.037 1117.31 362.037V355.146C1117.31 349.395 1121.99 344.719 1127.73 344.719C1133.48 344.719 1138.16 349.398 1138.16 355.146V362.037C1138.17 363.037 1137.36 363.849 1136.36 363.849Z" fill="white"/>
          <path id="banner_path4" d="M1127.74 348.339C1126.74 348.339 1125.93 347.527 1125.93 346.527V328.435C1125.93 327.435 1126.74 326.623 1127.74 326.623C1128.74 326.623 1129.55 327.435 1129.55 328.435V346.527C1129.55 347.527 1128.74 348.339 1127.74 348.339Z" fill="white"/>
          <path id="banner_path1" d="M1069.55 349.525C1068.55 349.525 1067.74 348.714 1067.74 347.714V328.991C1067.74 327.991 1068.55 327.18 1069.55 327.18C1070.55 327.18 1071.36 327.991 1071.36 328.991V347.714C1071.36 348.714 1070.55 349.525 1069.55 349.525Z" fill="white"/>
          <path id="banner_path5" d="M1069.55 363.311C1064.75 363.311 1060.84 359.406 1060.84 354.605C1060.84 349.803 1064.75 345.898 1069.55 345.898C1074.35 345.898 1078.26 349.803 1078.26 354.605C1078.26 359.406 1074.35 363.311 1069.55 363.311ZM1069.55 349.525C1066.75 349.525 1064.47 351.803 1064.47 354.605C1064.47 357.407 1066.75 359.685 1069.55 359.685C1072.35 359.685 1074.63 357.407 1074.63 354.605C1074.63 351.803 1072.35 349.525 1069.55 349.525Z" fill="white"/>
          <path id="banner_path6" d="M1125.99 283.143C1125.75 283.143 1125.5 283.093 1125.27 282.992C1124.35 282.594 1123.94 281.529 1124.33 280.614C1127.93 272.396 1131.35 257.447 1113.84 249.681C1107.56 246.891 1100.59 245.976 1093.7 247.036C1085.1 248.361 1074.7 252.392 1074.04 264.053C1074.02 264.376 1073.92 264.686 1073.74 264.953C1073.58 265.332 1071.42 270.923 1074.71 279.112C1075.08 280.037 1074.63 281.09 1073.7 281.46C1072.78 281.83 1071.73 281.381 1071.36 280.457C1068.07 272.255 1069.44 265.686 1070.46 263.464C1070.92 257.243 1073.7 252.294 1078.74 248.753C1082.44 246.152 1087.29 244.372 1093.15 243.469C1100.73 242.306 1108.39 243.315 1115.3 246.384C1136.43 255.754 1130.97 274.458 1127.65 282.065C1127.35 282.739 1126.68 283.143 1125.99 283.143ZM1073.71 264.984C1073.69 265.012 1073.67 265.044 1073.65 265.072C1073.66 265.05 1073.69 265.022 1073.71 264.984Z" fill="white" stroke="white" strokeWidth="2"/>
          <path id="banner_path7" d="M1099.51 317.929C1083.91 317.929 1071.22 305.24 1071.22 289.645V279.782C1071.22 278.785 1072.03 277.977 1073.03 277.977C1074.02 277.977 1074.83 278.785 1074.83 279.782V289.645C1074.83 303.249 1085.9 314.319 1099.51 314.319C1113.11 314.319 1124.18 303.249 1124.18 289.645V281.339C1124.18 280.343 1124.99 279.534 1125.98 279.534C1126.98 279.534 1127.79 280.343 1127.79 281.339V289.645C1127.79 305.24 1115.1 317.929 1099.51 317.929Z" fill="white" stroke="white" strokeWidth="2"/>
          <path id="banner_path8" d="M1125.99 283.143C1125.98 283.143 1125.98 283.143 1125.98 283.143C1110.96 283.062 1094.89 273.146 1089.52 269.529C1085.63 277.013 1077.23 280.363 1073.57 281.507C1072.61 281.805 1071.6 281.275 1071.3 280.323C1071.01 279.37 1071.54 278.358 1072.49 278.06C1075.2 277.214 1084.26 273.854 1087.06 266.176C1087.25 265.64 1087.69 265.229 1088.23 265.066C1088.77 264.9 1089.36 265.004 1089.82 265.339C1090.01 265.48 1109.2 279.442 1126 279.533C1126.99 279.539 1127.8 280.351 1127.79 281.348C1127.79 282.341 1126.98 283.143 1125.99 283.143Z" fill="white" stroke="white"/>
          <path id="banner_path9" d="M1073.68 297.262C1073.61 297.262 1073.54 297.259 1073.47 297.25C1073.42 297.243 1073.31 297.237 1073.19 297.228C1072.77 297.193 1072.69 297.187 1072.59 297.171C1068.27 296.46 1065.14 292.762 1065.14 288.377C1065.14 286.146 1065.96 284.018 1067.46 282.375C1067.7 282.112 1067.95 281.868 1068.21 281.642C1069.51 280.517 1071.08 279.793 1072.77 279.552C1073.76 279.411 1074.67 280.094 1074.81 281.081C1074.96 282.068 1074.27 282.983 1073.29 283.124C1072.28 283.269 1071.35 283.698 1070.58 284.366C1070.42 284.503 1070.27 284.651 1070.12 284.814C1069.23 285.785 1068.74 287.048 1068.74 288.374C1068.74 290.966 1070.58 293.156 1073.12 293.598C1073.2 293.605 1073.34 293.617 1073.48 293.627C1073.69 293.642 1073.88 293.661 1073.92 293.667C1074.9 293.802 1075.59 294.711 1075.46 295.698C1075.34 296.604 1074.57 297.262 1073.68 297.262Z" fill="white"/>
          <path id="banner_path10" d="M1125.32 297.334C1124.43 297.334 1123.66 296.676 1123.54 295.77C1123.4 294.783 1124.1 293.874 1125.09 293.739C1125.21 293.721 1125.83 293.611 1125.92 293.595C1128.44 293.144 1130.28 290.95 1130.28 288.377C1130.28 287.051 1129.79 285.785 1128.9 284.814C1128.75 284.651 1128.6 284.503 1128.44 284.365C1127.67 283.698 1126.74 283.269 1125.74 283.124C1124.75 282.98 1124.06 282.065 1124.21 281.081C1124.35 280.097 1125.27 279.411 1126.25 279.552C1127.94 279.796 1129.52 280.52 1130.81 281.642C1131.07 281.868 1131.32 282.112 1131.56 282.375C1133.06 284.018 1133.89 286.149 1133.89 288.377C1133.89 292.702 1130.81 296.394 1126.55 297.152C1126.45 297.171 1125.68 297.306 1125.58 297.322C1125.49 297.328 1125.41 297.334 1125.32 297.334Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_0_1" x1="1069.5" y1="354" x2="104" y2="672" gradientUnits="userSpaceOnUse">
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
        <div className="banner_img doctor_banner">

          {data?.settingData?.heroImage && <img src={uploadsUrl+data.settingData.heroImage} title="Doctor List" alt="Doctor List" />}
        </div>
        <div className="container">
          <div className="banner_content col-md-8">
            <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.heroTitle}}></h2>
            <div dangerouslySetInnerHTML={{__html: data?.settingData?.description}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
   }
    {data?.settingData?.globalExpertiseTitle && data?.settingData?.globalExpertiseTitle != '' &&
  <div className="care_container container care_container_sec pe-0  mb-md-4 beyond-container global_sec">
      <div className="row">
        <div className="col-md-12 col-lg-6 empowerleft_cont">
          <h2 className="common_head " dangerouslySetInnerHTML={{__html: data?.settingData?.globalExpertiseTitle}}></h2>
          <div dangerouslySetInnerHTML={{__html: data?.settingData?.globalExpertise}}></div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="global_slider care_slider2 care_slider_main">
            {data?.settingData?.globalExpertiseBlocks && data?.settingData?.globalExpertiseBlocks.map((item: any, index: any) => (
                  <div className="care_item" key={'expert-block-'+index}>
                    <div className="trust-box">
                        <img src="/images/border-frame-trust.png" alt="" />
                        <div className="trust-content">
                          {item?.image && <img src={uploadsUrl+item.image} className="svg_icon" />}
                          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                        </div>
                    </div>
                  </div>      
                )
              )}
          </div>
        </div>
      </div>
    </div>
    }
  {data?.settingData?.medicineTitle && data?.settingData?.medicineTitle != '' &&            
  <section className="sec_padd medicine-sec">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="medicine-sec-img">
            <img src="images/medicine-img.jpg" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="medicine-content">
            <h2 className="common_head" dangerouslySetInnerHTML={{__html: data?.settingData?.medicineTitle}}></h2>
            <div dangerouslySetInnerHTML={{__html: data?.settingData?.medicineDescription}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  {data?.settingData?.meetDoctorTitle && data?.settingData?.meetDoctorTitle != '' &&
  <div className="top-libe">
       <div className="support_line">
          <svg width="100%" height="100%" viewBox="0 0 1440 198" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="line1" d="M1450.5 157.986C1450.5 157.986 1259 157.986 1129.25 157.986C991.364 157.986 934.556 31.8567 798.5 9.48828C676.082 -10.638 640.746 22.4864 516.684 22.4864C301 22.4864 -9 22.4864 -9 22.4864" stroke="url(#paint0_linear_352_994)" strokeWidth="6"/>
             <path  id="line2" d="M1520 191.5C1326.5 191.5 1274.33 202.291 1075.5 186C807 164 833.5 60.0005 419.5 60.0001C232 59.9999 -38 60.0001 -38 60.0001" stroke="url(#paint1_linear_352_994)" strokeWidth="6"/>
             <defs>
                <linearGradient id="paint0_linear_352_994" x1="61.4537" y1="9.63194" x2="1426.5" y2="62.5" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#55097B"/>
                   <stop offset="1" stopColor="#F00045"/>
                </linearGradient>
                <linearGradient id="paint1_linear_352_994" x1="-6.68352" y1="697.097" x2="1483.81" y2="697.097" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#55097B"/>
                   <stop offset="0.122241" stopColor="#950565"/>
                   <stop offset="0.443908" stopColor="#BB0358"/>
                   <stop offset="1" stopColor="#F00045"/>
                </linearGradient>
             </defs>
          </svg>
       </div>
    </div>
  }
    {data?.settingData?.meetDoctorTitle && data?.settingData?.meetDoctorTitle != '' &&
   <section className="discover_sec meet-book-sec sec_padd position-relative mt-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-9">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.meetDoctorTitle}}></h2>
        </div>
        <div className="col-md-12 text-end book-box-btn">
          <a href={data?.settingData?.meetDoctorButton?.btnUrl} target={data?.settingData?.meetDoctorButton?.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{data?.settingData?.meetDoctorButton?.btnTitle}</a>
          <a href={data?.settingData?.meetDoctorButton2?.btnUrl} target={data?.settingData?.meetDoctorButton2?.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-s-13px">{data?.settingData?.meetDoctorButton2?.btnTitle}</a>
        </div>
      </div>
    </div>
  </section>
  }
  <DoctorList />
</main>
      
      <Footer />
    </>
  );
}

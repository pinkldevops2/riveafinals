"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getBySlug, getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import TestimonialsList from "./TestimonialsList";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('testimonial').then(data => {
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
            scriptAnimation.src = "/assets/js/page-animation/testimonials.js";
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
        
        <main className="main-content">
          {data?.settingData?.heroTitle && data?.settingData?.heroTitle != '' && 
          <section className="banner_section testimonials-banner">
            <div className="container position-relative">
              <div className="shape_svg dash-journey testimonial_svg">
                <svg width="1123" height="678" viewBox="0 0 1123 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="banner_path" d="M1072.5 387.5V497.5C1072.5 505.784 1065.78 512.5 1057.5 512.5H18C9.71576 512.5 3 519.216 3 527.5V677.5M998 235H1105C1113.28 235 1120 228.284 1120 220V0" stroke="url(#paint0_linear_0_1)" strokeWidth="6"/>
                  <path id="banner_path1" d="M992.668 373.665H998.335C998.335 367.413 993.252 362.332 987.002 362.332H955.835C952.712 362.332 950.169 359.793 950.169 356.666C950.169 353.541 952.712 350.999 955.835 350.999H981.833L1013 339.666H1038V334H1012L980.838 345.333H955.835C949.585 345.333 944.502 350.418 944.502 356.666C944.502 362.916 949.585 367.999 955.835 367.999H987.002C990.125 367.999 992.668 370.542 992.668 373.665Z" fill="white" stroke="white" strokeWidth="0.5"/>
                  <path id="banner_path2" d="M969.31 402.001H976.153L1024.32 385.001H1038V379.335H1023.35L975.183 396.334H970.693L900.908 360.045C900.131 359.155 899.167 357.656 899.167 356.667C899.167 353.674 901.499 351.215 904.443 351.016L949.325 365.039L951.011 359.627L904.833 345.334C898.583 345.334 893.5 350.419 893.5 356.667C893.5 360.552 896.786 363.958 897.161 364.333L897.86 364.846L969.31 402.001Z" fill="white" stroke="white" strokeWidth="0.5"/>
                  <path id="banner_path3" d="M1040.83 390.669H1074.83V385.003H1040.83V334.002H1074.83V328.336H1040.83C1037.71 328.336 1035.16 330.879 1035.16 334.004V385.003C1035.16 388.128 1037.71 390.669 1040.83 390.669Z" fill="white" stroke="white" strokeWidth="0.5"/>
                  <path id="banner_path4" d="M971.263 327.859L972.834 328.906L974.406 327.859C975.933 326.842 1002.02 309.257 1016.75 287.5L1012.28 284C1000.09 302.109 978.772 317.859 972.833 322.053C964.366 316.077 924.667 286.65 924.667 260.332C924.667 247.834 934.836 237.665 947.334 237.665C960.267 237.665 970 248.999 969.998 254.664H975.665C975.665 248.998 985.4 237.665 998.333 237.665H998.335V232C987.092 232 977.418 238.363 972.833 245.746C968.251 238.363 958.577 232 947.334 232C931.713 232 919.002 244.711 919.002 260.334C919.002 292.647 969.131 326.437 971.263 327.859Z" fill="white" stroke="white" strokeWidth="0.5"/>
                  <defs>
                  <linearGradient id="paint0_linear_0_1" x1="1003" y1="360" x2="37.4999" y2="678" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.445" stopColor="#55097B"/>
                  <stop offset="1" stopColor="#F00045"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="container-fluid ">
              <div className="banner_full">
                <div className="banner_img">
                  {data?.settingData?.heroImage && <img src={uploadsUrl+data.settingData.heroImage} title="testimonial" alt="testimonial" />}
                </div>
                <div className="container">
                  <div className="banner_content col-md-8">
                    <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.heroTitle}}></h2>
                    <p  dangerouslySetInnerHTML={{__html: data?.settingData?.heroDescription}} className="univia-pro text-start text-white"></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          }
          {data?.settingData?.subTitle && data?.settingData?.subTitle != '' &&
          <section className="sec_padd your-story-sec testimonials-sec pb-0">
              <div className="container position-relative">
                      <div className="row">
                        <h2 className="common_head pt-2" dangerouslySetInnerHTML={{__html: data?.settingData?.subTitle}}></h2>
                        <div dangerouslySetInnerHTML={{__html: data?.settingData?.description}}></div>
                    </div>
              </div>
          </section>
          }
          <TestimonialsList />

          </main>
      
      <Footer />
    </>
  );
}

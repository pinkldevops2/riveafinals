"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getBySlug, getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import NewsList from "./NewsList";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('news').then(data => {
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
            scriptAnimation.src = "/assets/js/page-animation/news.js";
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
        
        <main className="main-content footer_minus">
          {data?.settingData?.heroTitle && data?.settingData?.heroTitle != '' &&
            <section className="banner_section">
              <div className="container position-relative">
                <div className="shape_svg dash-journey news_svg">
                  <svg width="1186" height="678" viewBox="0 0 1186 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="banner_path" d="M3 677.5V527.5C3 519.216 9.71576 512.5 18 512.5H1057.5C1065.78 512.5 1072.5 505.784 1072.5 497.5V391H999C993.477 391 989 386.523 989 381V245C989 239.477 993.477 235 999 235H1120V0M1165 391H1097.5" stroke="url(#paint0_linear_0_1)" strokeWidth="6"/>
                    <path id="banner_path1" d="M1146 249.5V378C1146 378 1148.5 391 1164.5 391C1179 391 1182.5 378 1182.5 378C1182.5 378 1182.5 348 1182.5 286C1182.5 278 1169 277.5 1169 277.5" stroke="white" strokeWidth="6"/>
                    <path id="banner_path2" d="M1051.5 291H1121" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                    <path id="banner_path3" d="M1030 352.5L1121 352.5" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                    <path id="banner_path4" d="M1030 321.5L1121 321.5" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_0_1" x1="1003" y1="360" x2="37.4999" y2="678" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="0.4" stopColor="#55097B"/>
                    <stop offset="1" stopColor="#F00045"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="container-fluid news_banner">
                <div className="banner_full ">
                  <div className="banner_img">
                   {data?.settingData?.heroImage &&  <img src={uploadsUrl+data.settingData.heroImage} title="News List" alt="News List" />}
                  </div>
                  <div className="container">
                    <div className="banner_content col-md-8">
                      <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.heroTitle}}></h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            }
            {data?.settingData?.findHereTitle && data?.settingData?.findHereTitle != '' && 
          <section className="sec_padd find_best_health">
            <div className="container">
                <div className="row">
                  <div dangerouslySetInnerHTML={{__html: data?.settingData?.description}}></div>
                    <h2 className="common_head find-title" dangerouslySetInnerHTML={{__html: data?.settingData?.findHereTitle}}></h2>
                 </div>
                <div className="row find-row">
                  {data?.settingData?.findHereBlocks.map((item: any, index: any) => (
                    <div className="col-md-4" key={index}>
                    <div className="find_box">
                      <img src="/images/find-frame.svg" className="find-img" />
                      <div className="find-content">
                        <div className="icon">{item.image && <img src={uploadsUrl+item.image}  />}</div>
                        <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                      </div>
                    </div>
                  </div>
                  ))}
                  <div className="col-md-3"></div>
                </div>

            </div>
          </section>
          }
          <NewsList />
          {data?.settingData?.learnTogetherTitle && data?.settingData?.learnTogetherTitle != '' && 
          <section className="sec_padd learn-sec">
          <div className="container">
            <h2 className="common_head" dangerouslySetInnerHTML={{__html: data?.settingData?.learnTogetherTitle}}></h2>
            <div className="row">
              {data?.settingData?.learnTogetherBlocks.map((item: any, index: any) => (
                  <div className="col-md-4" key={index}>
                  <div className="learn-box">
                    {item.image && <img src={uploadsUrl+item.image}  />}
                    <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </section>
        }
        {data?.settingData?.stayInformTitle && data?.settingData?.stayInformTitle != '' &&
        <section className="curve_sec sec_padd">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-12 " data-aos="fade-left">
                <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.stayInformTitle}}></h2>
                <div dangerouslySetInnerHTML={{__html: data?.settingData?.stayInformDescription}}></div>
                <div className="text-end view-all-btn">
                  {data?.settingData?.stayInformButton && <a href={data.settingData.stayInformButton.btnUrl} target={data.settingData.stayInformButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn">{data.settingData.stayInformButton.btnTitle}</a>}
                </div>
              </div>
            </div>
          </div>
          <div className="svg_bottom">
            <svg width="100%" height="100%" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="svgpath6" d="M0.601562 102.547C0.601562 102.547 171.213 19.5426 323.473 9.46913C443.882 1.50291 542.929 -3.15698 649.134 21.2296C803.963 56.7809 966.434 136.105 1091 140.547C1276.91 147.176 1448 53.0469 1448 53.0469" stroke="url(#paint0_linear_386_859)" strokeWidth="6"/>
              <defs>
              <linearGradient id="paint0_linear_386_859" x1="1418.74" y1="94.2501" x2="26.0126" y2="94.2501" gradientUnits="userSpaceOnUse">
              <stop stopColor="#420C59"/>
              <stop offset="1" stopColor="#F00045"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
        }
      </main>
      
      <Footer />
    </>
  );
}

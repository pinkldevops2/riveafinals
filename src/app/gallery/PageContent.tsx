"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getBySlug, getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import GalleryList from "./GalleryList";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('gallery').then(data => {
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
            scriptAnimation.src = "/assets/js/page-animation/gallery.js";
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
  <section className="gallery_banner sec_padd">
    <div className="mv_svg">
      <svg width="100%" height="100%" viewBox="0 0 1440 266" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="missionsvg1" d="M696.5 107V103C696.5 47.7715 651.728 3 596.5 3H-133" stroke="url(#paint0_linear_386_1610)" strokeWidth="6"/>
        <path id="missionsvg2" d="M697 159V163C697 218.228 741.772 263 797 263H1526.5" stroke="url(#paint1_linear_386_1610)" strokeWidth="6"/>
        <defs>
        <linearGradient id="paint0_linear_386_1610" x1="444" y1="2.99998" x2="708.739" y2="37.8641" gradientUnits="userSpaceOnUse">
        <stop stopColor="#55097B"/>
        <stop offset="0.527472" stopColor="#F00045"/>
        <stop offset="1" stopColor="white"/>
        </linearGradient>
        <linearGradient id="paint1_linear_386_1610" x1="949.5" y1="263" x2="684.761" y2="228.136" gradientUnits="userSpaceOnUse">
        <stop stopColor="#55097B"/>
        <stop offset="0.527472" stopColor="#F00045"/>
        <stop offset="1" stopColor="white"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-5 pt-5">
          <h2 className="common_head" dangerouslySetInnerHTML={{__html: data?.settingData?.heroTitle}}></h2>
          <p className="univia-pro text-start" dangerouslySetInnerHTML={{__html: data?.settingData?.description}}></p>
        </div>
        <div className="col-md-5 gal_rgt" dangerouslySetInnerHTML={{__html: data?.settingData?.rightDescription}}>
        </div>
        
      </div>
    </div>
  </section>
}
  <section>
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-12">
          {data?.settingData?.featuredVideo && 
            <div className="video_sec video_full">
              <video id="videoSec2" loop  muted className="videoSec" poster={uploadsUrl+data.settingData.featuredVideoPoster} preload="none">
                <source src={uploadsUrl+data.settingData.featuredVideo} data-wf-ignore="true" />
              </video>
              <span className="playBtn"><img src="/images/play.svg" /></span>
            </div>
          }
        </div>
      </div>
    </div>
  </section>
  <GalleryList />
</main>
      
      <Footer />
    </>
  );
}

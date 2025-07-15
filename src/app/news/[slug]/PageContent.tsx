"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getNewsBySlug} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/uploads';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const [nextSlug, setNextSlug] = useState<any>('');
  const [prevSlug, setPrevSlug] = useState<any>('');
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getNewsBySlug(slug).then(data => {
              if (data.success == true && data.data) {
                setData(data.data);
                setPrevSlug(data.previous);
                setNextSlug(data.next);
              } else {
                //console.log(data);
                  
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
          


          // Remove old injected scripts before adding new ones
          document.querySelectorAll("script[data-dynamic]").forEach((script) => script.remove());
  
          // Extract and execute new scripts
          const scriptTags = document.getElementById("dynamic-content")?.getElementsByTagName("script");
          if (scriptTags) {
            Array.from(scriptTags).forEach((oldScript) => {
                const newScript = document.createElement("script");

                if (oldScript.src) {
                    newScript.src = oldScript.src;
                    newScript.async = true;
                } else {
                    newScript.text = `(function(){${oldScript.innerHTML}})();`;
                }

                newScript.setAttribute("data-dynamic", "true");
                document.body.appendChild(newScript);
                oldScript.remove();
            });
          }

          const containerBlcok = document.getElementById("dynamic-content");
          if (containerBlcok) {
            containerBlcok.querySelectorAll("p").forEach((p: any) => {
                  if (!p.textContent.trim() && p.children.length === 0) {
                      p.remove();
                  }
              });
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
        {data && data.slug ? (
          <main className={"main-content footer_resources"}>
            <section className="sec_padd single-resources">
            <div id="dynamic-content" dangerouslySetInnerHTML={{ __html: data.description }}></div>
            <div className="nav-sec">
              <div className="nav-sec-inner">
                {prevSlug ?  <a href={'/news/'+prevSlug} className="prev-page"><img src="/images/left_arrow.png" /></a> :  <img src="/images/prev-btn.png" />}
                {nextSlug ? <a href={'/news/'+nextSlug} className="next-page disabled"><img src="/images/next-btn.png" /></a> : <img src="/images/disable-right-arrow.png" />}
              </div>
            </div>
          </section>
          </main>
        ) : (
          <>
            <main className="main-content" id="dynamic-content">
              <section className="sec_padd">
                <div className="text-center">
                  <h5>News could not be found.</h5>
                  </div>
              </section>
            </main>
          </>
          
        )}
        
      <Footer />
    </>
  );
}

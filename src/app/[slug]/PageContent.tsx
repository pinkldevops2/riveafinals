"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getBySlug} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import FrontAboutTemplate from "../templates/FrontAboutTemplate";
import FrontHomeTemplate from "../templates/FrontHomeTemplate";
import FrontSpecializationsTemplate from "../templates/FrontSpecializationsTemplate";
import FrontCareAtTemplate from "../templates/FrontCareAtTemplate";
import FrontContactUsTemplate from "../templates/FrontContactUsTemplate";
import FrontConditionsWeTreatTemplate from "../templates/FrontConditionsWeTreatTemplate";
import FrontHighwayToHealthTemplate from "../templates/FrontHighwayToHealthTemplate";
import FrontInterventionalRadiologyTemplate from "../templates/FrontInterventionalRadiologyTemplate";
import FrontVascularEndovascularSurgeryTemplate from "../templates/FrontVascularEndovascularSurgeryTemplate";
import FrontThankYouTemplate from "../templates/FrontThankYouTemplate";
import FrontFaqTemplate from "../templates/FrontFaqTemplate";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/uploads';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  const { slug } = params;
  useEffect(() => {
    getBySlug(slug).then(data => {
              if (data.success == true) {
                setData(data.data);
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

          if(data.page_template && data.page_template != ''){
            document.querySelectorAll("script[data-custom-page-script]").forEach((script) => script.remove());
            const scriptAnimation = document.createElement("script");
            if(data.page_template == 'about'){
              scriptAnimation.src = "/assets/js/page-animation/about.js";
            }
            if(data.page_template == 'specializations'){
              scriptAnimation.src = "/assets/js/page-animation/specializations.js";
            }
            if(data.page_template == 'care-at-rivea'){
              scriptAnimation.src = "/assets/js/page-animation/care-at-rivea.js";
            }
            if(data.page_template == 'contact-us'){
              scriptAnimation.src = "/assets/js/page-animation/contact-us.js";
            }
            if(data.page_template == 'conditions-we-treat'){
              scriptAnimation.src = "/assets/js/page-animation/conditions-we-treat.js";
            }
            if(data.page_template == 'highway-to-health'){
              scriptAnimation.src = "/assets/js/page-animation/highway-to-health.js";
            }
            if(data.page_template == 'interventional-radiology'){
              scriptAnimation.src = "/assets/js/page-animation/interventional-radiology.js";
            }
            if(data.page_template == 'vascular-endovascular-surgery'){
              scriptAnimation.src = "/assets/js/page-animation/vascular-endovascular-surgery.js";
            }
            if(data.page_template == 'faq'){
              scriptAnimation.src = "/assets/js/page-animation/faq.js";
            }
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

          // if (slug == 'services' || slug == 'care-at-rivea') {
          //   const container = document.getElementById("services_form");
          //   if (container) {
          //     container.innerHTML = ""; // Clear previous content
          //     const formDiv = document.createElement("div");
          //     container.appendChild(formDiv);
      
          //     import("react-dom").then((ReactDOM: any) => {
          //       if (ReactDOM.render) {
          //         // For React 17
          //         ReactDOM.render(<ServiceForm />, formDiv);
          //       } else {
          //         // For React 18+
          //         const { createRoot } = require("react-dom/client");
          //         createRoot(formDiv).render(<ServiceForm />);
          //       }
          //     });
          //   }
          // }
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
        {data.template_data && data.page_template == 'about' && (
              <FrontAboutTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'home' && (
              <FrontHomeTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'specializations' && (
              <FrontSpecializationsTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'care-at-rivea' && (
              <FrontCareAtTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'contact-us' && (
              <FrontContactUsTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'conditions-we-treat' && (
              <FrontConditionsWeTreatTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'highway-to-health' && (
              <FrontHighwayToHealthTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'interventional-radiology' && (
              <FrontInterventionalRadiologyTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'vascular-endovascular-surgery' && (
              <FrontVascularEndovascularSurgeryTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'thank-you' && (
              <FrontThankYouTemplate data={data.template_data}/>
        )}
        {data.template_data && data.page_template == 'faq' && (
              <FrontFaqTemplate data={data.template_data}/>
        )}
        {data && data.content ? (
          <main className={data.isFooterAnimationTemplate ? "main-content footer_minus" : "main-content"}>
            <div id="dynamic-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </main>
        ) : (
          <>
          { !data.page_template &&
            <main className="main-content" id="dynamic-content">
              <section className="sec_padd"></section>
              <section className="sec_padd">
                <div className="text-center">
                  <h5>This page could not be found.</h5>
                  </div>
              </section>
              <section className="sec_padd"></section>
            </main>
          }
          </>
          
        )}
        
      <Footer />
    </>
  );
}

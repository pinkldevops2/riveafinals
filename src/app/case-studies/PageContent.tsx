"use client";
import { useEffect, useState } from "react";
import Header from "@/app/common/header";
import Footer from "@/app/common/footer";
import {getCaseStudyCategory, getCaseStudyCategoryPost, getCaseStudyTypes, getSettingsByType} from '@/utils/frontApi';
import { useParams } from "next/navigation";
import $ from "jquery";
import moment from "moment";

const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';
export default function PageContent(currentDateTime: any) {
  const [data, setData] = useState<any>([]);
  const [caseStudyType, setCaseStudyType] = useState<any>([]);
  const [caseStudyCategory, setCaseStudyCategory] = useState<any>([]);
  const [caseStudyCategoryPost, setCaseStudyCategoryPost] = useState<any>([]);
  const params = useParams<{ slug: string }>()
  
  const { slug } = params;
  useEffect(() => {
    getSettingsByType('case-studies').then(data => {
      if(data.data && data.data[0]){
        setData(data.data[0]);
      }
    });

    getCaseStudyTypes().then(data => {
      if(data.data && data.data){
        setCaseStudyType(data.data);
      }
    });
    getCaseStudyCategory().then(data => {
      if(data.data && data.data){
        setCaseStudyCategory(data.data);
        getCaseStudyCategoryPost().then(data => {
          if(data.data && data.data){
            setCaseStudyCategoryPost(data.data);
          }
        });
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
            scriptAnimation.src = "/assets/js/page-animation/case-studies.js";
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
  <section className="banner_section case-studies-banner">
    <div className="container position-relative">
      <div className="shape_svg dash-journey case_svg">
        <svg width="1123" height="678" viewBox="0 0 1123 678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="banner_path" d="M1082.5 396V505.881C1082.5 514.212 1075.71 520.947 1067.38 520.881L18.118 512.619C9.78784 512.553 3 519.288 3 527.619V677.5M998 235H1105C1113.28 235 1120 228.284 1120 220V0" stroke="url(#paint0_linear_386_2266)" strokeWidth="6"/>
          <path id="banner_path1" d="M1063 297C1063 331.242 1035.24 359 1001 359C966.758 359 939 331.242 939 297C939 262.758 966.758 235 1001 235" stroke="white" strokeWidth="6"/>
          <rect x="1038" y="347.102" width="20" height="20.9858" transform="rotate(-44.8304 1038 347.102)" stroke="white" strokeWidth="6"/>
          <path id="banner_path2" d="M1083.08 398.385L1048 363.102L1068.44 342.785L1093.35 367.85C1098.96 373.494 1098.94 382.617 1093.29 388.227V388.227" stroke="white" strokeWidth="6"/>
          <circle cx="999" cy="298" r="47" stroke="white" strokeWidth="6"/>
          <defs>
          <linearGradient id="paint0_linear_386_2266" x1="1003" y1="360" x2="37.4999" y2="678" gradientUnits="userSpaceOnUse">
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
          {data?.settingData?.heroImage && <img src={uploadsUrl+data.settingData.heroImage} title="" alt="" />}
        </div>
        <div className="container case_banner_content">
          <div className="banner_content col-md-8 ">
            <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.settingData?.heroTitle}}></h2>
            <p dangerouslySetInnerHTML={{__html: data?.settingData?.heroDescription}} className="univia-pro text-start text-white"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  <section className="sec_padd health_sec case-studeis-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs1" id="TreatmentTab" role="tablist">
            {caseStudyType && caseStudyType.map((item: any, index: any) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button className={index== 0 ? "btn_cmn white_btn nav-link active" : "btn_cmn white_btn nav-link" } id="radiology-tab" data-bs-toggle="tab" data-bs-target={"#radiology"+item._id} type="button" role="tab" aria-selected="false">
                       {item.type}
                    </button>
                </li>
                )
              )}
            </ul>
        </div>
      </div>
    </div>

    <div className="tab-content" id="tab-content">
      {caseStudyType && caseStudyType.map((item: any, index: any) => {
        let indexCount= 1;
        let caseCount= 1;
        return (
                  <div className={index== 0 ? "tab-pane fade active show" : "tab-pane fade" } id={"radiology"+item._id} role="tabpanel" key={'type-'+item._id}>
                    <div className="container ">
                      <div className="row mb-4 align-items-center">
                        <div className="col-md-12 ">
                          <h2 className="common_head" dangerouslySetInnerHTML={{__html: item.title}}></h2>
                          <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                        </div>
                        <div className="about-faq about-faq-sec" >
                        {caseStudyCategory && caseStudyCategory.map((item2: any, index2: any) => {
                          if(item2.typeId == item._id){
                            return (
                              <div className={index == 0 && index2 == 0 ? "faq_sec on" : "faq_sec"} key={item2._id}>
                                  <div className={index == 0 && index2 == 0 ? "faq_head on" : "faq_head"}>
                                    <h3 className="faq_title" dangerouslySetInnerHTML={{__html: (indexCount++)+'. '+item2.name}}></h3>
                                  </div>
                                  <div className="faq-content" style={{display:  index == 0 && index2 == 0 ? "block" : "none"}}>
                                    {item2.description != '' && <p className="max-w" dangerouslySetInnerHTML={{__html: item2.description}}></p>}
                                    <div className="row row-mt">
                                      {caseStudyCategoryPost && caseStudyCategoryPost.map((item3: any, index3: any) => {
                                        if(item2._id == item3.categoryId){
                                          return (
                                              <div className="col-md-4" key={item3._id}>
                                                <div className="case-box">
                                                  <div className="case-img">
                                                    <img src={uploadsUrl+item3.image} />
                                                  </div>
                                                  <div className="case-content">
                                                      <div className="case-t"><span dangerouslySetInnerHTML={{__html: item3.subTitle}}></span><span className="case">Case {caseCount++}</span></div>
                                                      <h5 dangerouslySetInnerHTML={{__html: item3.title}}></h5>
                                                      <div className="case-b">
                                                        <span><i className="fa-regular fa-calendar"></i>  {moment(item3.createdAt).format('MMMM Do YYYY')}</span>
                                                        <a href={"/case-studies/"+item3.slug}>Read More <img src="/images/btn-arrow.svg" /></a>
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          }
                                        })
                                      }
                                    </div>
                                  </div>
                              </div>
                            
                            )
                          }
                        }
                      )}
                       </div>
                      </div>
                    </div>
                    {item.storyTitle != '' && 
                    <section className="curve_sec curve_sec_opp1 sec_padd">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-12">
                            <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: item?.storyTitle}}></h2>
                            <div className="text-end">
                              {item?.storyButton && <a href={item.storyButton.btnUrl} target={item.storyButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{item.storyButton.btnTitle}</a>}
                              {item?.storyButton2 && <a href={item.storyButton2.btnUrl} target={item.storyButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-13px">{item.storyButton2.btnTitle}</a>}
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
                  </div>
                  )
                }
              )}
              </div>
        </section>  
      </main>
      <Footer />
    </>
  );
}

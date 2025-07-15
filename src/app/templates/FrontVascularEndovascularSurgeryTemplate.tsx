import React, { useState, useEffect } from "react";
import Link from "next/link";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontVascularEndovascularSurgeryTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    useEffect(()=>{
   
    
    }, [])
    return(
    <main className="main-content footer_vas">
  {data?.hero?.title && data?.hero?.title != '' &&
  <section className="gred_banner banner_section">

    

    <div className="container-fluid">
      <div className="banner_home">
        <div className="inner_banner_img">
          <div className="inner_banner">
            <img src={uploadsUrl+data.hero.image} alt="" />
          </div>
        </div>
        <div className="container container-banner">
          <div className="banner_content">
            <h1 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.hero.title }}></h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  {data?.pioneering?.description && data.pioneering.description != '' &&
  <section className="text_sec sec_padd text-sec-content-vas ">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey ">
          <svg width="6" height="3500" viewBox="0 0 6 3500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath3" d="M3 0.5L3 3500L3 3500" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey2">
            <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.7002 44L16.7002 33.5L30.7002 23L16.7002 13L2.7002 3" stroke="url(#paint0_arrow)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_arrow" x1="560.266" y1="-254.745" x2="-98.57" y2="7.67047" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F00045"/>
            <stop offset="0.867981" stopColor="#C10355"/>
            </linearGradient>
            </defs>
          </svg>
          </div>
        </div>
    </div>

    <div className="container container-wlcm">
      <div className="row align-items-center">
        <div className="col-md-7  order-md-2">
          <div className=""  dangerouslySetInnerHTML={{ __html: data.pioneering.description }}></div>
        </div>

        <div className="col-md-5 order-md-1 ">
          <img className="pe-md-5" src={uploadsUrl+data.pioneering.image} />
        </div>
      </div>
    </div>
  </section>
  }
  {data?.vascularCare?.title && data?.vascularCare?.title != '' &&
  <section className=" trust_sec vascular-region-sec areas-vec-effect">
    <div className="container container-ip-60">
        <h2 className="common_head mt-5" dangerouslySetInnerHTML={{ __html: data.vascularCare.title }}></h2>
    </div>
    <div className="container container-ip-60 vas-container">
        <div className="row">
          {data.vascularCare.accordionItems && data.vascularCare.accordionItems.map((item: any, index: any) => {
            return (
              <div className="col-md-3" key={"cvtaccscare"+index}>
                <div className="trust-box">
                    <img src="/images/vascular-frame.png" />
                    <div className="trust-content">
                      <img src={uploadsUrl+item.image} className="svg_icon" />
                      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                    </div>
                </div>
              </div>
              )
            })}
        </div>
    </div>
  </section>
  }
  {data?.advancedVascular?.title && data?.advancedVascular?.title != '' && 
  <section className=" sec_padd vascular-sec">
    
    <div className="top_svg">
      <svg width="100%" height="100%" viewBox="0 0 1440 165" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="rad1" d="M-497 90.0524C-484.761 90.0524 -103.831 90.0524 123.854 90.0524C264.047 90.0524 257.928 10.9395 388.663 3.33532C519.399 -4.26888 554.329 119.982 671.274 119.992C871.55 120.01 1440 119.992 1440 119.992" stroke="url(#paint0_linear_0_1)" strokeWidth="6"/>
          <path id="rad2" d="M-499 65.0005C-499 65.0005 -99.0078 64.9994 142.988 65.0005C299.845 65.0012 373.328 161.189 530.182 161.993C609.459 162.399 652.568 144.783 731.567 138.755C887.008 126.895 1454 138.755 1454 138.755" stroke="url(#paint1_linear_0_1)" strokeWidth="6"/>
          <defs>
          <linearGradient id="paint0_linear_0_1" x1="796.856" y1="49.9607" x2="-452.669" y2="49.9607" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55097B"/>
          <stop offset="0.479" stopColor="#F00045"/>
          </linearGradient>
          <linearGradient id="paint1_linear_0_1" x1="808.755" y1="103.933" x2="-445.056" y2="103.933" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55097B"/>
          <stop offset="0.514" stopColor="#F00045"/>
          </linearGradient>
          </defs>
      </svg>
    </div>


    
    <div className="container container-ip-40 innovative-container innovative-container-vascular">
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head mt-5" dangerouslySetInnerHTML={{ __html: data.advancedVascular.title }}></h2>
        </div>
      </div>
      <div className="row trust-row">
        <div className="col-md-12">
          <div className="accordion advanced-vascular-accordion vas-advance-accordion" id="advanced-vascular">
            <div className="about-faq">
              {data.advancedVascular.accordion && data.advancedVascular.accordion.map((item: any, index: any) => {
                        return (
                          <div className="faq_sec" key={"tab2dd"+index}>
                            <div className={index==0 ? "faq_head_v on" : "faq_head_v"}>
                              <h3 className="faq_title" dangerouslySetInnerHTML={{__html: `${index+1}. `+ item.title}}></h3>
                            </div>
                            <div className="faq-content_v" style={{display: index== 0 ? 'block' : 'none'}}>
                              <div className="row head-accordion">
                                <div className="col-md-6">
                                  {item.accordionItems && item.accordionItems.map((item2: any, index2: any) => {
                                      if(index2 % 2 === 0){
                                      return (
                                      <div className="accordion-item" key={"cvtaccddn"+index+index2}>
                                          <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseTwoLeft'+index2} aria-expanded="false" aria-controls="collapseOne">
                                            <h4 dangerouslySetInnerHTML={{__html: item2.title}}></h4>
                                          </button>
                                        </h2>
                                        <div id={'collapseTwoLeft'+index2} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular">
                                          <div className="accordion-body">
                                            <span dangerouslySetInnerHTML={{__html: item2.description}}></span>
                                         
                                          </div>
                                        </div>
                                           <div className="learn-more-btn">Learn More</div>
                                      </div>
                                      )
                                      }
                                    })}
                                </div>
                                <div className="col-md-6">
                                  {item.accordionItems && item.accordionItems.map((item2: any, index2: any) => {
                                      if(index2 % 2 !== 0){
                                      return (
                                      <div className="accordion-item" key={"cvtaccddn"+index+index2}>
                                          <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseTwoRight'+index2} aria-expanded="false" aria-controls="collapseOne">
                                            <h4 dangerouslySetInnerHTML={{__html: item2.title}}></h4>
                                            
                                          </button>
                                        </h2>
                                        <div id={'collapseTwoRight'+index2} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular">
                                          <div className="accordion-body">
                                            <span dangerouslySetInnerHTML={{__html: item2.description}}></span>
                                          </div>
                                        </div>
                                        <div className="learn-more-btn">Learn More</div>
                                      </div>
                                      )
                                      }
                                    })}
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        )
                        })
                      }
            
          </div>
      </div>
    </div>
    </div>
    </div>
    <div className="container position-relative">
      
    </div>
  </section>
  }
  {data?.experienceFuture?.title && data?.experienceFuture?.title != '' && 
<section className="curve_sec sec_padd">
    <div className="container">
      <div className="row align-items-end">
        <div className="col-md-12 " data-aos="fade-left">
          <h2 className="common_head text-white"  dangerouslySetInnerHTML={{ __html: data.experienceFuture.title }}></h2>
          <div className="text-end view-all-btn">
            <a href={data.experienceFuture.ctaButton.btnUrl} target={data.experienceFuture.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn">{data.experienceFuture.ctaButton.btnTitle}</a>
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
{data?.visionaryLeader?.topDescription && data.visionaryLeader.topDescription != '' &&
  <section className="sec_padd mt-0 wc_exprt_sec ir_wc_expert_sec ve_wc_expert_sec">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey">
          <svg width="6" height="2600" viewBox="0 0 6 2600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath4" d="M3 0.5L3 2600L3 2600" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey4">
            <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.7002 44L16.7002 33.5L30.7002 23L16.7002 13L2.7002 3" stroke="url(#paint0_arrow)" strokeWidth="6"/>
              <defs>
              <linearGradient id="paint0_arrow" x1="560.266" y1="-254.745" x2="-98.57" y2="7.67047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F00045"/>
              <stop offset="0.867981" stopColor="#C10355"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
    </div>

      <div className="container container-ip-60">
         <div className="row row-mt">
          <div className="col-md-8  mb-4 pad-rgt">
            <div className="mb-5" dangerouslySetInnerHTML={{ __html: data.visionaryLeader.topDescription }}>
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: data.visionaryLeader.firstdescription }}></div>
          </div>
          <div className="col-md-4">
            <div className="doc-img">
              <div className="doc-img-inner">
                <img src={uploadsUrl+data.visionaryLeader.doctor_image} />
              </div>
              <div className="doc-details">
                <h3 dangerouslySetInnerHTML={{ __html: data.visionaryLeader.doctor_name }}></h3>
                <h5 dangerouslySetInnerHTML={{ __html: data.visionaryLeader.doctor_education }}></h5>
                <ul className="social_icon">
                   <li><a href={data.visionaryLeader.twitter} target="_blank" tabIndex={-1}><img src="/images/tw.svg" style={{width:'30px'}} /></a></li>
                  <li><a href={data.visionaryLeader.linkedin} target="_blank" className="mx-1" tabIndex={-1}><img src="/images/li.svg" style={{width:'30px'}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12" dangerouslySetInnerHTML={{ __html: data.visionaryLeader.description }}>
          </div>
         </div>
        

      </div>
   </section>
}
  <section className=" vas-slider-sec">
    {data?.visionaryLeader?.accordion && data?.visionaryLeader?.accordion &&
    <div className="container-fluid container-slider">
      <div className="row">
        <div className="col-md-12">
          <div className="slider-section">
            <div className="vascular-slider">
              {data.visionaryLeader.accordion && data.visionaryLeader.accordion.map((item: any, index: any) => {
                return (
                  <div className="slider-box" key={"cvtaccsrightdd"+index}>
                    <div className="slider-content">
                      <img src={uploadsUrl+item.image} />
                      <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                    </div>
                  </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  {data?.visionaryLeader?.bottomDescription && data.visionaryLeader.bottomDescription != '' &&
    <div className="slider-btm-sec sec_padd">
      <div className="container container-ip-60">
        <div className="row">
          <div className="col-md-12">
            <div className="">
                <div className="content-box">
                  <div className="svg-box" data-aos="fade-left">
                    <img src="/images/eye-animation.svg" className="reveal-animation" alt="Union Image" />
                  </div>
                  <div className="content-inner">
                    <div dangerouslySetInnerHTML={{ __html: data.visionaryLeader.bottomDescription }}></div>
                    <div className="text-end">
                      <a href={data.visionaryLeader.ctaButton.btnUrl} target={data.visionaryLeader.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn">{data.visionaryLeader.ctaButton.btnTitle}</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
  </section>

</main>
    )
}

export default FrontVascularEndovascularSurgeryTemplate
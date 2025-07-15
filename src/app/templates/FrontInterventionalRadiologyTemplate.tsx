import React, { useState, useEffect } from "react";
import Link from "next/link";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontInterventionalRadiologyTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    useEffect(()=>{
   
    
    }, [])
    return(
    <main className="main-content footer_minus">
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
  <section className="text_sec sec_padd text-sec-content">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey dash-journey-1">
          <svg width="6" height="250" viewBox="0 0 6 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath3" d="M3 0.5L3 250L3 250" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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

    <div className="container container-wlcm wlcm_container-IR">
      <div className="row align-items-center">
        <div className="col-md-7  order-md-2">
          <div className="ps-md-5" dangerouslySetInnerHTML={{ __html: data.pioneering.description }}>
          </div>
        </div>

        <div className="col-md-5 order-md-1 ">
          <img className="" src={uploadsUrl+data.pioneering.image} />
        </div>
      </div>
    </div>
  </section>
  }
  {data?.trustRIVEA?.title && data?.trustRIVEA?.title != '' &&
  <section className=" trust_sec trust_sec_inner">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey dash-journey3">
          <svg width="6" height="3300" viewBox="0 0 6 3300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath4" d="M3 0.5L3 250L3 3300" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey3">
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
    <div className="container container-ip-50">
        <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.trustRIVEA.title }}></h2>
    </div>
    <div className="container container-ip-50 trust-container">
        <div className="row">
          {data.trustRIVEA.accordionItems && data.trustRIVEA.accordionItems.map((item: any, index: any) => (
                <div className="col-md-3" key={"firfirst"+index}>
                  <div className="trust-box">
                      <img src="/images/border-frame-trust.png" />
                      <div className="trust-content">
                        <img src={uploadsUrl+item.image} className="svg_icon"></img>
                        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                      </div>
                  </div>
                </div>
            ))}
        </div>
    </div>
  </section>
  }
  {data?.radiologySolutions?.title && data?.radiologySolutions?.title != '' &&
  <section className="sec_padd innovation-sec">
    
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


    
    <div className="container container-ip-40 innovative-container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head " dangerouslySetInnerHTML={{ __html: data.radiologySolutions.title }}></h2>
        </div>
      </div>
      <div className="row trust-row">
        <div className="col-md-12">
          <div className="accordion advanced-vascular-accordion" id="innovative-interventional-radiology">
            <div className="row">
              <div className="col-md-6">
                {data.radiologySolutions.accordionItems && data.radiologySolutions.accordionItems.map((item: any, index: any) => {
                  if(index % 2 === 0){
                  return (
                    <div className="accordion-item" key={"firaccordin"+index}>
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOneL"+index} aria-expanded="false" aria-controls="collapseOne">
                        <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                        </button>
                      </h2>
                      <div id={"collapseOneL"+index} className="accordion-collapse collapse" data-bs-parent="#innovative-interventional-radiology">
                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.description }}>
                        </div>
                      </div>
                      <div className="learn-more-btn"><a href={item.learnMore}>Learn More</a></div>
                    </div>
                )
                }
              })}
              </div>

              <div className="col-md-6">
                {data.radiologySolutions.accordionItems && data.radiologySolutions.accordionItems.map((item: any, index: any) => {
                  if(index % 2 !== 0){
                  return (
                    <div className="accordion-item" key={"firaccordin"+index}>
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOneR"+index} aria-expanded="false" aria-controls="collapseOne">
                        <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                        </button>
                      </h2>
                      <div id={"collapseOneR"+index} className="accordion-collapse collapse" data-bs-parent="#innovative-interventional-radiology">
                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.description }}>
                        </div>
                      </div>
                      <div className="learn-more-btn"><Link href={item.learnMore}>Learn More</Link></div>
                    </div>
                )
                }
              })}
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    <div className="container position-relative">
      
    </div>
  </section>
  }
  {data?.personalizedAttention?.title && data?.personalizedAttention?.title != '' &&
  <section className="sec_padd mt-0 wc_exprt_sec ir_wc_expert_sec expert_sec_doctors">
      <div className="container-90">
         <div className="row " >
            <div className="col-md-8 text-white mb-4">
              <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.personalizedAttention.title }}></h2>
            </div>
            <div className="col-md-4 text-white" dangerouslySetInnerHTML={{ __html: data.personalizedAttention.topDescription }}></div>
         </div>
         <div className="row align-items-center row-mt">
          <div className="col-md-8 text-white mb-4 pad-rgt">
            <div className="mb-5" dangerouslySetInnerHTML={{ __html: data.personalizedAttention.firstdescription }}>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.personalizedAttention.description }}></div>
          </div>
          <div className="col-md-4">
            <div className="doc-img doc-img-box">
              <div className="doc-img-inner">
                <img src={uploadsUrl+data.personalizedAttention.doctor_image} alt="" />
              </div>
              <div className="doc-details">
                <h3 dangerouslySetInnerHTML={{ __html: data.personalizedAttention.doctor_name }}></h3>
                <h5 dangerouslySetInnerHTML={{ __html: data.personalizedAttention.doctor_education }}></h5>
                <ul className="social_icon">
                  <li><a href={uploadsUrl+data.personalizedAttention.linkedin}  target="_blank" tabIndex={-1}><img src="/images/tw.svg" style={{width:'30px'}} /></a></li>
                  <li><a href={uploadsUrl+data.personalizedAttention.twitter} className="mx-1" target="_blank" tabIndex={-1}><img src="/images/li.svg" style={{width:'30px'}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
         </div>
        
        <div className="row mt-5">
          {data.personalizedAttention.accordion && data.personalizedAttention.accordion.map((item: any, index: any) => {
                  return (
                    <div className="col-md-3" key={"firpersaccordin"+index}>
                      <div className="trust-box">
                        <img src="/images/white-border.png" />
                        <div className="trust-content">
                            <img src={uploadsUrl+item.image} className="svg_icon"></img>
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                          </div>
                      </div>
                    </div>
                  )
              })}
        </div>

      </div>
   </section>
}
{data?.areasofExpertise?.title && data.areasofExpertise.title != '' &&
  <section className="sec_padd areas-sec areas-vec-effect">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey area-dash">
          <svg width="6" height="1600" viewBox="0 0 6 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath5" d="M3 0.5L3 1600L3 1600" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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

    <div className="container container-ip-70">
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.areasofExpertise.title }}></h2>
        </div>
      </div>
      <div className="row trust-row">
        {data.areasofExpertise.accordion && data.areasofExpertise.accordion.map((item: any, index: any) => {
            return (
              <div className="col-md-3" key={"firexpertaccordin"+index}>
                <div className="cmn-box">
                  <div className="cmn-box-inner" dangerouslySetInnerHTML={{ __html: item.description }}>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
      <div className="row">
        <div className="col-md-12" dangerouslySetInnerHTML={{ __html: data.areasofExpertise.description }}></div>
      </div>
    </div>
  </section>
}
  
{data?.experienceFuture?.title && data?.experienceFuture?.title != '' &&
  <section className="curve_sec sec_padd">
    <div className="container">
      <div className="row align-items-end">
        <div className="col-md-11 " data-aos="fade-left">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.experienceFuture.title }}></h2>
          <div className="text-end view-all-btn">
            <a href={data.experienceFuture.ctaButton.btnUrl} target={data.experienceFuture.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn">{data.experienceFuture.ctaButton.btnTitle}</a>
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
    )
}

export default FrontInterventionalRadiologyTemplate
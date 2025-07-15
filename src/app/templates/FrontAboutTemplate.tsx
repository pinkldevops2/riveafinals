import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontAboutTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    const faqClassNames = ['grid-box tall one', 'grid-box wide two', 'grid-box three', 'grid-box tall four', 'grid-box tall five', 'grid-box wide six'];
                    
    useEffect(()=>{
        // Define paths and lengths
        
    }, [])
    return(
        <main className="main-content footer_minus about-us-page">
            {data?.hero?.title && data?.hero?.title != '' && 
            <section className="gred_banner banner_section">
                <div className="container-fluid">
                <div className="banner_home">
                    <div className="banner_img">
                    <div className="banner_gradiant">
                        <img src="/images/banner-gradiant.svg" />
                        <svg width="63" height="583" viewBox="0 0 63 583" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6778 582C13.6778 582 -0.431438 509.446 4.57458 451.517C8.75987 403.085 38.2924 351.233 49.1461 304.13C62.4746 246.287 60.0838 206.886 57.4335 159.403C53.4366 87.7941 23.1267 0.999994 23.1267 0.999994" stroke="white" strokeWidth="6"></path>
                        <path d="M13.6778 582C13.6778 582 -0.431438 509.446 4.57458 451.517C8.75987 403.085 38.2924 351.233 49.1461 304.13C62.4746 246.287 60.0838 206.886 57.4335 159.403C53.4366 87.7941 23.1267 0.999994 23.1267 0.999994" stroke="url(#paint0_linear_386_2473)" strokeWidth="6"></path>
                        <defs>
                        <linearGradient id="paint0_linear_386_2473" x1="38.7394" y1="33.4268" x2="38.7394" y2="562.471" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55097B"></stop>
                        <stop offset="0.36" stopColor="#F00045"></stop>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
                    <img src={uploadsUrl+data.hero.image} className="banner_cover_img" title="About Us" alt="About Us" />
                    </div>
                    <div className="container">
                    <div className="banner_content">
                        <h1 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.hero.title }}></h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            }
            {data?.atRivea?.description && data?.atRivea?.description != '' && 
            <section className="text_sec sec_padd about-right-text">
                <div className="container position-relative">
                <div className="dash-journey">
                    <svg width="6" height="250" viewBox="0 0 6 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="svgpath3" d="M3 0.5L3 250L3 250" stroke="url(#paint0_linear_386_753)" strokeWidth="6"></path>
                        <defs>
                        <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#55097B"></stop>
                        <stop offset="0.99688" stopColor="#F00045"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className="arrow-journey arrow-journey2" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '3.3% 50%', transform: 'translate3d(1.911px, -108.408px, 0px)', opacity: 1}}>
                        <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.7002 44L16.7002 33.5L30.7002 23L16.7002 13L2.7002 3" stroke="url(#paint0_arrow)" strokeWidth="6"></path>
                        <defs>
                        <linearGradient id="paint0_arrow" x1="560.266" y1="-254.745" x2="-98.57" y2="7.67047" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F00045"></stop>
                        <stop offset="0.867981" stopColor="#C10355"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
                    </div>
                    </div>
                </div>
                <div className="container">
                <div className="row align-items-center1">
                    <div className="col-md-6 offset-md-1 order-md-2 fadetopeffect">
                    <div className="content">
                        <div dangerouslySetInnerHTML={{__html: data.atRivea.description}}></div>
                    </div>
                    </div>

                    <div className="col-md-5 order-md-1 ">
                    <img className="pe-md-51" src={uploadsUrl+data.atRivea.image} alt="" />
                    </div>
                </div>
                </div>
            </section>
            }
            {data?.statements?.title && data?.statements?.title != '' && 
            <section className="aboutgrad_sec sec_padd about-grad-sec">
                    <div className="mv_svg">
                        <svg width="100%" height="100%" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="missionsvg1" d="M737 280V337.44C737 380.828 772.172 416 815.56 416H1441" stroke="url(#paint0_linear_386_2478)" strokeWidth="8" style={{strokeDashoffset: '806px', strokeDasharray: '806.299'}}></path>
                            <path id="missionsvg2" d="M737 330V82.5597C737 39.1724 701.828 4 658.44 4L-14 4" stroke="url(#paint1_linear_386_2478)" strokeWidth="8" style={{strokeDashoffset: '-1043px', strokeDasharray: '1043.3'}}></path>
                            <defs>
                            <linearGradient id="paint0_linear_386_2478" x1="734.238" y1="155.377" x2="1062.31" y2="535.043" gradientUnits="userSpaceOnUse">
                            <stop offset="0.350347" stopColor="#F00045"></stop>
                            <stop offset="1" stopColor="#F7FAFF"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_386_2478" x1="739.954" y1="338.964" x2="270.732" y2="-69.1961" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F00045"></stop>
                            <stop offset="1" stopColor="#F7FAFF"></stop>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-12 col-lg-5">
                            <div className="mv_left_main">
                                <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.statements.title}}></h2>
                                <div dangerouslySetInnerHTML={{__html: data.statements.description}}></div>
                            </div>
                            </div>
                            <div className="col-md-12 col-lg-5 mt-min">
                            <div className="mv_right_main">
                                <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.statements.rightTitle}}></h2>
                                <div dangerouslySetInnerHTML={{__html: data.statements.rightDescription}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms_sect_over_curve">
                    <img src="/images/curve_top_shape.webp" />
                </div>
            </section>
            }
          {data?.vascularCenter?.title && data?.vascularCenter?.title != '' &&
            <section className="radial_sec sec_padd z-index-down vascular-center-sec">
     <div className="container position-relative">
      <div className="dash-journey dash-journey-middle">
          <svg width="6" height="1150" viewBox="0 0 6 1150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath1" d="M3 0.5L3 1150L3 1150" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey1 arrow-journey">
            <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.7002 44L16.7002 33.5L30.7002 23L16.7002 13L2.7002 3" stroke="url(#paint0_arrow)" strokeWidth="6"></path>
            <defs>
            <linearGradient id="paint0_arrow" x1="560.266" y1="-254.745" x2="-98.57" y2="7.67047" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F00045"></stop>
            <stop offset="0.867981" stopColor="#C10355"></stop>
            </linearGradient>
            </defs>
          </svg>
          </div>
        </div>
    </div>
   
    <div className="top_svg rad1-hide">
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


    
    <div className="care_container container about_a_first_sec">
      <div className="row">
        <div className="col-md-12 col-lg-7 pe-lg-0">
          <h2 className="common_head mt-5" dangerouslySetInnerHTML={{__html: data.vascularCenter.title}}></h2>
          <div className="mt-5 pt-5 resize_svg svg_left" data-aos="fade-left">
            <img src="/images/Union1.svg" className="reveal-animation" alt="Union Image" />
          </div>
        </div>
        <div className="col-md-12 col-lg-5 ps-lg-0">
          <div className="text_desc mt-5 mb-4">
            <div  dangerouslySetInnerHTML={{__html: data.vascularCenter.description}}></div>
          </div>
            <div className="care_slider">
                {data.vascularCenter.slider && data.vascularCenter.slider.map((item: any, index: any) => (
                <div className="care_item care_desc" key={"scare"+index}>
                    <img src={uploadsUrl+item.image}  />
                    <div>
                        <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                        <h4 dangerouslySetInnerHTML={{__html: item.title}}></h4>
                    </div>
                </div>
                ))}
          </div>
        </div>
      </div>
    </div>
    <div className="container position-relative">
      
    </div>
  </section>
 }
 {data?.ledBy?.title && data?.ledBy?.title != '' && 
<section className="sec_padd mt-0 wc_exprt_sec about_wc_exprt_sec">
      <div className="care_container abtcare_container care_lead_container  container">


        
         <div className="row">
            <div className="col-md-12 text-white mb-4">
              <div className="abt_carecont_leftpadd">
              <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.ledBy.title}}></h2>
               
                  <div className="row mt-4 align-items-center row-lead-team">
                   <div className="col-md-12  col-lg-8 text-white tab_cont_pos">
                    <h4 className="p-20">{data.ledBy.tab1Title}</h4>
                     <div dangerouslySetInnerHTML={{__html: data.ledBy.tab1Description}}></div>
                  </div>
                    <div className="col-md-12 col-lg-3 offset-lg-1 text-white">
                       <div className="care_Experts_slider care_Experts_slider_about text-white">
                        {data.ledBy.sliderTab1 && data.ledBy.sliderTab1.map((item: any, index: any) => (
                            <div className="slide_item" key={"scared"+index}>
                                <div className="content">
                                    <img src={uploadsUrl+item.image} />
                                    <div className="slide_text ">
                                    <h3>{item.title}</h3>
                                    <h5>{item.designation}</h5>
                                    <div className="hover-content" style={{display: 'none'}}>
                                            <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                            <ul className="social_icon">
                                            <li><a href={item.twitter} target="_blank"><img src="/images/tw.svg" style={{width:'30px'}}/></a></li>
                                            <li><a href={item.linkedin} target="_blank"><img src="/images/li.svg" style={{width:'30px'}}/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                       </div>
                    </div>
                  </div>
         
                   <div className="row mt-5 align-items-end row-lead-team-btm">
                      <div className="col-md-3  text-white">
                          <div className="care_Experts_slider care_Experts_slider_about text-white">
                            {data.ledBy.sliderTab2 && data.ledBy.sliderTab2.map((item: any, index: any) => (
                                <div className="slide_item" key={"scaredd"+index}>
                                    <div className="content">
                                        <img src={uploadsUrl+item.image} />
                                        <div className="slide_text ">
                                        <h3>{item.title}</h3>
                                        <h5>{item.designation}</h5>
                                        <div className="hover-content" style={{display: 'none'}}>
                                                <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                                <ul className="social_icon">
                                                <li><a href={item.twitter} target="_blank"><img src="/images/tw.svg" style={{width:'30px'}}/></a></li>
                                                <li><a href={item.linkedin} target="_blank"><img src="/images/li.svg" style={{width:'30px'}}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                          </div>
                      </div>  
                      <div className="col-md-8 offset-md-1 text-white tab_cont_pos">
                          <h4 className="p-20">{data.ledBy.tab2Title}</h4>
                          <div dangerouslySetInnerHTML={{__html: data.ledBy.tab2Description}}></div>
                      </div>
                  </div>
               </div>
            </div>

            
         </div>
      </div>
   </section>
   }
  {/* <section className="sec_padd mt-0 wc_exprt_sec about_wc_exprt_sec">
      <div className="care_container abtcare_container care_lead_container container">


        
         <div className="row">
            <div className="col-md-12 text-white mb-4">
              <div className="abt_carecont_leftpadd">
                <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.ledBy.title}}></h2>
                <ul className="nav nav-tabs1 about-tab" id="TreatmentTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btn_cmn white_btn nav-link active" id="radiology-tab" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-selected="false">
                         {data.ledBy.tab1Title}
                        </button>
                    </li>
                    <li className="nav-item me-3" role="presentation">
                        <button className="btn_cmn white_btn nav-link " id="vascular-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-selected="true">
                           {data.ledBy.tab2Title}
                        </button>
                    </li>

                </ul>

                <div className="tab-content" id="tab-content">
                 <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                  <div className="row mt-4">
                   <div className="col-md-12  col-lg-5 text-white tab_cont_pos">
                         <div dangerouslySetInnerHTML={{__html: data.ledBy.tab1Description}}></div>
                    </div>
                    <div className="col-md-12 col-lg-6 offset-lg-1 text-white">
                        <div className="care_Experts_slider care_Experts_slider_about text-white">
                            {data.ledBy.sliderTab1 && data.ledBy.sliderTab1.map((item: any, index: any) => (
                            <div className="slide_item" key={"scared"+index}>
                                <div className="content">
                                    <img src={uploadsUrl+item.image} />
                                    <div className="slide_text ">
                                    <h3>{item.title}</h3>
                                    <h5>{item.designation}</h5>
                                    <div className="hover-content">
                                            <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                            <ul className="social_icon">
                                            <li><a href={item.twitter} target="_blank"><img src="/images/tw.svg" style={{width:'30px'}}/></a></li>
                                            <li><a href={item.linkedin} target="_blank"><img src="/images/li.svg" style={{width:'30px'}}/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                        </div>
                    </div>
                 </div>

                 <div className="tab-pane fade " id="tab-2" role="tabpanel">
                   <div className="row mt-4">
                        <div className="col-md-5 text-white tab_cont_pos">
                            <div className="univia-pro p-20" dangerouslySetInnerHTML={{__html: data.ledBy.tab2Description}}></div>
                        </div>
                        <div className="col-md-12 col-lg-6 offset-lg-1 text-white">
                            <div className="care_Experts_slider care_Experts_slider_about text-white">
                                {data.ledBy.sliderTab2 && data.ledBy.sliderTab2.map((item: any, index: any) => (
                                <div className="slide_item" key={"scaredd"+index}>
                                    <div className="content">
                                        <img src={uploadsUrl+item.image} />
                                        <div className="slide_text ">
                                        <h3>{item.title}</h3>
                                        <h5>{item.designation}</h5>
                                        <div className="hover-content">
                                                <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                                <ul className="social_icon">
                                                <li><a href={item.twitter} target="_blank"><img src="/images/tw.svg" style={{width:'30px'}}/></a></li>
                                                <li><a href={item.linkedin} target="_blank"><img src="/images/li.svg" style={{width:'30px'}}/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                    
                 </div>
               </div>
               </div>
            </div>

            
         </div>
      </div>
   </section> */}
{data?.beyondHealthcare?.title && data?.beyondHealthcare?.title != '' &&
  <section className="sec_padd position-relative  empower_sec">
    <div className="container position-relative">
      <div className="dash-journey dash-inter-journey">
          <svg width="6" height="2500" viewBox="0 0 6 2500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath4" d="M3 0.5L3 2500L3 2500" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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

    <div className="care_container container care_container_sec container-ip pe-0  mb-md-4 beyond-container">
      <div className="row">
        <div className="col-md-12 col-lg-7 empowerleft_cont">
          <h2 className="common_head " dangerouslySetInnerHTML={{__html: data.beyondHealthcare.title}}></h2>
          <div dangerouslySetInnerHTML={{__html: data.beyondHealthcare.description}}></div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="care_slider2 care_slider_main">
            {data.beyondHealthcare.slider && data.beyondHealthcare.slider.map((item: any, index: any) => (
                <div className="care_item" key={"scares"+index}>
                    <img src={uploadsUrl+item.image} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container container-ip pe-0 mt-md-4 mb-md-4" style={{display: 'none'}}>
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head mt-5">Behind Every Award is a Promise We Keep</h2>
          <p className="p-20 univia-pro">We earn our awards and certifications to prove our commitment to your health, your trust, and your journey. These recognitions aren't just badges – they're our pledge that every interaction, every treatment, every moment of care is delivered with global expertise and genuine compassion.</p>
        </div>
      </div>
      <div className="row pt-4 awards-row">
        <div className="col-md-6 col-lg-3">
          <div className="award-box"> <img src="/images/certificate-img.png" alt="certificate image" /></div>
        </div>
       <div className="col-md-6 col-lg-3">
          <div className="award-box"> <img src="/images/certificate-img.png" alt="certificate image" /></div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="award-box"> <img src="/images/certificate-img.png" alt="certificate image" /></div>
        </div>
        <div className="col-md-6 col-lg-3">
         <div className="award-box"> <img src="/images/certificate-img.png" alt="certificate image" /></div>
        </div>
      </div>
    </div> */}
    <div className="container container-ip pe-0">
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head mt-5" dangerouslySetInnerHTML={{__html: data.yourNeeds.title}}></h2>
          <div dangerouslySetInnerHTML={{__html: data.yourNeeds.description}}></div>
        </div>
     </div>

     <div className="row">
       <div className="col-md-12">
    
          <div className="about-faq about-faq-sec">
            {data.yourNeeds.slider && data.yourNeeds.slider.map((item: any, index: any) => (
                <div className="faq_sec" key={"testim"+index}>
                <div className="faq_head">
                   <h3 className="faq_title" dangerouslySetInnerHTML={{__html: item.title}}></h3>
                 </div>
                <div className="faq-content">
                  <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                  {item.image && item.image.length > 0 &&
                  <div className="grid-box-sec">
                    {item.image.map((item1: any, index1: any) => (
                        <div className={faqClassNames[index1]} key={"images-"+index1}>
                            <img src={uploadsUrl+item1.image} />
                        </div>
                    ))}
                  </div>
                  }
                </div>
            </div>
            ))}
            
        </div>
       </div>
     </div>
    </div>
  </section>
}
{data?.helth?.title && data?.helth?.title != '' &&
  <section className="curve_sec curve_sec_opp1 sec_padd">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.helth.title}}></h2>
          <div dangerouslySetInnerHTML={{__html: data.helth.description}}></div>
        </div>
        <div className="col-md-4 text-end">
          <a href={data.helth.ctaButton1.btnUrl} target={data.helth.ctaButton1.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{data.helth.ctaButton1.btnTitle}</a>
          <a href={data.helth.ctaButton2.btnUrl} target={data.helth.ctaButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-13px">{data.helth.ctaButton2.btnTitle}</a>
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

export default FrontAboutTemplate
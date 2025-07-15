import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontHomeTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    useEffect(()=>{

    }, [])
    return(
        <main className="main-content footer_minus">
            
       {data?.hero?.title && data?.hero?.title != '' &&
        <section className="home_banner_sec sec_padd py-0">
    <div className="container position-relative">
      <div className="dash-journey">

        <svg width="6" height="2000" viewBox="0 0 6 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="svgpath1" d="M3 0.5L3 725L3 2000" stroke="url(#paint0_linear_386_753)" stroke-width="6"/>
          <defs>
          <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
          <stop stop-color="#55097B"/>
          <stop offset="0.99688" stop-color="#F00045"/>
          </linearGradient>
          </defs>
        </svg>
        <div className="arrow-journey arrow-journey1">
          <svg width="36" height="47" viewBox="0 0 36 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.7002 44L16.7002 33.5L30.7002 23L16.7002 13L2.7002 3" stroke="url(#paint0_arrow)" stroke-width="6"/>
            <defs>
            <linearGradient id="paint0_arrow" x1="560.266" y1="-254.745" x2="-98.57" y2="7.67047" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F00045"/>
            <stop offset="0.867981" stop-color="#C10355"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    

    <div className="banner">
        <div className="">
                    <div className="banner-text container">
                        <div className="col-lg-6 col-md-5 col-5">
                            <h2 className="common_head white-text banner-heading">Enlarged prostate? <span>Surgery isn’t your</span> only option</h2>
                            <p className="banner-pera">Rediscover relief with Prostate Artery Embolization — a minimally invasive treatment that ensures no cuts, excellent safety profile compared to surgery, and no long hospital stays.</p>
                        </div>
                    </div>
                </div>
    <div className="">
        <div className="banner-image">
            <div className="curved-bg">
                <img className="" src="images/image1.png" />
                 
            </div>
            <div className="bg-img">
                <img className="" src="images/bg1221.jpg" />
            </div>
        </div>
    </div>
   
</div>
  </section>
        }
        {data?.meet?.title && data?.meet?.title != '' &&
        <section className="sec_padd hom_ab_sec">
            

            <div className="container container-ip pe-md-0">
            <div className="row">
                <div className="col-md-7 " data-aos="fade-left">
                <h1 className="common_head" dangerouslySetInnerHTML={{ __html: data.meet.title }}></h1>
                
                <div>
                    <div dangerouslySetInnerHTML={{ __html: data.meet.description }}></div>
                    <a href={data.meet.ctaButton.btnUrl} target={data.meet.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn mt-md-5">{data.meet.ctaButton.btnTitle}</a>
                </div>
                </div>

                <div className="col-md-5 text-end mt-5 mt-md-0">
                <div className="resize_svg svg_right svg_right2">
                    <svg width="539" height="349" viewBox="0 0 539 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="svgpath3" d="M3 348.5V81.5598C3 38.1724 38.1724 3 81.5597 3H631.5" stroke="url(#paint0_linear_386_855)" strokeWidth="6"/>
                    <defs>
                    <linearGradient id="paint0_linear_386_855" x1="-6.52601e-06" y1="358" x2="518.105" y2="-14.1667" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7FAFF"/>
                    <stop offset="0.435245" stopColor="#55097B"/>
                    <stop offset="1" stopColor="#F00045"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>
                {data.meet.banner && <img className="ms-md-5" src={uploadsUrl+data.meet.banner} />}
                </div>
            </div>
            </div>
        </section>
        }
        {data?.region_first?.title && data?.region_first?.title != '' &&
        <section className="sec_padd interventional_care">
            <div className="container">
            <div className="row">
                <div className="col-md-6 order-md-2 " data-aos="fade-right">
                    <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.region_first.title }}></h2>
                    <div className="pe-md-5" dangerouslySetInnerHTML={{ __html: data.region_first.description }}></div>
                </div>

                <div className="col-md-6 order-md-1 bg_img1 fademove pb-5">
                    {data.region_first.banner && <img className="pe-md-5" src={uploadsUrl+data.region_first.banner} />}
                </div>
            </div>
            </div>
        </section>
        }
        {data?.complexity?.heading && data?.complexity?.heading != '' &&
        <section className="gradiant_sec home_gradiant_sec  sec_padd">
            <div className="container">
            <div className="row">
                <div className="col-md-6 order-md-2">
                <div className="svg_right root_svg">
                    <svg width="723" height="2715" viewBox="0 0 723 2715" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    <path id="root1" d="M278.5 -145C278.5 19.8306 458.989 87.8541 461.989 240.566C464.989 393.277 265.506 490.627 265.506 705.262C265.506 869.307 466.499 998.754 466.499 1152.66C466.499 1306.56 277.989 1386.5 277.989 1510.58C277.989 1640.62 277.989 2018.17 277.989 2018.17" stroke="url(#paint0_linear_0_3)" strokeWidth="6"/>
                    <path id="root2" d="M309.002 -145C309.002 -145 309.502 -24.8896 309.502 212.529C309.502 420.143 552.501 440.345 552.501 688.559C552.501 931.943 308.499 919.799 308.499 1441.97C308.499 1628.09 308.499 1700.5 308.499 1700.5" stroke="white" strokeWidth="6"/>
                    <path id="root3" d="M245.5 1848.5C245.5 1848.5 245.5 1626.9 245.5 1440.78C245.5 918.606 3.00003 935.58 3 687.366C2.99997 439.152 245.999 418.95 245.999 211.336C245.999 102.676 245.886 -31.7237 246 -145" stroke="url(#paint1_linear_0_1)" strokeWidth="6"/>
                    <path id="root4" d="M213.999 1692.5C213.999 1692.5 213.999 1412.75 213.999 1146.69C213.999 945.109 425.499 836.498 425.499 701.683C425.499 566.867 220.005 453.557 216.005 281.726C212.678 138.833 212.757 -19.1126 213.5 -145" stroke="white" strokeWidth="6"/>
                    <path id="root5" d="M309 1682C309 1742.5 310.782 1940.95 310.003 1966.5C302.364 2216.88 496.5 2104.5 721.501 2306.5C878.314 2447.28 906 2547.5 826 2713.5" stroke="url(#paint2_linear_0_1)" strokeWidth="6"/>
                    <path id="root6" d="M6.52319 2227.5C1.309 1950.72 3.48659 1866.85 5.19687 1819.93C6.20277 1792.34 28.909 1770 56.5232 1770H164.298C191.805 1770 214.146 1747.78 214.298 1720.28L214.5 1683.5" stroke="url(#paint3_linear_0_1)" strokeWidth="6"/>
                    <defs>
                    <linearGradient id="paint0_linear_0_3" x1="366.002" y1="-145" x2="366.002" y2="2018.17" gradientUnits="userSpaceOnUse">
                    <stop offset="0.93138" stopColor="white"/>
                    <stop offset="1" stopColor="#55097B"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="124.5" y1="-145" x2="124.5" y2="1848.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.93138" stopColor="white"/>
                    <stop offset="1" stopColor="#55097B"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_1" x1="665.5" y1="2289.5" x2="711.908" y2="1753.98" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#55097B"/>
                    <stop offset="0.779977" stopColor="#F00045"/>
                    <stop offset="1" stopColor="white"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_0_1" x1="86" y1="2319" x2="430.475" y2="1991.02" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#55097B"/>
                    <stop offset="0.74" stopColor="#F00045"/>
                    <stop offset="1" stopColor="white"/>
                    </linearGradient>
                    </defs>
                    </svg>
        
                </div>
                </div>
                <div className="col-md-6 order-md-1 scroll" data-aos="fade-left">
                <h2 className="common_head text-white d-md-block d-none" dangerouslySetInnerHTML={{ __html: data.complexity.heading }}></h2>
                </div>
            </div>
            <div className="row" style={{position: 'relative', zIndex: '999'}}>
                
                <div className="col-md-5 stuck" data-aos="fade-right">
                <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.complexity.title }}></h2>
                <div dangerouslySetInnerHTML={{ __html: data.complexity.description }}></div>
                <a href={data.complexity.ctaButton.btnUrl} target={data.complexity.ctaButton.isNewTab === true ? '_blank' : '_self'}  className="btn_cmn white_btn">{data.complexity.ctaButton.btnTitle}</a>
                </div>
                <div className="col-md-7 " data-aos="slide-right">
                <div className="clarity_sec">
                    <div className="clarity_box">
                    <img src={uploadsUrl+data.complexity.section.first.icon} alt="" />
                    <span className="toggle_btn active"><img src="/images/toggle-arrow.svg" /></span>
                    <h4 dangerouslySetInnerHTML={{ __html: data.complexity.section.first.title }}></h4>
                    <div className="toggle_text active" dangerouslySetInnerHTML={{ __html: data.complexity.section.first.description }}></div>
                    </div>
                    <div className="clarity_box">
                    <img src={uploadsUrl+data.complexity.section.second.icon} alt="" />
                    <span className="toggle_btn active"><img src="/images/toggle-arrow.svg" /></span>
                    <h4 dangerouslySetInnerHTML={{ __html: data.complexity.section.second.title }}></h4>
                    <div className="toggle_text active"  dangerouslySetInnerHTML={{ __html: data.complexity.section.second.description }}></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        }
        <section className="">
            <div className="container position-relative">
            <div className="dash-journey top-0">
                <svg width="6" height="1700" viewBox="0 0 6 1700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="svgpath4" d="M3 0.5L3 725L3 2000" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
                <defs>
                <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55097B"/>
                <stop offset="0.99688" stopColor="#F00045"/>
                </linearGradient>
                </defs>
                </svg>
                <div className="arrow-journey arrow-journey4">
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
        </section>
        {data?.understanding?.title && data?.understanding?.title != '' && 
        <section className="sec_padd about-sec" style={{background: `url(${uploadsUrl+data.understanding.banner})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="container container-ip">
            <div className="row">
                <div className="col-md-8 pe-md-5" data-aos="fade-up">
                    <h2 className="common_head text-black" dangerouslySetInnerHTML={{ __html: data.understanding.title }}></h2>
                    <div dangerouslySetInnerHTML={{ __html: data.understanding.description }}></div>
                </div>
            </div>
            </div>
        </section>
        }
        {data?.treatment?.title && data?.treatment?.title != '' && 
        <section className="care_sec sec_padd">
            
            <div className="care_container container carecontainer_home about_a_first_sec">
            <div className="row">
                <div className="col-md-6 homecare_cont_left" data-aos="fade-left">
                <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.treatment.title }}></h2>
                <div dangerouslySetInnerHTML={{ __html: data.treatment.description }}></div>
                <a href={data.treatment.ctaButton.btnUrl} target={data.treatment.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn">{data.treatment.ctaButton.btnTitle}</a>
                </div>
                <div className="col-md-6 " data-aos="fade-right">
                    <div className="care_slider">
                        {data.treatment.slider.map((item: any, index: any) => (
                            <div className="care_item" key={"sl"+index}>
                                <img src={uploadsUrl+item.image} />
                                <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="container position-relative mt-care">
            <div className="resize_svg svg_right svg_right1" data-aos="fade-left">

                <img src="/images/Union.svg" className="reveal-animation" alt="Union Image" />
            </div>
            </div>
        </section>
        }
        {data?.helth?.title && data?.helth?.title != '' && 
        <section className="curve_sec sec_padd">
            <div className="container">
            <div className="row align-items-end">
                <div className="col-md-7 " data-aos="fade-left">
                <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.helth.title }}></h2>
                <div  dangerouslySetInnerHTML={{ __html: data.helth.description }}></div>
                </div>
                <div className="col-md-5 text-end-ds mb-md-5 d-flex justify-content-end" data-aos="fade-right">
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

export default FrontHomeTemplate;
import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontHighwayToHealthTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    useEffect(()=>{
   
    
    }, [])
    return(
    <main className="main-content about-us-page">
      {data?.hero?.image && data.hero.image != '' &&
      <section className="gred_banner banner_section highway-banner">
        <div className="container-fluid">
          <div className="banner_home">
            <div className="banner_img">
              <div className="banner_gradiant">
                <img src="/images/banner-gradiant.svg" />
                <svg width="63" height="583" viewBox="0 0 63 583" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6778 582C13.6778 582 -0.431438 509.446 4.57458 451.517C8.75987 403.085 38.2924 351.233 49.1461 304.13C62.4746 246.287 60.0838 206.886 57.4335 159.403C53.4366 87.7941 23.1267 0.999994 23.1267 0.999994" stroke="white" strokeWidth="6"/>
                  <path d="M13.6778 582C13.6778 582 -0.431438 509.446 4.57458 451.517C8.75987 403.085 38.2924 351.233 49.1461 304.13C62.4746 246.287 60.0838 206.886 57.4335 159.403C53.4366 87.7941 23.1267 0.999994 23.1267 0.999994" stroke="url(#paint0_linear_386_2473)" strokeWidth="6"/>
                  <defs>
                  <linearGradient id="paint0_linear_386_2473" x1="38.7394" y1="33.4268" x2="38.7394" y2="562.471" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#55097B"/>
                  <stop offset="0.36" stopColor="#F00045"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <img src={uploadsUrl+data.hero.image} className="banner_cover_img" title="" alt="" />
            </div>
            <div className="container highway-container">
              <div className="banner_content highway-content">
                <img src={uploadsUrl+data.hero.titleImage} alt="" /> 
              </div>
            </div>
          </div>
        </div>
      </section>
      }
      {data?.yourVascular?.title && data?.yourVascular?.title != '' &&
    <section className="text_sec sec_padd about-right-text highway-about">
      <div className="container position-relative">
        <div className="dash-journey">
            <svg width="6" height="3000" viewBox="0 0 6 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="svgpath3" d="M3 0.5L3 500L3 3000" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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
      <div className="container container-70">
        <div className="row align-items-center">
          <div className="col-md-9 order-md-1">
            <div className="content">
              <h1 className="common_head" dangerouslySetInnerHTML={{ __html: data.yourVascular.title }}></h1>
              <div dangerouslySetInnerHTML={{ __html: data.yourVascular.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    }
    {data?.highwaytoHealth?.title && data?.highwaytoHealth?.title != '' &&
    <section className="sec_padd highway_advance">
      <div className="container container-70">
        <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.highwaytoHealth.title }}></h2>
        <div dangerouslySetInnerHTML={{ __html: data.highwaytoHealth.description }}></div>
        <h6 dangerouslySetInnerHTML={{ __html: data.highwaytoHealth.subHeading }}></h6>
        <div className="row">
          {data.highwaytoHealth.accordionItems && data.highwaytoHealth.accordionItems.map((item: any, index: any) => (
                <div className="col-md-3" key={"hthfirst"+index}>
                  <div className="cmn-box">
                    <div className="cmn-box-inner">
                      <img src={uploadsUrl+item.image} />
                      <p className="univia-pro p-20" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                    </div>
                      <div className="hover-text"  dangerouslySetInnerHTML={{ __html: item.description }}></div>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </section>
    }
    {data?.preventionTreatment?.title && data?.preventionTreatment?.title != '' &&
    <section className="sec_padd treatment_sec">
      <div className="container-70 container">
        <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.preventionTreatment.title }}></h2>
        <div  dangerouslySetInnerHTML={{ __html: data.preventionTreatment.description }}></div>
        <div className="treat-row row">
          {data.preventionTreatment.accordionItems && data.preventionTreatment.accordionItems.map((item: any, index: any) => (
              <div className="inner-box col-md-6" key={"hthsecond"+index}>
                <img src="/images/treat-bg.svg" className="treat-bg" />
                <div className="treat-inner">
                  <div className="icon">
                    <img src={uploadsUrl+item.image} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
    }
    {data?.protectFuture?.title && data?.protectFuture?.title != '' &&
    <section className="curve_sec curve_sec1 curve_sec_opp1 sec_padd">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.protectFuture.title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: data.protectFuture.description }}></div>
          </div>
          <div className="col-md-4 mt-1">
            <div dangerouslySetInnerHTML={{ __html: data.protectFuture.topDescription }}></div>
            <a href={data.protectFuture.ctaButton1.btnUrl} target={data.protectFuture.ctaButton1.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{data.protectFuture.ctaButton1.btnTitle}</a>
            <a href={data.protectFuture.ctaButton2.btnUrl} target={data.protectFuture.ctaButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-13px">{data.protectFuture.ctaButton2.btnTitle}</a>
          </div>
        </div>
      </div>
      <div className="svg_bottom">
        <svg width="100%" height="100%" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="svgpath10" d="M0.601562 102.547C0.601562 102.547 171.213 19.5426 323.473 9.46913C443.882 1.50291 542.929 -3.15698 649.134 21.2296C803.963 56.7809 966.434 136.105 1091 140.547C1276.91 147.176 1448 53.0469 1448 53.0469" stroke="url(#paint0_linear_386_859)" strokeWidth="6"/>
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
    {data?.riveasHighway?.title && data?.riveasHighway?.title != '' &&
    <section className="sec_padd highway_advance_vas"> 
      <div className="container position-relative">
          <div className="dash-journey dash-topminus dash-journey_cond">
            <svg width="6" height="1500" viewBox="0 0 6 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="svgpath111" d="M3 0.5L3 725L3 1500" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
              <defs>
              <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55097B"/>
              <stop offset="0.99688" stopColor="#F00045"/>
              </linearGradient>
              </defs>
            </svg>
            <div className="arrow-journey arrow-journey111">
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

      <div className="container container-70">
        <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.riveasHighway.title }}></h2>
        <div dangerouslySetInnerHTML={{ __html: data.riveasHighway.description }}></div>
        <h6 dangerouslySetInnerHTML={{ __html: data.riveasHighway.subTitle }}></h6>
        <div className="row">
          {data.riveasHighway.accordionItems && data.riveasHighway.accordionItems.map((item: any, index: any) => (
              <div className="col-md-3" key={"hththird"+index}>
                <div className="box-main">
                  <div className={index==0 ? "cmn-box hover_active" : "cmn-box" }>
                    <div className="cmn-box-inner">
                      <img src={uploadsUrl+item.image} />
                      <p className="univia-pro p-20" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                    </div>
                      <div className="hover-text" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
    }
    {data?.prevention?.background_image && data.prevention.background_image != '' &&
      <style jsx>{`
        .bg-sec {
          background: url(${uploadsUrl+data.prevention.background_image}) center center / cover no-repeat !important;
        }
    `}</style>
     }
    {data?.prevention?.description && data.prevention.description != '' &&
    <section className="text_sec sec_padd about-right-text bg-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="offset-md-2 col-md-5 order-md-1">
            <div className="content">
              <div dangerouslySetInnerHTML={{ __html: data.prevention.description }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_img health-img"></div>
    </section>
    }
    {data?.diagnostics?.title && data?.diagnostics?.title != '' &&
    <section className="curve_sec curve_sec1 curve_sec_opp1 sec_padd">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.diagnostics.title }}></h2>
          </div>
          <div className="text-end">
            <a href={data.diagnostics.ctaButton1.btnUrl} target={data.diagnostics.ctaButton1.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{data.diagnostics.ctaButton1.btnTitle}</a>
            <a href={data.diagnostics.ctaButton2.btnUrl} target={data.diagnostics.ctaButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-13px">{data.diagnostics.ctaButton2.btnTitle}</a>
          </div>
        </div>
      </div>
      <div className="svg_bottom">
        <svg width="100%" height="100%" viewBox="0 0 1440 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="svgpath11" d="M0.601562 102.547C0.601562 102.547 171.213 19.5426 323.473 9.46913C443.882 1.50291 542.929 -3.15698 649.134 21.2296C803.963 56.7809 966.434 136.105 1091 140.547C1276.91 147.176 1448 53.0469 1448 53.0469" stroke="url(#paint0_linear_386_859)" strokeWidth="6"/>
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
  {data?.understandingVascular?.title && data?.understandingVascular?.title != '' &&
  <section className="sec_padd highway_advance advanced">
    <div className="container position-relative">
        <div className="dash-journey dash-topminus dash-journey_cond1">
          <svg width="6" height="2000" viewBox="0 0 6 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath101" d="M3 0.5L3 725L3 2000" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey101">
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

      
    <div className="container container-70">
      <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.understandingVascular.title }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.understandingVascular.description }}></div>
      <div className="row vas-dis-row">
        {data.understandingVascular.accordionItems && data.understandingVascular.accordionItems.map((item: any, index: any) => (
          <div className="col-md-3" key={"hthfourth"+index}>
            <div className="cmn-box">
              <div className="cmn-box-inner">
                <p className="univia-pro p-20" dangerouslySetInnerHTML={{ __html: item.title }}></p>
              </div>
                <div className="hover-text" dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  }
  {data?.whoShould?.topQuestion && data?.whoShould?.topQuestion != '' &&
  <section className="sec_padd quality-sec quality-bg proactive-sec">
    <div className="container">
      <div className="row row-1">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className="box-1">
            <div className="quality-text quality-box top text-white bg-down">
              <p dangerouslySetInnerHTML={{ __html: data.whoShould.topQuestion }}></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box-2">
            <div className="quality-text quality-box text-white bg-left">
              <p dangerouslySetInnerHTML={{ __html: data.whoShould.topRightQuestion }}></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-2">
          <div className="col-md-8">
            <div className="quality-title text-white">
              <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.whoShould.title }}></h2>
              <div dangerouslySetInnerHTML={{ __html: data.whoShould.description }}></div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="box-3">
              <div className="quality-text quality-box right bg-left text-white">
                <p dangerouslySetInnerHTML={{ __html: data.whoShould.middleQuestion }}></p>
              </div>
            </div>
          </div>
      </div>
      <div className="row row-3">
        <div className="col-md-4">
          <div className="box-4">
            <div className="quality-text quality-box bottom bg-top text-white">
              <p dangerouslySetInnerHTML={{ __html: data.whoShould.bottomQuestion }}></p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
           <div className="box-5">
              <div className="quality-text quality-box right bg-left text-white">
                <p dangerouslySetInnerHTML={{ __html: data.whoShould.bottomRightQuestion }}></p>
             </div>
           </div>
        </div>
      </div>
    </div>

    <div className="clarity_svg">
        <svg width="1440" height="213" viewBox="0 0 1440 213" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2921_258)">
          <path id="clarity_line1" d="M1514 189.5C1320.5 189.5 1268.33 200.291 1069.5 184C801 162 827.5 58.0005 413.5 58.0001C226 57.9999 -44 58.0001 -44 58.0001" stroke="url(#paint0_linear_2921_258)" strokeWidth="6"/>
          </g>
          <g clipPath="url(#clip1_2921_258)">
          <path id="clarity_line3" d="M1444.5 157.986C1444.5 157.986 1253 157.986 1123.25 157.986C985.364 157.986 928.556 31.8565 792.5 9.48808C670.082 -10.6382 634.746 22.4862 510.684 22.4862C295 22.4862 -15 22.4862 -15 22.4862" stroke="url(#paint1_linear_2921_258)" strokeWidth="6"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_2921_258" x1="-12.6835" y1="695.097" x2="1477.81" y2="695.097" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55097B"/>
          <stop offset="0.122241" stopColor="#950565"/>
          <stop offset="0.443908" stopColor="#BB0358"/>
          <stop offset="1" stopColor="#F00045"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2921_258" x1="55.4537" y1="9.63172" x2="1420.5" y2="62.4998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#55097B"/>
          <stop offset="1" stopColor="#F00045"/>
          </linearGradient>
          <clipPath id="clip0_2921_258">
          <rect width="1440" height="141" fill="white" transform="translate(0 56)"/>
          </clipPath>
          <clipPath id="clip1_2921_258">
          <rect width="1440" height="161" fill="white"/>
          </clipPath>
          </defs>
          </svg>
      </div>

  </section>
  }
  {data?.takingCharge?.title && data?.takingCharge?.title != '' && 
  <section className="sec_padd vas-health-sec">
    <div className="container position-relative">
        <div className="dash-journey dash-topminus dash-journey_cond2">
          <svg width="6" height="1500" viewBox="0 0 6 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath102" d="M3 0.5L3 725L3 1500" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey102">
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

    <div className="container container-70">
      <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.takingCharge.title }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.takingCharge.description }}></div>
      <div className="row align-items-center vas-health-row">
        <div className="col-md-8">
          <div className="row">
            {data.takingCharge.accordionItems && data.takingCharge.accordionItems.map((item: any, index: any) => {
              if(index < 4){
                  return (
                    <div className="inner-box col-md-6" key={"cvtacscdd"+index}>
                      <img src="/images/vas-h-bg.svg" className="treat-bg" />
                      <div className="treat-inner">
                        <div className="icon">
                          <img src={uploadsUrl+item.image} />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        {data.takingCharge.accordionItems && data.takingCharge.accordionItems.map((item: any, index: any) => {
          if(index == 4){
              return (
                <div className="inner-box col-md-4" key={"cvtacscdd"+index}>
                  <img src="/images/vas-h-bg.svg" className="treat-bg" />
                  <div className="treat-inner">
                    <div className="icon">
                      <img src={uploadsUrl+item.image} />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  </section>
  }
  {data?.vascularDisease?.title && data?.vascularDisease?.title != '' && 
  <section className=" sec_padd gradient-bg support-sec recognizing-sec">

    <div className="support_svg">
      <svg width="100%" height="100%" viewBox="0 0 1440 198" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="line1" d="M1453.5 157.986C1453.5 157.986 1262 157.986 1132.25 157.986C994.364 157.986 937.556 31.8567 801.5 9.48828C679.082 -10.638 643.746 22.4864 519.684 22.4864C304 22.4864 -6 22.4864 -6 22.4864" stroke="url(#paint0_linear_386_3367)" strokeWidth="6"/>
      <path id="line2" d="M1523 191.5C1329.5 191.5 1277.33 202.291 1078.5 186C810 164 836.5 60.0005 422.5 60.0001C235 59.9999 -35 60.0001 -35 60.0001" stroke="url(#paint1_linear_386_3367)" strokeWidth="6"/>
      <defs>
      <linearGradient id="paint0_linear_386_3367" x1="23.3366" y1="734.395" x2="1419.59" y2="734.395" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="#F00045"/>
      </linearGradient>
      <linearGradient id="paint1_linear_386_3367" x1="-3.68352" y1="697.097" x2="1486.81" y2="697.097" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="#F00045"/>
      </linearGradient>
      </defs>
      </svg>

      
    </div>
    <div className="container container-70">
      <div className="row">
        <div className="col-md-12 col-lg-5 text-white mt-4">
          <h2 className="common_head text-white mb-3" dangerouslySetInnerHTML={{ __html: data.vascularDisease.title }}></h2>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            {data.vascularDisease.accordionItems && data.vascularDisease.accordionItems.map((item: any, index: any) => {
              if(index < 2){
                  return (
                    <div className="col-md-6" key={"cvtacsddcdd"+index}>
                      <div className="support_list">
                        <span className="icon"><img src={uploadsUrl+item.image} /></span>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      <div className="row row-btm">
        <div className="col-md-2">
        </div>
        <div className="col-md-9">
          <div className="row">
            {data.vascularDisease.accordionItems && data.vascularDisease.accordionItems.map((item: any, index: any) => {
              if(index >= 2){
                  return (
                    <div className="col-md-4" key={"cvtacsddcdd"+index}>
                      <div className="support_list">
                        <span className="icon"><img src={uploadsUrl+item.image} /></span>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  )
                }
              })
            }
            <div className="col-md-12 btm-text" dangerouslySetInnerHTML={{ __html: data.vascularDisease.description }}></div>
          </div>
        </div>
        <div className="col-md-1">
        </div>
      </div>
    </div>
  </section>
  }
</main>
    )
}

export default FrontHighwayToHealthTemplate
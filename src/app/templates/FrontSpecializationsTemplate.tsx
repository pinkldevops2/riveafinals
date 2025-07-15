import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontSpecializationsTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
                    
    useEffect(()=>{
    

    }, [])
    return(
        <main className="main-content">
          {data?.hero?.title && data?.hero?.title != '' &&
  <section className="banner_section">
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
          <img  className="banner_cover_img" src={uploadsUrl+data.hero.image} title="Our Specializations" alt="Our Specializations" />
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
<section className="sec_padd pb-0 about-rivea-sec">
  <div className="container position-relative">
        
        <div className="dash-journey">
          <svg width="6" height="2000" viewBox="0 0 6 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath1" d="M3 0 L3 2000" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
              <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55097B"/>
                <stop offset="0.99688" stopColor="#F00045"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="arrow-journey arrow-journey1">
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
    <div className="container container-ip">
      <div className="row align-items-start">
        <div className="col-md-6 order-md-1">
          <img className="pe-md-5" src={uploadsUrl+data.atRivea.banner} />
        </div>
        <div className="col-md-6 order-md-2 aos-init aos-animate" data-aos="fade-right">
          <div className="text_desc about_desc" dangerouslySetInnerHTML={{ __html: data.atRivea.description }}></div>
        </div>
      </div>
    </div>
  </section>
}
{data?.ourCenters?.title && data?.ourCenters?.title != '' && 
<section className=" sec_padd specialized_expertise_sec1 expertise_sec" style={{paddingBottom: 0}}>

    <div className="">
        <div className="container-ip container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.ourCenters.title }}></h2>
              <div className="btn_sec">
                <p className="text-start univia-pro" dangerouslySetInnerHTML={{ __html: data.ourCenters.description }}></p>
              </div>
               <ul className="nav nav-tabs1" id="TreatmentTab" role="tablist">
                  <li className="nav-item" role="presentation">
                      <button className="btn_cmn white_btn nav-link active" id="radiology-tab" data-bs-toggle="tab" data-bs-target="#radiology" type="button" role="tab" aria-selected="false">
                         {data.ourCenters.tab1Title}
                      </button>
                  </li>
                  <li className="nav-item me-3" role="presentation">
                      <button className="btn_cmn white_btn nav-link " id="vascular-tab" data-bs-toggle="tab" data-bs-target="#vascular" type="button" role="tab" aria-selected="true">
                          {data.ourCenters.tab2Title}
                      </button>
                  </li>

              </ul>

            </div>
          </div>
        </div>
      
      <div className="tab-content" id="tab-content">
       <div className="tab-pane fade show active" id="radiology" role="tabpanel">
          <div className="container container-ip">
            <div className="row mb-4">
              <div className="col-md-12 ">
             
                <div className="btn_sec" dangerouslySetInnerHTML={{ __html: data.ourCenters.tab1Description }}>
                </div>
              </div>

            <div className="expertise_slider1 row">
              {data.ourCenters.sliderTab1 && data.ourCenters.sliderTab1.map((item: any, index: any) => (
                <div className="expertise_slide col-md-12 col-lg-3" key={"scare12"+index}>
                <div className={index == 0 ? 'expertise_box hover_active' : 'expertise_box'}>
                  <span className="icon"><img src={uploadsUrl+item.image} alt="specialized icon" /></span>
                  <span className="toggle_btn"><img src="/images/svg-icon.svg" /></span>
                  <h4 dangerouslySetInnerHTML={{__html: item.title}}></h4>
                  <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                </div>
              </div>
                ))}
              </div>

                <div className="btn-box-tab">
                  <a href={data.ourCenters.ctaButton.btnUrl} target={data.ourCenters.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn">{data.ourCenters.ctaButton.btnTitle}</a>
                </div>
           
             </div>
          </div>
         <section className="discover_sec sec_padd position-relative mt-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.discover.title }}></h2>
           
                </div>
                <div className="col-md-4 text-end">
                  <a href={data.discover.ctaButton.btnUrl} target={data.discover.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn">{data.discover.ctaButton.btnTitle}</a>
                </div>
              </div>
            </div>
          </section>

        </div>



       <div className="tab-pane fade" id="vascular" role="tabpanel">
          <div className="container-ip container">
            <p className="text-start univia-pro blue-text" dangerouslySetInnerHTML={{ __html: data.ourCenters.tab2Title }}></p>
            <div className="row mb-4 align-items-center">
              <div className="col-md-6">
                <div className="btn_sec" dangerouslySetInnerHTML={{ __html: data.ourCenters.tab2Description }}>
                </div>
              </div>

              <div className="col-md-6">
                <div className="btn_sec"  dangerouslySetInnerHTML={{ __html: data.ourCenters.tab2DescriptionRight }}>
                </div>
              </div>
            </div>



              <div className="expertise_slider1 expertise_slider22 row vascular-row">
              {data.ourCenters.sliderTab2 && data.ourCenters.sliderTab2.map((item: any, index: any) => (
                <div className="expertise_slide col-md-12 col-lg-3" key={"scare12"+index}>
                <div className={index == 0 ? 'expertise_box hover_active' : 'expertise_box'}>
                  <span className="icon"><img src={uploadsUrl+item.image} alt="specialized icon" /></span>
                  <span className="toggle_btn"><img src="/images/svg-icon.svg" /></span>
                  <h4 dangerouslySetInnerHTML={{__html: item.title}}></h4>
                  <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                </div>
              </div>
                ))}
            </div>
            <div className="btn-box-tab">
              <a href={data.ourCenters.ctaButton2.btnUrl} target={data.ourCenters.ctaButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn">{data.ourCenters.ctaButton2.btnTitle}</a>
            </div>

          </div>  
                <section className="discover_sec sec_padd position-relative mt-top">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.helth.title }}></h2>
                      </div>
                      <div className="col-md-4 text-end">
                        <a href={data.helth.ctaButton1.btnUrl} target={data.helth.ctaButton1.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn book-btn">{data.helth.ctaButton1.btnTitle}</a>
                        <a href={data.helth.ctaButton2.btnUrl} target={data.helth.ctaButton2.isNewTab === true ? '_blank' : '_self'} className="btn_cmn purple_btn m-left-s-13px">{data.helth.ctaButton2.btnTitle}</a>
                      </div>
                    </div>
                  </div>
                </section>
       </div>

         </div>
      </div>
      

  </section>
}
{data?.ourCenters?.title && data?.ourCenters?.title != '' && 
<div className="discover_bottom_line">
 <svg width="100%" height="100%" viewBox="0 0 1440 198" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="bottom_line2" d="M1440.5 40.0134C1440.5 40.0134 1249 40.0134 1119.25 40.0134C981.364 40.0134 924.556 166.143 788.5 188.512C666.082 208.638 630.746 175.513 506.684 175.513C291 175.513 -19 175.513 -19 175.513" stroke="url(#paint0_linear_720_391)" strokeWidth="6"/>
     <path id="bottom_line3" d="M1510 6.49988C1316.5 6.49988 1264.33 -4.29146 1065.5 12.0001C797 33.9999 823.5 137.999 409.5 138C222 138 -48 138 -48 138" stroke="url(#paint1_linear_720_391)" strokeWidth="6"/> 
    <defs>
    <linearGradient id="paint0_linear_720_391" x1="51.4537" y1="188.368" x2="1416.5" y2="135.5" gradientUnits="userSpaceOnUse">
    <stop stopColor="#55097B"/>
    <stop offset="1" stopColor="#F00045"/>
    </linearGradient>
    <linearGradient id="paint1_linear_720_391" x1="-16.6835" y1="-499.097" x2="1473.81" y2="-499.097" gradientUnits="userSpaceOnUse">
    <stop stopColor="#55097B"/>
    <stop offset="0.122241" stopColor="#950565"/>
    <stop offset="0.443908" stopColor="#BB0358"/>
    <stop offset="1" stopColor="#F00045"/>
    </linearGradient>
    </defs>
  </svg>
  <div className="container position-relative">
    <div className="dash-journey dash-topminus dash-journey-spec">
      <svg width="6" height="4800" viewBox="0 0 6 4800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="svgpath8" d="M3 0 L3 4800" stroke="url(#paint0_linear_386_7534)" strokeWidth="6"/>
        <defs>
          <linearGradient id="paint0_linear_386_7534" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
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
</div>
}
{data?.whyWe?.title && data?.whyWe?.title != '' &&
<section className="sec_padd why-rivea-sec">
  
    <div className="container container-ip pe-md-0">
      <div className="row">
        <div className="col-md-12">
          <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.whyWe.title }}></h2>
          <div className="btn_sec" dangerouslySetInnerHTML={{ __html: data.whyWe.description }}>
        </div>

        </div>
     
      </div>
      <div className="row">
        {data.whyWe.sliderItems && data.whyWe.sliderItems.map((item: any, index: any) => {
          if(index < 2){
          return (
          <div className="col-md-5" key={"scare12dd"+index}>
            <div className="services-box">
              <div className="content">
                    <div className="icon"><img src={uploadsUrl+item.image} /></div>
                    <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                  </div>
            </div>
          </div>
          )
          }
        })}
      </div>
      <div className="row align-item-end justify-content-end">
         {data.whyWe.sliderItems && data.whyWe.sliderItems.map((item: any, index: any) => {
          if(index >= 2){
          return (
          <div className="col-md-5" key={"scare12dd"+index}>
            <div className="services-box">
              <div className="content">
                    <div className="icon"><img src={uploadsUrl+item.image} /></div>
                    <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                  </div>
            </div>
          </div>
          )
            }
          }
          )}
      </div>
      <div className="row mt-4">
        <div className="col-md-12 content" dangerouslySetInnerHTML={{ __html: data.whyWe.descriptionBottom }}></div>
      </div>
    </div>
  </section>
  }
</main>
    )
}

export default FrontSpecializationsTemplate
import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontConditionsWeTreatTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
    useEffect(()=>{
   
    
    }, [])
    return(
        <main className="main-content">
          {data?.hero?.title && data?.hero?.title != '' && 
          <section className="banner_section service_banner1 content-center">
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
                      <div className="banner-img"> <img src={uploadsUrl+data.hero.image} className="banner_cover_img" title="" alt="" /></div>
                    </div>
                    <div className="container">
                      <div className="banner_content">
                          <h1 className="common_head text-white " dangerouslySetInnerHTML={{ __html: data.hero.title }}></h1>
                      </div>
                    </div>
                </div>
              </div>
          </section>
          }
          {data?.advancedTreatments?.description && data.advancedTreatments.description != '' &&
          <section className="sec_padd advanced_sec text_sec-advance" style={{paddingBottom: 0}}>
            <div className="container position-relative">
              <div className="dash-journey dash-topminus">
                <svg width="6" height="2200" viewBox="0 0 6 2200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="svgpath1" d="M3 0.5L3 725L3 2200" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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


            <div className="">
              <div className="container container-ip">
                  <div className="content advanced_sec_text mb-4">
                    <div dangerouslySetInnerHTML={{ __html: data.advancedTreatments.description }}></div>
                    <ul className="nav nav-tabs1" id="TreatmentTab" role="tablist">
                        <li className="nav-item" role="presentation">
                        <button className="btn_cmn white_btn nav-link active" id="radiology-tab" data-bs-toggle="tab" data-bs-target="#radiology" type="button" role="tab">
                          {data.advancedTreatments.tab1Title} <img src="/images/white-arrow.svg" className="rotate_90" /> <img src="/images/blue-arrow.svg" className="b_rotate_90" />
                            </button>
                                </li>
                      <li className="nav-item me-3" role="presentation">
                        <button className="btn_cmn white_btn nav-link vas_tab" id="vascular-tab" data-bs-toggle="tab" data-bs-target="#vascular" type="button" role="tab">
                          {data.advancedTreatments.tab2Title} <img src="/images/white-arrow.svg" className="rotate_90"/> <img src="/images/blue-arrow.svg" className="b_rotate_90"/>
                        </button>
                      </li>
                    
                    </ul>

                  </div>
              </div>

  <div className="tab-content" id="tab-content">
    <div className="tab-pane fade show active" id="radiology" role="tabpanel">
    
        <div className="container container-ip">
          <div className="row">
            <div className="col-md-12 mb-3">
               <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.advancedTreatments.tab1Heading }}></h2>
            </div>
          </div>
     
          <div className="row">
            <div className="col-md-12">
              <div className="accordion advanced-vascular-accordion" id="advanced-vascular-accod">
                <div className="row">
                    <div className="col-md-6">
                      {data.advancedTreatments.accordionTab1 && data.advancedTreatments.accordionTab1.map((item: any, index: any) => {
                        if(index % 2 === 0){
                        return (
                        <div className="accordion-item" key={"cvtaccdd"+index}>
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseFirstLeft'+index} aria-expanded="false" aria-controls="collapseOne">
                              <h4 dangerouslySetInnerHTML={{__html: item.title}}></h4>
                              <div className="learn-more-btn"><a href={item.link}>Learn More</a></div>
                            </button>
                          </h2>
                          <div id={'collapseFirstLeft'+index} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular-accod">
                            <div className="accordion-body">
                              <span dangerouslySetInnerHTML={{__html: item.description}}></span>
                              <a href={item.link} className="learn_more_text">Learn More</a>
                            </div>
                          </div>
                        </div>
                        )
                        }
                      })}
                    </div>
                    <div className="col-md-6">
                      {data.advancedTreatments.accordionTab1 && data.advancedTreatments.accordionTab1.map((item: any, index: any) => {
                      if(index % 2 !== 0){
                      return (
                      <div className="accordion-item" key={"cvtaccrightdd"+index}>
                          <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseFirstRight'+index} aria-expanded="false" aria-controls="collapseOne">
                            <h4 dangerouslySetInnerHTML={{__html: item.title}}></h4>
                            <div className="learn-more-btn"><a href={item.link}>Learn More</a></div>
                          </button>
                        </h2>
                        <div id={'collapseFirstRight'+index} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular-accod">
                          <div className="accordion-body">
                            <span dangerouslySetInnerHTML={{__html: item.description}}></span>
                            <a href={item.link} className="learn_more_text">Learn More</a>
                          </div>
                        </div>
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

    <div className="top-libe">
      <div className="support_line">
        <svg width="100%" height="100%" viewBox="0 0 1440 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="line1" d="M1450.5 157.986C1450.5 157.986 1259 157.986 1129.25 157.986C991.364 157.986 934.556 31.8567 798.5 9.48828C676.082 -10.638 640.746 22.4864 516.684 22.4864C301 22.4864 -9 22.4864 -9 22.4864" stroke="url(#paint0_linear_352_994)" strokeWidth="6"/>
        <path  id="line2" d="M1520 191.5C1326.5 191.5 1274.33 202.291 1075.5 186C807 164 833.5 60.0005 419.5 60.0001C232 59.9999 -38 60.0001 -38 60.0001" stroke="url(#paint1_linear_352_994)" strokeWidth="6"/>
        <defs>
        <linearGradient id="paint0_linear_352_994" x1="61.4537" y1="9.63194" x2="1426.5" y2="62.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#55097B"/>
        <stop offset="1" stopColor="#F00045"/>
        </linearGradient>
        <linearGradient id="paint1_linear_352_994" x1="-6.68352" y1="697.097" x2="1483.81" y2="697.097" gradientUnits="userSpaceOnUse">
        <stop stopColor="#55097B"/>
        <stop offset="0.122241" stopColor="#950565"/>
        <stop offset="0.443908" stopColor="#BB0358"/>
        <stop offset="1" stopColor="#F00045"/>
        </linearGradient>
        </defs>
        </svg>

        
      </div>
    </div>
    <section className="personalized_sec sec_padd">
      <div className="container container-70">
        <div className="row align-items-center">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.personalizedAttention1.title }}></h2>
          <div className="col-md-8 text-white mb-4 pad-rgt">
            <div dangerouslySetInnerHTML={{ __html: data.personalizedAttention1.description }}></div>
            <div className="btn_sec">
              <a href={data.personalizedAttention1.ctaButton.btnUrl} target={data.personalizedAttention1.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn mt-3 ml-2 book-btn">{data.personalizedAttention1.ctaButton.btnTitle}</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="doc-img">
              <div className="doc-img-inner">
                <img src={uploadsUrl+data.personalizedAttention1.doctor_image} />
              </div>
              <div className="doc-details">
                <h3 dangerouslySetInnerHTML={{ __html: data.personalizedAttention1.doctor_name }}></h3>
                <h5 dangerouslySetInnerHTML={{ __html: data.personalizedAttention1.doctor_education }}></h5>
                <ul className="social_icon">
                   <li><a href={data.personalizedAttention1.twitter} target="_blank" tabIndex={-1}><img src="/images/tw.svg" style={{width:'30px'}} /></a></li>
                  <li><a href={data.personalizedAttention1.linkedin} target="_blank" className="mx-1" tabIndex={-1}><img src="/images/li.svg" style={{width:'30px'}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
      <div className="tab-pane fade" id="vascular" role="tabpanel">
        <div className=" container container-ip">
          <div className="row">
            <div className="col-md-12 mb-3">
              <h2 className="common_head"  dangerouslySetInnerHTML={{ __html: data.advancedTreatments.tab2Heading }}></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="accordion advanced-vascular-accordion" id="advanced-vascular-accod-1">
                <div className="about-faq">
                      {data.advancedTreatments.accordionTab2 && data.advancedTreatments.accordionTab2.map((item: any, index: any) => {
                        return (
                          <div className="faq_sec" key={"tab2dd"+index}>
                            <div className="faq_head">
                              <h3 className="faq_title" dangerouslySetInnerHTML={{__html: `${index+1}. `+ item.title}}></h3>
                            </div>
                            <div className="faq-content">
                              <div className="row">
                              {item.description != '' &&  <p dangerouslySetInnerHTML={{__html: item.description}}></p>}
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  {item.accordionItems && item.accordionItems.map((item2: any, index2: any) => {
                                      if(index2 % 2 === 0){
                                      return (
                                      <div className="accordion-item" key={"cvtaccddn"+index+index2}>
                                          <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseTwoLeft'+index+'-'+index2} aria-expanded="false" aria-controls="collapseOne">
                                            <h4 dangerouslySetInnerHTML={{__html: item2.title}}></h4>
                                            <div className="learn-more-btn"><a href={item2.link}>Learn More</a></div>
                                          </button>
                                        </h2>
                                        <div id={'collapseTwoLeft'+index+'-'+index2} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular-accod-1">
                                          <div className="accordion-body">
                                            <span dangerouslySetInnerHTML={{__html: item2.description}}></span>
                                            <a href={item2.link} className="learn_more_text">Learn More</a>
                                          </div>
                                        </div>
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
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseTwoRight'+index+'-'+index2} aria-expanded="false" aria-controls="collapseOne">
                                            <h4 dangerouslySetInnerHTML={{__html: item2.title}}></h4>
                                            <div className="learn-more-btn"><a href={item2.link}>Learn More</a></div>
                                          </button>
                                        </h2>
                                        <div id={'collapseTwoRight'+index+'-'+index2} className="accordion-collapse collapse" data-bs-parent="#advanced-vascular-accod-1">
                                          <div className="accordion-body">
                                            <span dangerouslySetInnerHTML={{__html: item2.description}}></span>
                                            <a href={item2.link} className="learn_more_text">Learn More</a>
                                          </div>
                                        </div>
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
        

          <div className="top-libe">
            <div className="support_line">
              <svg width="100%" height="100%" viewBox="0 0 1440 198" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="line3" d="M1450.5 157.986C1450.5 157.986 1259 157.986 1129.25 157.986C991.364 157.986 934.556 31.8567 798.5 9.48828C676.082 -10.638 640.746 22.4864 516.684 22.4864C301 22.4864 -9 22.4864 -9 22.4864" stroke="url(#paint0_linear_352_994)" strokeWidth="6"/>
              <path  id="line4" d="M1520 191.5C1326.5 191.5 1274.33 202.291 1075.5 186C807 164 833.5 60.0005 419.5 60.0001C232 59.9999 -38 60.0001 -38 60.0001" stroke="url(#paint1_linear_352_994)" strokeWidth="6"/>
              <defs>
              <linearGradient id="paint0_linear_352_994" x1="61.4537" y1="9.63194" x2="1426.5" y2="62.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55097B"/>
              <stop offset="1" stopColor="#F00045"/>
              </linearGradient>
              <linearGradient id="paint1_linear_352_994" x1="-6.68352" y1="697.097" x2="1483.81" y2="697.097" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55097B"/>
              <stop offset="0.122241" stopColor="#950565"/>
              <stop offset="0.443908" stopColor="#BB0358"/>
              <stop offset="1" stopColor="#F00045"/>
              </linearGradient>
              </defs>
              </svg>
            </div>
          </div>
      </div>
          <section className="personalized_sec sec_padd">
            <div className="container container-70">
              <div className="row align-items-center">
                <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.personalizedAttention.title }}></h2>
                <div className="col-md-8 text-white mb-4 pad-rgt">
                  <div dangerouslySetInnerHTML={{ __html: data.personalizedAttention.description }}></div>
                  <div className="btn_sec">
                    <a href={data.personalizedAttention.ctaButton.btnUrl} target={data.personalizedAttention.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn mt-3 ml-2 book-btn">{data.personalizedAttention.ctaButton.btnTitle}</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="doc-img">
                    <div className="doc-img-inner">
                      <img src={uploadsUrl+data.personalizedAttention.doctor_image} />
                    </div>
                    <div className="doc-details">
                      <h3 dangerouslySetInnerHTML={{ __html: data.personalizedAttention.doctor_name }}></h3>
                      <h5 dangerouslySetInnerHTML={{ __html: data.personalizedAttention.doctor_education }}></h5>
                      <ul className="social_icon">
                        <li><a href={data.personalizedAttention.twitter } target="_blank" tabIndex={-1}><img src="/images/tw.svg" style={{width:'30px'}} /></a></li>
                        <li><a href={data.personalizedAttention.linkedin } target="_blank" className="mx-1" tabIndex={-1}><img src="/images/li.svg" style={{width:'30px'}} /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        
      </div>
    </div>
    </div>
</section>
}
{data.ourCommitment.doctor_image && 
  <style jsx>{`
    section.sec_padd.commitment-sec::after {
      background: url(${uploadsUrl+data.ourCommitment.doctor_image});
    }
`}</style>
}
{data?.ourCommitment?.title && data?.ourCommitment?.title != '' &&
   <section className=" sec_padd commitment-sec">
      <div className="container position-relative">
        <div className="dash-journey dash-topminus dash-journey_cond">
          <svg width="6" height="4000" viewBox="0 0 6 4000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="svgpath11" d="M3 0.5L3 725L3 4000" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
            <defs>
            <linearGradient id="paint0_linear_386_753" x1="7" y1="2127.5" x2="-354.787" y2="2062.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55097B"/>
            <stop offset="0.99688" stopColor="#F00045"/>
            </linearGradient>
            </defs>
          </svg>
          <div className="arrow-journey arrow-journey11">
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

      <div className="container container-ip pe-md-0">
         <div className="row">
            <div className="col-md-12 col-lg-6 ">
               <h2 className="common_head text-black pb-5" dangerouslySetInnerHTML={{ __html: data.ourCommitment.title }}></h2>
            </div>
            <div className="col-md-12 col-lg-6">
               <div className="row">
                 {data.ourCommitment.accordionItems && data.ourCommitment.accordionItems.map((item: any, index: any) => {
                  return (
                    <div className="col-md-6"  key={"cvtaccdd"+index}>
                      <div className="support_list">
                          <span className="icon"><img src={uploadsUrl+item.image} /></span>
                          <span className="toggle_btn"><img src="/images/toggle-arrow-down.svg" /></span>
                          <p dangerouslySetInnerHTML={{ __html: item.title }}></p>
                          <p className="toggle_text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                    )
                  })}
               </div>
            </div>
         </div>
      </div>
   </section>
   }
   {/* <section className="text_sec sec_padd stories-of-healing-sec">
      <div className="container container-ip pe-md-0 ">
         <div className="row mb-4 mb-md-0">
            <div className="col-md-9 mb-md-3 mb-0">
               <h2 className="common_head">Stories of Healing<br /> & Hope</h2>
               <div className="btn_sec">
                  <p className="text-start univia-pro gray-text">Our patients inspire us every day. Read their stories of resilience, recovery, and renewed hope.</p>
               </div>
            </div>
            <div className="col-md-3 text-right"> <a href="#" className="btn_cmn mt-3">View All Stories</a></div>
         </div>
         <div className="row">
            <div className="col-md-12 col-lg-4">
               <div className="review_box">
                  <div className="customer_review_block ">
                     <div className="rating_item">
                        <span className="icon"> <img src="/images/Star.png" /></span>
                        <div className="rating_num">4.9</div>
                        <div className="rating_text">Customer Rating</div>
                     </div>
                     <div className="review_cutomer">
                        <div className="customer_img"><img src="/images/review_img.png" /></div>
                        <div className="rating_num">100+</div>
                        <div className="review_text">Patient Reviews</div>
                     </div>
                  </div>
                  <div className="review_ads_banner">
                     <img src="/images/review_poster.jpg" />
                  </div>
               </div>
            </div>
            <div className="col-md-12 col-lg-8">
               <div className="review_box">
                  <div className="review_slider ">
                     <div className="review_slide">
                        <div className="quotes_icon">
                           <img src="/images/block_quotes_icon.png" /> 
                        </div>
                        <div className="review_block_texrt">
                           <p>Lorem ipsum dolor sit amet consectetur. Lobortis convallis consequat fringilla quisque egestas libero vulputate in. Dui et tincidunt ultrices habitasse posuere ante purus ornare tellus. Id lobortis vel non duis commodo risus id non.</p>
                           <p>Viverra mauris aliquam at sit risus. Habitant enim a risus in pharetra est netus aliquam. Aliquet magnis mattis facilisis urna massa commodo nunc facilisis. Sed integer facilisis neque eros felis et viverra  eu iaculis ullamcorper fringilla varius bibendum. Eget amet ac vitae aliquam augue. Enim mattis egestas elit consequat sit sagittis feugiat. Enim facilisi commodo blandit id. Quis integer gravida sed.</p>
                        </div>
                        <div className="profile_review">
                           <span className="profile_img ">
                           <img src="/images/profile_img.png" />
                           </span>
                           <div className="admin_details">
                              <h4>John Doe1</h4>
                              <p>Designation</p>
                           </div>
                        </div>
                     </div>
                     <div className="review_slide">
                        <div className="quotes_icon">
                           <img src="/images/block_quotes_icon.png" /> 
                        </div>
                        <div className="review_block_texrt">
                           <p>Lorem ipsum dolor sit amet consectetur. Lobortis convallis consequat fringilla quisque egestas libero vulputate in. Dui et tincidunt ultrices habitasse posuere ante purus ornare tellus. Id lobortis vel non duis commodo risus id non.</p>
                           <p>Viverra mauris aliquam at sit risus. Habitant enim a risus in pharetra est netus aliquam. Aliquet magnis mattis facilisis urna massa commodo nunc facilisis. Sed integer facilisis neque eros felis et viverra ut. Nisl volutpat eu iaculis ullamcorper fringilla varius bibendum. Eget amet ac vitae aliquam augue. Enim mattis egestas elit consequat sit sagittis feugiat. Enim facilisi commodo blandit id. Quis integer gravida sed.</p>
                        </div>
                        <div className="profile_review">
                           <span className="profile_img ">
                           <img src="/images/profile_img.png" />
                           </span>
                           <div className="admin_details">
                              <h4>John Doe2</h4>
                              <p>Designation</p>
                           </div>
                        </div>
                     </div>
                     <div className="review_slide">
                        <div className="quotes_icon">
                           <img src="/images/block_quotes_icon.png" /> 
                        </div>
                        <div className="review_block_texrt">
                           <p>Lorem ipsum dolor sit amet consectetur. Lobortis convallis consequat fringilla quisque egestas libero vulputate in. Dui et tincidunt ultrices habitasse posuere ante purus ornare tellus. Id lobortis vel non duis commodo risus id non.</p>
                           <p>Viverra mauris aliquam at sit risus. Habitant enim a risus in pharetra est netus aliquam. Aliquet magnis mattis facilisis urna massa commodo nunc facilisis. Sed integer facilisis neque eros felis et viverra ut. Nisl volutpat eu iaculis ullamcorper fringilla varius bibendum. Eget amet ac vi.</p>
                        </div>
                        <div className="profile_review">
                           <span className="profile_img ">
                           <img src="/images/profile_img.png" />
                           </span>
                           <div className="admin_details">
                              <h4>John Doe3</h4>
                              <p>Designation</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> */}

{data?.yourQuestions?.title && data?.yourQuestions?.title != '' && 
   <section className="text_sec sec_padd transparent-answers areas-vec-effect condition-answer">
      <div className="container container-ip pe-md-0 ">
         <div className="row mb-4 mb-md-0">
            <div className="col-md-9 mb-md-3 mb-0">
               <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.yourQuestions.title }}></h2>
               <div className="btn_sec" dangerouslySetInnerHTML={{ __html: data.yourQuestions.description }}></div>
            </div>
            <div className="col-md-3 text-right" style={{display: 'none'}}> <a href="#" className="btn_cmn mt-3">View more</a></div>
         </div>
         
           <div className="row">
        
            <div className="col-md-9">
              <div className="faq_list_main mt-0">
                {data.yourQuestions.faq && data.yourQuestions.faq.map((item: any, index: any) => {
                  return (
                    <div className={index== 0 ? "faq_item on" : "faq_item"} key={"cvtacfaq"+index}>
                      <h3 className={index== 0 ? "faq_item_ques on" : "faq_item_ques"} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                      <div className="faq_item_ans " style={{display: index== 0 ? 'block' : 'none'}} dangerouslySetInnerHTML={{ __html: item.description }}>
                      </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
       </div>
    </section>
    }
</main>
    )
}

export default FrontConditionsWeTreatTemplate
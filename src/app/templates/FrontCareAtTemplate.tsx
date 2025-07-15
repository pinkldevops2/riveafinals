import React, { useState, useEffect } from "react";
import ServiceForm from "../[slug]/ServiceForm";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontCareAtTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
                    
    useEffect(()=>{
   
    
    }, [])
    return(
        <main className="main-content ">
          {data?.hero?.title && data?.hero?.title != '' &&
  <section className="banner_section content-center">
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
         <div className="banner-img" > <img src={uploadsUrl+data.hero.image} className="banner_cover_img" title="" alt="" /></div>
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
  

{data?.connectWith?.description && data.connectWith.description != '' && 
  <section className="text_sec sec_padd md-padd-0 text_sec_tab">
       <div className="container position-relative">
       <div className="dash-journey dash-topminus">
        <svg width="6" height="1250" viewBox="0 0 6 1250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="svgpath1" d="M3 0.5L3 725L3 1250" stroke="url(#paint0_linear_386_753)" strokeWidth="6"/>
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
    <div className="container container-ip-60 pe-md-0">
      <div className="row mb-4 mb-md-0">
        <div className="col-md-12" dangerouslySetInnerHTML={{ __html: data.connectWith.description }}></div>
      </div>
    </div>
  </section>
}
{data?.personalized?.title && data.personalized.title != '' &&
<section className="sec_padd consultations_sec pt-0">
    <div className="container container-ip-60 pe-md-0">
      <div className="row">
        <div className="col-md-8 mb-3">
          <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.personalized.title }}></h2>
          <div className="head_p_sec" dangerouslySetInnerHTML={{ __html: data.personalized.description }}></div>
        </div>
      </div>
      <div className="row">
        {data.personalized.sliderItems && data.personalized.sliderItems.map((item: any, index: any) => (
            <div className="col-md-3 mb-4 mb-md-0" key={"sl"+index}>
              <div className="consultations_item">
                <div className="icon"><img src={uploadsUrl+item.image} alt="icon" /></div>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
            </div>
        ))}
      </div>
  </div>
</section>
}
{data?.advancedTelemedicine?.title && data?.advancedTelemedicine?.title != '' &&
<section className="sec_padd platform_sec">
    <div className="container container-ip-60 pe-md-0">
      <div className="row">
        <div className="col-md-9 mb-3">
          <h2 className="common_head"  dangerouslySetInnerHTML={{ __html: data.advancedTelemedicine.title }}></h2>
          <div className="head_p_sec" dangerouslySetInnerHTML={{ __html: data.advancedTelemedicine.description }}>
          </div>
        </div>

      </div>
  </div>


  <div className="container platform-container">
    <div className="row">
      <div className="col-md-12 col-lg-6">
        {data.advancedTelemedicine.sliderItems && data.advancedTelemedicine.sliderItems.map((item: any, index: any) => {
          if(index < 2){
          return (
          <div className="Platform_box" key={"adts"+index}>
            <div className="icon"><img src={uploadsUrl+item.image} alt="" /></div>
           <p dangerouslySetInnerHTML={{__html: item.description}}></p>
          </div>
          )
          }
        })}
      </div>
      <div className="col-md-12 col-lg-6 mt-0 mt-md-5">
        {data.advancedTelemedicine.sliderItems && data.advancedTelemedicine.sliderItems.map((item: any, index: any) => {
          if(index >= 2){
          return (
          <div className="Platform_box" key={"adts2"+index}>
            <div className="icon"><img src={uploadsUrl+item.image} alt="" /></div>
           <p dangerouslySetInnerHTML={{__html: item.description}}></p>
          </div>
          )
          }
        })}
      </div>
    </div>
  </div>
</section>
}
{data?.dedicatedPatient?.title && data?.dedicatedPatient?.title != '' &&
  <section className=" sec_padd gradient-bg support-sec">

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
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6 text-white mt-4">
          <h2 className="common_head text-white mb-3" dangerouslySetInnerHTML={{ __html: data.dedicatedPatient.title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: data.dedicatedPatient.description }}></div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            {data.dedicatedPatient.sliderItems && data.dedicatedPatient.sliderItems.map((item: any, index: any) => {
              return (
              <div className="col-md-6" key={"dpts"+index}>
                <div className="support_list">
                  <span className="icon"><img src={uploadsUrl+item.image} alt="" /></span>
                  <p dangerouslySetInnerHTML={{__html: item.description}}></p>
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

{data?.qualityAssurance?.title && data?.qualityAssurance?.title != '' &&
  <section className="sec_padd quality-sec quality-bg">
    <div className="quality-bg-img">
      <img src={uploadsUrl+data.qualityAssurance.background_image} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="quality-text quality-box top text-white">
            <p dangerouslySetInnerHTML={{ __html: data.qualityAssurance.topMessage }}></p>
          </div>
          <div className="quality-title">
          
            <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.qualityAssurance.title }}></h2>
            <p className="text-start univia-pro" dangerouslySetInnerHTML={{ __html: data.qualityAssurance.description }}></p>
          </div>
          <div className="quality-text quality-box right text-white">
            <p dangerouslySetInnerHTML={{ __html: data.qualityAssurance.rightMessage }}></p>
          </div>

          <div className="quality-text quality-box bottom text-white">
            <p dangerouslySetInnerHTML={{ __html: data.qualityAssurance.bottomMessage }}></p>
          </div>
   
        </div>
        
      </div>
    </div>
  </section>
 }
 {data?.getClarity?.title && data?.getClarity?.title != '' &&
    <section className="clarity_counts_sec sec_padd">
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
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-white">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{ __html: data.getClarity.title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: data.getClarity.description }}></div>
        </div>
      </div>

      <div className="clarity_slider text-white">
        {data.getClarity.sliderItems && data.getClarity.sliderItems.map((item: any, index: any) => {
              return (
              <div className="slide_item" key={"gcts"+index}>
                <div className="content">
                  <img src={uploadsUrl+item.image} />
                  <div className="slide_text "><p  dangerouslySetInnerHTML={{__html: item.title}}></p></div>
                </div>
              </div>
              )
            })}
      </div>
    </div>
  </section>
  }
  {/* <section className="sec_padd recovery-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h2 className="common_head">Because Every Recovery is a Victory</h2>
        </div>
        <div className="col-md-3 text-end"> <a href="#" className="btn_cmn">View All Stories</a></div>
        <div className="col-md-12 mb-md-5 mb-3">
          <div className="btn_sec">
            <p className="text-start univia-pro">Nothing inspires us more than the stories of those whose lives we’ve touched. Our patients share how compassionate care, expert treatment, and unwavering support turned their health challenges into stories of hope and recovery.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
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
        <div className="col-md-8">
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
  {data?.yourHealth?.title && data?.yourHealth?.title != '' && 
  <section className="sec_padd gray-bg callback-form-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-5 px-3">
          <h2 className="common_head" dangerouslySetInnerHTML={{ __html: data.yourHealth.title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: data.yourHealth.description }}></div>
        </div>
        <div className="col-md-7 ">
           <div className="Callback-from">
                <ServiceForm />
           </div>
        </div>

      </div>
    </div>
  </section>
  }
</main>
    )
}

export default FrontCareAtTemplate
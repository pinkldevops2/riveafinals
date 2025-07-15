import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontFaqTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
                    
    useEffect(()=>{
        // Define paths and lengths
        
    }, [])
    return(
        <main className="main-content footer_minus">
          {data?.hero?.title && data?.hero?.title != '' &&
  <section className="banner_section faq_banner">
    <div className="container position-relative">
      <div className="shape_svg dash-journey faq_svg">
        <svg width="1137" height="702" viewBox="0 0 1137 702" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="bannerpath1" d="M1036.5 375.5C1036.5 362.5 1045 360 1049.5 360C1052.85 360 1062 362 1062 375.5C1062 389 1049.5 391 1049.5 391V493C1049.5 501.284 1042.78 508 1034.5 508H18C9.71572 508 3 514.716 3 523V702" stroke="url(#paint0_linear_0_1)" strokeWidth="6"/>
          <path id="bannerpath2" d="M1125.9 199.908C1130.72 206.767 1133.31 216.778 1133.68 229.939V246.067C1133.68 260.897 1131.46 271.741 1127.01 278.6C1122.93 285.459 1114.96 291.577 1103.1 296.953L1074.74 310.578C1068.62 313.544 1064.72 316.046 1063.06 318.085C1061.2 320.125 1060.18 323.369 1060 327.818L1059.44 334.769C1059.44 336.252 1058.7 336.994 1057.22 336.994H1038.31C1037.01 336.994 1036.18 336.252 1035.81 334.769L1034.69 317.807C1034.32 312.061 1034.97 307.704 1036.64 304.738C1038.49 301.772 1042.57 298.621 1048.88 295.284L1089.47 275.542C1095.59 272.576 1099.76 269.053 1101.99 264.975C1104.4 260.712 1105.6 254.316 1105.6 245.789V231.051C1105.6 221.968 1102.91 215.387 1097.54 211.309C1095.68 209.826 1092.44 208.621 1087.8 207.694C1081.87 206.396 1073.34 205.748 1062.22 205.748H1012.17C1009.39 205.748 1008 204.357 1008 201.577V188.508C1008 185.542 1009.48 183.966 1012.45 183.781C1024.87 181.927 1041.46 181 1062.22 181V0.5" stroke="white" strokeWidth="6"/>
          <defs>
          <linearGradient id="paint0_linear_0_1" x1="980" y1="360" x2="57.5" y2="689.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.38" stopColor="#55097B"/>
          <stop offset="1" stopColor="#F00045"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div className="container-fluid">
      <div className="banner_full">
        <div className="banner_img">
          <img src={uploadsUrl+data.hero.image} title="" alt="" />
        </div>
        <div className="container">
          <div className="banner_content col-md-9">
            <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data?.hero?.title}}></h2>
            <div dangerouslySetInnerHTML={{__html: data?.hero?.description}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
  
{data?.haveQuestions?.title && data?.haveQuestions?.title != '' &&
  <section className="sec_padd faq_list_sec">
    <div className="container position-relative  ">
      <div className="row faq_container">
          <h2 className="common_head pt-2" dangerouslySetInnerHTML={{__html: data?.haveQuestions?.title}}></h2>
          <div dangerouslySetInnerHTML={{__html: data?.haveQuestions?.description}}></div>
          </div>

          <div className="row mt-4 mb-4 row-gap">
            {data.haveQuestions.accordionItems && data.haveQuestions.accordionItems.map((item: any, index: any) => (
                <div className="col-md-4" key={"fbox"+index}>
                  <div className="faq-box">
                    <div className="icon"><img src={uploadsUrl+item.image} /></div>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  </div>
                </div>
            ))}
        </div>
        <div dangerouslySetInnerHTML={{__html: data.haveQuestions.bottomDescription}}></div>


<div className="drip-line" style={{display: 'none'}}>

<svg width="100%" height="100%" viewBox="0 0 1201 340" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  id="drip-line1" d="M3 340V264.89V188.745C3 180.46 9.71573 173.745 18 173.745H1183C1191.28 173.745 1198 167.029 1198 158.745V0" stroke="url(#paint0_linear_9_693)" strokeWidth="6"/>
<defs>
<linearGradient id="paint0_linear_9_693" x1="82.3618" y1="371.546" x2="1168.96" y2="39.9432" gradientUnits="userSpaceOnUse">
<stop offset="0.135" stopColor="#55097B"/>
<stop offset="1" stopColor="#F00045"/>
</linearGradient>
</defs>
</svg>
</div>

      </div>
  </section>
}

{data?.haveQuestions?.questions && data?.haveQuestions?.questions.length > 0 &&
  <section className="sec_padd faq_sec faq_sec_main">
    <div className="container">
      <div className="row">
        <div className="col-md-9" style={{display: 'none'}}>
          <div className="doctor_filter">
            <select>
              <option>LOREM </option>
            </select>
            <select>
              <option>LOREM IPSUM</option>
            </select>
            <select>
              <option>LOREM IPSUM SIT </option>
            </select>
            <select>
              <option>LOREM </option>
            </select>
          </div>
        </div>
        <div className="col-md-3" style={{display: 'none'}}>
          <button className="filter_btn">Filter <img src="images/filter.svg" /></button>
        </div>
        <div className="col-md-9">
          <div className="faq_list_main">
            {data.haveQuestions.questions && data.haveQuestions.questions.map((item: any, index: any) => (
              <div className={index == 0 ? "faq_item on" : "faq_item"} key={"faq-"+index}>
                <h3 className={index == 0 ? "faq_item_ques on" : "faq_item_ques"} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <div className="faq_item_ans " style={{display: index == 0 ? 'block': 'none'}} dangerouslySetInnerHTML={{ __html: item.description }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
}
{data?.reachOut?.title && data?.reachOut?.title != '' &&
<section className="curve_sec curve_sec_opp1 sec_padd">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-9">
          <h2 className="common_head text-white" dangerouslySetInnerHTML={{__html: data.reachOut.title}}></h2>
        </div>
        <div className="col-md-3 text-end">
          <a href={data.reachOut.ctaButton.btnUrl} target={data.reachOut.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn white_btn">{data.reachOut.ctaButton.btnTitle}</a>
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

export default FrontFaqTemplate
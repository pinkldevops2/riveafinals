import React, { useState, useEffect } from "react";
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL+'/';

const FrontThankYouTemplate = ({ data }: { data: any }) =>{
    const [content, setContent] = useState("");
                    
    useEffect(()=>{
        // Define paths and lengths
        
    }, [])
    return(
        <main className="main-content  about-us-page">
          <section className="sec_padd thank-you-sec">
              <div className="container text-center">
                <h2 className="common_head" dangerouslySetInnerHTML={{__html: data.thankYou.title}}></h2>
                <div dangerouslySetInnerHTML={{__html: data.thankYou.description}}></div>
                {data?.thankYou?.ctaButton?.btnTitle != '' && <a href={data.thankYou.ctaButton.btnUrl} target={data.thankYou.ctaButton.isNewTab === true ? '_blank' : '_self'} className="btn_cmn">{data.thankYou.ctaButton.btnTitle}</a>}
              </div>
              <div className="resize_svg svg_left" data-aos="fade-left">
                <img src="/images/thank-you-animation.svg" className="reveal-animation" alt="Union Image" />
              </div>
          </section>
          
        </main>

    )
}

export default FrontThankYouTemplate
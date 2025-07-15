"use client";

import { useEffect, useState } from "react";
import { getTestimonialCategory, getTestimonialsList} from '@/utils/frontApi';
import moment from "moment";

type Resource = {
  _id: string;
  name: string;
  email: string;
  speciality: string;
  languages: string[];
  gender: string;
};
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemLimit = 5;
  const [categoryOption, setCategoryOption] = useState([]);
  
  const fetchTestimonials = async (newPage = 1) => {
    setLoading(true);

    try {
      getTestimonialsList(search, categoryId, newPage, itemLimit).then(data => {
          if (data.testimonials) {
            if (newPage === 1) {
              setTestimonials(data.testimonials); // Reset list when new search/filter
            } else {
              setTestimonials((prev) => [...prev, ...data.testimonials]); // Append when loading more
            }
      
            setTotal(data.total);
            setPage(newPage);
          } else {
            console.log(data);
              
          }
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }

    setLoading(false);
  };
  const handleTabClick = (character: any) => {
        setCategoryId(character);
      };
  const handleCategoryFilter = (event: any) => {
    setCategoryId(event.target.value);
  };
  const handleSearch = (event: any) => {
        setSearch(event.target.value);
      };
  const fetchCategory = async () => {
    try {
      getTestimonialCategory().then(data => {
        if (data.data) {
          setCategoryOption(data.data);
        }
      });
      
    } catch (error) {
      console.error("Error fetching specialities:", error);
    }
  };
  useEffect(() => {
    fetchTestimonials(1); // Fetch on page load
  }, [search, categoryId, language, gender]); // Refetch when filters change
  useEffect(() =>{
    fetchCategory();
  }, []);
  return (
    <>
      <section className="sec_padd health_sec testimonials-filter">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="doctor_filter">
                <select onChange={handleCategoryFilter}>
                  <option value={''}>Category</option>
                  {categoryOption && categoryOption.map((catagory: any, index: any) => {
                    return (
                      <option key={index} value={catagory._id}>{catagory.name}</option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              {/* <button className="filter_btn">Filter <img src="/images/filter.svg" /></button> */}
              <div className="">
                <form className="search-form admin-search">
                  <input type="text" onChange={handleSearch} name="search" placeholder="Search" />
                  <button type="button" className="search_btn"><img src="/images/icon-search.svg" /></button>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="testimonials">
                {testimonials.map((testimonial: any) => {
                  if(testimonial.type == 'video'){
                    return (
                      <li className="large_test" key={testimonial._id}>
                        <div className="video_sec video_full">
                          <video id="videoSec2" loop  muted className="videoSec" poster={uploadsUrl+'/'+testimonial?.videoPoster} preload="none">
                            <source src={uploadsUrl+'/'+testimonial?.video} data-wf-ignore="true" />
                          </video>
                          <span className="playBtn"><img src="/images/play.svg" /></span>
                        </div>
                        <div className="testimonial_body">
                          <h3 dangerouslySetInnerHTML={{__html : testimonial.title}}></h3> 
                          <p dangerouslySetInnerHTML={{__html : testimonial.description}}></p>
                        </div>
                    </li>
                    )
                  }else{
                    return (
                      <li key={testimonial._id}>
                        <img src={uploadsUrl+'/'+testimonial?.image} alt="" />
                        <div className="testimonial_body">
                          <h3 dangerouslySetInnerHTML={{__html : testimonial.title}}></h3> 
                          <p dangerouslySetInnerHTML={{__html : testimonial.description}}></p>
                        </div>
                    </li>
                    )
                  }
                  })}
                  {testimonials.length == 0 && (
                    <h4>No testimonial found.</h4>
                  )}
              </ul>

              <div className="text-center learn-m-btn">
                {testimonials.length < total && (
                  <button className="btn_cmn" onClick={() => fetchTestimonials(page + 1)}>
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

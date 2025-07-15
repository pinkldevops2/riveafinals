"use client";

import { useEffect, useState } from "react";
import {getResourcesList} from '@/utils/frontApi';
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
export default function ResourcesList() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [activeCharacter, setActiveCharacter] = useState("All");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemLimit = 6;
  const [categoryOption, setCategoryOption] = useState([]);
  const UpperCaseAlphabet: any = ['All','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const fetchResources = async (newPage = 1) => {
    setLoading(true);

    try {
      getResourcesList(search, activeCharacter, newPage, itemLimit).then(data => {
          if (data.resource) {
            if (newPage === 1) {
              setResources(data.resource); // Reset list when new search/filter
            } else {
              setResources((prev) => [...prev, ...data.resource]); // Append when loading more
            }
      
            setTotal(data.total);
            setPage(newPage);
          } else {
            console.log(data);
              
          }
      });
    } catch (error) {
      console.error("Error fetching resources:", error);
    }

    setLoading(false);
  };
  const handleTabClick = (character: any) => {
        setActiveCharacter(character);
      };
  
  
  useEffect(() => {
    fetchResources(1); // Fetch on page load
  }, [search, activeCharacter]); // Refetch when filters change
  
  return (
    <>
    <section className="sec_padd health_sec resources-blog-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="doctor_filter resources-filter">
            <form className="search-form">
              <input
                type="text"
                className=""
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="button" className="search_btn"><img src="/images/icon-search.svg" /></button>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          {/* <button className="filter_btn">Filter <img src="/images/filter.svg" /></button> */}
        </div>
        <div className="col-md-12">
          <ul className="nav nav-tabs1 about-tab resources-tab" id="TreatmentTab" role="tablist">
             { UpperCaseAlphabet.map((item: any, index: any) => (
                <li className="nav-item" role="presentation" key={index}>
                  <button onClick={() =>handleTabClick(item)} className={activeCharacter == item ? "btn_cmn white_btn nav-link active" : "btn_cmn white_btn nav-link"} id={"tab-"+item} data-bs-toggle="tab" data-bs-target={"#tab-"+item} type="button" role="tab" aria-selected="false">
                   {item}
                  </button>
              </li>  
              ))}
          </ul>


          <div className="tab-content" id="tab-content">
            <div className="tab-pane fade show active" role="tabpanel" id="all-tab">
                <ul className="news_list resources-list">
                  {resources.map((resource: any, index: any) => (
                    <li key={'resources'+index}>
                      <a href={'/resources/'+resource.slug} className="img-link"><img src={uploadsUrl+'/'+resource?.image} /></a>
                      <div className="news_body">
                        <div className="d-flex justify-content-between"><span><i className="fa-regular fa-user"></i> {resource.name}</span> {/*<span><i className="fa-regular fa-eye"></i> 10k</span>*/} <span><i className="fa-regular fa-calendar"></i> {moment(resource.createdAt).format('MMMM Do YYYY')}</span></div>
                        <p dangerouslySetInnerHTML={{__html : resource.title}}></p> 
                        <a href={'/resources/'+resource.slug}>Read More <img src="/images/btn-arrow.svg" /></a>             
                      </div>
                  </li>
                  ))}
                  {resources.length == 0 && (
                    <h4>No resource found.</h4>
                  )}
                </ul>
                
            </div>
          </div>
          <div className="text-center mt-5 load-btn">
                  {resources.length < total && (
                    <button className="btn_cmn" onClick={() => fetchResources(page + 1)}>
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

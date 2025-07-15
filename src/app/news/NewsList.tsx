"use client";

import { useEffect, useState } from "react";
import {getNewsesList, getNewsCategory} from '@/utils/frontApi';
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
export default function NewsList() {
  const [newses, setNewses] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemLimit = 6;
  const [categoryOption, setCategoryOption] = useState([]);

  const fetchNewses = async (newPage = 1) => {
    setLoading(true);

    try {
      getNewsesList(search, categoryId, newPage, itemLimit).then(data => {
          if (data.news) {
            if (newPage === 1) {
              setNewses(data.news); // Reset list when new search/filter
            } else {
              setNewses((prev) => [...prev, ...data.news]); // Append when loading more
            }
      
            setTotal(data.total);
            setPage(newPage);
          } else {
            console.log(data);
              
          }
      });
    } catch (error) {
      console.error("Error fetching newses:", error);
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
      getNewsCategory().then(data => {
        if (data.data) {
          setCategoryOption(data.data);
        }
      });
      
    } catch (error) {
      console.error("Error fetching specialities:", error);
    }
  };
  useEffect(() => {
    fetchNewses(1); // Fetch on page load
  }, [search, categoryId, language, gender]); // Refetch when filters change
  useEffect(() =>{
    fetchCategory();
  }, []);
  return (
    <>
    <section className="sec_padd health_sec">
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
          <div className="">
                    <form className="search-form admin-search">
                      <input type="text" onChange={handleSearch} name="search" placeholder="Search" />
                      <button type="button" className="search_btn"><img src="/images/icon-search.svg" /></button>
                    </form>
                  </div>
          {/* <button className="filter_btn">Filter <img src="/images/filter.svg" /></button> */}
        </div>
        <div className="col-md-12">
          
          <ul className="news_list">
            {newses.map((news: any) => (
                <li key={news._id}>
                  <img src={uploadsUrl+'/'+news?.image} alt="" />
                  <div className="news_body">
                    <div className="d-flex justify-content-between"> <span><i className="fa-regular fa-user"></i> {news.name}</span> {/*<span><i className="fa-regular fa-eye"></i> 10k</span>*/} <span><i className="fa-regular fa-calendar"></i> {moment(news.createdAt).format('MMMM Do YYYY')}</span></div>
                    <p dangerouslySetInnerHTML={{__html : news.title}}></p> 
                    <a href={'/news/'+news.slug}>Read More <img src="/images/btn-arrow.svg" /></a>             
                  </div>
              </li>
              ))}
              {newses.length == 0 && (
                <h4>No news found.</h4>
              )}
          </ul>

          <div className="text-center mt-5 load-btn">
            {newses.length < total && (
              <button className="btn_cmn" onClick={() => fetchNewses(page + 1)}>
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

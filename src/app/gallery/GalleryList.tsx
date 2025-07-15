"use client";

import { useEffect, useState } from "react";
import {  getGalleryList} from '@/utils/frontApi';
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
export default function GalleryList() {
  const [gallery, setGallery] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemLimit = 100;
  
  const fetchGallery = async (newPage = 1) => {
    setLoading(true);

    try {
      getGalleryList(newPage, itemLimit).then(data => {
          if (data.data) {
            if (newPage === 1) {
              setGallery(data.data); // Reset list when new search/filter
            } else {
              setGallery((prev) => [...prev, ...data.gallery]); // Append when loading more
            }
      
            setTotal(data.total);
            setPage(newPage);
          } else {
            console.log(data);
              
          }
      });
    } catch (error) {
      console.error("Error fetching gallery:", error);
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
  useEffect(() => {
    fetchGallery(1); // Fetch on page load
  }, [search, categoryId, language, gender]); // Refetch when filters change
  return (
    <>
    <section className="sec_padd pb-0 gallery_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="gallery_list">
            {gallery.map((item: any) => {
                  if(item.type == 'video'){
                    return (
                      <li className="gallery_large with_img" key={item._id}>
                        <div className="video_sec">
                          <video id="videoSec2" loop  muted className="videoSec" poster={uploadsUrl+'/'+item?.videoPoster} preload="none">
                            <source src={uploadsUrl+'/'+item?.video} data-wf-ignore="true" />
                          </video>
                          <span className="playBtn"><img src="/images/play.svg" /></span>
                        </div>
                    </li>
                    )
                  }else{
                    return (
                      <li key={item._id} className="gallery_small with_img">
                        <img src={uploadsUrl+'/'+item?.image} alt="" />
                    </li>
                    )
                  }
                  })}
                  {gallery.length == 0 && (
                    <h4>No gallery found.</h4>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

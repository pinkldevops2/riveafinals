"use client";

import { useEffect, useState } from "react";
import {getDoctorsList, getDoctorSpeciality} from '@/utils/frontApi';

type Doctor = {
  _id: string;
  name: string;
  email: string;
  speciality: string;
  languages: string[];
  gender: string;
};
const uploadsUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemLimit = 3;
  const [specialityOption, setSpecialityOptioin] = useState([]);
  const [languageOption, setLanguageOptioin] = useState([]);
  const [genderOption, setGenderOptioin] = useState(['Male','Female', 'Other']);
  const fetchDoctors = async (newPage = 1) => {
    setLoading(true);

    try {
      getDoctorsList(search, speciality, language, gender, newPage, itemLimit).then(data => {
          if (data.doctors) {
            if (newPage === 1) {
              setDoctors(data.doctors); // Reset list when new search/filter
            } else {
              setDoctors((prev) => [...prev, ...data.doctors]); // Append when loading more
            }
      
            setTotal(data.total);
            setPage(newPage);
          } else {
            console.log(data);
              
          }
      });
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }

    setLoading(false);
  };

  const fetchSpecialities = async () => {
    try {
      getDoctorSpeciality().then(data => {
        if (data.specialities) {
          setSpecialityOptioin(data.specialities);
          setLanguageOptioin(data.languages);
        }
      });
      
    } catch (error) {
      console.error("Error fetching specialities:", error);
    }
  };
  useEffect(() => {
    fetchDoctors(1); // Fetch on page load
  }, [search, speciality, language, gender]); // Refetch when filters change
  useEffect(() =>{
    fetchSpecialities();
  }, []);
  return (
    <>
    <section className="sec_padd doctor_sec">
    <div className="container">
      <div className="row doctor-row">
        <div className="col-md-8">
          <div className="doctor_filter">
          <select value={speciality} onChange={(e) => setSpeciality(e.target.value)}>
              <option value={''}>SPECIALITY</option>
              {specialityOption.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                )
              )}
            </select>
            {/* <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value={''}>LANGUAGES</option>
              {languageOption.map((lng) => (
                  <option key={lng} value={lng}>{lng}</option>
                )
              )}
            </select>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value={''}>GENDER </option>
              {genderOption.map((gnd) => (
                  <option key={gnd} value={gnd}>{gnd}</option>
                )
              )}
            </select> */}
          </div>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mb-3"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-12">
        {loading && <p>Loading...</p>}
        <ul className="doctor_list">
        {doctors.map((doctor: any, index: any) => (
          <li key={doctor._id} id={"doctor-"+index}>
          <figure>
            <img src={uploadsUrl+'/'+doctor?.profile_picture} alt="" />
          </figure>
          <div className="right_body">
            <h3>{doctor.name}</h3>
            <p className="mb-4 univia-pro">{doctor.degree}</p>
            <p className="univia-pro" dangerouslySetInnerHTML={{__html: doctor.description}}></p>
            <a href="#" className="btn_cmn" data-id={"doctor-"+index}>Read More</a>
          </div>
          <div className="doctors-popup">
                <div className="doctors-popup-main">
                  <div className="icon_close">X</div>
                  <div className="doctors-inner">
                    <div className="doctors-img">
                      <img src={uploadsUrl+'/'+doctor?.profile_picture} />
                    </div>
                    <div className="doctors-content">
                      <h3>{doctor.name}</h3>
                      <h6>{doctor.degree}</h6>
                      <div dangerouslySetInnerHTML={{__html: doctor.longDescription}}></div>
                    </div>
                  </div>
                </div>
              </div>
        </li>
        ))}
        
        {doctors.length == 0 && (
          <h4>No doctor found.</h4>
        )}
      </ul>
          
          <div className="text-center mt-5">
            {doctors.length < total && (
              <button className="btn_cmn" onClick={() => fetchDoctors(page + 1)}>
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

"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import GeneralSettingsForm from './templates/GeneralSettingsForm';
import { createSettings, getSettingsByType, updateSettings } from '@/utils/settings';
import NewsSettingsForm from './templates/NewsSettingsForm';
import TestimonialSettingsForm from './templates/TestimonialSettingsForm';
import CaseStudySettingsForm from './templates/CaseStudySettingsForm';
import ResourcesSettingsForm from './templates/ResourcesSettingsForm';
import GallerySettingsForm from './templates/GallerySettingsForm';
import DoctorsListSettingsForm from './templates/DoctorsListSettingsForm';
export default function SettingsList() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [data, setData] = useState<any>([]);
    const [settingsId, setSettingsId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);
    const [loadingData, setLoadingData] = useState(true);
    if (typeof window !== 'undefined') {
        var currentActiveTab: any =  localStorage.getItem('activeTabSettings');
    }
    const [activeTabSettings, setActiveTabSettings] = useState(currentActiveTab && currentActiveTab != 'null' ? currentActiveTab : "general");
    // useEffect(() => {
       
        
    // }, [activeTabSettings]);

    useEffect(() => {
        getProfile().then(data => {
            if (data.error) {
                router.push('/admin/login');
            } else {
                setLoading(false);
                setUser(data);
            }
        });
    }, []);
    const handleSubmit = async (formData: Partial<any>) => {
               try {
                   setIsSubmitting(true)
                   setError(null)
                   if(settingsId != ''){
                    await updateSettings(settingsId, formData)
                   }else{
                    await createSettings(formData)
                   }
                   const updatedSettingResponse = await getSettingsByType(activeTabSettings)
                   setData(updatedSettingResponse.data[0])
                   if(updatedSettingResponse && updatedSettingResponse.data[0]){
                    setSettingsId(updatedSettingResponse.data[0]._id);
                   }
                   toast.success("Settings updated successfully.");
                   //router.push('/admin/settings');
               } catch (err: any) {
                   setError(err.message || 'Failed to update setting')
                   console.error(err)
               } finally {
                   setIsSubmitting(false)
               }
           }
    const fetchData = async () => {
        setLoading(true);
        setLoadingData(true);
        try {
           await getSettingsByType(activeTabSettings).then(result => {
                if (result && result.data && result.data.length > 0) {
                    setData(result.data[0]);
                    setSettingsId(result.data[0]._id);
                }
                setLoading(false);
                setLoadingData(false);
            });
          
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
          setLoadingData(false);
        }
      };
      useEffect(()=>{
        if(data && data._id){
          setSettingsId(data._id);
        }
      },[data])
      useEffect(()=>{
        if (typeof window !== 'undefined') {
            localStorage.setItem('activeTabSettings', activeTabSettings);
        }
        setData([]);
        setSettingsId('');
        fetchData();
      },[activeTabSettings]);
      useEffect(()=>{
        setSettingsId('');
        setData([]);
        fetchData();
      },[]);
      if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>
        );
      }
    if(loadingData){
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>
      )
    }  
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Settings</h1>
              </div>
                {/* Tabs for Different Menus */}
                <ul className="nav nav-tabs">
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "general" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("general")}
                >
                    General
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "news" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("news")}
                >
                    News
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "testimonial" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("testimonial")}
                >
                    Testimonial
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "case-studies" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("case-studies")}
                >
                    Case Studies
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "resources" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("resources")}
                >
                    Resources
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "gallery" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("gallery")}
                >
                    Gallery
                </button>
                </li>
                <li className="nav-item">
                <button 
                    className={activeTabSettings === "doctors-list" ? "nav-link active" : "nav-link"} 
                    onClick={() => setActiveTabSettings("doctors-list")}
                >
                    Doctors List
                </button>
                </li>
            </ul>
              <div className="row tab-content">

                  <div className="col-xl-12 col-md-12 mb-4">
                  <div className="card shadow mb-4">
                        <div className="card-body p-0">
                          {activeTabSettings == 'general' && (
                            <GeneralSettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'news' && (
                            <NewsSettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'testimonial' && (
                            <TestimonialSettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'case-studies' && (
                            <CaseStudySettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'resources' && (
                            <ResourcesSettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'gallery' && (
                            <GallerySettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                          {activeTabSettings == 'doctors-list' && (
                            <DoctorsListSettingsForm
                            initialData={data}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting} />
                          )}
                        </div>
                    </div>
                   </div>
                </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { getUserListById, updateUser } from '@/utils/users';
import ProfileForm from './ProfileForm';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
export default function EditUser() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [userData, setUserData] = useState<any>([]);
    const [page, setPage] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchPageData = async () =>{
            try {
                setLoading(true)
                if(userData && userData.id){
                    const pageResponse = await getUserListById(userData.id)
                    setPage(pageResponse.data)
                }
                setError(null)
            } catch (err) {
                setError('Failed to fetch user data')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPageData()
    }, [userData])

    const handleSubmit = async (formData: Partial<any>) => {
        try {
            setIsSubmitting(true)
            setError(null)
            if(userData.id){
                const result = await updateUser(userData.id, formData)
                if(result.success == true){
                    if(userData.username != result.data.username || userData.profile_picture != result.data.profile_picture){
                        localStorage.setItem('userData',JSON.stringify(result.data))
                        window.location.reload();
                    }
                }
                toast.success("Profile updated successfully.");
            }
        } catch (err: any) {
            setError(err.message || 'Failed to update user')
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        var userDataStr: any = localStorage.getItem('userData');
        if(userDataStr){
            userDataStr = JSON.parse(userDataStr);
            setUserData(userDataStr);
        }
        getProfile().then(data => {
            if (data.error) {
                router.push('/admin/login');
            } else {
                setUser(data);
            }
        });
    }, []);
    if (loading) {
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
                <h1 className="h3"> Edit Profile</h1>
              </div>

              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-12">
                      <div className="card border-left-primary shadow h-100 py-2">
                          <div className="card-body">
                            <ProfileForm 
                            initialData={page}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            isUpdateMode={true}
                            />  
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
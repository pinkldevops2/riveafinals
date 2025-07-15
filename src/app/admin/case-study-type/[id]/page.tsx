"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { getCSTypeById, updateCSType } from '@/utils/caseStudyType';
import CSTypeForm from '../CSTypeForm';
import { toast } from 'react-toastify';
interface EditCSTypeProps {
    params: {
        id: string
    }
}
export default function EditCSType() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const [page, setPage] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const params = useParams<{ id: string }>()
    const { id } = params;
    useEffect(() => {
        const fetchPageData = async () =>{
            try {
                setLoading(true)
                const pageResponse = await getCSTypeById(id)
                setPage(pageResponse.data)
                setError(null)
            } catch (err) {
                setError('Failed to fetch case-study-type data')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPageData()
    }, [id])

    const handleSubmit = async (formData: Partial<any>) => {
        try {
            setIsSubmitting(true)
            setError(null)

            await updateCSType(id, formData)

            const updatedPageResponse = await getCSTypeById(id)
            setPage(updatedPageResponse.data)
            toast.success("Case Study Type updated successfully.");
            router.push('/admin/case-study-type');
        } catch (err: any) {
            setError(err.message || 'Failed to update case-study-type')
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        getProfile().then(data => {
            if (data.error) {
                router.push('/admin/login'); // Redirect if not logged in
            } else {
                setUser(data);
            }
        });
    }, []);
    if (loading) {
        return (
            <div>
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
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
                <h1 className="h3"> Edit Case Study Type: {page?.type}</h1>
              </div>

              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-12">
                      <div className="card border-left-primary shadow h-100 py-2">
                          <div className="card-body">
                            <CSTypeForm 
                            initialData={page}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
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
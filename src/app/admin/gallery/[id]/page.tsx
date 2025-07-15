"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { getGalleryById, updateGallery } from '@/utils/gallery';
import GalleryForm from '../GalleryForm';
import { toast } from 'react-toastify';
interface EditGalleryProps {
    params: {
        id: string
    }
}
export default function EditGallery() {
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
                const pageResponse = await getGalleryById(id)
                setPage(pageResponse.data)
                setError(null)
            } catch (err) {
                setError('Failed to fetch gallery data')
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

            await updateGallery(id, formData)

            const updatedPageResponse = await getGalleryById(id)
            setPage(updatedPageResponse.data)
            toast.success("Gallery image updated successfully.");
            router.push('/admin/gallery');
        } catch (err: any) {
            setError(err.message || 'Failed to update gallery image')
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
                <h1 className="h3"> Edit Gallery: {page?.name}</h1>
              </div>

              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-12">
                      <div className="card border-left-primary shadow h-100 py-2">
                          <div className="card-body">
                            <GalleryForm 
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
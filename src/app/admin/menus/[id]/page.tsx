"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { getMenuById, updateMenu } from '@/utils/menus';
import MenuForm from '../MenuForm';
import { toast } from 'react-toastify';
interface EditMenuProps {
    params: {
        id: string
    }
}
export default function EditMenu() {
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
                const pageResponse = await getMenuById(id)
                setPage(pageResponse.data)
                setError(null)
            } catch (err) {
                setError('Failed to fetch page data')
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

            await updateMenu(id, formData)

            const updatedPageResponse = await getMenuById(id)
            setPage(updatedPageResponse.data)
            toast.success("Menu updated successfully.");
            router.push('/admin/menus');
        } catch (err: any) {
            setError(err.message || 'Failed to update page')
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
                <h1 className="h3"> Edit Menu: {page?.title}</h1>
              </div>

              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-12">
                      <div className="card border-left-primary shadow h-100 py-2">
                          <div className="card-body">
                            <MenuForm 
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
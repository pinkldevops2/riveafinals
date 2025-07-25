"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import { createMenu } from '@/utils/menus';
import MenuForm from '../../MenuForm';
import { toast } from 'react-toastify';
export default function AddMenu() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const params = useParams<{ type: string }>()
    const { type } = params;
    const [page, setPage] = useState<Partial<any>>({
            location: type,
            title: '',
            url: '',
            targetWindow: false,
            targetColumn: 'column1',
            order: 0,
        })
    const handleSubmit = async (formData: any) => {
        try{
            setIsSubmitting(true)
            setError(null)

            await createMenu(formData).then(data => {
                if (data.error) {
                    toast.error(data.error);
                    setError(data.error || 'Failed to create a menu')
                } else {
                    toast.success("Menu added successfully.");
                    router.push('/admin/menus')
                }
            });
        } catch (err: any) {
            toast.error('Failed to create a menu');
            //setError(err.message || 'Failed to create a menu')
            //console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        getProfile().then(data => {
            if (data.error) {
                router.push('/admin/login');
            } else {
                setUser(data);
            }
        });
    }, []);

    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Add Menu</h1>
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
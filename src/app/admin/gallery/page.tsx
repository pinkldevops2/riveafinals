"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile, logout } from '@/utils/auth';
import { getGallery, deleteGallery } from '@/utils/gallery';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import ConfirmDeleteModal from '@/app/admin/common/ConfirmDeleteModal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import {Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export default function Gallery() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [data, setData] = useState([]);
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);

    const [totalRows, setTotalRows] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [sortColumn, setSortColumn] = useState("_id");
    const [sortOrder, setSortOrder] = useState("asc");
    const customStyles = {
        headCells: {
          style: {
            backgroundColor: "#fff", // Header Background Color
            color: "#858796", // Header Font Color
            fontSize: "16px",
            fontWeight: "bold",
            padding: "12px",
          },
        },
        cells: {
          style: {
            fontSize: "14px",
          },
        },
        rows: {
          style: {
            fontSize: "14px",
            borderBottom: "1px solid #ddd",
            "&:hover": {
              backgroundColor: "#f1f1f1",
            },
          },
        },
      };

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
    const handleDelete = async (id: string) => {
        try {
            const res = await deleteGallery(id);
            if(res.success == false){
                toast.error(res.error);
            }else{
                toast.success("Gallery image deleted successfully.");
                fetchData(page, perPage, sortColumn, sortOrder);
            }
            
        } catch(err){
            setError('error deleting page')
            console.error(err)
        }
    }
   
    const fetchData = async (pageNumber = 1, perPageSize = 10, sortCol = "_id", sortOrd = "asc") => {
        //setLoading(true);
        try {
            getGallery(pageNumber, perPageSize, sortCol, sortOrd).then(result => {
                if (result.data) {
                    setData(result.data);
                    setTotalRows(result.total);
                    //setLoading(false);
                }
            });
          
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          //setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData(page, perPage, sortColumn, sortOrder);
      }, [page, perPage, sortColumn, sortOrder]);
    
      const handlePageChange = (newPage: number) => {
        setPage(newPage);
      };
    
      const handlePerRowsChange = (newPerPage: number, newPage: number) => {
        setPerPage(newPerPage);
        setPage(newPage);
      };
    
      const handleSort = (column: any, sortDirection: string) => {
        setSortColumn(column.sortKey);
        setSortOrder(sortDirection);
      };
        const columns = [
            { name: "Type",  selector: (row: any) => row.type, sortable: true, sortKey: 'type' },
            { name: "Image",
            cell: (row: any) => (
                <>
                {row.type == 'image' && row.image != undefined && row.image != '' ? (
                  <>
                  {<div className='mr-3 p-2'><img src={serverUrl+'/'+row.image} width={48} alt="Gallery Image"/></div>}
                  </>
                ) : row.type == 'video' && row.videoPoster != undefined && row.videoPoster != '' ? (
                  <>
                  <div className='mr-3 p-2'><img src={serverUrl+'/'+row.videoPoster} width={48} alt="video poster image"/></div>
                  </>
                ) : (
                  <>
                  <div className='mr-3 p-2'><img src={serverUrl+'/uploads/images/undraw_profile.svg'} width={48} alt="Gallery Image"/></div>
                  </>
                )}
                </>
            ), sortable: false, sortKey: 'image' },
            { name: "Order", selector: (row: any) => row.order, sortable: true, sortKey: 'order' },
            {
            name: "Actions",
            cell: (row: any) => (
                <>
                <Link className="btn text-primary" href={"/admin/gallery/"+row._id}>
                    <i className='fa fas fa-pen'></i>
                </Link>
                <ConfirmDeleteModal id={row._id} onDelete={handleDelete} msg="Are you sure you want to delete this Gallery image?" />
                </>
            ),
            },
        ];
      if (loading) {
        return (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>
        );
      }
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Gallery</h1>
              </div>
              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-4">
                  <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Gallery Images</h6>
                            <Link className='btn btn-dark btn-sm' href={'/admin/gallery/add'}><i className='fa fa-plus'></i> Add New Image</Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                paginationServer
                                paginationTotalRows={totalRows}
                                paginationPerPage={perPage}
                                onChangePage={handlePageChange}
                                onChangeRowsPerPage={handlePerRowsChange}
                                onSort={handleSort}
                                sortServer
                                highlightOnHover
                                striped
                                customStyles={customStyles}
                                />
                                
                            </div>
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
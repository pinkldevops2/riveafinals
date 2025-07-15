"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile, logout } from '@/utils/auth';
import { getCategories, deleteCategory } from '@/utils/newsCategories';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import ConfirmDeleteModal from '@/app/admin/common/ConfirmDeleteModal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import {Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export default function NewsCategories() {
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
    const [searchText, setSearchText] = useState("");
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
            const res = await deleteCategory(id);
            if(res.success == false){
                toast.error(res.error);
            }else{
                toast.success("Category deleted successfully.");
                fetchData(page, perPage, sortColumn, sortOrder);
            }
            
        } catch(err){
            setError('error deleting page')
            console.error(err)
        }
    }
   
    const fetchData = async (pageNumber = 1, perPageSize = 10, sortCol = "_id", sortOrd = "asc", search = '') => {
        //setLoading(true);
        try {
            getCategories(search, pageNumber, perPageSize, sortCol, sortOrd).then(result => {
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
        fetchData(page, perPage, sortColumn, sortOrder, searchText);
      }, [page, perPage, sortColumn, sortOrder, searchText]);
    
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

      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
      }
        const columns = [
            { name: "Name",  selector: (row: any) => row.name, sortable: true, sortKey: 'name' },
            { name: "Order", selector: (row: any) => row.order, sortable: true, sortKey: 'order' },
            {
            name: "Actions",
            cell: (row: any) => (
                <>
                <Link className="btn text-primary" href={"/admin/news-categories/"+row._id}>
                    <i className='fa fas fa-pen'></i>
                </Link>
                <ConfirmDeleteModal id={row._id} onDelete={handleDelete} msg="Are you sure you want to delete this category?" />
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
                  <h1 className="h3 mb-0 text-gray-800">News Categories</h1>
                  <div className="">
                    <form className="search-form admin-search">
                      <input type="text" onChange={handleSearch} name="search" placeholder="Search" />
                      <button type="button" className="search_btn"><img src="/images/icon-search.svg" /></button>
                    </form>
                  </div>
              </div>
              <div className="row">

                  <div className="col-xl-12 col-md-12 mb-4">
                  <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">News Categories</h6>
                            <Link className='btn btn-dark btn-sm' href={'/admin/news-categories/add'}><i className='fa fa-plus'></i> Add New Category</Link>
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
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import { getPageList, deletePage } from '@/utils/pages';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import ConfirmDeleteModal from '@/app/admin/common/ConfirmDeleteModal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
export default function PageList() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [data, setData] = useState([]);
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProfile().then(data => {
            if (data.error) {
              setLoading(true);
                router.push('/admin/login'); // Redirect if not logged in
            } else {
                setUser(data);
                setLoading(false);
            }
        });
    }, []);
    const [totalRows, setTotalRows] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [searchText, setSearchText] = useState('');
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
                setUser(data);
            }
        });
    }, []);
    const handleDelete = async (id: string) => {
        try {
            const res = await deletePage(id);
            if(res.success == false){
                toast.error(res.error);
            }else{
                toast.success("Page deleted successfully.");
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
            getPageList(search, pageNumber, perPageSize, sortCol, sortOrd).then(result => {
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
      const handleSearch = (event: any) => {
        setSearchText(event.target.value);
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
            { name: "Title",  selector: (row: any) => row.title, sortable: true, sortKey: 'title' },
            { name: "Slug", selector: (row: any) => row.slug, sortable: true, sortKey: 'slug' },
            { name: "Home Page",cell: (row: any) => (
                row.isHomePage == true ? (
                        <span className="badge badge-success">Yes</span> 
                    ) : (
                        <span className="badge badge-secondary">No</span>
                    )
                    
                
            ), sortable: true, sortKey: 'isHomePage'},
            { name: "Status",cell: (row: any) => (
                row.isActive == true ? (
                        <span className="badge badge-success">Active</span> 
                    ) : (
                        <span className="badge badge-secondary">Inactive</span>
                    )
                    
                
            ), sortable: true, sortKey: 'isActive'},
            {
            name: "Actions",
            cell: (row: any) => (
                <>
                <Link className="btn text-primary" href={"/admin/pages/"+row._id}>
                    <i className='fa fas fa-pen'></i>
                </Link>
                <ConfirmDeleteModal id={row._id} onDelete={handleDelete} msg="Are you sure you want to delete this page?" />
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
                  <h1 className="h3 mb-0 text-gray-800">Pages</h1>
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
                            <h6 className="m-0 font-weight-bold text-primary">Pages List</h6>
                            <Link className='btn btn-dark btn-sm' href={'/admin/pages/add'}><i className='fa fa-plus'></i> Add New Page</Link>
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
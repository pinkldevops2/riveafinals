"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile } from '@/utils/auth';
import { getContactFormList, deleteContactForm } from '@/utils/contactForm';
import Sidebar from '@/app/admin/common/sidebar';
import Footer from '@/app/admin/common/footer';
import Header from '@/app/admin/common/header';
import ConfirmDeleteModal from '@/app/admin/common/ConfirmDeleteModal';
import { toast } from 'react-toastify';
import { Button, Modal, Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import moment from "moment";

export default function ContactForm() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [data, setData] = useState([]);
    const [error, setError] = useState<string | null>(null)
    const [viewData, setViewData] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [totalRows, setTotalRows] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [sortColumn, setSortColumn] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState("desc");
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

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
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
            const res = await deleteContactForm(id);
            if(res.success == false){
                toast.error(res.error);
            }else{
                toast.success("Contact form entry deleted successfully.");
                fetchData(page, perPage, sortColumn, sortOrder);
            }
            
        } catch(err){
            setError('error deleting page')
            console.error(err)
        }
    }
   
    const handleViewForm = ( viewdata: any ) => {
        setViewData(viewdata);
        handleShow();
    };
    const fetchData = async (pageNumber = 1, perPageSize = 10, sortCol = "createdAt", sortOrd = "desc", search = '') => {
        setLoading(true);
        try {
            getContactFormList(search, pageNumber, perPageSize, sortCol, sortOrd).then(result => {
                if (result.data) {
                    setData(result.data);
                    setTotalRows(result.total);
                }
                setLoading(false);
            });
          
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
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
      const handleSearch = (event: any) => {
        setSearchText(event.target.value);
      }
        const columns = [
            { name: "Name",  selector: (row: any) => row.name, sortable: true, sortKey: 'name' },
            // { name: "Email", selector: (row: any) => row.email, sortable: true, sortKey: 'email' },
            { name: "Phone", selector: (row: any) => row.phone },
            { name: "Department/Schedule", selector: (row: any) => row.department },
            { name: "Message", selector: (row: any) => row.message },
            { name: "Date", selector: (row: any) => row.date , sortable: true, sortKey: 'date' },
            { name: "Time", selector: (row: any) => row.time },
            { name: "Submission Date",cell: (row: any) => (
              <>
                {moment(row.createdAt).format("YYYY-MM-DD HH:mm:ss")} 
              </>
          ), sortable: true, sortKey: 'createdAt'
          },
            {
            name: "Actions",
            cell: (row: any) => (
                <>
                <button className="btn text-primary" onClick={() => handleViewForm(row)}>
                    <i className='fa fas fa-eye'></i>
                </button>
                <ConfirmDeleteModal id={row._id} onDelete={handleDelete} msg="Are you sure you want to delete this entry?" />
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
                  <h1 className="h3 mb-0 text-gray-800">Contact Submissions</h1>
                  <div>
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
                            <h6 className="m-0 font-weight-bold text-primary">Contact Submissions</h6>
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
        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Submitted Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {viewData ? (
                <>
                    <table className='table table-bordered'>
                        <tbody>
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td width={'70%'}>{viewData.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td>
                            <td>{viewData.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Phone:</strong></td>
                            <td>{viewData.phone}</td>
                        </tr>
                        <tr>
                            <td><strong>Department/Schedule:</strong></td>
                            <td>{viewData.department}</td>
                        </tr>
                        <tr>
                            <td><strong>Date:</strong></td>
                            <td>{viewData?.date}</td>
                        </tr>
                        <tr>
                            <td><strong>Time:</strong></td>
                            <td>{viewData?.time}</td>
                        </tr>
                        <tr>
                            <td><strong>Message:</strong></td>
                            <td>{viewData.message}</td>
                        </tr>
                        </tbody>
                    </table>
                </>
            ) : (
                <p>No details available.</p>
            )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
}
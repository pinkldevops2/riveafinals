"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export default function Sidebar() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setLoading(false); // Stop loading when the path changes
      }, [pathname]);
    
      const handleClick = (href: any) => {
        if(pathname !== href){
            setLoading(true);
            //router.push(href);
        }
        //router.push(href); // Programmatic navigation
      };
  return (
    <>
        {loading && <div className="d-flex justify-content-center align-items-center vh-100" style={{width: '100%',position: 'absolute', zIndex: '999'}}>
            <Spinner animation="border" variant="primary" />
          </div>}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
                <div className="sidebar-brand-text mx-3"><img src="/images/RIVEA_Logo.svg" alt="" /></div>
            </Link>
            <hr className="sidebar-divider my-0" />

            <li  className={pathname === "/admin" ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin")} href="/admin">
                    <i className="fas fa-fw fa-fw fa-home"></i>
                    <span> Dashboard</span>
                </Link>
            </li>
            <li className={pathname.startsWith("/admin/users") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/users")} href="/admin/users">
                    <i className="fas fa-fw fa-fw fa-user"></i>
                    <span> Admin Users</span>
                </Link>
            </li>
            <li className={pathname.startsWith("/admin/pages") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/pages")} href="/admin/pages">
                    <i className="fas fa-fw fa-fw fa-folder"></i>
                    <span> Page Managment</span>
                </Link>
            </li>
            <li className={pathname.startsWith("/admin/menus") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/menus")} href="/admin/menus">
                    <i className="fas fa-fw fa-fw fa-bars"></i>
                    <span> Menu Managment</span>
                </Link>
            </li>
            <li className={pathname.startsWith("/admin/contact-form") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/contact-form")} href="/admin/contact-form">
                    <i className="fas fa-fw fa-fw fa-address-book"></i>
                    <span> Contact From</span>
                </Link>
            </li>

            <li className={pathname.startsWith("/admin/doctors-list") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/doctors-list")} href="/admin/doctors-list">
                    <i className="fas fa-fw fa-fw fa-user-md"></i>
                    <span> Doctors List</span>
                </Link>
            </li>

            <li className={pathname.startsWith("/admin/resources") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/resources")} href="/admin/resources">
                    <i className="fa fa-users"></i>
                    <span> Resources</span>
                </Link>
            </li>

            {/*<li className={pathname.startsWith("/admin/news") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/news")} href="/admin/news">
                    <i className="fas fa-fw fa-fw fa-newspaper"></i>
                    <span> News</span>
                </Link>
            </li>*/}

            <li className={pathname.startsWith("/admin/news") || pathname.startsWith("/admin/news-categories") ? "nav-item nav-has-subnav active" : "nav-has-subnav nav-item"}>
                <a className="nav-link btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#news-collapse" aria-expanded="false">
                   <i className="fas fa-fw fa-fw fa-newspaper"></i>
                    <span> News</span>
                </a>
                <div className="collapse" id="news-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li className={pathname.startsWith("/admin/news-categories") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/news-categories")} href="/admin/news-categories">
                                <i className="fas fa-fw fa-fw fa-layer-group"></i>
                                <span> Categories</span>
                            </Link>
                        </li>
                        <li className={pathname.startsWith("/admin/news") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/news")} href="/admin/news">
                                <i className="fas fa-fw fa-fw fa-newspaper"></i>
                                <span> News</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li className={pathname.startsWith("/admin/testimonials") || pathname.startsWith("/admin/testimonial-categories") ? "nav-item nav-has-subnav active" : "nav-has-subnav nav-item"}>
                <a className="nav-link btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#testimonial-collapse" aria-expanded="false">
                   <i className="fas fa-fw fa-fw fa-comments"></i>
                    <span> Testimonials</span>
                </a>
                <div className="collapse" id="testimonial-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li className={pathname.startsWith("/admin/testimonial-categories") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/testimonial-categories")} href="/admin/testimonial-categories">
                                <i className="fas fa-fw fa-fw fa-layer-group"></i>
                                <span> Categories</span>
                            </Link>
                        </li>
                        <li className={pathname.startsWith("/admin/testimonials") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/testimonials")} href="/admin/testimonials">
                                <i className="fas fa-fw fa-fw fa-comments"></i>
                                <span> Testimonials</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li className={pathname.startsWith("/admin/case-study") || pathname.startsWith("/admin/case-study-categories") || pathname.startsWith("/admin/case-study-type") ? "nav-item active nav-has-subnav" : "nav-item nav-has-subnav"}>
                <a className="nav-link btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#case-study-collapse" aria-expanded="false">
                   <i className="fas fa-fw fa-fw fa-briefcase"></i>
                    <span> Case Study</span>
                </a>
                <div className="collapse" id="case-study-collapse" >
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li className={pathname.startsWith("/admin/case-study-type") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/case-study-type")} href="/admin/case-study-type">
                                <i className="fas fa-fw fa-fw fa-plus"></i>
                                <span> Case Study Type</span>
                            </Link>
                        </li>
                        <li className={pathname.startsWith("/admin/case-study-categories") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/case-study-categories")} href="/admin/case-study-categories">
                                <i className="fas fa-fw fa-fw fa-layer-group"></i>
                                <span> Categories</span>
                            </Link>
                        </li>
                        <li className={pathname.startsWith("/admin/case-study") ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" onClick={() => handleClick("/admin/case-study")} href="/admin/case-study">
                                <i className="fas fa-fw fa-fw fa-briefcase"></i>
                                <span> Case Study</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>

            {/*<li className={pathname.startsWith("/admin/testimonials") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/testimonials")} href="/admin/testimonials">
                    <i className="fas fa-fw fa-fw fa-comments"></i>
                    <span> Testimonials</span>
                </Link>
            </li>*/}

            <li className={pathname.startsWith("/admin/gallery") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/gallery")} href="/admin/gallery">
                    <i className="fa fa-camera"></i>
                    <span> Gallery</span>
                </Link>
            </li>

            <li className={pathname.startsWith("/admin/settings") ? "nav-item active" : "nav-item"}>
                <Link className="nav-link" onClick={() => handleClick("/admin/settings")} href="/admin/settings">
                    <i className="fa-solid fa-gear"></i>
                    <span> Settings</span>
                </Link>
            </li>
        </ul>
    </>
  );
}

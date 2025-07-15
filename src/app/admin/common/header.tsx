"use client";
import { useRouter } from 'next/navigation';
import { logout } from '@/utils/auth';
import Script from 'next/script';

import { useEffect, useState } from "react";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export default function Header() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>([])
  const [userProfilePic, setUserProfilePic] = useState('/images/undraw_profile.svg')
  useEffect(() => {
      if (typeof window !== 'undefined') {
      var userDataStr: any = localStorage.getItem('userData');
      }
      if(userDataStr){
        userDataStr = JSON.parse(userDataStr);
        setUserData(userDataStr);
      }
    if(!localStorage.getItem('userData')){
      router.push('/admin/login');
    }
  }, []);
  useEffect(()=>{
    if(userData && userData.profile_picture && userData.profile_picture != ''){
      setUserProfilePic(serverUrl+'/'+userData.profile_picture);
    }
  },[userData]);
  useEffect(() => {
    require("../../../../public/assets/js/jquery-3.7.0.min.js");
    require("../../../../public/assets/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <Script src="/assets/js/vendor/jquery/jquery.min.js"></Script>
      
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown no-arrow pl-5">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userData ? userData.username : ''}</span>
                    <img className="img-profile rounded-circle"
                        src={userProfilePic} />
                </a>
                <div className="dropdown-menu shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="/admin/profile">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={() => { logout().then(() => router.push('/admin/login')) }}>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>
        </ul>

      </nav>
    </>
  );
}

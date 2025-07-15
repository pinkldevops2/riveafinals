"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { login } from "@/utils/auth";
import { toast } from 'react-toastify';
export default function Login() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  useEffect(() => {
   
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
        if (res.message) {
            localStorage.setItem('userData', JSON.stringify(res) );
            router.push('/admin');
        } else {
          toast.error(res.error);
        }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
 
  return (
    <>
       <section className="vh-100" style={{backgroundColor: '#f6f9ff'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="mb-3 text-center"><img src="/images/RIVEA_Logo.svg" alt="" /></div>
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleLogin} className="">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label d-flex" htmlFor="email">Email address</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="Email" 
                      value={email} 
                      required
                      onChange={(e) => setEmail(e.target.value)} 
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label d-flex" htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      id="password"
                      placeholder="Password" 
                      value={password} 
                      required
                      onChange={(e) => setPassword(e.target.value)} 
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="pt-1 mb-4 w-25">
                    <button type="submit" className="btn d-flex btn-dark btn-lg btn-block">Login</button>
                  </div>
                </form>
                {message && <p className="text-danger">{message}</p>}
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

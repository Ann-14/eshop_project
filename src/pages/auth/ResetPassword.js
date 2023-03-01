import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { Loader } from "../../components/Loader";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email for further instructions");
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {loading && <Loader />}
      
        {/* ---Log in Form Wrapper--- */}
        <div className="flex justify-center mt-24" >
          <div className="my-auto mx-auto flex flex-col justify-center">
            <h1 className="text-4xl font-medium">Password Reset</h1>
            <div className="my-5">
              <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg   hover:border-yellow-500 hover:shadow transition duration-150">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-6 h-6 "
                  alt=""
                />
                <span>Login with Google</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium  pb-2 ">
                    Email address
                  </p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
                    placeholder="Enter email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <div className="flex flex-col gap-4">
                  <button
                    className="w-full btn btn-primary "
                    disabled={loading}
                    type="submit"
                  >
                    Reset Password
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                  <div className="text-center flex justify-center mt-3">
                    Need an account?
                    <Link to="/signup" className="hover:underline ">
                    <span className="ml-2 underline hover:text-primary">Sign up!</span> 
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            
              <div className="wave "></div>
              <div className="wave"></div>
              <div className="wave"></div>
           
          </div>
        </div>
    </>
  );
};

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

import { Loader } from "../../components/Loader";
import { toast } from "react-toastify";
import Spline from "@splinetool/react-spline";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match.");
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        toast.success("Registration successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });

    setLoading(false);
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {loading && <Loader />}
      
      <div className="flex  " >
          <div className="my-auto mx-auto  flex flex-col justify-center   ">
        
        {/* ---Log in Form Wrapper--- */}
        <div className="flex   ">
          <div className="my-auto mx-auto  flex flex-col justify-center  ">
            <h1 className="text-4xl font-medium mt-16 md:mt-0">Sign up</h1>
            <div className="my-5">
              <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  hover:border-yellow-500 hover:shadow transition duration-150">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-6 h-6 "
                  alt=""
                />{" "}
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
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label htmlFor="password">
                  <p className="font-medium   pb-2">Password</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <label htmlFor="passwordConfirm">
                  <p className="font-medium pb-2">
                    Password Confirmation
                  </p>
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    autoComplete="on"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow "
                    placeholder="Confirm your password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                </label>
                <div className="flex gap-4">
                  <button
                    className="btn btn-primary mx-auto items-center justify-center"
                    disabled={loading}
                    type="submit"
                  >
                    Sign up
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
                  <p className="text-center flex justify-center mt-3">
                 Already have an account?
                    <Link to="/login" className="underline hover:text-primary">
                    <span className="ml-2">Log In!</span> 
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            <div>
              <div className="wave "></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>
        {/* we hide img on small screen */}
        {/* <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" alt='bg' className='hidden md:flex h-screen md:w-1/2' /> */}
    </div>
    </div>
    </>
  );
};

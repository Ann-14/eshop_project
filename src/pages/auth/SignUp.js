
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'

import { Loader } from '../../components/Loader'
import { toast } from 'react-toastify'
import Spline from '@splinetool/react-spline'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match.')
    }
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setLoading(false)
        toast.success('Registration successful...')
        navigate('/login')
      })
      .catch((error) => {
        toast.error(error.message)
        setLoading(false)
      });

    setLoading(false)
  }
  if (loading) {
    return <Loader />
  }

  return (
    <>
      {loading && <Loader />}
     <div
        className="hero min-h-screen"
        
      >
<div className="hero-overlay bg-opacity-60"></div>
<Spline scene="https://prod.spline.design/sNuLt3pE0Cm3QWA5/scene.splinecode" /> 
        {/* ---Log in Form Wrapper--- */}
        <div className="flex w-1/2  " >
          <div className="my-auto mx-auto overflow-hidden flex flex-col justify-center text-white py-4 ">
            <h1 className="text-4xl font-medium">Sign up</h1>
            <div className="my-5">
              <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  text-slate-200 hover:border-yellow-500 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 text-slate-200" alt="" /> <span>Login with Google</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium  pb-2 text-slate-200">Email address</p>
                  <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label htmlFor="password">
                  <p className="font-medium  text-slate-200 pb-2">Password</p>
                  <input id="password" name="password" type="password"  autoComplete="on" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <label htmlFor="passwordConfirm">
                  <p className="font-medium  text-slate-200 pb-2">Password Confirmation</p>
                  <input id="passwordConfirm" name="passwordConfirm" type="password" autoComplete="on" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Confirm your password" onChange={(e) => setPasswordConfirm(e.target.value)} required />
                </label>
                <div className="flex gap-4">
                  <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" disabled={loading} type='submit'>Sign up
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </button>
                  <p className="text-center">  Already have an account?<Link to='/login' className='underline'> Log In</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* we hide img on small screen */}
        {/* <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" alt='bg' className='hidden md:flex h-screen md:w-1/2' /> */}
      </div>
      

    </>
  )
}
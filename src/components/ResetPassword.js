
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../firebase/config'
import { Loader } from './Loader'

export const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false)
        toast.success('Check your email for further instructions')
        navigate('/login')
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.message)
      });
  }

  return (
    <>
      {loading && <Loader />}
      <section className="flex flex-col md:flex-row">
        {/* ---Log in Form Wrapper--- */}
        <div className="flex bg-purple-300 md:w-1/2">
          <div className="my-auto mx-auto overflow-hidden flex flex-col justify-center text-white py-4 ">
            <h1 className="text-4xl font-medium">Password Reset</h1>
            <div className="my-5">
              <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  text-slate-200 hover:border-yellow-500 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 text-slate-200" alt="" /> <span>Login with Google</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium  pb-2 text-slate-200">Email address</p>
                  <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-black" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <div className="flex gap-4">
                  <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" disabled={loading} type='submit'>Reset Password
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </button>
                  <p className="text-center">  Need an account? <Link to='/signup' className='hover:underline '>Sign up</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* we hide img on small screen */}
        <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" alt='bg' className='hidden md:flex h-screen md:w-1/2' />
      </section>
    </>
  )
}



import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../../components/Loader';
import Spline from '@splinetool/react-spline';
import { useSelector } from 'react-redux';
import { selectPreviousURL } from '../../redux/slice/cartSlice';
import heroImg from '../../assets/heroImg.jpg'
import brick from '../../assets/brick-wall.svg'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const prreviousURL = useSelector(selectPreviousURL)
  const navigate = useNavigate();

const redirectUser = () => {
  if(prreviousURL.includes('cart')){
    return navigate('/cart')
  }
  navigate('/')
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      setLoading(false)
      toast.success('Login successful')
      // navigate('/')
      redirectUser()
    })
    .catch((error) => {
      setLoading(false)
      toast.error(error.message)
    });
    setLoading(false)
  }
//Login with Google
const provider = new GoogleAuthProvider();
 const loginWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user)
   toast.success('Login successful')
  //  navigate('/')
   redirectUser()
  }).catch((error) => {
    toast.error(error.message)
  });
 }
  return (
    <>
    {loading && <Loader/>}
    <ToastContainer/>
        {/* ---Log in Form Wrapper--- */}
        <div className="flex  " >
          <div className="my-auto mx-auto  flex flex-col justify-center   ">
            <h1 className="text-4xl font-medium mt-16 md:mt-0">Login</h1>
            <p className="mt-2">Hi, Welcome back 👋</p>
            <div className="my-5">
              <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg  hover:border-yellow-500 hover:shadow transition duration-150" onClick={loginWithGoogle}>
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 text-slate-200" alt="" /> <span>Login with Google</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="font-medium  pb-2 ">Email address</p>
                  <input id="email" name="email" type="email" className="w-full py-3 border  border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <label htmlFor="password">
                  <p className="font-medium  pb-2">Password</p>
                  <input id="password" name="password" type="password"  autoComplete="on" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow " placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <div className="flex gap-4">
                    <label htmlFor="remember" className="">
                      <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mr-2" />
                      Remember me
                    </label>
                    <Link to='/resetpassword' className='hover:underline'>Forgot password?</Link>
                </div>
                <button className="btn btn-primary mx-auto items-center justify-center w-full"disabled={loading} type='submit'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </button>
                <p className="text-center"> Need an account? <Link to='/signup' className='underline mt-24 hover:text-primary'>Sign up</Link></p>
              </div>
            </form>
            <div className=''>
     <div class="wave "></div>
     <div class="wave"></div>
     <div class="wave"></div>
        </div>
          </div>
        </div>
       
        
        {/* </div> */}
    </>
  )
}
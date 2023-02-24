import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'

import { auth } from '../firebase/config'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { removeActiveUser, setActiveUser } from '../redux/slice/authSlice'
import { ShowOnLogin, ShowOnLogout } from './HiddenLink'
import { AdminLink } from './adminRoute/AdminRoute'
import { Theme } from './Theme'
import { CALCULATE_TOTAL_ITEMS, selectCartTotalQuantity } from '../redux/slice/cartSlice'
import { BasketIcon, PhotoIcon } from './UI'


const Header = ({ theme, toggleTheme }) => {


  const [userName, setUserName] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartTotalQuantity = useSelector(selectCartTotalQuantity)

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_ITEMS())
  }, [dispatch])


  //monitor user state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        //Creating a username so it's not null
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf('@'))
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          setUserName(uName)
        } else {
          setUserName(user.displayName)
        }
        dispatch(setActiveUser({
          email: user.email,
          userName: user.displayName ? user.displayName : userName,
          userID: user.uid,
        }))


      } else {
        // User is signed out
        setUserName('')
        dispatch(removeActiveUser())
      }
    });
  }, [dispatch, userName])


  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success('Logout successful')
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });


  }

  return (
    <>
      {/* <PhotoIcon/> */}
      {/* TODO profile page */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <AdminLink>
                <Link to='/admin/home'>Admin</Link>
              </AdminLink>
              <Link to='/homePage'>Home</Link>
              <Link to='/productsPage'>Services</Link>
              <Link to='/contact'>Contact</Link>
              <ShowOnLogin>
                <button><AiOutlineUser /></button>
              </ShowOnLogin>
              <ShowOnLogout>
                <Link to='/login'><button className='btn btn-sm '>Sign in</button></Link>
              </ShowOnLogout>
              <ShowOnLogin>
                <Link to='/' onClick={handleLogout}>Logout</Link>
              </ShowOnLogin>
              <ShowOnLogin>
                <button><AiOutlineUser /></button>
              </ShowOnLogin>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <ShowOnLogout>
            <Link to='/login'><button className='btn btn-sm '>Sign in</button></Link>
          </ShowOnLogout>
          <ShowOnLogin>
            <Link to='/' onClick={handleLogout}>Logout</Link>
          </ShowOnLogin>
          <button className="btn btn-ghost btn-circle">
            <Theme toggleTheme={toggleTheme} theme={theme} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to='/cart'><BasketIcon /></Link>
              <span className="badge badge-xs badge-primary indicator-item">{cartTotalQuantity}</span>
            </div>
          </button>
        </div>
      </div>





    </>
  )
}

export default Header
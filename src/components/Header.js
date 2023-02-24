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

  const [nav, setNav] = useState(false)
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

  const handleNav = () => {
    setNav(!nav)
  }
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
      <header className='flex justify-between items-center h-8 md:h-24 max-w-[1240px] ' >
       
        <PhotoIcon/>
        
          {/*----------- Middle links----------------- */}
        <div className='font-semibold text-lg md:text-xl capitalize'>
          <ul className='hidden md:flex gap-4'>
            <AdminLink>
              <Link to='/admin/home'>Admin</Link>
            </AdminLink>
            <Link to='/homePage'>Home</Link>
            <Link to='/productsPage'>Services</Link>
            <Link to='/contact'>Contact</Link>
          </ul>
        </div>
        {/* //--------------Right links------------- */}
        <ul className='hidden md:flex gap-4'>
          
          {/* TODO profile page */}
          <ShowOnLogin>
            <button><AiOutlineUser /></button>
          </ShowOnLogin>
          <ShowOnLogin>
            <Link to='/' onClick={handleLogout}>Logout </Link>
          </ShowOnLogin>
          
          <Theme toggleTheme={toggleTheme} theme={theme} />
          <ShowOnLogout>
            <Link to='/login'><button className='btn btn-sm '>Sign in</button></Link>
          </ShowOnLogout>
          <Link to='/cart' className='flex'><BasketIcon /><p>{cartTotalQuantity}</p> </Link>
        </ul>

        {/* ---- MOBILE NAVBAR ---- */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <div>
            <Link to='/'><h2 className='w-full text-3xl font-bold m-4'>The Colorsite</h2> </Link>
          </div>
          <div className='flex flex-col text-white '>
            <AdminLink>
              <Link to='/admin/home'>Admin</Link>
            </AdminLink>
            <Link to='/homePage'>Home</Link>
            <Link to='/productsPage'>Products</Link>
            <Link to='/contact'>Contact</Link>
            <ShowOnLogout>
              <Link to='/login'>Sign in</Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <button><AiOutlineUser></AiOutlineUser></button>
            </ShowOnLogin>
            <ShowOnLogin>
              <Link to='/' onClick={handleLogout}>Logout </Link>
            </ShowOnLogin>
            <Link to='/cart'><BasketIcon/><p>{cartTotalQuantity}</p> </Link>
          </div>
        </ul>
      </header>
    </>
  )
}

export default Header
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <header className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      {/* Logo link */}
      <div>
        <Link to='/'><h2 className='w-full text-3xl font-bold text-[#00df9a] m-4'>The Colorsite</h2> </Link>
      </div>
      {/* //Middle links */}
      <ul className='hidden md:flex'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      {/* //Right links */}
      <ul className='hidden md:flex '>
        <Link to='/log in'>Login</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/cart' className='flex'>Cart<AiOutlineShoppingCart  /><p>0</p> </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div>
          <Link to='/'><h2 className='w-full text-3xl font-bold text-[#00df9a] m-4'>The Colorsite</h2> </Link>
        </div>
        <div className='flex flex-col '>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/log in'>Login</Link>
          <Link to='/registration'>Registration</Link>
          <Link to='/cart'>Cart<AiOutlineShoppingCart /><p>0</p> </Link>
        </div>

      </ul>
    </header>
  )
}

export default Header
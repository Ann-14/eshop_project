import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 mb-10 text-white uppercase ">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center justify-between">
            <ul className='flex justify-center gap-4 mx-auto '>
              <Link to='/admin/homeAdmin'>
                Home
              </Link>
              <Link to='/admin/products'>
                Products
              </Link>
              <Link to='/admin/add-product/ADD'>
                Add Products
              </Link>
              <Link to='/admin/orders'>
                Orders
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

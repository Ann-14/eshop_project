import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  return (
    <>
      <div>
        <div>
          <FiUser>UserName</FiUser>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/admin/homeAdmin'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/admin/products'>
                Products
              </Link>
            </li>
            <li>
              <Link to='/admin/add-product/ADD'>
                Add Products
              </Link>
            </li>
            <li>
              <Link to='/admin/orders'>
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

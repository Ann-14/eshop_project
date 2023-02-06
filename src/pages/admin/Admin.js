import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components/admin/Navbar'
import { ViewProducts } from '../../components/admin/ViewProducts'
import { AddProduct } from '../../components/admin/AddProduct'
import { Orders } from '../../components/admin/Orders'

import { HomeAdmin } from '../../components/admin/HomeAdmin'

export const Admin = () => {
  return (
    <>
    <div>
      <h1>Admin Panel</h1>
      <Navbar/>
      <div>
        <Routes>
          <Route path='homeAdmin' element={<HomeAdmin />}/>
          <Route path='products' element={<ViewProducts></ViewProducts>}/>
          <Route path='add-product/:id' element={<AddProduct/>}/>
          <Route path='orders' element={< Orders/>}/>

          
        </Routes>
      </div>
    </div>
    </>
  )
}

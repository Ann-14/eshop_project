import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Auth Pages
import { HomePage, Contact,Admin,Login,SignUp, ProductsPage } from './pages/';

//Components
import { Header, Footer, ResetPassword, AdminRoute,ProductDetails } from './components';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen container mx-auto py-4 text-center '>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/productsPage' element={<ProductsPage />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/homePage' element={<HomePage />}></Route>
            <Route path='/product-details/:id' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            {/* ---- Auth Pages --- */}
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/resetpassword' element={<ResetPassword />}></Route>
            <Route path='/admin/*' element={
            <AdminRoute>
              <Admin />
              </AdminRoute>}>
              </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

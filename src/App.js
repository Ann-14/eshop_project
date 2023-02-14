import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Auth Pages
import { Home, Contact,Admin,Login,SignUp } from './pages/';

//Components
import { Header, Footer, ResetPassword, AdminRoute,ProductDetails } from './components';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className=' min-h-screen'>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
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

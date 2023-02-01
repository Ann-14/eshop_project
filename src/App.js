import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages
import { Home, Contact,Admin,Login,SignUp } from './pages/';

//Components
import { Header, Footer, ResetPassword, AdminRoute } from './components';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
      <BrowserRouter>
        <div className=' min-h-screen'>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
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

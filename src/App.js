import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages
import { Home, Contact } from './pages/';
import { Login, SignUp, } from './pages/auth';
//Components
import { Header, Footer, ResetPassword } from './components';


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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

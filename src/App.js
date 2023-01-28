import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages
import {Home, Contact}  from './pages/';
//Components
import { Header,Footer } from './components';
import { Login,Signup,ResetPassword } from './pages/auth';




function App() {
  return (
    <>
    
<BrowserRouter>
<div className=' min-h-screen'>
<Header />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* ---- Auth Pages --- */}
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/resetpassword' element={<ResetPassword/>}></Route>
    </Routes>
<Footer />


</div>
</BrowserRouter>
    </> 
  );
}

export default App;

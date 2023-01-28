import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages
import {Home, Contact}  from './pages/';
//Components
import { Header,Footer } from './components';


function App() {
  return (
    <>
    
<BrowserRouter>
<div className=' min-h-screen'>
<Header />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
<Footer />


</div>
</BrowserRouter>
    </> 
  );
}

export default App;

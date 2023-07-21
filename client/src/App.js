import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Register from './component/register/Register';
import Login from './component/login/Login';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

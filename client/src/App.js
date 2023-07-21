import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/register/Register';
import Login from './component/login/Login';
import Landing from './component/landing/Landing';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

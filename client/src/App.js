import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/register/Register';
import Login from './component/login/Login';
import Landing from './component/landing/Landing';
import Home from "./component/home/Home";
import UsersList from './component/users-list/UsersList';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/getusers" element={<UsersList/>} />



      </Routes>

    </BrowserRouter>
  );
}

export default App;

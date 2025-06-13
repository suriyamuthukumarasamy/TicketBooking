import React, { useEffect, useState } from 'react'
import Home from './page/home/Home'
import {  Route, Routes,  } from 'react-router-dom'
import Detailpage from './page/detail/Detailpage'
import LogIn from './page/contact/LogIn'
import Navbar from './components/common/Navbar'
import './App.css'
import { CartProvider } from './context/CartContext';
import CartPage from './context/CartPage';
import { SearchProvider } from './context/SearchContext' 
import ProtectRoute from './components/common/ProtectRoute'

// import Navbar from './components/common/Navbar'


const App = () => {
  const[isAuthenticated,setIsAuthenticated]=useState(false);
  
  useEffect(()=>{
const storedAuth=localStorage.getItem("isAuthenticated");
if(storedAuth==="true"){
  setIsAuthenticated(true);
}
  },[]);
  const login=()=>{setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated","true");
  }
  const logout=()=>{setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
     navigator('/home');

  }

  return (

    <>
 <CartProvider>
  <SearchProvider>
 <Navbar/>
      <Routes>
        <Route path="/home" element={
          <ProtectRoute isAuthenticated={isAuthenticated}>
          <Home logout={logout}/>
          </ProtectRoute>
           } 
          />
        <Route path="/:id" element={
          <ProtectRoute isAuthenticated={isAuthenticated}>
            <Detailpage />
          </ProtectRoute>
          } />
        <Route  path="/" element={<LogIn login={login} />}/>
        <Route path="/cart" element={
          <ProtectRoute isAuthenticated={isAuthenticated}>
            <CartPage/>
          </ProtectRoute>
        }
         />
      </Routes>
      </SearchProvider>
      </CartProvider>
    </>
  )
}

export default App

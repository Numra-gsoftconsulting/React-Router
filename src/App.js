import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import About from "./Pages/About";
import Dasboard from "./Pages/Dasboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Products from "./Pages/Products";
import SharedLayout from "./Pages/SharedLayout";
import SingleProduct from "./Pages/SingleProduct";
import ProtectedRoute from './Pages/ProtectedRoute';
import Protected from './Pages/Protected';
import { Authprovider } from "./Pages/Auth";

function App() {
  const [user, setUser] = React.useState(null)
  return (
    
   <BrowserRouter>
    
   <Routes>
   
    <Route path='/' element={<SharedLayout />} >
    <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dasboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route index element={<Protected Component={Home}/>} />
         
    <Route path='About' element={<div><About /> </div>} />
    <Route path='Dashboard' element={<div><Dasboard user={user} /> </div>} />
    <Route index element={<div><Home /> </div>} />
    <Route path='Login' element={<div><Login setUser={setUser} /> </div>} />
    <Route path='*' element={<div><Error /> </div>} />
    <Route path='Dashboard'element={<ProtectedRoute user={user}> <Dasboard user={user} /></ProtectedRoute>}/>
    <Route path='Products' element={<ProtectedRoute user={user}> <Products user={user}/></ProtectedRoute>} />
    <Route path='products/:productId' element={<SingleProduct />} />
    
   
   
   </Route>
   </Routes>
   </BrowserRouter>
   
  
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage"
import Navbar from "./pages/Navbar";
import Login from "./component/Login";
import Signup from "./component/signup";
import CreateProduct from "./component/CreateProduct";
import SellerProcutPage from "./pages/SellerProductPage"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Loginpage />}></Route>
       <Route path="/create" element={<CreateProduct/>}></Route>
       <Route path="/modify" element={<SellerProcutPage/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
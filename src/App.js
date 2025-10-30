import React, { useState } from "react";
import axios from "axios";
import {Route,Routes,Link} from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";



function App() {
 
  return (
    <>
      <h1 style={{"textAlign":"center"}}>Gadget Inventory Management</h1>

      <nav style={{"display":"flex","gap":"25px","justifyContent":"space-evenly","backgroundColor":"#28a745","padding":"25px","margin":"15px","borderRadius":"18px"}}>
        <Link style={{"color":"white","textDecoration":"none","fontSize":"18px"}} to="/">Load</Link>
        <Link style={{"color":"white","textDecoration":"none","fontSize":"18px"}} to="/add">Add</Link>
        <Link style={{"color":"white","textDecoration":"none","fontSize":"18px"}} to="/update">Update</Link>
        <Link style={{"color":"white","textDecoration":"none","fontSize":"18px"}} to="/delete">Delete</Link>
      </nav>

      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="/delete" element={<Delete/>} />
      </Routes>
    </>
  );
}

export default App;

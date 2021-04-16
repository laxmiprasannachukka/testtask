//import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Cart from './cart.js'
import axios from 'axios';
import {useState,useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
useEffect(async ()=>{
 let items= await axios.get("http://localhost:8000/");
 console.log(items)
})
  return (
    <>
    <BrowserRouter>
    <Switch>
  <Route path={"/"} Exact="true">
  <Home></Home>
  </Route>
  <Route path={"/cart"} component={Cart} Exact="true">
  </Route>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;

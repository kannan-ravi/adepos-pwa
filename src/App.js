import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";
import Offers from "./pages/offers/offers";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/offers' element={<Offers />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
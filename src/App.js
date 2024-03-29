import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";
import Offers from "./pages/offers/offers";
import Navbar from "./components/navbar/navbar";
import NotFound from "./pages/notFound/notFound";
import "./scss/import.scss";
import Footer from "./components/footer/footer";
import SingleOffer from "./pages/singleOffer/singleOffer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to={"/home"} />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/offers/single-offer" element={<SingleOffer />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

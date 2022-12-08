
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baners from "./components/Baners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path={"/"} element={<ItemListContainer />}/>

      </Routes>







      <Baners />
      <Promociones />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

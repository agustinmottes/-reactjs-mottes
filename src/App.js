
import React from "react";
import Baners from "./components/Baners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";

function App() {
  return (
     <div>
      <NavBar />  
      <ItemListContainer greeting={"¡¡Bienvenidos a Olympic Sport!! "}/>
      <Baners/>
      <Promociones/>
      <Footer/>
       
     </div>
  );
}

export default App;

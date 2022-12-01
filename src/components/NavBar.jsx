import React from "react";
import CardWidget from "./CardWidget";
const NavBar = () => {
     return (<div className="container">
          <div className="row">
               <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                         <div className="container-fluid">
                              <img src="/imagenes/logo.jpg" alt="" height="50" width="50" />

                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                   <ul className="navbar-nav">
                                        <li className="nav-item">
                                             <a className="nav-link " aria-current="page" href="#">Inico</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Productos</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Locales </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link " href="#">Contactos</a>
                                        </li>
                                   </ul>
                              </div> 
                         </div>
                    </nav>
               </div>

               <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CardWidget/>
               </div>
          </div>

     </div>















     );
}

export default NavBar;
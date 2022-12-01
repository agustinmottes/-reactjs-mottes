import React from "react";

const Footer = () => {
     return (
          <div className="container py-5">
               <div className="row ">
                    <div className="col-md-6">
                         <a href="#" className="mx-1"><img src="/imagenes/facebook.svg" /></a>
                         <a href="#" className="mx-1"><img src="/imagenes/twitter.svg" alt="" /></a>
                         <a href="#" className="mx-1"><img src="/imagenes/whatsapp.svg" alt="" /></a>


                    </div>

                    <div className="col-md-6 text-right">
                         <a href="" target="_black" className="mx-1"> <img src="/imagenes/footer 1.png" alt="App Store" width="115" /></a>
                         <a href="" target="_black" className="mx-1" ><img src="/imagenes/footer 2.png" alt="Google Play" width="115" /></a>


                    </div>
               </div>
               <hr />
               <div className="row">
                    <div className="col-md-6">
                         <ul class="nav">
                              <li class="nav-item">
                                   <a class="nav-link active" aria-current="page" href="#">Active</a>
                              </li>
                              <li class="nav-item">
                                   <a class="nav-link" href="#">Link</a>
                              </li>
                              <li class="nav-item">
                                   <a class="nav-link" href="#">Link</a>
                              </li>
                              <li class="nav-item">
                                   <a class="nav-link disabled">Disabled</a>
                              </li>
                         </ul>
                    </div> 
                    <div className="col-md-6 text-end"> 
                   <p><img src="/imagenes/logo.jpg" alt="" height="60" width="60" /> Olympic Sport 2022</p>
                   </div>
               </div>
          </div>
     );
}


export default Footer;
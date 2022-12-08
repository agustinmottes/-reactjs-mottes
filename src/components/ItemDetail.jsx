import React from "react";
 
const ItemDetail = ( item) => {
     return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
               <img src={item.imagen} alt={item.nombre} className="img-fluid"
                />
            </div>
            <div className ="col-md-4">
                 <h1>{item.nombre}</h1>
                  <h6>{item.descripcion}</h6>
                  <p><b>${item.precio}</b></p>
            </div>

        </div>
     
     )
}


export default ItemDetail;
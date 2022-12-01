import React from "react";

const CardWidget = () => {
     return(
        <button type="button" className="btn btn-primary position-relative   bg-info text-dark">
          <img src="/imagenes/carrito.svg" alt="carrito" width="20" height="20"/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
     );
}

export default  CardWidget;
import React , {useState ,  useEffect} from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
 
const ItemDetailContainer = ( ) => { 

    const [item, setItem] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolver, reject) => {
            setTimeout(() => {
                resolver(arrayProductos.find (item => item.id === 1));
            }, 2000);

        });

        promesa.then((data) => {
            setItem(data);
        });
    });


     return(
       <div className="container">
        <ItemDetail item={item} />
       </div>
     
     )
}


export default ItemDetailContainer ;
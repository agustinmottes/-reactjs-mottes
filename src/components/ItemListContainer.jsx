import React from "react";
import arrayProductos from "./json/productos.json";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./Itemlist";

function ItemListContainer({ greeting }) {


    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolver, reject) => {
            setTimeout(() => {
                resolver(arrayProductos);
            }, 2000);

        });

        promesa.then((data) => {
            setItems(data);
        });
    });





    return (
        <div className="container">


            <ItemList items={items} />

            <ItemCount stock={20} />
        </div >
    );
}

export default ItemListContainer;
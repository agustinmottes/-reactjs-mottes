import React from "react";
import Item from "./Item";


const Itemlist = ({items}) => {
       

    return ( 
       <div className="row">
         {
        items.map(item =>  <Item  key={item.id} item ={item} />) 
        }
       
       </div>
    )
} 

export default  Itemlist;
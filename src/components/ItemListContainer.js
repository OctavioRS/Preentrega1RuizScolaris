import React from "react";
import "./main.css"
import ItemList from "./ItemList";
import { useState , useEffect } from "react";

const ItemListContainer = ({greeting}) => {
const [products , setProducts] = useState([])

useEffect(() => {
  const traerProductos = async ()=>{
    try {
    const resp = await fetch ('./data.json')
    const data = await resp.json()
    setProducts (data)
  }
    catch {
      
    }
  }
    traerProductos()
  },[])








    return (
      <>
        <div className="greeting">
            <p>{greeting}</p>
        </div>
      
        <ItemList products={products}/>
       </>
    )
}

export default ItemListContainer


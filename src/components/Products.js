import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    let Prod = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(Prod);
  };

  const deleteParent=(id)=>{
    let T = JSON.parse(localStorage.getItem("products") || "[]");
    let pos
    for (let i = 0; i < T.length; i++) {
      if (T[i].id === id) {
        pos=i
      }
    }
    T.splice(pos, 1);
    localStorage.setItem("products", JSON.stringify(T));
    setProducts(T);

  }

  return (
    <div>
  <Banner   name="Products"  />

      <div className="row featured__filter mt-5">
        {products.map((value, key) => (

          <Product product={value} remove={deleteParent} name="test"  key={key}/>
        ))}
      </div>
    </div>
  );
}

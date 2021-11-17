import React from "react";
import { useState } from "react";
import Product from "./Product";

function ProductList() {
  let [list, setList] = useState([]);

  const addProduct = () => {
    setList([...list, <Product />]);
  };

  return (
    <section>
      <div className="container">
        <button className="my-btn" onClick={() => addProduct()}>
          Add product
        </button>

        {list}
        {/* <Product /> */}
      </div>
    </section>
  );
}

export default ProductList;

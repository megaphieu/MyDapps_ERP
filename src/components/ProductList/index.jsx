import React from "react";
import { useState } from "react";
import Product from "../Product";
import "./ProductList.scss";

function ProductList() {
    let [list, setList] = useState([]);

    const addProduct = () => {
        let data = {
            title: "Title",
            text: "Text",
        };
        setList([...list, <Product data={data} />]);
    };

    return (
        <section>
            <div className="container">
                <div className="my-input">
                    <input className="my-input__text" type="text" />
                    <button className="my-input__btn" onClick={() => addProduct()}>
                        Add product
                    </button>
                </div>

                <div className="cardlist">{list}</div>

                {/* <Product /> */}
            </div>
        </section>
    );
}

export default ProductList;

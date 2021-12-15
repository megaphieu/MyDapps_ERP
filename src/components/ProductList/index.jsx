import React from "react";
import Web3 from "web3";
import { useState } from "react";
import { HELLO_ABI, HELLO_ADDRESS } from "../../config";
import Product from "../Product";
import "./ProductList.scss";

function ProductList() {
    let [list, setList] = useState([]);
    let [productCode, setCode] = useState("");

    const findProduct = async (productCode) => {
        let temp = await loadBlockchainData(productCode);
        let data = {
            title: productCode,
            tempInfo: temp,
            score: 100,
            quality: "GOOD",
        };
        setList([...list, <Product data={data} />]);
    };

    const loadBlockchainData = async (productCode) => {
        const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
        const my_contract = new web3.eth.Contract(HELLO_ABI, HELLO_ADDRESS);
        const getMessage = await my_contract.methods.getMessage().call();
        return getMessage;
    };

    return (
        <section>
            <div className="container">
                <div className="myInput">
                    <input
                        className="myInput-text"
                        type="text"
                        placeholder="Enter product code..."
                        onChange={(e) => setCode(e.target.value)}
                    />

                    <button className="myInput-btn btn btn-outline-primary" onClick={() => findProduct(productCode)}>
                        FIND 🔎︎
                    </button>
                </div>

                <hr />

                <div className="cardlist">{list}</div>
            </div>
        </section>
    );
}

export default ProductList;

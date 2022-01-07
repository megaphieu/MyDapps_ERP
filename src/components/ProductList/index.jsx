import React, { useEffect } from "react";
import Web3 from "web3";
import { useState } from "react";
import { MAIN_ABI, MAIN_ADDRESS } from "../../config";
import Product from "../Product";
import "./ProductList.scss";
import { create, all } from "mathjs";

function ProductList() {
    const config = {};
    const math = create(all, config);

    let [isLoading, setLoading] = useState(false);
    let [list, setList] = useState([]);
    let [productCode, setCode] = useState("");

    const scoreCalc = (temp, tempCap) => {
        let tempList = temp.split(",").map((i) => parseInt(i));
        let MEAN_SCORE = 0.5 * (100 - (40 + math.mean(tempList)));
        let RANGE_SCORE = math.min(tempList) > math.min(tempCap) && math.max(tempList) < math.max(tempCap) ? 50 : 0;
        return math.round(MEAN_SCORE + RANGE_SCORE, 1);
    };

    const findProduct = async (productCode) => {
        // Check product code
        setLoading(true);
        if (productCode.length <= 0) {
            alert("Please fill in your product code!");
            setLoading(false);
            return;
        }

        //--- bruh
        if (productCode !== "meatId1") {
            alert("Invalid product code!");
            setLoading(false);
            return;
        }

        // Load & check data
        let temp;
        temp = await loadBlockchainData(productCode);
        if (!temp) {
            alert("Invalid product code!");
            setLoading(false);
            return;
        }
        // Score calculating
        const tempCap = [-45, -30];
        let productScore = scoreCalc(temp, tempCap);
        // Quality check
        let productQuality = productScore > 80 ? "GOOD" : productScore > 50 ? "AVERAGE" : "BAD";
        // Add list
        let data = {
            code: productCode,
            tempInfo: temp,
            score: productScore,
            quality: productQuality,
        };
        let product = <Product data={data} key={productCode} />;
        list.find((i) => i.key === product.key) ? alert("Product duplicate!") : setList([...list, product]);
        setLoading(false);
    };

    const loadBlockchainData = async (productCode) => {
        const web3 = new Web3("HTTP://127.0.0.1:7545");
        const my_contract = new web3.eth.Contract(MAIN_ABI, MAIN_ADDRESS);
        my_contract.handleRevert = true;
        const result = await my_contract.methods.getTempInfo().call();
        return result;
    };

    useEffect(() => {});
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
                    <button
                        className="myInput-btn btn btn-outline-primary"
                        disabled={isLoading}
                        onClick={() => findProduct(productCode)}
                    >
                        {!isLoading ? (
                            "FIND 🔎︎"
                        ) : (
                            <img src="https://thumbs.gfycat.com/UncommonCrazyAfricanaugurbuzzard-max-1mb.gif" alt="" />
                        )}
                    </button>
                </div>

                <button
                    className="clearBtn btn btn-outline-danger"
                    onClick={() => {
                        setList([]);
                    }}
                >
                    CLEAR ALL
                </button>

                <hr />
                <div className="cardlist">
                    {list.length > 0 ? (
                        list
                    ) : (
                        <div className="notFound">Nothing found! Please enter your product code above.</div>
                    )}
                </div>
                <hr />
            </div>
        </section>
    );
}

export default ProductList;

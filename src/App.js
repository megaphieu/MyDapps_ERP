import Web3 from "web3";
// import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./App.scss";
import ProductList from "./components/ProductList";
import { HELLO_ABI, HELLO_ADDRESS } from "./config";

let web3;
if (window.ethereum !== undefined) {
    web3 = new Web3(window.ethereum);
}

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>DEMO NHÓM 3</h1>
                <ProductList />
            </div>
        </div>
    );
}

export default App;

import Web3 from "web3";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ThemeChanger from "./components/ThemeChanger";
import "./scss/styles.scss";
import ProductList from "./components/ProductList";
import { HELLO_ABI, HELLO_ADDRESS } from "./config";

let web3;
if (window.ethereum !== undefined) {
    web3 = new Web3(window.ethereum);
}

function App() {
    const ethereum = window.ethereum;
    let [config, setConfig] = useState("");
    console.log(config.address);

    ethereum.on("accountsChanged", (accounts) => {
        // If user has logout from MetaMask, this resets the accounts array to empty
        if (!accounts.length) {
            setConfig({});
        } else {
            let newConfig = { address: accounts };
            setConfig(newConfig);
        }
    });

    const Init = async () => {
        let accounts = await ethereum.request({ method: "eth_accounts" });
        let account = accounts[0];
        if (account !== undefined) {
            Connect();
        }
    };

    const Connect = async () => {
        // Get account address
        let accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        let account = accounts[0];
        // Check balance from account
        let balance = await web3.eth.getBalance(account);
        // Set state
        let newConfig = { address: account, balance: balance };
        setConfig(newConfig);
    };

    const Disconnect = async () => {
        try {
            let permissions = await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [
                    {
                        eth_accounts: {},
                    },
                ],
            });
            console.log(permissions);
        } catch (error) {
            setConfig({});
        }
    };

    const loadBlockchainData = async () => {
        const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
        const my_contract = new web3.eth.Contract(HELLO_ABI, HELLO_ADDRESS);
        const getMessage = await my_contract.methods.getMessage().call();
        console.log("My message: " + getMessage);
    };

    useEffect(() => {
        Init();
    }, []);

    return (
        <div className="App">
            <div className="container">
                <ThemeChanger />

                <ProductList />

                {/* WalletConn */}
                <section>
                    <div className="container">
                        <div>
                            <button
                                className="my-btn"
                                onClick={() => Connect()}
                            >
                                Connect to Metamask
                            </button>
                        </div>

                        <div>
                            <button
                                className="my-btn"
                                onClick={() => Disconnect()}
                            >
                                Disconnect
                            </button>
                        </div>

                        <div>
                            <button
                                className="my-btn"
                                onClick={() => loadBlockchainData()}
                            >
                                Call Contract (get)
                            </button>
                        </div>

                        <p>
                            Account:{" "}
                            {config.address !== undefined
                                ? config.address
                                : "nothing"}
                        </p>

                        <p>
                            Balance:{" "}
                            {config.address !== undefined
                                ? config.balance * Math.pow(10, -18)
                                : 0}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;

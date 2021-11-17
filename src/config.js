export const HELLO_ADDRESS = "0xf6F815811009FE9AbC3124a52C3F52580BEeed71";

export const HELLO_ABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "mes",
                type: "string",
            },
        ],
        name: "contructor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getMessage",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "mes",
                type: "string",
            },
        ],
        name: "setMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const HELLO_ADDRESS = "0x1001D3FFDef9EBc6c8605d6E5924f1F81d141148";

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

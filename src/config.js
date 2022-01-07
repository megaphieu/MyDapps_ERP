export const MAIN_ADDRESS = "0x68eaB2837005A79A04fb41FC6C1f864bf0217061"

export const MAIN_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_containerId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_deviceId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "addContainer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_meatId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_meatType",
				"type": "string"
			}
		],
		"name": "addMeat",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_meatId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_containerId",
				"type": "string"
			}
		],
		"name": "addShippingLog",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_meatId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_containerId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "addShippingLogTest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tempValue",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_deviceId",
				"type": "string"
			}
		],
		"name": "addTemperature",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tempValue",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_deviceId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "addTemperatureTest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "concat",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_meatId",
				"type": "string"
			}
		],
		"name": "findMeat",
		"outputs": [
			{
				"internalType": "contract Meat",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTempInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
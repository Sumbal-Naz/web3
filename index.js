const Web3 = require('web3');
//console.log(Web3);
const rpcUrl = "HTTP://127.0.0.1:7545";
let web3 = new Web3(rpcUrl);
//console.log("rpc" , web3);
let address = "0x193ce66Aba5A0CfAbd3746b144f2b0826dDf6987";
web3.eth.getBalance(address, (err, wei) => {console.log('wei balance', wei)});
//infura mainnet
const rpcUrlm="https://mainnet.infura.io/v3/c3d1b312a1df491b9d486e2b4b2dc82e";
let web3m = new Web3(rpcUrlm);
//taken from etherscan.io
let addressm = "0xa1d8d972560c2f8144af871db508f0b0b10a3fbf";
web3m.eth.getBalance(addressm, (err, wei) => {console.log('ether balance', web3m.utils.fromWei(wei, 'ether'))});


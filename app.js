/*
const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545');
//ganache accounts
const account1 = "0xE73EcF9E3229D74f4c7deA7C15c3a9914D0FCb79";
const account2 = "0x9D1592a15CbcE1aa2Eb58F16261B5BCA29e90829";
web3.eth.getBalance(account1, (err, result) => { console.log(result) })
web3.eth.sendTransaction({ from: account1, to: account2, value: web3.utils.toWei('1', 'ether')})
web3.eth.getBalance(account1, (err, result) => { console.log(result) })
web3.eth.getBalance(account2, (err, result) => { console.log(result) })
*/
//const Tx = require('ethereumjs-tx');
const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/c3d1b312a1df491b9d486e2b4b2dc82e'); // Ropsten node
const account1 = '0xE04aef7e8e689eda053843583E8cf6210378Bf6d';
const account2 = '0xa76c09dE2d64093aF2ce6011B6F844a2Bb7ffB1F';
//console.log(process.env.PRIVATE_KEY_1)
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')
web3.eth.getBalance(account1, (err, bal) => {
    console.log('account 1 balance: ', web3.utils.fromWei(bal, 'ether'))
})
web3.eth.getBalance(account2, (err, bal) => {
    console.log('account 2 balance: ', web3.utils.fromWei(bal, 'ether'))
})
//...............
web3.eth.getTransactionCount(account1, (err, txCount) => {
    //Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount), 
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    console.log(txObject)
    
    //sign transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash: ', txHash)
    })

})
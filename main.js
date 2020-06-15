const SHA256 = require('crypto-js/sha256')
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }


    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }


}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01//01/2017", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }


    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {

            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash != prevBlock.hash) {
                return false;
            }


        }
        return true;
    }



}


var myCoin = new BlockChain();
myCoin.addBlock(new Block(1, "10/07/2017", { amount: 4 }));
myCoin.addBlock(new Block(2, "20/07/2017", { amount: 10 }))

// console.log(JSON.stringify(myCoin))

console.log("Is Block Chain Valid : " + myCoin.isChainValid());

myCoin.chain[1].data = { amount: 100 };
myCoin.chain[1].hash=myCoin.chain[1].calculateHash();
console.log("Is Block Chain Valid : " + myCoin.isChainValid());
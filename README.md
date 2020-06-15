# BlockChain-Sim
BlockChain-Simulations


Block Chain:
Chain of cryptograhic blocks of information.

The first work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta.
They wanted to implement a system where document timestamps could not be tampered with.
In 1992, Haber, Stornetta, and Dave Bayer incorporated Merkle trees to the design, 
which improved its efficiency by allowing several document certificates to be collected into one block

A blockchain, originally block chain, is a growing list of records, called blocks, 
that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.

By design, a blockchain is resistant to modification of the data. 
It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way".

For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol 
for inter-node communication and validating new blocks. 

Once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks,
which requires consensus of the network majority.

 Although blockchain records are not unalterable, blockchains may be considered secure by design and
 exemplify a distributed computing system with high fault tolerance.
 
The repo simulates the block chain technology implemented using javascript.

There can be many ways of doing the same , bu this is the humble try from my end to learn, understand and represent the block chain technology.


We want our block to be part of block chain

>b----b1<--->b2<---->b3<--->and so on
Some properties of block include:
1.)index, timestamp created , data/information , previous hash.

So the main.js deals with creating a block and a simple block chain.

Inorder to make the block chain valid we are making sure the hash generated from the crypto-js library isvalid and assigned to teh genesis node (first bloc of the block chain)

and also we check if each and every hash of the block is equal to the previous block hash.

============================================================IS BLOCK CHAIN SECURE==========================
We also talk about the block chain as a chain of blocks of information and that the copy of this block chain is available , distributed
across the nodes of the network.

The copy is same across all.

What is someone tampers the information of any of the blocks ?

So this is a security risk , isn't it ?
#SAFETY OF BLOCKCHAIN:

So we take care of this issue by making sure that, the new blocks addition and existing blocks in the block chain updation needs some validation by all the nodes in the network and they are kept informed of any changes.

With modern computing power , it is also possible to spammer with any number of new blocks or even update the existing blocks if the validations are not proper for any new block creation or updation.

So We have this security issue solved with the concept of "proof of work" in the block chain.

Mining or proof of work denotes the amount of work / processing done before any new block is created .

For example: Bitcoin solves this problem by making the block's hash to begin with certain amount of 0's

Since we cannot influence the output of hashfunction, it requires lot of computational power to crack any block's hash.
And in the case of bitcoin, any new block creation requires 10 minutes of proof of work or mining to be demonstrated and implemented to and across the nodes of the distributed network.

Just to simulate the proof of work involved in creation of each block , we do it mining_block.js , we are tryimg to create a hash which involves the addition of 0's as per the given difficulty level which inturn involves the mining for each and every block creation.









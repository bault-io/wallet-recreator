# ReCreator
## Bitcore Wallet Recreator For BWS-Node Migration

#### About This Proyect
This Script Allows to Recreate in a new Node of Bitcore Wallet Service an existent wallet, this uses the Extended Private Key to derive Again all the  Public Keys and the Key Ring, in this case for only one Copayer, therefore the public key ring only willl contain one key. 

#### Usage
Remember to install the project the first time you use it
```console
foo@bar:~$ npm install
```

Then you can run the main file in the ```console```.
It will ask you for the private key, re-create and open the wallet.
```console
foo@bar:~$ node recreate_wallet_in_bws.js
Paste the Extended Private Key (xPrivKey):
xprvU28uLi4gVGhpcyBpcyBub3QgYSB2YWxpZCB4UHJpdktleS4gbmljZSB0cnkh
The chamber of secrets has been opened. Enemies of the heir... beware
```
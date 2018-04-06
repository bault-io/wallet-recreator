const bwc = require('bitcore-wallet-client');
const fs = require('fs');

var bws_url = "https://bws.bitpay.com/bws/api"
let client = new bwc({
    baseUrl: bws_url,
    verbose: false,
});

function read_line(mode) {
    var readed = new Promise((resolve, reject) => {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.once('data', function(code) {
            process.stdin.pause();
            code = code.replace(/[^a-zA-Z0-9 ]/g, '')
            resolve(code)
        });
    })
    return readed;
}

function open_wallet() {
    client.openWallet(function(err, wallet_data) {
        if (err) {
            console.log('the wallet cannot be open (' + err.message + ")")
        } else {
            console.log('The chamber of secrets has been opened. Enemies of the heir... beware')
        }
    })
}

async function restore_from_xpriv(source) {
    await client.seedFromExtendedPrivateKey(source);
    client.createWallet("wallet", "copayer", 1, 1, {
        network: "livenet"
    }, () => {
        open_wallet()
    });
}

(async () => {
    console.log('Paste the Extended Private Key (xPrivKey):')
    let xpriv = await read_line();
    restore_from_xpriv(xpriv);
})();
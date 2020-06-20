require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remain hole grid process success gather'; 
let testAccounts = [
"0x8854b9c3d48ec8a39fea2612ff62d292a94f1e21945e519a909265092e9b54c3",
"0xa34dd7d7a9d6537192dc80a0c445428d75f506ee777f08d00e51671e289b9166",
"0x6c0cdeb7d4b5c4d77aab14c9b9d69cc7aad5be0387cc00fba4f89d259db3b3b0",
"0x16b24a4fca3e90d34665b54166cfe0a78ba5259c67581f9b4dd699b0a2a8ebe1",
"0x365c2662107ef86d374fdbaeaebac852278f2d30484b6f79a084f9009f351a07",
"0xcc87893cc3239b50fcf0400200aaf8397a56a0e3172b3cd38771e8659c4499c3",
"0x55bfdc89ff161802f86f72b1e511f93a99a0cfff4ef279c7113649dd74d10a3b",
"0x260ec76a4c5a3bc5fc10f5763bed06b9ff38ff30a25761606293238c23639645",
"0xf0929eb474ce5fa8fff015ee9dd6669487858bb27fc1445716bf9c33c38be280",
"0x05adb8c40c2faef77a628bb1252be1535d9614ae0fa08ffacefece12d65d8360"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

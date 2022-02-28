require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy reflect night mistake idea kangaroo army general'; 
let testAccounts = [
"0x639732b1487f6a3132dd40168ad3fc71f73ed236d5cc89de1328914a14ae46a0",
"0x8e162e6021b9d62d21ed6be67a63ae2f19fcec07a8b8c99efbadfa066e34e5a6",
"0x0ba0b49335ed349a9342109072bac4e249bc8934d1794e219f71ff02a4a30c64",
"0xfa9bce6c8ad8a156a49f957c25150ae0fc18a41671b4c8b66cd947721e54f58b",
"0x63955df046909e4c42581e42eb01c684286ee24ca5b4b898e1c4400f268ed547",
"0x3661b90fd7c4110ca2381f51edf4cdbe077e2a870996c0d31f170761f82d9661",
"0xbfc6a604c80dd05df016ee0c110da491ccf3ba67f7c3e054e50fe75e500adbbd",
"0x32f8dde4c7305339db11cd1930ab0fe89c581af51ebe66d3a397be4c41190723",
"0x9b52cffe417fe473f8d4367b9c742ed09ee782bfd6400b1b390db996f672de74",
"0xd3ba144c619d3811d2458189cd4781eb865a93336627534866dd40429e69f4f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



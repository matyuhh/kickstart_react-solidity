const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const account = 'piano try obtain room wash bus ranch balcony project spy urge such';
const infuraUrl = 'https://rinkeby.infura.io/v3/3351e6d47432463dbe2c6e36e6f6cc85';
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    account,
    infuraUrl
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode})
        .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0]});

    console.log('Contract Deployed to', result.options.address);
};

deploy();
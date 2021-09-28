import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const factoryAddress = '0x628462653cd097384E766802dD363e044F7f994e';
const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    factoryAddress
);

export default factory;
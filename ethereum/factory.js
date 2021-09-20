import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
import { factoryAddress } from './accounts_variables';
const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    factoryAddress
);

export default factory;
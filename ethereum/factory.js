import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x130e8aB813DAc99D2922A5f9f1A3AEd73334ae9D'
);

export default instance;
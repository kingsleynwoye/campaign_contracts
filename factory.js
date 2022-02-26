import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x92Bf0B86199B88E206a36bC1EC7dC13FD02f4558"
);

export default instance;
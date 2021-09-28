import Web3 from "web3";
const infuraUrl = 'https://rinkeby.infura.io/v3/3351e6d47432463dbe2c6e36e6f6cc85';
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    infuraUrl
  );
  web3 = new Web3(provider);
}
 
export default web3;
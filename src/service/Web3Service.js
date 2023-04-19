import Web3 from 'web3';
import ABI from './ABI.json'

const CONTRACT_ADDRESS = "0x3807F461dD8D1d7826D74DA2E6774A816CC7357F"

export async function doLogin(){
    if(!window.ethereum) throw new Error("No MetaMask Found.");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if(!accounts || !accounts.length) throw new Error("Wallet not found.");

    localStorage.setItem("wallet", accounts[0])
    return accounts[0];
}

function getContract(){
    const web3 = new Web3(window.ethereum)
    const from = localStorage.getItem("wallet");
    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {from });
}

export function addCampaign(campaign){
    // console.log(campaign)
    const contract = getContract()
    console.log(contract.methods)
    //function in solidity
    return contract.methods.addCampaign(campaign.title, campaign.description, campaign.url_video, campaign.url_image).send();
}


export function getLastCampaignId(){
    const contract = getContract();
    return contract.methods.nextId().call();
}

export function getCampaign(id){
    const contract = getContract();
    return contract.methods.campaigns(id).call();
}

export function donate(id, donation){
    const contract = getContract();
    return contract.methods.donate(id).send({value: Web3.utils.toWei(donation, "ether")})
}
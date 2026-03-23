import { ethers } from "ethers";

// ✅ keep folder name SAME (contract)
import silkABI from "../contract/SilkToken.json";
import ownershipABI from "../contract/Ownership.json";
import geoABI from "../contract/GeoFence.json";

const silkAddress = "0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99";
const ownershipAddress = "0xcD6a42782d230D7c13A74ddec5dD140e55499Df9";
const geoAddress = "0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d";

export const getContracts = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return {
    silkContract: new ethers.Contract(silkAddress, silkABI.abi, signer),
    ownershipContract: new ethers.Contract(ownershipAddress, ownershipABI.abi, signer),
    geoContract: new ethers.Contract(geoAddress, geoABI.abi, signer),
  };
};
import { useState } from "react";
import { getContracts } from "../utils/contract";

const connectWallet = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    alert("Wallet Connected ✅");
  }
};
<button onClick={connectWallet}>Connect Wallet</button>

export default function WeaverDashboard() {
  const [quota, setQuota] = useState(20);

const mintNFT = async () => {
  const contract = await getContract();

  await contract.register(
    "PAI-786-XY",   // serial code
    "Mulberry",     // silk type
    "Yeola"         // location
  );

  alert("🎉 Saree NFT Minted!");
};

  return (
    <div className="p-5">
      <h2>👤 Weaver Profile</h2>
      <p>Name: Ramesh | GI Tag: YEO123 | Location: Yeola</p>

      <h3>Raw Material Balance: 10 KG</h3>
      <h3>Remaining Saree Limit: {quota}/20</h3>

      <button>Start New Saree</button>

      <div>
        <input type="file" />
      </div>

      <p>Your Serial Code: PAI-786-XY</p>

      <button onClick={mintNFT}>Mint Saree NFT</button>
    </div>
  );
}